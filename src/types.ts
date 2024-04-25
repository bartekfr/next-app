import Image from 'next/image';

type ImageType = React.ComponentProps<typeof Image>

export interface Meal {
  id:  number
  title: string
  slug: string
  summary: string
  instructions: string
  creator: string
  creator_email: string
  image: ImageType['src']
}