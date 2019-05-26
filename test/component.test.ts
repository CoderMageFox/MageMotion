import Component, {scopedClasses} from '../lib/component';

describe('Component', () => {
  it('exist', () => {
    expect(Component).toBeTruthy();
  });
  describe('scopedClass', () => {
    it('string', () => {
      const context = {constructor: {name: 'button'}};
      expect(scopedClasses.call(context, 'a')).toBe('react98-button-a');
      expect(scopedClasses.call(context, 'a', 'b')).toBe('react98-button-a react98-button-b');
      expect(scopedClasses.call(context, ['a', 'b'])).toBe('react98-button-a react98-button-b');
      expect(scopedClasses.call(context, {a: true, b: true})).toBe('react98-button-a react98-button-b');
      expect(scopedClasses.call(context, {a: true, b: false})).toBe('react98-button-a');
      expect(scopedClasses.call(context)).toBe('react98-button');
    });
  });
});
