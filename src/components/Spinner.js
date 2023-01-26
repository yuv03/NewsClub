import React, { Component } from 'react'
import loading from '../loading.gif'
//D:\Learning\React Course\newsapp\src\loadingg.gif

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
