import classes from './page.module.css'
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

interface PageParams {
  mealSlug: string
}

interface MealPageProps {
  params: PageParams
}

async function Meal({ params }: MealPageProps) {
  const meal = await getMeal(params.mealSlug)

  if (!meal) {
    notFound()
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

export default function MealPage({ params }: MealPageProps) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerText}>
          <span>Meal details page</span>
        </div>
      </header>
      <Suspense fallback={<div className={classes.loading}>Loading Meal...</div>}>
        <Meal params={params} />
      </Suspense>
    </>
  );
}


