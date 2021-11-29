# presentor

The ultimate HTML/CSS presentor with markdown done as a tool for everyone! :D

# Folders

- src -> source for presentor tool
- slides -> slides directory
-     0_welcome
-     1_summary


# Running the presentor

To run the project

```bash
npm install
node server.js -- --slidePath=./slides
```

# Export slides to pdfpdf

```
npm i -g decktape
decktape remark "http://localhost:3000/presentation/0_summary.md" 0_summary.pdf --chrome-arg=--disable-web-security --size 320x240
```

# TODO

* [ ] Make it a standalone node package so everyone can just `npm i -g @tr/presentor-cli`
- cli will have the following interface

```
presentor ....
[path] -> runs the presentation in path
download --format=default=pdf|pdf|html| [output path | stdout]
