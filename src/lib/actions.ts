'use server'

import { MakeNullable } from '@/lib/utils';
import { MealInput } from '@/types'
import { saveMeal } from './meals';
import { redirect } from 'next/navigation';

export async function shareMeal(prevState: any, formData: FormData) {
  const meal: MealInput = {
    title: formData.get('title') as string,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    image: formData.get('image') as File,
  }
  // TODO: validate meal data
  if (!meal.creator_email.includes('@')) {
    // throw new Error('Invalid email');

    return {
      message: 'Invalid email',
    }
  }

  await saveMeal(meal)
  redirect('/meals')

  return {
    message: 'Form submitted',
  }

}