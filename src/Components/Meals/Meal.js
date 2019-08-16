import React, {Component} from 'react'
import * as Icon from 'react-feather'
import axios from 'axios'

import './Meals.css'



class Meal extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            calories: 0,
            isEdit: false
        }
    }


    editClick = () => {
        this.setState({isEdit: !this.isEdit})
    }

    updateMeal = (id) => {
        let updatedMeal ={
            id,
            name: this.state.name,
            calories: this.state.calories
        }
        axios.put(`/api/updateMeal/${id}`, updatedMeal).then(response => {
            this.props.updateMeal(response.data)
        })

        this.setState({isEdit: false})

    }





    

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render(){
        const {id} = this.props.meal
        const {deleteMeal} = this.props
        
        return(
            <div className="meal-display">
                {!this.state.isEdit ?
                <div className="meals-two">
                    <p>{this.props.meal.name}</p>
                    <p>{this.props.meal.calories}</p>
                    <Icon.Edit2 onClick={() => this.editClick()} />
                    <Icon.Trash2 onClick={() => deleteMeal(id)}/>
                </div>
                :
                <div>
                     <div>
                        <input type='text' name='name' onChange={(event) => this.handleInput(event)} className="input"/>

                        <input type='number' name='calories' onChange={(event) => this.handleInput(event)} className="input"/>

                        <button onClick={() => this.updateMeal(this.props.meal.id)} className="button">Update</button> 
                    </div> 
                </div>
                }
            </div>
        )

    }
}

export default Meal