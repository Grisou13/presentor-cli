const express = require("express");
const path = require("path");
const fs = require("fs");
const { setFlagsFromString } = require("v8");
const mime = require('mime-types')
const app = express();
const process = require('process');
const open = require('open');

const build = (cwd = null, slideDirectory = null) => {
    if(cwd == null)
    {
      cwd = process.cwd(); //path.resolve("./");
    }
    if(slideDirectory == null)
    {
      slideDirectory = "slides";
    }
    const maxIncludeDepth = 50;
    app.use("/static", express.static(path.join(__dirname, "public")));
    app.use("/~", express.static(path.join(cwd, slideDirectory)));
    
    app.use(express.static(__dirname + "/"));
    app.engine("html", require("ejs").renderFile);
    app.set("view engine", "html");
    app.set("views", path.join(__dirname, "views"));
    
    app.locals.includeSlide = function(slideName) {
      let name = slideName.endsWith(".md") ? slideName : slideName+".md";
      return fs.readFileSync(path.resolve(cwd, slideDirectory, name))
    }
    
    
    const includeMarkdown = (rawHtml, depth = 0) => {
      let hasIncludeRegex = /\[include \'(.*)\'\]/m;
    
      if(depth >= maxIncludeDepth) {
        throw new Error("You probably have an include loop since max depth has been reached for markdown include of " + maxIncludeDepth);
      }
      //regexes are weird in js i don't know
      let newHtml = rawHtml.toString();
      if(!newHtml.match(hasIncludeRegex)){
        return rawHtml;
      }
      
      
      let regex = /\[include \'(.*)\'\]/gm;
      while ((m = regex.exec(newHtml)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }
        // The result can be accessed through the `m`-variable.
        const rawStr = m[0];
        const fileName = m[1];
        newHtml = newHtml.replace(
          rawStr,
          fs.readFileSync(path.join(cwd, slideDirectory, fileName))
        );
      }
    
      return includeMarkdown(newHtml, ++depth);
    }
    
    const includeImages = (rawHtml) => {
      let newHtml = rawHtml.toString();
      let regex = /\[img \'(.*)\'\]/;
      while ((m = regex.exec(newHtml)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }
        // The result can be accessed through the `m`-variable.
        const rawStr = m[0];
        const fileName = m[1];
        newHtml = newHtml.replace(
          rawStr,
          `<div class="img-container"><image src="/~/${fileName}" /></div>`
        );  
        /*const bitmap = fs.readFileSync(path.join(cwd, slideDirectory, fileName))
        const bs4Data  = bitmap.toString('base64');
    
        const mediaType = mime.lookup(fileName);
        if(mediaType){
          newHtml = newHtml.replace(
            rawStr,
            `<image src="data:${mediaType};base64,${bs4Data}" />`
          );  
        }*/
        
      }
      return newHtml;
    }
    app.locals.theme = "default";
    
    app.locals.parseMarkDown = function (rawHtml) {
      return includeImages(includeMarkdown(rawHtml));
    };
    
    const homePage = function (req, res) {
      //joining path of directory
      const directoryPath = path.join(cwd, slideDirectory);
      //passsing directoryPath and callback function
      const presentations = fs.readdirSync(directoryPath).filter(x => x.endsWith(".md")).map((x) => {
        return {
          filename: x,
          name: path.basename(x),
        };
      });
      res.render("index.html", { presentations });
    }
    
    
    app.get("/", homePage);
    
    app.get("/presentation/:presName", function (req, res) {
      const filename = req.params.presName;
      res.render("presentation.html", { filename });
    });
    
    app.get('*', homePage);
    console.log("base directory: " + cwd);
    console.log("slides directory: " + slideDirectory);
    const run = () => {
      
        console.log("Listening on port: 3000");
        app.listen(3000);
        return {
          openBrowser: () => {
            open("http://localhost:3000"); //TODO make this dynamic
          }
        }
    
    }
    return {
      withTeme: (theme) => {
        app.locals.theme = theme
        return {
          run
        }
      },
      run
    }
}
module.exports = {
  build
};