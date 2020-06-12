const boostrapDB = require('./src/boostrap');
const documentClient = boostrapDB();

const params = {
  TableName: 'lightning-composite',
  Item: {
    pk: 'user#1',
    sk: 'meta',
    data: {
      Role: 'weekend coder',
      Name: 'Fabricio Quagliariello',
      Email: 'fabricio.quagliariello@whiteprompt.com'
    }
  },
  ConditionExpression: 'attribute_not_exists(#data.#role)',
  ExpressionAttributeNames: {
    '#data': 'data',
    '#role': 'Role'
  },
  ReturnValues: 'ALL_OLD',
  ReturnConsumedCapacity: 'INDEXES' // <---
}


documentClient.put(params).promise(); //?
// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html
