import React from 'react'

const Snack = (props) => {
    return(
        <div>
            <p>{props.snack.name}</p>
            <p>{props.snack.calories}</p>
        </div>
    )
}

export default Snack