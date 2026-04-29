const express = require('express');

const app = express();
const PORT = 3000;
const SECONDARY_PORT = 9000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});