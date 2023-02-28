const express = require('express');
const { urlLogger } = require('./middlewares/urlLogger');

const app = express();

app.use(urlLogger);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
