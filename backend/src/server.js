const express = require('express');
const route = require('./rotas/routes')
const app = express();

app.use(express.json());
app.use(route);

app.get('/', user)

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
