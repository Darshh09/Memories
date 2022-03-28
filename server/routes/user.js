import express from 'express';
import { getUser, createUser } from '../controllers/user.js';
const Router = express.Router();

Router.get('/', getUser)
Router.post('/register', createUser)

export default Router;