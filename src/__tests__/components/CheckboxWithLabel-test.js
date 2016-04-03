jest.unmock('../../components/CheckboxWithLabel')

import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
// import ReactDOM from 'react-dom'
// import TestUtils from 'react-addons-test-utils'
import CheckboxWithLabel from '../../components/CheckboxWithLabel'

describe('CheckboxWithLabel', () => {
  it('changes the text after click', () => {
    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />)

    expect(checkbox.text()).toEqual('Off')




    // const checkbox = TestUtils.renderIntoDocument(
    //   <CheckboxWithLabel labelOn="On" labelOff="Off" />
    // )
    //
    // const checkboxNode = ReactDOM.findDOMNode(checkbox)
    //
    // expect(checkboxNode.textContent).toEqual('Off')
    //
    // TestUtils.Simulate.change(
    //   TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    // )
    //
    // expect(checkboxNode.textContent).toEqual('On')
  })
})
