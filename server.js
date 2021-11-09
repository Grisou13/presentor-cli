const express = require("express");
const path = require("path");
const fs = require("fs");
const { setFlagsFromString } = require("v8");

const app = express();

var cwd = path.resolve("./");
var slideDirectory = "slides";
const maxIncludeDepth = 50;
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(cwd, slideDirectory)));

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

app.locals.parseMarkDown = function (rawHtml) {
  return includeMarkdown(rawHtml);
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
console.log("Listening on port: 3000");
app.listen(3000);