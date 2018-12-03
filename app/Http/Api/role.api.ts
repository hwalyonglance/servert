import { Request, Response, Router } from 'express';

import * as api from './api';
import { status } from '../../../lib/net/http/response';
import { RoleModel } from '../../Models/role.model';

const model: RoleModel = new RoleModel;
const router: Router = api.router(model)

export {
	model,
	router
}
