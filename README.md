### 安装相关依赖

npm i redux

npm i react-redux

### 构建store和 reducer

1.创建reducer/index.js 文件，构建reducer来响应actions

2.创建store/index.js 文件，通过~~createstore~~**legacy_createStore**方法，把我们的reducer传入进来

3.在app.js 中引入store

### 搭建页面结构

1.创建一个组件，名字叫ComA，里面放一个 button按钮

2.创建另外一个组件，名字叫ComB，里面放一个div，用来显示数字

3.在app.js 中引入两个组件

### provider 组件实现

1.导入 Provider组件，在react-redux中进行导入

2.需要利用Provider组件对我们整个结构进行包裹

3.给我们Provider组件设置store的属性，而这个值就是我们通过legacy_createStore构建出来的 store 实例对象

### comA发送action

1.导入connect

2.利用connect对组件进行加强
connect(要接受数组的函数，要发送action的函数)(放入要加强的组件)

3.我们需要实现connect第二个参数

4.构建了一个函数mapDispatchToProps(dispatch)

dispatch:就是用来发送给action的

5.在这个函数里面就可以返回一个对象

key是方法名

value:调用dispatch去发送action

6.在组件的内容就可以通过props来拿到这个方法了

### ComB接受state

1.导入connect方法

2.利用connect对组件进行加强

3.ComB属于是接收方，就需要实现 connect的第一个参数

4.mapstateToProps里面的一个参数就是我们很关心state

5.把这个state 进行 return才能在组件的内部获取到最新的数据

6.ComB 是否能拿到数据,关键点是reducer

7.只有reducer里面返回了新的state的时候，我们才能够获取到
