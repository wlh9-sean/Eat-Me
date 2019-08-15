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

    // componentDidMount = () => {
    //     axios.get('/api/snacks').then(response => {
    //         this.setState({
    //             snacks: response.data
    //         })
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }

    render(){
        const mappedSnacks = this.props.snacks.map((snack, i) => {
           return <Snack key={i} snack={snack} />
        })
        return(
            <div>
                {mappedSnacks}
            </div>
        )
    }
}