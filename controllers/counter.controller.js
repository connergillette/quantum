const mongoose = require('mongoose');

const Target = require('../models/Target');

module.exports = {
  addClick: (res) => {
    Target.findOne({
      name: 'Opalescent Downloads'
    }).then((target) => {
      if (target) {
        target.clicks++;
        target.save().then(res.send('Click added: ' + target.clicks));
      } else {
        let newTarget = new Target();
        newTarget.clicks = 1;
        newTarget.name = 'Opalescent Downloads';
        newTarget.save().then(res.send('Target created, click added: ' + target.clicks));
      }
    });
  },

  readClick: (res) => {
    console.log('Reading click count...');
    Target.findOne({
      name: 'Opalescent Downloads'
    }).then((target) => {
      console.log('findOne complete');
      if (target) {
        res.send("" + target.clicks);
      } else {
        res.send('0');
      }
    });
  }
};