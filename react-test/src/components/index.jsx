import React, {Component} from 'react'

export default class Light extends Component{
    render() {
        console.log(this.props)
        return (
        <div className={this.props.color} style={{height: '100px', width: '100px'}}></div>)
    }
}
