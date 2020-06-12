const boostrapDB = require('./src/boostrap');
const documentClient = boostrapDB();

const params = {
  TableName: 'lightning-schema-example',
  KeyConditionExpression: 'pk = :pk AND begins_with(sk, :sk)',
  ExpressionAttributeValues: {
    ':pk': 'COM#mZpM6bCy7aAbMwmvYvoDRW',
    ':sk': 'USR#',
  },
  ReturnConsumedCapacity: 'INDEXES'
}

documentClient.query(params).promise(); //?
