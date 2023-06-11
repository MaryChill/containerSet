export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(name) {
    this.members.forEach((item) => {
      if (item === name) {
        throw new Error('Объект уже существует в команде');
      }
    });
    this.members.add(name);
  }

  addAll(...name) {
    name.forEach((item) => { this.add(item); });
  }

  toArray() {
    return Array.from(this.members);
  }
}
