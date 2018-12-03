import { Request, Response, Router } from 'express'
import { Document } from 'mongoose'
import 'socket.io'

import { status } from '../../../lib/net/http/response'
import { Model } from '../../Models'

export function router
	<ISchema extends Document> (
		model: Model<ISchema>
	) {
	return Router()
		.post('/', (request: Request, response: Response) => {
			const newDoc = request.body
			model
				.store(newDoc)
				.then((storedDoc) => {
					status(response, 302, { storedDoc })
				})
				.catch((reason) => {
					status(response, 500, { reason })
				})
		})
		.get('/', (request: Request, response: Response) => {
			const queries = request.query || undefined
			if ( queries ) {
				model
					.findMany(queries)
					.then((doc) => {
						status(response, 302, { doc })
					})
					.catch((reason) => {
						status(response, 500, { reason })
					})
			} else {
				status(response, 400)
			}
		})
		.get('/:id', (request: Request, response: Response) => {
			const id = request.param('id')
			model
				.find(id)
				.then((doc) => {
					status(response, 302, { doc })
				})
				.catch((reason) => {
					status(response, 500, { reason })
				})
		})
		.patch('/', (request: Request, response: Response) => {
			const { conditions, set } = request.body
			model
				.updateMany(conditions, set)
				.then((updatedDocs) => {
					status(response, 200, { updatedDocs })
				})
				.catch((reason) => {
					status(response, 400, { reason })
				})
		})
		.patch('/:id', (request: Request, response: Response) => {
			const id = request.param('id') || undefined
			const { set } = request.body
			model
				.update(id, set)
				.then((updatedDoc) => {
					status(response, 200, { updatedDoc })
				})
				.catch((reason) => {
					status(response, 400, { reason })
				})
		})
		.delete('/', (request: Request, response: Response) => {
			const conditions = request.body || undefined
			model
				.removeMany(conditions)
				.then((deletedDocs) => {
					status(response, 200, { deletedDocs })
				})
				.catch((reason) => {
					status(response, 500, { reason })
				})
		})
		.delete('/:id', (request: Request, response: Response) => {
			const id = request.param('id') || undefined
			model
				.remove(id)
				.then((deletedDoc) => {
					status(response, 200, { deletedDoc })
				})
				.catch((reason) => {
					status(response, 500, { reason })
				})
		})
}
