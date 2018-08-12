import data from '../../data/courses.json';

const numItems = data.length;

describe('Numbers', () => {
  // Number Testing
  test('Number of items = 12', () => {
    expect(numItems).toBe(12);
  });

  test('Number of items > 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

describe('Strings', () => {
  // String Testing
  const dataTest = data[0].title;

  test('There is JS in the title', () => {
    expect(dataTest).toMatch(/JS/);
  });

  test('The title contains react', () => {
    expect(dataTest).toContain('React');
  });
});


describe('Array testing', () => {
  // Array Testing
  const data2 = ['React Native', 'Meteor JS'];

  test('list of course contains listed courses', () => {
    expect(['React Native', 'Meteor JS', 'React']).toEqual(expect.arrayContaining(data2));
  });
});

describe('Object testing', () => {
  // Object Testing

  test('The first course to have property title', () => {
    expect(data[0]).toHaveProperty('title');
  });

  test('The first course to have property views having specified value', () => {
    expect(data[0]).toHaveProperty('views', 31, 266);
  });
});
