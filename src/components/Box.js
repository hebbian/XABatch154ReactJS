import React from 'react'

const boxstyle = {
    border: '1px solid #000',
    width: 300,
    padding: 10,
    marginBottom: 10
}

const Box = (props) => {
    return (
        <div style={boxstyle}>
            <p>{props.customtext}</p>
        </div>
    )
}

export default Box