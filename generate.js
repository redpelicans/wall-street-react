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

  data.deals = _.times(1000, function(n) {
    var fof = data.fofs[_.random(0, data.fofs.length-1)];
    var statuses = [
      'What-if',
      'Order pending',
      'Order confirmed',
      'Ticket pending',
      'Deal confirmed'
    ];

    return {
      id: n+1,
      fofId: fof.id, // json-server
      fof: fof,
      fund: data.funds[_.random(0, data.funds.length-1)],
      amount: faker.finance.amount(),
      tradingDate: faker.date.past(),
      noticeDate: faker.date.past(),
      priceDate: faker.date.past(),
      paymentDate: faker.date.past(),
      status: statuses[_.random(0, statuses.length-1)],
      trader: faker.name.findName()
    };
  });

  return data;
};
