import React from 'react';
import TestRenderer from 'react-test-renderer';
import Home from '../pages/Home';

it('renders correctly', () => {
  const testRenderer = TestRenderer.create(<Home />).toJSON();
  expect(testRenderer).toMatchSnapshot();
});
