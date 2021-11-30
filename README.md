# presentor

The ultimate HTML/CSS presentor with markdown done as a tool for everyone! :D

# Running the presentor

To run the project

```bash
git clone https://github.com/Grisou13/presentor-cli
npm install
node bin/cli.js --slidePath=./slides
```

# Export slides to pdfpdf

```
npm i -g decktape
decktape remark "http://localhost:3000/presentation/0_summary.md" 0_summary.pdf --chrome-arg=--disable-web-security --size 320x240
```

# TODO

* [ ] cli for downloading download --format=default=pdf|pdf|html| [output path | stdout]

