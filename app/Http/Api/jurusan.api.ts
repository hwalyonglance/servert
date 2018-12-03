import { Request, Response, Router } from 'express';

import * as api from './api';
import { status } from '../../../lib/net/http/response';
import { JurusanModel } from '../../Models/jurusan.model';

const model: JurusanModel = new JurusanModel;
const router: Router = api.router(model)

export {
	model,
	router
}
