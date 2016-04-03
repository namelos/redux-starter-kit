jest.mock('data')

import React from 'react'
import { shallow } from 'enzyme'
import data from 'data'
import CheckboxWithLabel from '../../components/CheckboxWithLabel'

describe('CheckboxWithLabel', () => {
  it('changes the text after click', () => {
    // const data = {
    //   labelOn: 'On',
    //   labelOff: 'Off'
    // }

    const checkbox = shallow(<CheckboxWithLabel labelOn={ data.labelOn }
                                                labelOff={ data.labelOff } />)

    expect(checkbox.text()).toEqual('Off')

    checkbox.find('input').simulate('change')

    expect(checkbox.text()).toEqual('On')
  })
})


