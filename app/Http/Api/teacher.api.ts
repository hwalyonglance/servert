import { Request, Response, Router } from 'express';

import * as api from './api';
import { status } from '../../../lib/net/http/response';
import { TeacherModel } from '../../Models/teacher.model';

const model: TeacherModel = new TeacherModel;
const router: Router = api.router(model)

export {
	model,
	router
}
