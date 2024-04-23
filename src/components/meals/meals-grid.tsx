import MealItem, { Meal } from './meal-item'
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