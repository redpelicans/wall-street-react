var _ = require('lodash');
var faker = require('faker');

module.exports = function() {
  var data = {};

  data.fofs = _.times(10, function(n) {
    return {
      id: n+1,
      label: faker.hacker.abbreviation(),
      currency: faker.finance.currencyCode()
    };
  });

  data.funds = _.times(10, function(n) {
    return {
      id: n+1,
      label: faker.company.companyName(),
      currency: faker.finance.currencyCode()
    };
  });

  data.deals = _.times(20, function(n) {
    var fof = data.fofs[_.random(0, data.fofs.length-1)];

    return {
      id: n+1,
      fofId: fof.id, // json-server
      fof: fof,
      fund: data.funds[_.random(0, data.funds.length-1)],
      amount: faker.finance.amount()
    };
  });

  return data;
};
