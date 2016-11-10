var messages = require('./messages');
module.exports = [
  {
    email: 'user1@example.com',
    firstname: 'Firstname1',
    delivery: {
      time: '16:44',
      method: 'slack',
      address: '#hwyd1'
    },
    kids: [
      {
        name: 'Child1',
        teacherid: 1
      },
      {
        name: 'Child1.5',
        teacherid: 4
      }
    ]
  }, {
    email: 'user2@example.com',
    firstname: 'Firstname2',
    delivery: {
      time: '16:45',
      method: 'slack',
      address: '#hwyd2'
    },
    kids: [
      {
        name: 'Child2',
        teacherid: 2
      }
    ]
  }, {
    email: 'user3@example.com',
    firstname: 'Firstname3',
    delivery: {
      time: '16:44',
      method: 'slack',
      address: '#hwyd3'
    },
    kids: [
      {
        name: 'Child3',
        teacherid: 3
      }
    ]
  }, {
    email: 'user4@example.com',
    firstname: 'Firstname4',
    delivery: {
      time: '16:44',
      method: 'slack',
      address: '#hwyd4'
    },
    kids: [
      {
        name: 'Child4',
        teacherid: 4
      }
    ]
  }
];
