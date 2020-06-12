const boostrapDB = require('./src/boostrap');
const documentClient = boostrapDB();

const params = {
  RequestItems: {
    'lightning-schema-example': [
      {
        PutRequest: {
          Item: {
            pk: 'COM#mZpM6bCy7aAbMwmvYvoDRW',
            sk: 'COM',
            Id: 'mZpM6bCy7aAbMwmvYvoDRW',
            Name: 'Apple',
            Entity: 'Company'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'COM#gPo7rJX8Ha9g1gH1GmuGsL',
            sk: 'COM',
            Id: 'gPo7rJX8Ha9g1gH1GmuGsL',
            Name: 'Microsoft',
            Entity: 'Company'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'COM#gPo7rJX8Ha9g1gH1GmuGsL',
            sk: 'USR#uqVyDETrh9FPFSUPKrHg1j',
            Id: 'uqVyDETrh9FPFSUPKrHg1j',
            Name: 'Bill Gates',
            Entity: 'User'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'COM#gPo7rJX8Ha9g1gH1GmuGsL',
            sk: 'USR#mfy65swyM4U47CwBBhbBH5',
            Id: 'mfy65swyM4U47CwBBhbBH5',
            Name: 'Satya Nadella',
            Entity: 'User'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'COM#mZpM6bCy7aAbMwmvYvoDRW',
            sk: 'USR#uqVyDETrh9FPFSUPKrHg1j',
            Id: 'uqVyDETrh9FPFSUPKrHg1j',
            Name: 'Steve Jobs',
            Entity: 'User'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'COM#mZpM6bCy7aAbMwmvYvoDRW',
            sk: 'USR#rN69C4MoUfdzNmytkHvmC8',
            Id: 'rN69C4MoUfdzNmytkHvmC8',
            Name: 'Tim Cook',
            Entity: 'User'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'COM#mZpM6bCy7aAbMwmvYvoDRW',
            sk: 'GRP#public#nHDhFfcatMWNwB6G2pFmSi',
            Id: 'nHDhFfcatMWNwB6G2pFmSi',
            Name: 'All employees',
            Type: 'public',
            Entity: 'Group'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'COM#mZpM6bCy7aAbMwmvYvoDRW',
            sk: 'GRP#private#pnkSPw1SDNbw9qH8u9djxf',
            Id: 'pnkSPw1SDNbw9qH8u9djxf',
            Name: 'Hackers',
            Type: 'private',
            Entity: 'Group'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'COM#gPo7rJX8Ha9g1gH1GmuGsL',
            sk: 'GRP#public#gXv97yf9hVzwePZTHR7Grx',
            Id: 'gXv97yf9hVzwePZTHR7Grx',
            Name: 'Running team',
            Type: 'public',
            Entity: 'Group'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'COM#gPo7rJX8Ha9g1gH1GmuGsL',
            sk: 'GRP#private#7kXB5s4NwcMBNXw8VauR3p',
            Id: '7kXB5s4NwcMBNXw8VauR3p',
            Name: 'Illuminati',
            Type: 'private',
            Entity: 'Group'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'GRP#nHDhFfcatMWNwB6G2pFmSi',
            sk: 'USR#uqVyDETrh9FPFSUPKrHg1j',
            User: 'Steve Jobs',
            Group: 'All employees',
            Entity: 'GroupUser'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'GRP#nHDhFfcatMWNwB6G2pFmSi',
            sk: 'USR#rN69C4MoUfdzNmytkHvmC8',
            User: 'Tim Cook',
            Group: 'All employees',
            Entity: 'GroupUser'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'GRP#pnkSPw1SDNbw9qH8u9djxf',
            sk: 'USR#uqVyDETrh9FPFSUPKrHg1j',
            User: 'Steve Jobs',
            Group: 'Hackers',
            Entity: 'GroupUser'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'GRP#gXv97yf9hVzwePZTHR7Grx',
            sk: 'USR#uqVyDETrh9FPFSUPKrHg1j',
            User: 'Bill Gates',
            Group: 'Running team',
            Entity: 'GroupUser'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'GRP#gXv97yf9hVzwePZTHR7Grx',
            sk: 'USR#mfy65swyM4U47CwBBhbBH5',
            User: 'Satya Nadella',
            Group: 'Running team',
            Entity: 'GroupUser'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'GRP#7kXB5s4NwcMBNXw8VauR3p',
            sk: 'USR#uqVyDETrh9FPFSUPKrHg1j',
            User: 'Bill Gates',
            Group: 'Illuminati',
            Entity: 'GroupUser'
          }
        }
      }
    ]
  }
}

documentClient.batchWrite(params).promise(); //?
