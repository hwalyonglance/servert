import { Model } from './model';
import { ITeacherSchema } from '../../interfaces/schema';
import { TeacherSchema } from '../../database/schemas';

export class TeacherModel extends Model<ITeacherSchema> {
	constructor() {
		super('Teacher', TeacherSchema)
	}
}
