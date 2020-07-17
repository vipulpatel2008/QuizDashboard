import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Button from '../index';

const Icon = () => <Icon />;
let props;

describe('<Button />', () => {
  beforeEach(() => {
    props = {
      disabled: true,
      styles: { display: 'block' },
    };
  });

  it('should render Button with text', () => {
    const wrapper = mount(<Button>My Button</Button>);
    expect(wrapper.contains("My Button")).toEqual(true);
  });

  it('renders with Router Link', () => {
    const wrapper = mount(<Router><Button to="/custom-path" /></Router>);
    expect(wrapper.find('a[href="/custom-path"]')).toHaveLength(1);
  });

  it('should handle a click event', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Button onClick={onClick} />);
    wrapper.find(Button).simulate('click');
    expect(onClick).toBeCalled();
  });

  it('includes the other props', () => {
    const wrapper = mount(<Button {...props} />);
    expect(wrapper.prop('outline')).toEqual(props.outline);
    expect(wrapper.prop('styles')).toEqual(props.styles);
  });
});
