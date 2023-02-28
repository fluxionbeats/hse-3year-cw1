const express = require('express');
const { resolveAlias } = require('./controllers/resolveAlias');
const { urlLogger } = require('./middlewares/urlLogger');

const app = express();

app.use(urlLogger);

app.get('/:alias', resolveAlias);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
