import { Request, Response, Router } from 'express';

import * as api from './api';
import { status } from '../../../lib/net/http/response';
import { KlassModel } from '../../Models/klass.model';

const model: KlassModel = new KlassModel;
const router: Router = api.router(model)

export {
	model,
	router
}
