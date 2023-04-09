# vue生命周期
---
1. `beforeCreate()`:第一个生命周期函数，在执行时，data 和 method 中的数据还没有初始化。
2. `created()`:第二个生命周期函数。此时，data和method已经初始化好了。如果要调用Method中的方法和data中的数据。最早只能在created。
3. `beforeMount()`:模块已经在内存中编辑完成了，尚未将模块渲染到页面中。
4. `mounted()`:内存中的模块已经挂载到了页面当中。用户已经可以看到渲染好的页面。这是实例创建期间最后一个生命周期函数，当执行完成之后，实例就完全创建好了。如果需要操作DOM节点，最早要在mounted中进行。
5. `beforeUpdate()`:
6. `updated()`:
7. `beforeDestroy()`:
8. `destroy()`:

# 组件之间传值
---
## 父子组件通信：
1. 父组件 向 子组件传值。子组件设置一个props对象，用来接收父组件定义的数据。
```javascript
//父组件：
<Child :FatherMsg="data"></Child>
//子组件：
props: ['FatherMsg']
```

2. 子组件 向 父组件传值。子组件通过this.$emit触发方法，父组件监听方法。
```javascript
//子组件
methods: {
      send() {
        this.$emit('ListenChild', this.data);
      }
    }
//父组件
<Child :FatherMsg="data" @ListenChild="ListenChild"></Child>
methods: {
        ListenChild(data) {
            console.log("子组件传递过来的值：" , data);
            this.ChildMsg = data;
        }
    }
```

3. 父组件 调用 子组件中的方法。通过ref，\$emit，$on
4. 子组件 调用 父组件中的方法。子组件可以使用 $emit 触发父组件的自定义事件。
```javascript
methods: {
      childMethod() {
        // fatherMethod父组件方法
        this.$emit('fatherMethod'); 
      }
    }
```

## 兄弟组件传值
1. 事件总线：
   1. 注册事件总线：
   ```javascript
   //在已经创建好的Vue实例原型中创建一个EventBus
    Vue.prototype.$EventBus = new Vue()   
   ```
   2. 数据发送者定义触发方法：
   ```javascript
   methods:{
        sendName(){
            this.$EventBus.$emit('lufei', this.name);
        }
    }
   ```
   3. 数据接收者绑定自定义方法：
    ```javascript
    this.$EventBus.$on('lufei', (data)=>{
            console.log('我是TestB组件，收到了数据', data);
          })
    // 销毁对应自定义事件
        beforeDestroy(){
          this.$EventBus.$off('lufei')
        }
    ```

# vuex
1. Vuex实现了一个单向数据流，在全局拥有一个State存放数据，当组件要更改State中的数据时，必须通过Mutation进行，Mutation同时提供了订阅者模式供外部插件调用获取State数据的更新。而当所有异步操作(常见于调用后端接口异步获取更新数据)或批量的同步操作需要走Action，但Action也是无法直接修改State的，还是需要通过Mutation来修改State的数据。最后，根据State的变化，渲染到视图上。
   - 改变状态的唯一途径就是提交mutations。
   - 如果是异步的，就触发(dispatch)action，本质还是提交mutations。
   - 怎样去触发actions呢？可以用组件Vue Components使用dispatch或者后端接口去触发。
   - 提交mutations后，可以动态的渲染组件Vue Components。


# 动态路由
1.  路由分为两大模块
    1.  静态路由：登录页，主页，404等 不需要权限的页面
    2.  动态路由：需要权限管理的页面
    3.  默认为静态路由
2.  在获取到用户信息后
    1.  用户信息中包括当前用户能访问的权限页面的数据
    2.  通过动态路由匹配出能访问的路由信息
    3.  通过addRoutes动态添加到路由上
3.  路由添加参数
    1.  params传参，显示参数：
    ```javascript 
    {
      path: '/child/:id',
      component: Child
    }
    <router-link :to="/child/123">进入Child路由</router-link>
    ```
    2.  params传参，不显示参数：
    ```javascript
    <router-link :to="{name:'Child',params:{id:123}}">进入路由</router-link>
    ```
    3.  query传参：
    ```javascript 
    {
      path: '/child,
      name: 'Child',
      component: Child
    }
    <router-link :to="{name:'Child',query:{id:123}}">进入Child路由</router-link>
    ```


# diff算法
1. 框架会将所有的结点先转化为虚拟节点Vnode，在发生更改后将VNode和原本页面的OldNode进行对比，然后以VNode为基准，在oldNode上进行准确的修改；根据真实DOM生成虚拟DOM树，发生修改时，依据虚拟DOM树对真实DOM树进行修改。

# computed 与 watch 的区别
1. computed是计算属性，依赖其他属性值，并且有缓存，只要他依赖的值发生改变了，下一次获取computed的值时才会重新计算computed的值
2. watch更多的是监听观察作用，支持异步，每当监听的数值发生变化时就会立即回调进行后续操作。

