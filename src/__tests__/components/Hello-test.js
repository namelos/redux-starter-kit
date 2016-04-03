import React from 'react'
import { shallow } from 'enzyme'
import Hello from '../../components/Hello'

describe('<Hello />', () => {
  it('renders', () => {
    const hello = shallow(<Hello />)
    expect(hello.text()).toEqual('hello')
  })
})