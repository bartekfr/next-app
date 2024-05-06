import Image from 'next/image';

type ImageType = React.ComponentProps<typeof Image>

export interface MealCommonFields {
  title: string
  summary: string
  instructions: string
  creator: string
  creator_email: string
}

export interface Meal extends MealCommonFields {
  id:  number
  image: ImageType['src']
  slug: string
}

export interface MealInput extends MealCommonFields {
  image: File
}