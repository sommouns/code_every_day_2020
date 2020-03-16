# 2020-3-15
---
## 函数式编程
+ 范畴论
+ 函数式编程基础理论：将复杂的函数复合成简单的函数
+ 因为React火起来
+ 纯函数（Pure Function）
  ```js
   var xs = [1,2,3,4,5]
    xs.slice(0, 3) // => pure
    xs.splice(0, 3) // => not pure
  ```
  + 优点：可缓存性（因为每次输出结果都是固定的）
    ```js
    import _ from 'lodash'
    var sin = _.memorize(x => Math.sin(x))
    
    var a = sin(1)
    
    var b = sin(1)
    ```
    + 缺点：扩展性降低，可能要更多的硬编码
      ```js
      var min = 18
      var checkage = age => age > min // =>  not pure
      
      var checkage = age => age > 18 
      // 解决方案柯里化 （对函数参数的一个缓存）
      ```
+  函数组合
+  point free：把一些对象自带的方法转化成纯函数，不要命名转瞬即逝的中间变量
      ```js
      const f = str => str.toUpperCase().split('') //比较冗余，不灵活
      
      var toUpperCase = word => word.toUpperCase()
      var split = x => (str => str.split(x))
      
      var f = compose(split(' '), toUpperCase)
      f('abcd efgh')
      ```
+  声明式和命令式代码，比如map，reduce
+  高阶函数：函数当参数，返回函数
+  尾调用优化 （尾递归是线性的，不会栈溢出），浏览器目前不支持尾递归优化（因为有执行栈，主要是为了方便调试），所以能用while就不用递归
+  闭包：缓存了当前上文的词法作用域
+  范畴与容器：我们可以把“范畴”想象成一个容器，里面包含两种东西。值value、值的变形关系，也就是函数
+  范畴论使用函数，表达范畴之间的关系
+  函数式编程，实际就是各种函子的变换（of方法来生成一个新的容器，map进行变换）
+  Maybe函子
+  Monad
+  Either
+  Functor
+  IO
+  热门库
   +  RxJS
   +  lodash
   +  underscore
   +  Cycle.js
   +  ramda.js

---

## 测试
+ 单元测试 (Jasmine,  chai), karm, 检查覆盖率
+ e2e 功能测试 selenium-webdriver