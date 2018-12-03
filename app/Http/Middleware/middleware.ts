import { Router } from 'express';
import { Document } from 'mongoose'

import { Model } from '../../Models'

export function router
	<ISchema extends Document> (
		model?: Model<ISchema>
	) {
	return Router()
}
