import React ,{Component} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import './App.css'

// const {Component} = 'react'
// 状态在哪里，操作状态的方法就在哪里
// 创建暴露app组件
export default class App extends Component{
  state ={todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'大代码',done:true}
  ]}
  // addTodo用于添加一个todo接收todo对象
  addTodo=(todoObj)=>{
    const {todos}=this.state
    const newTodos =[todoObj,...todos]
    this.setState({todos:newTodos})
  }
  // 用于取消勾选
  updateTodo=(id,done)=>{
    const {todos}=this.state
    const newTodos=  todos.map((todoObj)=>{
      if(todoObj.id===id) return {...todoObj,done:done}
      else return todoObj 
    })
    this.setState({todos:newTodos})
    
  }
  // 删除todo ，由子组件传过来的id
  deleteTodo=(id)=>{
    // 获取原来的todos，然后跟子组件传过来的id比较不一样的删掉
    const {todos} =this.state
    // 删除指定id的todo对象
     const newTodos= todos.filter((todoObj)=>{
      return todoObj.id !==id
    })
    this.setState({todos:newTodos})
  }
  // 用于全选
  checkAllTodo=(done)=>{
    const {todos}=this.state
    const newTodos= todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({todos:newTodos})
  }
  // 清除所有完成
  clearAlltodo=()=>{
    const {todos}=this.state
    const newTodos= todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }
  render (){
    const {todos}=this.state
    return(
      <div>
        <div className="todo-container">
    <div className="todo-wrap">
      <Header addTodo={this.addTodo} />
      <List todos={todos} updateTodo={this.updateTodo } deleteTodo={this.deleteTodo} />
      <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAlltodo={this.clearAlltodo} />
    </div>
  </div>
      </div>)
}}