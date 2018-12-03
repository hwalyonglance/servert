import { IBaseSchema } from './base.schema.interface';
import { IUserSchema } from './user.schema.interface';

export interface IRoleSchema extends IBaseSchema {
	role: {
		name: String,
		action: IRoleActionsSchema
	}[];
	user_id: string;
	user?: IUserSchema;
}

export interface IRoleActionsSchema {
	create: boolean;
	read: boolean;
	update: boolean;
	delete: boolean;
}
