import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: 'All meals',
  description: 'Browse all meals',
};

const Meals = async () => {
  const meals = await getMeals()
  return (
    <MealsGrid
      meals={meals}
    />
  )

}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <p className={classes.cta}>
          <Link href='meals/share'>Share meal</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<div className={classes.loading}>Loading...(Meals level loader)</div>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
