import Team from '../team';

test('should add character to team', () => {
  const newTeam = new Team();
  newTeam.add('bowman');
  const members = newTeam.members.values().next().value;
  expect(members).toBe('bowman');
});
test('should add twice character to team', () => {
  const newTeam = new Team();
  newTeam.add('bowman');
  expect(() => {
    newTeam.add('bowman');
  }).toThrow('Такой объект уже существует в команде');
});
test('should add some characters to the team', () => {
  const newTeam = new Team();
  newTeam.addAll('bowman', 'swordsman', 'magician', 'zombie', 'undead');
  expect(newTeam.members.size).toEqual(5);
});
test('should converting a Set to an array', () => {
  const newTeam = new Team();
  newTeam.addAll('bowman', 'swordsman', 'magician', 'zombie', 'undead');
  const array = newTeam.toArray();
  expect(array).toEqual(['bowman', 'swordsman', 'magician', 'zombie', 'undead']);
});
