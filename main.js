const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars');

const templateString = fs.readFileSync(path.resolve(__dirname, './index.hbs'), 'utf8');
const template = Handlebars.compile(templateString);

const language = ['en','vi'];

language.forEach(lang => {
  var context = require(`./lang/${lang}.json`);
  const html = template(context);
  fs.writeFileSync(path.resolve(__dirname, `./${lang}/index.html`), html);
})