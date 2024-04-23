import Image from 'next/image';

type ImageType = React.ComponentProps<typeof Image>

export interface Meal {
  id:  number
  title: string
  slug: string
  summary: string
  creator: string
  image: ImageType['src']
}