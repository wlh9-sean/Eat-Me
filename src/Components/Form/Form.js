import React, {Component} from 'react'

import axios from 'axios';
import Meals from '../Meals/Meals';
import Snacks from '../Snacks/Snacks';

import './Form.css'

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            meals: [],
            snacks: [],
            name: '',
            calories: 0,
            dropDown: 'Meal'
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

        axios.get('/api/snacks').then(response => {
            this.setState({
                snacks: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    createFood = () => {
        if(this.state.dropDown === 'Meal'){
            // const {name, calories} = this.state

            const body = {
                name : this.state.name,
                calories: this.state.calories
            }
            console.log(body)
            axios.post('/api/createMeal', body).then(response => {
                this.setState({
                    meals: response.data,
                    name: '',
                    calories: 0
                })
            })
        } 

        if(this.state.dropDown === 'Snack'){
            const {name, calories} = this.state

            const body = {
                name,
                calories
            }

            axios.post('/api/createSnack', body).then(response => {
                this.setState({
                    snacks: response.data
                })
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            dropDown: event.target.value
        })
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.calories]: event.target.value
        })
    }

    render(){
        return(
            <div>

                <div className="food-form">
                    <label>Food</label>
                    <input type='text' name='name' onChange={this.handleInput} />

                    <label>Calories</label>
                    <input type='number' name='calories' onChange={this.handleInput}/>

                    <select value={this.state.dropDown} onChange={this.handleChange}>
                        <option value = 'Meal'>Meal</option>
                        <option value = 'Snack'>Snack</option>
                    </select>
                    <button onClick={this.createFood}>Eat It!</button> 
                </div>

                 <div>
                    <Meals meals={this.state.meals}/>
                 </div>

                 <div>
                     <Snacks snacks={this.state.snacks}/>
                 </div>

            </div>
        )
    }
}