import React from 'react'

function MyComponent (props) {
    console.log('rendered')
    return (
        <div>
            hello {props.name}
        </div>
    )
}

export default class MemoDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'tim',
            age: 12
        }
    }
    
    handleChange() {
        this.setState({
            age: 14
        })
    }
    
    render() {
        return (<div>
            <NewMC name={this.state.name}/>
            <button onClick={() => this.handleChange()}></button>
        </div>)
    }
}