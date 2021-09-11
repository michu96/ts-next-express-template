import { Router } from 'express'
import ExampleController from './controllers/ExampleController'
import ExampleMiddleware from './middlewares/ExampleMiddleware'

const router = Router()

router.get('/examples', ExampleController.getAll)
router.post('/examples', ExampleMiddleware.verify, ExampleController.create)
router.delete('/examples/:id', ExampleController.remove)

export default router
