import { IBaseSchema } from './base.schema.interface';
import { IJurusanSchema } from './jurusan.schema.interface';

export interface IPelajaranSchema extends IBaseSchema {
	name: string;
	jurusan_id: string;
	jurusan?: IJurusanSchema;
}
