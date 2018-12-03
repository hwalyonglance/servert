import { Model } from './model';
import { IKlassSchema } from '../../interfaces/schema';
import { KlassSchema } from '../../database/schemas';

export class KlassModel extends Model<IKlassSchema> {
	constructor() {
		super('Class', KlassSchema)
	}
}
