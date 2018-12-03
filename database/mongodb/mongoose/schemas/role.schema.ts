import { create, ObjectId } from './schema';

export const RoleAction = create({
	create: {
		type: Boolean,
		default: false,
		required: true
	},
	read: {
		type: Boolean,
		default: false,
		required: true
	},
	update: {
		type: Boolean,
		default: false,
		required: true
	},
	delete: {
		type: Boolean,
		default: false,
		required: true
	}
});

export const Role = create({
	role: {
		type: [{
			name: {
				type: String,
				index: true,
				maxlength: 64,
				required: true,
				unique: true
			},
			action: {
				type: RoleAction,
				required: true
			}
		}]
	},
	user_id: {
		type: ObjectId,
		ref: 'User'
	}
});

