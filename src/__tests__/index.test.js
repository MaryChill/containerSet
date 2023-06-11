import Team from '../Team';

test('Add hero first time', () => {
  const team = new Team();
  team.add('swordsman');
  expect(team.toArray()).toEqual(['swordsman']);
});

test('Add hero second time', () => {
  const team = new Team();
  team.add('swordsman');
  expect(() => team.add('swordsman')).toThrow('Объект уже существует в команде');
});

test('Add all heroes', () => {
  const team = new Team();
  team.addAll('swordsman', 'deamon', 'bowman');
  expect(team.toArray()).toEqual(['swordsman', 'deamon', 'bowman']);
});

test('Add all heroes double', () => {
  const team = new Team();
  expect(() => team.addAll('swordsman', 'deamon', 'bowman', 'swordsman')).toThrow();
});
