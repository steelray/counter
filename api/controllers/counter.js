const Counter = require('../models/counter');
module.exports.counter = (req, res) => {

  const counter = new Counter();
  res.status(200).json({
    currentCount: counter.count,
    nextCount: counter.nextCount,
  });
}

module.exports.increment = (req, res) => {
  try {
    const counter = new Counter();
    const inc = req.body.inc
    if (inc) {
      counter.increment()
    }
    res.status(200).json({
      currentCount: counter.count,
      nextCount: counter.nextCount,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Bad request'
    })
  }

}