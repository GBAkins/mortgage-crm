import React from 'react'

export default function Container(props) {
    return (
        <div>
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}
