import React, {Component} from 'react'
import Snack from './Snack'

import axios from 'axios'

export default class Snacks extends Component {
    constructor(){
        super()

        this.state = {
            snacks: [],
            name: '',
            calories: 0
        }
    }

    deleteSnack = (id) => {
        console.log(id)
        axios.delete(`/api/deleteSnack/${id}`).then(response => {
            this.props.handleDeleteSnack(response.data)
        })
    }

    render(){
        const mappedSnacks = this.props.snacks.map((snack, i) => {
           return <Snack key={i} snack={snack} deleteSnack={this.deleteSnack}/>
        })
        return(
            <div>
                {mappedSnacks}
            </div>
        )
    }
}