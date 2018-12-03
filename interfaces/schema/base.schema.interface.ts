import { Document, Schema } from 'mongoose';

export const ObjectId = Schema.Types.ObjectId;

export interface IBaseSchema extends Document {
	id: string;
	createdAt: Date;
	updatedAt: Date;
}
