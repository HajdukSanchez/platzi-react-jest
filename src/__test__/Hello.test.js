// We import React inside the test project for mounting the component
import React from 'react'
import Hello from '../components/Hello'

import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('React tests', () => {
  test('should text displayed by props', () => {
    // This const works as a simulated prop pass to the component.
    const data = { title: 'This is a prop' }
    // This mount a element singularly and we can use them for testing
    const wrapper = mount(<Hello title={data.title} />)
    // We search the h1 tag created in the component
    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('This is a prop')
  })
})
