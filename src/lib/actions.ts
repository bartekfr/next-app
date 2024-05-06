'use server'

import { MakeNullable } from '@/lib/utils';
import { MealInput } from '@/types'
import { saveMeal } from './meals';

export async function shareMeal(formData: FormData) {
  const meal: MealInput = {
    title: formData.get('title') as string,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    image: formData.get('image') as File,
  }

  await saveMeal(meal)

}