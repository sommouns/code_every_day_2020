# React深入指南

三种组件

```js
class xxx extends React.Component {}

class xxx extends React.PureComponent {}

function xxx(props) {
  return xxxx
}
```

+ HOC

  + 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。

    ```js
    // 此函数接收一个组件...
    function withSubscription(WrappedComponent, selectData) {
      // ...并返回另一个组件...
      return class extends React.Component {
        constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
          this.state = {
            data: selectData(DataSource, props)
          };
        }
    
        componentDidMount() {
          // ...负责订阅相关的操作...
          DataSource.addChangeListener(this.handleChange);
        }
    
        componentWillUnmount() {
          DataSource.removeChangeListener(this.handleChange);
        }
    
        handleChange() {
          this.setState({
            data: selectData(DataSource, this.props)
          });
        }
    
        render() {
          // ... 并使用新数据渲染被包装的组件!
          // 请注意，我们可能还会传递其他属性
          return <WrappedComponent data={this.state.data} {...this.props} />;
        }
      };
    }
    ```

+ 组件插槽

  + Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。

  + ```js
    / 在 DOM 中有两个容器是兄弟级 （siblings）
    const appRoot = document.getElementById('app-root');
    const modalRoot = document.getElementById('modal-root');
    
    class Modal extends React.Component {
      constructor(props) {
        super(props);
        this.el = document.createElement('div');
      }
    
      componentDidMount() {
        // 在 Modal 的所有子元素被挂载后，
        // 这个 portal 元素会被嵌入到 DOM 树中，
        // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
        // 如果要求子组件在挂载时可以立刻接入 DOM 树，
        // 例如衡量一个 DOM 节点，
        // 或者在后代节点中使用 ‘autoFocus’，
        // 则需添加 state 到 Modal 中，
        // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
        modalRoot.appendChild(this.el);
      }
    
      componentWillUnmount() {
        modalRoot.removeChild(this.el);
      }
    
      render() {
        return ReactDOM.createPortal(
          this.props.children,
          this.el,
        );
      }
    }
    
    class Parent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        // 当子元素里的按钮被点击时，
        // 这个将会被触发更新父元素的 state，
        // 即使这个按钮在 DOM 中不是直接关联的后代
        this.setState(state => ({
          clicks: state.clicks + 1
        }));
      }
    
      render() {
        return (
          <div onClick={this.handleClick}>
            <p>Number of clicks: {this.state.clicks}</p>
            <p>
              Open up the browser DevTools
              to observe that the button
              is not a child of the div
              with the onClick handler.
            </p>
            <Modal>
              <Child />
            </Modal>
          </div>
        );
      }
    }
    
    function Child() {
      // 这个按钮的点击事件会冒泡到父元素
      // 因为这里没有定义 'onClick' 属性
      return (
        <div className="modal">
          <button>Click</button>
        </div>
      );
    }
    
    ReactDOM.render(<Parent />, appRoot);
    ```

+ Suspense：异步组件  

  + suspense和lazy

  + ```js
    const Bar = React.lazy(() => import('./components/bar'));
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
    ```

+ context

  + Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。

  + ```jsx
    import React, { Component } from 'react';
    
    export const themes = {
        light: {
            foreground: '#000000',
            background: '#eeeeee'
        },
        dark: {
            foreground: '#ffffff',
            background: '#222222'
        }
    };
    
    export const ThemeContext = React.createContext(
        themes.dark // 默认值
    );
    
    export default class CTC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                theme: themes.light
            };
    
            this.toggleTheme = () => {
                this.setState(state => ({
                    theme: state.theme === themes.dark ? themes.light : themes.dark
                }));
            };
        }
    
        render() {
            // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
            // 而外部的组件使用默认的 theme 值
            return (
                <div>
                    <ThemeContext.Provider value={this.state.theme}>
                        <Toolbar changeTheme={this.toggleTheme} />
                    </ThemeContext.Provider>
                    <section>
                        <ThemedButton />
                    </section>
                </div>
            );
        }
    }
    
    function Toolbar(props) {
        // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
        // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
        // 因为必须将这个值层层传递所有组件。
        return (
            <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>
        );
    }
    
    class ThemedButton extends React.Component {
        render() {
            let props = this.props;
            let theme = this.context;
            return (
                <button {...props} style={{ backgroundColor: theme.background }} />
            );
        }
    }
    ThemedButton.contextType = ThemeContext;
    
    ```

+ memo -> React.pureComponent

+ ref

+ 新的生命周期