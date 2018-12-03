import { Model } from './model';
import { IRoleSchema } from '../../interfaces/schema';
import { RoleSchema } from '../../database/schemas';

export class RoleModel extends Model<IRoleSchema> {
	constructor() {
		super('Role', RoleSchema)
	}
}
