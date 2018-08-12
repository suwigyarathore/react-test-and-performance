import React from 'react';
import renderer from 'react-test-renderer';
import Single from './Single';

describe('Single Snapshot', () => {
  test('renders without crashing', () => {
    const component = renderer.create(<Single />)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
