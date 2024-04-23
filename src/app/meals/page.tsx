'use client'

import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from '@/components/meals/meals-grid'

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <p className={classes.cta}>
          <Link href='meals/share'>Share meal</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid
          meals={[]}
        />
      </main>
    </>
  );
}
