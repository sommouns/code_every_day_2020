# 2020-3-18

### Vue SSR跳坑

+ 如何防止客户端重复渲染

  ![image-20200318130436200](/Users/apple/Library/Application Support/typora-user-images/image-20200318130436200.png)

  直接上图，可以看到，ssr渲染出来的标签上带了标记，通过这个去判断，dom结构是否一致，一致就只要部分diff替换就可以了，如果不一致，就`warn`

+ 优化方案： cgi拉取 和 VDOM直出渲染

  + 先说说缺陷：

    + 对服务器提出更高的要求，生成虚拟DOM如果相对较长的运行和计算耗时；
    + 由于cgi拉取和vdom直出后才吐出HTML页面，FMP虽然提前了，但是FP相对延迟了；
    + 相比CSR，SSR渲染后，由于仍然需要进行依赖、vue初始化，页面可交互时间并没有较大改善。

  + 缓存优化

    + 页面级别缓存：vuessr官网给我们提供了一种方法，如果页面并非千人千面，总是为所有用户渲染相同的内容，我们可以利用名为 micro-caching 的缓存策略，来大幅度提高应用程序处理高流量的能力。这通常在 Nginx 层完成，也可以在 Node.js 中实现。

    + 组件级别缓存：通过对组件设置serverCacheKey的方式，如果组件serverCacheKey相同，将复用之前渲染的组件产物，不需要重新渲染。具体是类似这样的：

      ```js
      export default {
        name: 'myComponent', // 必填选项
        props: ['item'],
        serverCacheKey: props => props.item.id,
        render (h) {
          return h('div', this.item.id)
        }
      }
      ```

    + 如果部分cgi接口返回的数据是固定的， 我们可以在node后端拉取cgi的时候，设置cgi缓存，缓存至memcache或其他轻量存储服务，当然，你也需要设置好缓存更新策略。

  + 代码实现优化

    + 减少组件嵌套层次，优化HTML结构：由于组件最初需要在node后端进行VDOM计算和渲染，优化组件层次结构，减少过深曾经的DOM嵌套，可以减少VDOM计算耗时。
    + 减少首页渲染数据量：根据业务调整用户首屏可见的所需渲染的数据，其他数据懒加载或异步加载。

  + 资源加载

    + 流式传输：vuessr官网给我们介绍了一种方法，render对象会暴露renderToStream方法，把原有的直出结果以流的形式输出，让我们可以更快的响应数据到客户端，能减少首屏渲染时间，更早开始加载页面资源。（流式传输需要在asyncData执行结束后开始，否则没有数据，这意味着流失传输受限于cgi拉取耗时）
    + 分块传输：lucien在tweb大会上给我们带来了新的思路，由模板的语法树， 分析代码的上下文，分析数据和模板间的依赖，用异步数据分割模板，分块逐步输出。（相比流式传输，前置位的cgi数据一旦ready，就会渲染输出，而不需要等待所有的gi拉取到后才开始渲染输出，但是该方案改造成本较大）

  + 改造ssr算法

    + 在tweb大会上lucien给我们介绍了一个新的思路，改造直出算法，不用vue-loader而用自研的aga-loader，将vdom渲染转换为字符串模板，具有更高的渲染性能。

### React开坑

+ 技术栈
  + ES6
  + Babel
  + polyfill：语言补丁
  + webpack：前端的一个集成工具
  + React
  + Flacor/Relay：数据通信
  + NPM

+ 设计思想：

  + **Everything is Component**
    + composable
    + reusable
    + maintainable
    + testable

  + **Single Source of Truth**：one-way data flow

  + **VDOM**

    + 最小化DOM更新
    + 批量操作DOM
    + 自动化的事件代理
    + 支持SVG，Canvas，Native的开发

  + Higher-Order Component

    + compose higher-order components

      ```js
      export function composeComponents(comonent, wrappers = []) {
        return wrappers.reduce((c, wrapper) => wrapper(c), component)
      }
      
      const checkApp = composeComponents(
      	App,
        [
          (c) => checkAdmin(c, {withValue: false, redirectTo: '/welcome-on-board'}),
          (c) => requireAuth(c)
        ]
      )
      
      ```

+ 最近实践

  + use classes
  + use propType and defaultProps
  + use {...this.props}
  + 业务和交互进行分离（pure）
  + IO和UI分离
  + asserts logger
  + JSX

### Flux架构

+ React本身只设计UI层，让我动态的去感知每个state的变化，如果搭建大型应用，必须搭配一个前端框架

+ Flux是一种架构思想，跟mvc是同一个东西，但更简单清晰

  + View：视图层
  + Action：视图发出的消息（mouseClick）
  + Dispatcher：用于接受action，执行callback
  + Store：用于存放应用的状态，一旦发生改变就提醒Views要更新页面

  ![image-20200318194601103](/Users/apple/Library/Application Support/typora-user-images/image-20200318194601103.png)

### React性能调优

```js
this.state.list.get('items').map(function(label) {
  return <div><CheckboxWithLabel onChange={this.onChange}></CheckboxWithLabel></div>
})

onChange: function() {
  this.setState({label: 123})
}
  
shouldComponentUpdate: function(nextProps, nextState) {
  return nextProps.label !== this.props.label
}
  
mixins: [React.addons.PureRenderMixin]

constructor(props) {
  super(props)
  this.shouldComponentUpdate = 	React.addons.PureRenderMixin.shouldComponentUpdate.bind(this)
}
```

+ 子组件触发更新父组件，父组件更新全部自组件都要diff面，一旦更改了state，上面方法全部歇菜

### Redux

![image-20200321154144080](/Users/apple/Library/Application Support/typora-user-images/image-20200321154144080.png)

+ 管理应用的state
  + state.getState()
  + state.dispatch(aciton)
  + store.subscribe(listener)
  + store.createStore(reducer, [initState])

+ reudx.min.js

+ React-redux.js 

+ Redux-thunk.min.js

+ keyMirror.js

+ Immutable.min.js

+ Request.js(fetch)

+ ReduxThunk.js

+ Provider(React-Redux)注入store

  ```jsx
  <Provider store={store}> <App /> </Provider>
  ```

  

### 高阶组件

GrpahQL and Relay

 

