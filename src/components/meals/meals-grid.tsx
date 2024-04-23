import MealItem from './meal-item'
import { Meal } from '@/types'
import classes from './meals.module.css'

interface MealsGridProps {
  meals: Meal[]
}

const MealsGrid = ({
  meals
}: MealsGridProps) => {
  return (
    <ul className={classes.meals}>
      {
        meals.map((meal) => {
          return (
            <li key={meal.id}>
              <MealItem {...meal}/>
            </li>
          )
        })
      }
    </ul>
  )
}

export default MealsGrid