import { IBaseSchema } from './base.schema.interface';
import { IPelajaranSchema } from './pelajaran.schema.interface';
import { IUserSchema } from './user.schema.interface';

export interface ITeacherSchema extends IBaseSchema {
	studies_id: { id: string }[];
	studies?: IPelajaranSchema[];
	user_id: string;
	user?: IUserSchema;
}
