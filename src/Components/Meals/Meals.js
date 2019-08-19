import React, {Component} from 'react'
import Meal from './Meal'
import axios from 'axios'



export default class Meals extends Component {
    

    deleteMeal = (id) => {
        axios.delete(`/api/deleteMeal/${id}`).then(response => {
            this.props.handleDelete(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

   

    

    render(){
        const mappedMeals = this.props.meals.map((meal, i) => {
            return <Meal key={i} meal={meal} deleteMeal={this.deleteMeal} updateMeal={this.props.updateMeal}/>
        })
        return(
            <div>
                {mappedMeals}
            </div>
        )
    }
}