import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('Should correctly render login page', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly call startGoogleLogin on button click', () => {
    const startGoogleLogin = jest.fn();
    const wrapper = shallow(<LoginPage startGoogleLogin={startGoogleLogin} />);
    wrapper.find('.google').simulate('click');
    expect(startGoogleLogin).toHaveBeenCalled();
});

test('Should correctly call startFbLogin on button click', () => {
    const startFbLogin = jest.fn();
    const wrapper = shallow(<LoginPage startFbLogin={startFbLogin} />);
    wrapper.find('.fb').simulate('click');
    expect(startFbLogin).toHaveBeenCalled();
});