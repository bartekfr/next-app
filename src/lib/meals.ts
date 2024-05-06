import sql from 'better-sqlite3'
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

export async function saveMeal(mealData: MealInput) {
  const meal: Meal = {
    ...mealData,
    id: 0, // TODO: add later
    slug: slugify(mealData.title, { lower: true }),
    instructions: xss(mealData.instructions),
    image: '/' // TODO: add later
  }

  return meal
}