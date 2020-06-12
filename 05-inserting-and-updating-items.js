const boostrapDB = require('./src/boostrap');
const documentClient = boostrapDB();

const params = {
  TableName: 'lightning-composite',
  Item: {
    pk: 'user#1',
    sk: 'meta',
    data: {
      Name: 'Fabricio Quagliariello',
      Email: 'fabricio.quagliariello@whiteprompt.com'
    }
  },
  ReturnValues: 'ALL_OLD',
  ReturnConsumedCapacity: 'TOTAL'
}


documentClient.put(params).promise(); //?
