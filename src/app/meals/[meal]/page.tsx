import classes from './page.module.css'
import Image from 'next/image';
import { getMeal } from '@/lib/meals';

interface PageParams {
  meal: string
}

interface MealPageProps {
  params: PageParams
}

export default function MealPage({ params}: MealPageProps) {
  const meal = getMeal(params.meal)

  if (!meal) {
    return null
  }

  const instructions = meal.instructions.replace(/\n/g, '<br />')
  return (
    <>
     <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
     </header>
     <main>
      <p
        className={classes.instructions}
        dangerouslySetInnerHTML={{__html: instructions}}
      />
     </main>
    </>
  );
}
