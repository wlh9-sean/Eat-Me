import React from 'react'
import * as Icon from 'react-feather'

import './Meals.css'

const Meal = (props) => {
    return(
        <div className="meal-display">
            <p>{props.meal.name}</p>
            <p>{props.meal.calories}</p>
            <Icon.Trash2 />
        </div>
    )
}

export default Meal