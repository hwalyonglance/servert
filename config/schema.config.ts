import { Schema, Types } from 'mongoose';

export const SCHEMA = {
	REQUIRED: () => {
		return (() => {
			return {
					// _id: {
					// 	type: Schema.Types.ObjectId,
					// 	default: new Types.ObjectId(),
					// 	index: true,
					// 	required: true
					// },
					createdAt: {
						type: Date,
						default: Date.now(),
						required: true
					},
					updatedAt: {
						type: Date,
						default: Date.now(),
						required: true
					}
				}
		})()
	}
};
