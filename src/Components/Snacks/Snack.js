import React, {Component} from 'react'
import * as Icon from 'react-feather'

import './Snacks.css'
import axios from 'axios';

class Snack extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            calories: 0,
            isEdit: false
        }
    }

    editClick = () => {
        this.setState({isEdit: !this.state.isEdit})
    }

    updateSnack = (id) => {
        let updatedSnack = {
            id,
            name: this.state.name,
            calories: this.state.calories
        }
        axios.put(`/api/updateSnack/${id}`, updatedSnack).then(response => {
            this.props.updateSnack(response.data)
        }).catch(err => {
            console.log(err)
        })

        this.setState({isEdit: false})
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const {id} = this.props.snack
        const {deleteSnack} = this.props

        return(
            <div className="snack-display">
                {!this.state.isEdit ? 
                <div className="snacks-two">
                    <p>{this.props.snack.name}</p>
                    <p>{this.props.snack.calories}</p>
                    <Icon.Edit2 onClick={() => this.editClick()}/>
                    <Icon.Trash2 onClick={() => deleteSnack(id)}/>
                </div>
                :
                <div>
                    <div>
                    <input type='text' name='name' onChange={(event) => this.handleInput(event)} className="input"/>

                    <input type='number' name='calories' onChange={(event) => this.handleInput(event)} className="input"/>

                    <button onClick={() => this.updateSnack(this.props.snack.id)} className="button">Update</button> 
                    </div>
                </div>
            }
                
            </div>
        )
    }

    }

export default Snack