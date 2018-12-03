import { create, ObjectId } from './schema';

export const Jurusan = create({
	name: {
		type: String,
		index: true,
		maxlength: 64,
		minlength: 1,
		required: true,
		unique: true
	}
});
