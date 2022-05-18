import Character from '../Character';

describe('should create an object Character or throw the error', () => {
  test('should create an object Character with the type Daemon', () => {
    const result = new Character('Nemo', 'Daemon');
    const expected = {
      name: 'Nemo',
      type: 'Daemon',
      health: 100,
      level: 1,
    };
    expect(result).toEqual(expected);
  });

  test('should throw error if the name of the object is not a string', () => {
    const expected = 'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов!';
    expect(() => new Character(22, 'Daemon')).toThrowError(expected);
  });

  test('should throw error if the name of the object is longer than 10 characters', () => {
    const expected = 'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов!';
    expect(() => new Character('DemonNewDemon', 'Daemon')).toThrowError(expected);
  });

  test('should throw error if the name of the object is less than 2 characters', () => {
    const expected = 'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов!';
    expect(() => new Character('N', 'Daemon')).toThrowError(expected);
  });

  test('should throw error if the hero type is wrong', () => {
    const expected = 'Ошибка! Такого героя нет!';
    expect(() => new Character('Nemo', 'Daemon2')).toThrowError(expected);
  });
});
