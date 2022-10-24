import express from 'express'
import { getUser, login, logout, refreshToken, register } from '../controller/userController.js';
import { auth } from '../middleware/auth.js';
const routes = express.Router();

routes.post('/register',register)
routes.post('/login',login)
routes.get('/logout',logout)
routes.get('/infor',auth,getUser)
routes.get('/refresh_token',refreshToken)


export default routes;