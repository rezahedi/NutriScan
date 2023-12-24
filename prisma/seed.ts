import { PrismaClient } from '@prisma/client'
import { nutrientMetrics } from '../constants'

const prisma = new PrismaClient()
async function main() {

  const collection = await prisma.$transaction(
    Object.keys(nutrientMetrics).map((key) => {
      const metric = nutrientMetrics[key as keyof typeof nutrientMetrics];
      return prisma.nutrients.upsert({
        where: { name: key },
        update: {},
        create: {
          name: key,
          icon: metric.img,
        },
      })
    })
  )
  console.log(collection)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })