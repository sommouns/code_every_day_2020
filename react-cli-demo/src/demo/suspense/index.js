import React, { Component, Suspense } from 'react';
// import Foo from './components/foo';
// import Bar from './components/bar';
const Foo = React.lazy(() => slowImport(import('./components/foo')));
const Bar = React.lazy(() => import('./components/bar'));
function slowImport(value, ms = 1000){
    return new Promise(resolve=>{
        setTimeout(()=> resolve(value),ms);
    })
}
export default class LazyPage extends Component {
    render() {
        return (
            <Suspense fallback={<div>loading...</div>}>
                <Bar />
                <Foo />
            </Suspense>
        );
    }
}
