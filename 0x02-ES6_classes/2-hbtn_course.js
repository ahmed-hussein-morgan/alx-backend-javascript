class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    }

    if (typeof name === 'number') {
      this._length = length;
    }
    if (typeof name === 'number') {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}
