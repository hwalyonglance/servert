import { create, ObjectId } from './schema';

export const Teacher = create({
	name: [{
		type: ObjectId,
		ref: 'Study'
	}],
	user_id: {
		type: ObjectId,
		ref: 'Jurusan'
	}
});
