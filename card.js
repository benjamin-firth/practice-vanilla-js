class Card {
  constructor(name, grade, description) {
    this.id = Date.now();
    this.name = name;
    this.grade = grade;
    this.description = description;
  }
}