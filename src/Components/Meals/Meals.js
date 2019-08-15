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

    componentDidMount = () => {
        axios.get('/api/meals').then(response => {
            this.setState({
                meals: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        const mappedMeals = this.state.meals.map((meal, i) => {
            return <Meal key={i} meal={meal} />
        })
        return(
            <div>
                {mappedMeals}
            </div>
        )
    }
}