import { create, ObjectId } from './schema';

export const Klass = create({
	homeroomTeacher_id: {
		type: ObjectId,
		ref: 'User'
	},
	jurusan_id: {
		type: ObjectId,
		ref: 'Jurusan'
	},
	grade: { // kelas 1 SD
		type: Number,
		default: 1,
		required: true
	},
	students_id: {
		type: ObjectId
	},
	angkatan: { // kelas 9
		type: Number,
		default: 1,
		required: true
	}
});
