import React from 'react';
import Search from '../../src/search/Search'
import { mount } from 'enzyme'

describe('Search', () => {
  it('should render', () => {
    expect(mount(<Search/>)).toMatchSnapshot()
  })
})