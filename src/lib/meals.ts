import sql from 'better-sqlite3'
import { Meal } from '@/types'

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