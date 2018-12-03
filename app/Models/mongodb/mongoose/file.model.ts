import 'socket.io'

import { Model } from './model';
import { IFileSchema } from '../../interfaces/schema';
import { FileSchema } from '../../database/schemas';

export class FileModel extends Model<IFileSchema> {
	constructor() {
		super('File', FileSchema)
	}
}
