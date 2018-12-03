import { create, ObjectId } from './schema';

export const File = create({
	name: {
		type: String,
		maxlength: 64,
		required: true
	},
	uploadBy: {
		type: ObjectId,
		maxlength: 20,
		ref: 'User',
		required: true
	},
	shareTo_id: [{
		type: ObjectId,
		ref: 'User'
	}],
	desciption: {
		type: String,
		maxlength: 1024
	},
	size: {
		type: Number,
		required: true
	},
	mime: {
		type: String,
		required: true
	},
	isPublic: {
		type: Boolean,
		default: true,
		required: true
	},
	isImage: {
		type: Boolean,
		required: true
	},
	height: Number,
	width: Number
});
