import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state ={mouse:false}
  handleMouse=(flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }
  // 取消勾选
  handleCheck=(id)=>{
    return (event)=>{
        this.props.updateTodo(id,event.target.checked)
    }
  }
  // 删除一个todo的回调 里面要写成高阶函数
  handleDelete=(id)=>{
    // const {id} =this.state
    if(window.confirm('确定删除吗')){
      this.props.deleteTodo(id)
    }
   
  }
  // 监听表单元素的动态变化
// 当用户修改输入框（<input>、<textarea>、<select> 等）的值时，onChange 会被触发。
  render() {
    const {id,name,done}=this.props
    const {mouse} =this.state
    return (
      <li style={{backgroundColor:mouse ? '#ddd':'white'}}  onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
      <label>
        <input type="checkbox" Checked={done} onChange={this.handleCheck(id)} />
        <span>{name}</span>
      </label>
      <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse? 'block':'none'}}>删除</button>
    </li>
    )
  }
}