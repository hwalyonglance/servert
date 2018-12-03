import { Model } from './model';
import { IPelajaranSchema } from '../../interfaces/schema';
import { PelajaranSchema } from '../../database/schemas';

export class PelajaranModel extends Model<IPelajaranSchema> {
	constructor() {
		super('Pelajaran', PelajaranSchema)
	}
}
