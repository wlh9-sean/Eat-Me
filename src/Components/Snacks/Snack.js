import React from 'react'
import * as Icon from 'react-feather'

import './Snacks.css'

const Snack = (props) => {
    return(
        <div className="snack-display">
            <p>{props.snack.name}</p>
            <p>{props.snack.calories}</p>
            <Icon.Trash2 />
        </div>
    )
}

export default Snack