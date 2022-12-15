import React from 'react';
import TestRenderer from 'react-test-renderer';
import Math from '../pages/Math';

it('renders correctly', () => {
  const testRenderer = TestRenderer.create(<Math />).toJSON();
  expect(testRenderer).toMatchSnapshot();
});
