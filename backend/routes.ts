import express from 'express'
import multer from 'multer'

import ServerController from './src/controllers/ServerController'
import OrphanagesController from './src/controllers/OrphanagesController'
import uploadConfig from './src/config/upload'

const routes = express.Router()
const upload = multer(uploadConfig)

routes.get('/', ServerController.index)
routes.get('/status', ServerController.status)

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images') ,OrphanagesController.create)



export default routes