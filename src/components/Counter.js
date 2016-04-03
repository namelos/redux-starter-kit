import React, { Component } from 'react'

export const isEven = n =>
  !(n % 2)

export default class Counter extends Component {
  state = { counter: 0 }

  increment = () =>
    this.setState({ counter: this.state.counter + 1 })

  decrement = () =>
    this.setState({ counter: this.state.counter - 1 })

  incrementEven = () => {
    const { counter } = this.state
    if(isEven(counter))
      this.increment()
  }

  render = () => <div>
    Counter: { this.state.counter } {' '}
    <button onClick={ this.increment }>+</button>
    <button onClick={ this.decrement }>-</button>
    <button onClick={ this.incrementEven }>inc even</button>
  </div>
}