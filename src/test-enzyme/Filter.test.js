import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import sinon from 'sinon';

import Filters from '../Filters.js';

describe ('<Filters />', () => {
  it('renders Home without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Filters />, div);
  });

  it('renders a form', () => {
    const wrapper = shallow(<Filters />);
    expect(wrapper.find({type: 'form'})).to.have.length(1);
  });


  it('clicks on the X checkbox', () => {
    const wrapper = shallow(<Filters />);
    let checkbox = wrapper.find({type: 'checkbox', name: 'xOnly'});

    expect(wrapper.props().xOnly).toBe('0');
    checkbox.simulate('click');
    expect(wrapper.props().xOnly).toBe('1');
  });
});
