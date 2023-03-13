import React, { Component } from 'react'

export default class Container extends Component {
  render() {
    return (
      <div>
        <div className='text-xl text-center text-purple-600'>{this.props.title}</div>
        <div className='text-sm bg-white border border-solid-100 border-red-700'>
            {this.props.children}
        </div> 
      </div>
    )
  }
}
