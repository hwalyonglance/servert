import { IBaseSchema } from './base.schema.interface';
import { IUserSchema } from './user.schema.interface';

export interface IFileSchema extends IBaseSchema {
	name: string;
	uploadBy: string;
	shareTo_id: string[];
	shareTo?: IUserSchema[];
	description?: string;
	size: number;
	mime: string;
	isImage: boolean;
	height?: number;
	width?: string;
}
