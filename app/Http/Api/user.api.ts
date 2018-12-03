import { Request, Response, Router } from 'express';

import * as api from './api';
import { status } from '../../../lib/net/http/response';
import { UserModel } from '../../Models/user.model';

const model: UserModel = new UserModel;
const router: Router = api.router(model)

export {
	model,
	router
}
