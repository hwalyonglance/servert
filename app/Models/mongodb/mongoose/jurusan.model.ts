import { Model } from './model';
import { IJurusanSchema } from '../../interfaces/schema';
import { JurusanSchema } from '../../database/schemas';

export class JurusanModel extends Model<IJurusanSchema> {
	constructor() {
		super('Jurusan', JurusanSchema)
	}
}
