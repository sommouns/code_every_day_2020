import React, {Component} from 'react'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as LightActions from '../actions/index.js'
import Light from '../components/index.jsx'

class App extends Component {
    _bind(...methods) {
        methods.forEach((method) => this[method] = this)
    }
    
    handleClick(e) {
        let _cname = e.target.className
        if(_cname === 'red') {
            _cname = 'green'
        } else {
            _cname = 'yellow'
        }
        
        const {actions} = this.props
        
        actions['change' + _cname]()
    }
    
    render() {
        console.log(this.props)
        
        const {isLoading, color, text} = this.props.data.light
        
        return (
            <div id="traffic" onClick={this.handleClick.bind(this)}> 
                {isLoading ? <h2>loading</h2> : text}
                <Light color={color}></Light>
                123
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        data: state
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: Redux.bindActionCreators(LightActions, dispatch)
    }
}


export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App)