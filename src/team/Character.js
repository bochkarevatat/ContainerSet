export default class Character {
  constructor(name, type) {
    const heroTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if ((typeof name !== 'string') || (name.length < 2 || name.length > 10)) {
      throw new Error('Ошибка! Имя должно быть строкой длиной от 2 до 10 символов!');
    } else {
      this.name = name;
    }

    if (!heroTypes.includes(type)) {
      throw new Error('Ошибка! Такого героя нет!');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }
}
