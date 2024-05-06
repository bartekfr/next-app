import sql from 'better-sqlite3'
import  fs from 'node:fs'
import slugify from 'slugify'
import xss from 'xss'
import { Meal, MealInput } from '@/types'

const db = sql('meals.db')

export async function getMeals(): Promise<Meal[]> {
  await new Promise( resolve => setTimeout(resolve, 3000))
  // throw new Error('Fail')
  return db.prepare('SELECT * FROM MEALS').all() as Meal[];
}

export async function getMeal(slug: string): Promise<Meal> {
  await new Promise( resolve => setTimeout(resolve, 3000))
  console.log('GET MEAL', slug)
  return db.prepare('SELECT * FROM MEALS WHERE slug =?').get(slug) as Meal;
}

type MealWithoutId = Omit<Meal, 'id'>

export async function saveMeal(mealData: MealInput) {
  const meal: MealWithoutId = {
    ...mealData,
    slug: slugify(mealData.title, { lower: true }),
    instructions: xss(mealData.instructions),
    image: '/' // TODO: add later
  }

  const extension = mealData.image.name.split('.').pop()
  const fileName = `${meal.slug}.${extension}`

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferedImage = await mealData.image.arrayBuffer()
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Image upload failed')
    }
  })

  meal.image = `/images/${fileName}`

  db.prepare(`
    INSERT INTO meals
      (title, creator, creator_email, summary, slug, instructions, image)
    VALUES
      (@title, @creator, @creator_email, @summary, @slug, @instructions, @image)
  `).run(meal)
}