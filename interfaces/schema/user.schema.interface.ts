import { IBaseSchema } from './base.schema.interface';
import { IFileSchema } from './file.schema.interface';

export interface IUserSchema extends IBaseSchema {
	bio: string;
	files_id: string[];
	files?: IFileSchema[];
	email: string;
	name: string;
	password: string;
	photo: string;
	username: string;
	state: 'Waiting Confirmation' | 'Active' | 'Ban';
	website: string;
}
