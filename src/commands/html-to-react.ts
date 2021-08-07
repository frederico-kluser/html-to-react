import { GluegunCommand } from 'gluegun';
import { html2json } from 'html2json';

const { getSpecificProperty } = require('../helpers/object.ts');

const command: GluegunCommand = {
  name: 'html-to-react',
  run: async () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
  <body>
    <div class="abc">sss</div>
  </body>
</html>`;
    console.log(JSON.stringify(getSpecificProperty(html2json(html), { tag: 'body' })));
  },
};

module.exports = command;
