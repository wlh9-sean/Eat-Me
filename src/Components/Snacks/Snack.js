import React, {Component} from 'react'
import * as Icon from 'react-feather'

import './Snacks.css'

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
        this.setState({isEdit: !this.isEdit})
    }

    updateSnack = (id) => {
        let updatedSnack
    }

    render(){
        const {id} = this.props.snack
        const {deleteSnack} = this.props
        return(
            <div className="snack-display">
                <p>{this.props.snack.name}</p>
                <p>{this.props.snack.calories}</p>
                <Icon.Edit2 />
                <Icon.Trash2 onClick={() => deleteSnack(id)}/>
            </div>
        )
    }

    }

export default Snack