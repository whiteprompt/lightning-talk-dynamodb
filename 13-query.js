// Item
// {
//   "pk": "user#1",
//   "sk": "todo#1",
//   "data": {
//   "Text": "Delete an Item",
//     "Done": false
// }
// }
const boostrapDB = require('./src/boostrap');
const documentClient = boostrapDB();

const table = 'lightning-composite';

const params = {
  TableName: 'lightning-composite',
  KeyConditionExpression: 'pk = :pk',
  ExpressionAttributeValues: {
    ':pk': 'user#2'
  },
  ReturnConsumedCapacity: 'TOTAL'
};

documentClient.query(params).promise(); //?
