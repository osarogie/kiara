import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Affix from 'components/TextField/affix';

/* eslint-env jest */

const props = {
  fontSize: 16,
  baseColor: 'blue',
  animationDuration: 225,
};

const prefix = 'a';
const suffix = 'z';

it('renders prefix', () => {
  let affix = renderer
    .create(<Affix type='prefix' {...props}>{prefix}</Affix>)
    .toJSON();

  expect(affix)
    .toMatchSnapshot();
});

it('renders suffix', () => {
  let affix = renderer
    .create(<Affix type='suffix' {...props}>{suffix}</Affix>)
    .toJSON();

  expect(affix)
    .toMatchSnapshot();
});
