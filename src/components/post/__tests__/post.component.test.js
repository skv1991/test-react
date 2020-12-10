import React from 'react';
import Post from '../component';
import {shallow} from "enzyme";

describe('Post', () => {
  it('Рендеринг', () => {
    expect(shallow(<Post title="Заголовок" text="Текст" />)).toMatchSnapshot();
  });
});
