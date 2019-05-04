import React from 'react';
import Button from '../button';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Button label='Cute button!' />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
