import { Schema, SchemaDefinition, SchemaOptions } from 'mongoose';

import { SCHEMA } from '../../../config';

export const {
	Buffer,
	Decimal128,
	DocumentArray,
	Embedded,
	Mixed,
	ObjectId
} = Schema.Types;

export function create(
	definition: SchemaDefinition,
	options?: SchemaOptions
	): Schema {
	return new Schema({
		...SCHEMA.REQUIRED(),
		...definition
	}, options || {});
};
