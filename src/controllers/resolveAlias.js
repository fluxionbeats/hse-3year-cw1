const fs = require('fs/promises');
const path = require('path');

/**
 * Возвращает response в виде JSON с данными из файла {alias}.txt
 *
 * @param {*} request - express request obj
 * @param {*} response - express response obj
 */
async function resolveAlias(request, response) {
  const { alias } = request.params;
  const filePath = path.resolve(__dirname, `../db/${alias}.txt`);
  fs.readFile(filePath, 'utf-8')
    .then((fileData) => {
      // превращает строку fileData в объект
      const links = fileData
        .split('\r\n')
        .filter((str) => !!str)
        .map((row) => row.split(' '))
        .reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), {});

      response.send(JSON.stringify(links));
    })
    .catch((err) => {
      return response.status(404).send(
        JSON.stringify({
          messageId: `Error with reading file '${alias}.txt'`,
        })
      );
    });
}

module.exports = { resolveAlias };
