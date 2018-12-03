import { Model } from './model';
import { IUserSchema } from '../../interfaces/schema';
import { UserSchema } from '../../database/schemas';

export class UserModel extends Model<IUserSchema> {
	constructor() {
		super('User', UserSchema)
	}
}
