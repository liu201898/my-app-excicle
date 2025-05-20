import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  handleClear=()=>{
    this.props.clearAlltodo()
  }
  render() {
    const {todos}  =this.props
    // 已完成的个数 default
    const doneCount= todos.reduce((pre,todo)=>{
        return pre+(todo.done ?1:0)
    },0)
    const total= todos.length
    return (
        <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount===total && total!==0 ? true:false} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClear} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
