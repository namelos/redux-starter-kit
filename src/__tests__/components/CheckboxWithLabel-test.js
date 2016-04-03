import React from 'react'
import { shallow, mount } from 'enzyme'
import CheckboxWithLabel from '../../components/CheckboxWithLabel'

describe('CheckboxWithLabel', () => {
  it('changes the text after click', () => {
    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />)

    expect(checkbox.text()).toEqual('Off')

    checkbox.find('input').simulate('change')

    expect(checkbox.text()).toEqual('On')
  })
})


