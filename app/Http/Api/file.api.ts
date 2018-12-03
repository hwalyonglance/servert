import { Request, Response, Router } from 'express';
import 'socket.io'

import * as api from './api';
import { status } from '../../../lib/net/http/response';
import { FileModel } from '../../Models/file.model';

const model: FileModel = new FileModel;
const router: Router = api.router(model)

export {
	model,
	router
}
