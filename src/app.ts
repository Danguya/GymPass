import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Wilmy Danguya',
    email: 'daniel.yava16@gmail.com',
  },
}).then(()=>{
  console.log("Created")
})

export const app = fastify()
