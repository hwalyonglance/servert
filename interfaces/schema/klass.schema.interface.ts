import { IBaseSchema } from './base.schema.interface';
import { IJurusanSchema } from './jurusan.schema.interface';
import { IUserSchema } from './user.schema.interface';

export interface IKlassSchema extends IBaseSchema {
	homeroomTeacher_id: string;
	homeroomTeacher?: IUserSchema;
	jurusan_id: string;
	jurusan?: IJurusanSchema;
	grade: number;
	students_id: string[];
	students?: IUserSchema; // KM, WKM, Bendahara, Sekertaris
	angkatan: number; // 9
}
