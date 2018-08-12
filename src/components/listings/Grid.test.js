import data from '../../data/courses.json';

const numItems = data.length;

test('Number of items = 12', () => {
  expect(numItems).toBe(12);
});

test('Number of items > 12', () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = data[0].title;

test('There is JS in the title', () => {
  expect(dataTest).toMatch(/JS/);
});

test('The title contains react', () => {
  expect(dataTest).toContain('React');
});
