import { getUsers } from './controllers/user.js';

const express = require('express');
const routes = express.Router();



routes.get('/', (getUsers))

export default routes;