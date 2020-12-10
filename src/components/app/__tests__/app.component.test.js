import React from 'react';
import App from '../component';
import {shallow} from "enzyme";

describe('App', () => {
  it('Рендеринг', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
