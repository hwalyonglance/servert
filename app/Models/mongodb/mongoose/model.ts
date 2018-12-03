import { Mongoose, createConnection, connect, Connection, Document, Model as MongooseModel, Schema } from 'mongoose';
const mongoose: Mongoose = require('mongoose')
import { Response } from 'express'

const ENV = require('../../../env.json');

import { status, statusKey } from '../../lib/net/http/response';

export type ModelEvent = 'store' | 'find' | 'findMany' | 'update' | 'updateMany' | 'remove' | 'removeMany'

const env = ENV.APP.ENV
const connection = ENV.ENV[env].DB.CONNECTION
const conf = ENV.ENV[env].DB[connection];
const up = conf.username === '' && conf.password == ''
			? '' : conf.username + ':' + conf.password
const mcs = `mongodb://${up}@`
			+ `${conf.host}:${conf.port}/${conf.name}`
mongoose.connect(mcs)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('connected to mongodb server: ', mcs)
})

export interface IOptions {
	codeOrText		?: statusKey
	event			?: ModelEvent
	responseObject	?: {}
	prop			?: 'doc' | 'docs' | string
	promise			?: 'then' | 'catch'
}

export class Model<ISchema extends Document> {
	protected model: MongooseModel<ISchema>;
	constructor(
		public readonly collection: string,
		public readonly schema: Schema
	) {
		this.model = db.model<ISchema>(collection, schema)
	}
	// ++++
	store(doc: ISchema) {
		return new this.model(doc).save()
	}
	// ????
	find(id: string) {
		return this.model.findById(id).exec()
	}
	findMany(conditions: any) {
		return this.model.find(conditions).exec()
	}
	// $$$$
	updateMany(conditions: any, doc: any) {
		return this.model.updateMany(conditions, doc).exec()
	}
	update(id: string, doc: any) {
		return this.model.findByIdAndUpdate(id, doc).exec()
	}
	// xxxx
	removeMany(id: string) {
		return this.model.findByIdAndRemove(id).exec()
	}
	remove(conditions: any) {
		return this.model.remove(conditions).exec()
	}
}
