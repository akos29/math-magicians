import React from 'react';
import TestRenderer from 'react-test-renderer';
import Quote from '../pages/Quote';

it('renders correctly', () => {
  const testRenderer = TestRenderer.create(<Quote />).toJSON();
  expect(testRenderer).toMatchSnapshot();
});
