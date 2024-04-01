import { FastifyInstance } from 'fastify'
import { verifyJWT } from '../../middlewares/verify-jwt'
import { create } from '../gyms/create'
import { validate } from './validate'
import { history } from './history'
import { metrics } from './metrics'

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)
  app.post('/gyms/:gymId/check-ins', create)
  app.patch('/check-ins/validate', history)
  app.patch('/check-ins/metrics', metrics)
  app.get('/check-ins/history', validate)
}
