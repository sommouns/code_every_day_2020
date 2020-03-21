const React = require('react')

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            list: [
                'tim',
                'john',
                'hanse'
            ],
            label: 'this is label',
            name: 'this name is tim'
        }
    }
    setLabel() {
        console.log(1)
        this.setState({
            label: 'this is new label'
        })
    }
    
    setName() {
        console.log('name')
        this.setState({
            name: 'this is new nam,e'
        })
    }
    
    render() {
        return (
        <div>{this.state.label} {this.state.list.map(v => <ChildComponent key={v} label={v} setLabel={() => this.setName()}></ChildComponent>)}
            <PC lb={this.state.label}></PC>
        </div>
        )
    }
}

class ChildComponent extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this. props)
    }
    componentWillUpdate(oldVal, newVal) {
    }
    
    render(props) {
        console.log('rendered')
        const {label, setLabel} = this.props
        return (
            <div >{label}<button onClick={setLabel}></button></div>
        )
    }
}

class PC extends React.PureComponent {
    constructor(props) {
        super(props)
        // console.log(this. props)
    }
    componentWillUpdate(oldVal, newVal) {
        console.log('pure', oldVal, newVal)
    }
    
    render(props) {
        console.log('pure rendered')
        return (
        <div>123123</div>
        )
    }
}
export default App