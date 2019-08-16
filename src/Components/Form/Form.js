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
                    // name: '',
                    // calories: 0
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

    handleDelete = (data) => {
        this.setState({
            meals: data,
        })
    }

    handleDeleteSnack = (data) => {
        console.log(data)
        this.setState({
            snacks: data
        })
    }

    updateMeal = (data) => {
        this.setState({
            meals: data
        })
    }

    render(){
        return(
            <div className="everything-container">

                <div className="food-form">
                    <label className="label">Food</label>
                    <input type='text' name='name' onChange={this.handleInput} className="input"/>

                    <label className="label">Calories</label>
                    <input type='number' name='calories' onChange={this.handleInput} className="input"/>

                    <select value={this.state.dropDown} onChange={this.handleChange} className="selector">
                        <option value = 'Meal'>Meal</option>
                        <option value = 'Snack'>Snack</option>
                    </select>
                    <button onClick={this.createFood} className="button">Eat It!</button> 
                </div>

                <div className="foods-display">
                    <div className="meals">
                        <Meals meals={this.state.meals} handleDelete={this.handleDelete} updateMeal={this.updateMeal}/>
                    </div>

                    <div className="snacks">
                        <Snacks snacks={this.state.snacks} handleDeleteSnack={this.handleDeleteSnack}/>
                    </div>

                </div>

            </div>
        )
    }
}