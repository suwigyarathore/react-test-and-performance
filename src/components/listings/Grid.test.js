import data from '../../data/courses.json';

const numItems = data.length;

test('Number of items = 12', () => {
  expect(numItems).toBe(12);
});

test('Number of items > 12', () => {
  expect(numItems).toBeGreaterThan(12);
});
