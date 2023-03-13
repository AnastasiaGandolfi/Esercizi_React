// Create a Container component that renders its children within a div tag. Have the div tag use a white background and a red border, either with a custom class or by using tailwindcss.

import React, { Component } from 'react'

export default class Container extends Component {
  render() {
    return (
      <div>
        <div className='bg-white border border-solid-100 border-red-700'>
            {this.props.children}
        </div> 
      </div>
    )
  }
}
