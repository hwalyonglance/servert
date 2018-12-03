import { Request, Response, Router } from 'express';

import * as api from './api';
import { status } from '../../../lib/net/http/response';
import { PelajaranModel } from '../../Models/pelajaran.model';

const model: PelajaranModel = new PelajaranModel;
const router: Router = api.router(model)

export {
	model,
	router
}
