import React from 'react'

const Meal = (props) => {
    return(
        <div>
            <p>{props.meal.name}</p>
            <p>{props.meal.calories}</p>
        </div>
    )
}

export default Meal