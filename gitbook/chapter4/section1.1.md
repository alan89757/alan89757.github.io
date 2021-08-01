# react hooks
[TOC]
## 1. 什么是 Hooks
react一直提倡使用函数组件，但函数组件没有实例，没有生命周期函数。
hooks就是加了声明周期和状态管理

## 2. hooks解决了哪些问题？
### 2.1. 类组件的不足
状态逻辑难复用
逻辑负责难以维护
this 指向问题

### 2.2 Hooks 优势
能优化类组件的三大问题
能在无需修改组件结构的情况下复用状态逻辑（自定义 Hooks ）
能将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）
副作用的关注点分离
```text
副作用指那些没有发生在数据向视图转换过程中的逻辑，如 ajax 请求、访问原生dom 元素、
本地持久化缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志等。以往这些副作用都
是写在类组件生命周期函数中的。而 useEffect 在全部渲染完毕后才会执行，useLayoutEffect
会在浏览器 layout 之后，painting 之前执行。
```

## 3. 注册事项
- 只能在函数内部的最外层调用 Hook，不要在循环、条件判断或者子函数中调用
- 只能在 React 的函数组件中调用 Hook，不要在其他 JavaScript 函数中调用

## 4. useState && useMemo && useCallback
```jsx
// 数组解构
const [state, setState] = useState(initialState);
```
每次setState都会重新渲染dom，怎么优化?
<!-- 父组件减少重渲染 -->

### 4.1 未使用useCallback

```git
git reset --hard 4cd230ddda7808a12da45185a1da3de7282b032f
```
### 4.2 使用useCallback
```git
git reset --hard 3b6163d14324040bb2a6e31884b0c8b414447be6
```
### 4.3 未使用useMemo
```git
git reset --hard 51d53ff7e6d26b47baedd992af6f8803f48d2f8e
```
### 4.4 使用useMemo
```git
git reset --hard 7b7683e6821518a2397471fde9f963dd1253aa41
```

## 5. 函数式更新
```jsx
import React, { useState } from "react";
function Counter2(){
  let [number,setNumber] = useState(0);
  function lazy(){
    setTimeout(()=>{
      // setNumber(number+1);
       setNumber(number=>number+1);  // 每次都会去获取一遍
    },3000);
  }
  return (
      <>
          <p>{number}</p>
          <button onClick={()=>setNumber(number+1)}>+</button>
          <button onClick={lazy}>lazy</button>
      </>
  )
}
export default Counter2;
```

## 6.惰性初始化 state
useState的初始值可以通过传入一个函数计算返回初始值
```jsx
import React, { useState } from "react";

function Counter5(props){
  console.log('Counter5 render');
  function getInitState(){
    console.log("getInitState__"); // 只初始化进来一次
    return {number:props.number || 1};
  }
  let [counter,setCounter] = useState(getInitState);
  return (
    <>
      <p>{counter.number}</p>
      <button onClick={()=>setCounter({number:counter.number+1})}>+</button>
      <button onClick={()=>setCounter(counter)}>setCounter</button>
    </>
  )
}
export default Counter5;
```

## 7. 性能优化
### 7.1 Object.is(浅比较) 

```jsx
import React, { useState } from "react";
function Counter(){
  const [counter,setCounter] = useState({name:'计数器',number:0});
  // 如果你修改状态的时候，传的状态值没有变化，则不重新渲染
  console.log('render Counter')
  return (
    <>
      <p>{counter.name}:{counter.number}</p>
      <button onClick={()=>setCounter({...counter,number:counter.number+1})}>+</button>
      <button onClick={()=>setCounter(counter)}>++</button>
    </>
  )
}
export default Counter;
```

### 7.2 减少渲染次数
- 默认情况，只要父组件状态变了（不管子组件依不依赖该状态），子组件也会重新渲染 
- 一般优化 
  - 类组件: pureComponent
  - 函数组件：memo（浅比较）
- useState每次都会重新生成新值，如何保证属性不变？
<!-- useMemo, useCallback -->

- 更深入的优化
<!-- useMemo, useCallback -->

### 7.3 useState 源码中的链表实现???
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

let firstWorkInProgressHook = {memoizedState: null, next: null};
let workInProgressHook;
function useState(initState) {
    let currentHook = workInProgressHook.next ? workInProgressHook.next : {memoizedState: initState, next: null};
    function setState(newState) {
      currentHook.memoizedState = newState;
      render();
    }
  	// 这就是为什么 useState 书写顺序很重要的原因
		// 假如某个 useState 没有执行，会导致指针移动出错，数据存取出错
    if (workInProgressHook.next) {
        // 这里只有组件刷新的时候，才会进入
        // 根据书写顺序来取对应的值
        // console.log(workInProgressHook);
        workInProgressHook = workInProgressHook.next;
    } else {
        // 只有在组件初始化加载时，才会进入
        // 根据书写顺序，存储对应的数据
        // 将 firstWorkInProgressHook 变成一个链表结构
        workInProgressHook.next = currentHook;
        // 将 workInProgressHook 指向 {memoizedState: initState, next: null}
        workInProgressHook = currentHook;
        // console.log(firstWorkInProgressHook);
    }
    return [currentHook.memoizedState, setState];
}

function Counter() {
    // 每次组件重新渲染的时候，这里的 useState 都会重新执行
    const [name, setName] = useState('计数器');
    const [number, setNumber] = useState(0);
    return (
      <>
        <p>{name}:{number}</p>
        <button onClick={() => setName('新计数器' + Date.now())}>新计数器</button>
        <button onClick={() => setNumber(number + 1)}>+</button>
      </>
    )
}
function render() {
    // 每次重新渲染的时候，都将 workInProgressHook 指向 firstWorkInProgressHook
    workInProgressHook = firstWorkInProgressHook;
    ReactDOM.render(<Counter/>, document.getElementById('root'));
}
render();
```

## 8. useReducer
```jsx
import React, { useReducer } from "react";

const initialState = 0;
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {number: state.number + 1};
    case 'decrement':
      return {number: state.number - 1};
    default:
      throw new Error();
  }
}
function init(initialState){
  return {number:initialState};
}
function Counter(){
    const [state, dispatch] = useReducer(reducer, initialState, init);
    return (
        <>
          Count: {state.number}
          <button onClick={() => dispatch({type: 'increment'})}>+</button>
          <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </>
    )
}
export default Counter;
```

## 9. useContext
```ts
import React, { useReducer, createContext, useContext } from 'react';
const initialState = {number : 0};
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return { number: state.number + 1 };
    default:
      break;
  }
}
const CounterContext = createContext(undefined);
// 第一种获取 CounterContext 方法：不使用 hook
function SubCounter_one() {
  return (
    <CounterContext.Consumer>
      {
        (value: any) => {
          return (
            <>
              <p>{value.state.number}</p>
              <button onClick={() => value.dispatch({ type: 'ADD' })}>+</button>
            </>
          )
        }
      }

    </CounterContext.Consumer>
  )
}
// 第二种获取 CounterContext 方法：使用 hook ，更简洁
function SubCounter() {
  const { state, dispatch} = useContext(CounterContext);
  console.log("state___", state)
  return (
    <>
      <p>{state.number}</p>
      <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
    </>
  )
}
/* class SubCounter extends React.Component {
    static contextTypes = CounterContext
    this.context =  {state, dispatch}
} */
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState, () => (initialState));
  return (
    <CounterContext.Provider value={state, dispatch}>
      <SubCounter />
      {/* <SubCounter_one /> */}
    </CounterContext.Provider>
  )
}
export default Counter;
```

## 10. useEffect
- componentDidMount、componentDidUpdate 和 componentWillUnmount
- effect（副作用）：指那些没有发生在数据向视图转换过程中的逻辑，如 ajax 请求、访问原生dom 元素、本地持久化缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志等。
- 副作用操作可以分两类：需要清除的和不需要清除的。

## 10.1 修改标题
### 10.1.1 使用class组件
- componentDidMount和componentDidUpdate需要执行两次
```jsx
import React from "react";
class Counter extends React.Component{
  state = {number:0};
  add = ()=>{
      this.setState({number:this.state.number+1});
  };
  componentDidMount(){
      this.changeTitle();
  }
  componentDidUpdate(){
      this.changeTitle();
  }
  changeTitle = ()=>{
      document.title = `你已经点击了${this.state.number}次`;
  };
  render(){
      return (
          <>
            <p>{this.state.number}</p>
            <button onClick={this.add}>+</button>
          </>
      )
  }
}
export default Counter;
```
### 10.1.2 使用useEffect
```jsx
import React, { Component, useState, useEffect } from 'react';
function Counter() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    document.title = `你点击了${number}次`;
  });
  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </>
  )
}
export default Counter;
```

### 10.1.3 清除副作用
```jsx
import React, { Component, useState, useEffect } from 'react';
function Counter(){
  let [number,setNumber] = useState(0);
  let [text,setText] = useState('');
  // 相当于componentDidMount 和 componentDidUpdate
  useEffect(()=>{
      console.log('开启一个新的定时器')
      let $timer = setInterval(()=>{
          setNumber(number=>number+1);
      },1000);
      // 组件卸载清除定时器
     return ()=>{
          console.log('destroy effect');
          clearInterval($timer);
      }
  });  // 可以传入空数组[]
  return (
      <>
        <input value={text} onChange={(event)=>setText(event.target.value)}/>
        <p>{number}</p>
        <button>+</button>
      </>
  )
}
export default Counter;
```
- 推荐启用 eslint-plugin-react-hooks[1] 中的 exhaustive-deps 规则

### 10.1.4 使用多个 Effect 实现关注点分离
```jsx
import React, { Component, useState, useEffect } from 'react';
function Counter(){
  let [number,setNumber] = useState(0);
  let [text,setText] = useState('');
  useEffect(()=> {
    // 修改标题
    document.title = "我是新标题";
    console.log("标题变化了")
  }, []);
  useEffect(()=> {
    console.log("number变化了：", number);
  }, [number]);  // number变更后执行
  return (
      <>
        <input value={text} onChange={(event)=>setText(event.target.value)}/>
        <p>{number}</p>
        <button onClick={(e)=>setNumber(number +1)}>+</button>
      </>
  )
}
export default Counter;
```

## 11. useLayoutEffect
- useLayoutEffect 会在 浏览器 layout 之后，painting 之前执行，可能会阻塞视图更新

```jsx
import React, { Component, useState, useEffect } from 'react';
function Counter(){
  let [number,setNumber] = useState(0);
  let [text,setText] = useState('');
  useEffect(()=> {
    // 修改标题
    document.title = "我是新标题";
    console.log("标题变化了")
  }, []);
  useEffect(()=> {
    console.log("number变化了：", number);
  }, [number]);  // number变更后执行
  return (
      <>
        <input value={text} onChange={(event)=>setText(event.target.value)}/>
        <p>{number}</p>
        <button onClick={(e)=>setNumber(number +1)}>+</button>
      </>
  )
}
export default Counter;
```

## 12. useRef & useImperativeHandle
- 获取焦点
```jsx
import React, { useState, useEffect, useRef } from 'react';

function Parent() {
  let [number, setNumber] = useState(0);
  return (
    <>
      <Child />
      <button onClick={() => setNumber(number + 1)}>+</button>
    </>
  )
}
let input;
function Child() {
  const inputRef: any = useRef();
  console.log('input===inputRef', input === inputRef);
  input = inputRef;
  function getFocus() {
    inputRef?.current?.focus();
  }
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={getFocus}>获得焦点</button>
    </>
  )
}
export default Parent;

```

- 获取子组件的焦点
```jsx
import React, { useState, useEffect, useRef } from 'react';

function Child(props, ref) {
  return (
    <input type="text" ref={ref} />
  )
}
const Child2 = React.forwardRef(Child);

function Parent() {
  let [number, setNumber] = useState(0);
  const inputRef: any = useRef();
  function getFocus() {
    inputRef.current.value = 'focus';
    inputRef.current.focus();
  }
  return (
    <>
      <Child2 ref={ inputRef } />
      <button onClick={() => setNumber(number + 1 )}>+</button>
      <button onClick={getFocus}>获得焦点</button>
    </>
  )
}
export default Parent;

```

- 自定义暴露给父组件的实例值
```jsx
import React, { useState, useEffect, createRef, useRef, forwardRef, useImperativeHandle } from 'react';

function Child(props, parentRef) {
  let focusRef: any = useRef();
  let inputRef: any = useRef();
  useImperativeHandle(parentRef, () => {
    return {
      focusRef,
      inputRef,
      name: '计数器',
      focus() {
        focusRef.current.focus();
      },
      changeText(text) {
        inputRef.current.value = text;
      }
    }
  });
  return (
    <>
      <input ref={focusRef} />
      <input ref={inputRef} />
    </>
  )
}
const ForwardChild = forwardRef(Child);

function Parent() {
  const parentRef: any = useRef();//{current:''}
  function getFocus() {
    parentRef.current.focus();
    parentRef.current.addNumber(666);  // 子组件未定义，代码无效
    parentRef.current.changeText('<script>alert(123)</script>');
    console.log(parentRef.current.name);
  }
  return (
    <>
      <ForwardChild ref={parentRef} />
      <button onClick={getFocus}>获得焦点</button>
    </>
  )
}
export default Parent;
```

## 13. 自定义Hook



![1](http://www.baidu.com)


















