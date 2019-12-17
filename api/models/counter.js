const editJsonFile = require('edit-json-file');

class Counter {
  constructor() {
    this.file = editJsonFile(`${__dirname}/../counter.json`);
  }

  get count() {
    return this.file.get('count');
  }

  get nextCount() {
    return this.count * 2 || 1;
  }

  increment() {
    this.file.set('count', this.nextCount);
    this.file.save();
    // console.log(this.file);
    this.file = editJsonFile(`${__dirname}/../counter.json`, {
      autosave: true
    });
  }
}

module.exports = Counter;