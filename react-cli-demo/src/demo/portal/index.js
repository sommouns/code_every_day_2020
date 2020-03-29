import React, {Component} from 'react'
import ReactDom from 'react-dom'
let dom = document.createElement('div')
document.body.appendChild(dom)
class Modal extends Component {
    componentWillMount() {
        this.$el = dom
    }
    
    render() {
        console.log(this.$el)
        return (
            <div>
                {ReactDom.createPortal(this.props.children, this.$el)}
            </div>
        )
    }
}

export default class Parent extends Component {
    render() {
        return (
            <div>
                this is parent
                <Modal>
                    <Child></Child>
                </Modal>
            </div>
        )
    }
}

class Child extends Component {
    render() {
        return 'this is child'
    }
}