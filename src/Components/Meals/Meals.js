import React, {Component} from 'react'
import Meal from './Meal'
import axios from 'axios'

export default class Meals extends Component {
    constructor(){
        super()

        this.state = {
            meals: [],
            name: '',
            calories: 0
        }
    }

    render(){
        console.log(this.props)
        const mappedMeals = this.props.meals.map((meal, i) => {
            return <Meal key={i} meal={meal} />
        })
        return(
            <div>
                {mappedMeals}
            </div>
        )
    }
}