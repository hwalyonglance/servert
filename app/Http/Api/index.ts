import { Router } from 'express'

import * as file from './file.api'
import * as jurusan from './jurusan.api'
import * as klass from './klass.api'
import * as pelajaran from './pelajaran.api'
import * as role from './role.api'
import * as teacher from './teacher.api'
import * as user from './user.api'

const router: Router = Router()

router.use('/file',			file.router		)
router.use('/jurusan',		jurusan.router	)
router.use('/klass',		klass.router	)
router.use('/pelajaran',	pelajaran.router)
router.use('/role',			role.router		)
router.use('/teacher',		teacher.router	)
router.use('/user',			user.router		)

export {
	file,
	jurusan,
	klass,
	pelajaran,
	role,
	teacher,
	user,

	router
}
