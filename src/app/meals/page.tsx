import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals()
  console.log(meals)
  return (
    <>
      <header className={classes.header}>
        <p className={classes.cta}>
          <Link href='meals/share'>Share meal</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid
          meals={meals}
        />
      </main>
    </>
  );
}
