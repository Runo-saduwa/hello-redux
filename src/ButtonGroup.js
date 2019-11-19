import React, { Component } from 'react'

export default class ButtonGroup extends Component {
    render() {
        return (
            <div>
    this.props.technologies.map((tech, i) => <button data-tech={tech} key={i}>{tech}</button>)
            </div>
        )
    }
}

