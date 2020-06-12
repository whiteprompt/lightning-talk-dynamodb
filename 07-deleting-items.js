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

const params = {
  TableName: 'lightning-composite',
  Key: {
    pk: 'user#1',
    sk: 'todo#1',
  },
  ConditionExpression: 'pk = :userId',
  ExpressionAttributeValues: {
    ':userId': 'user#6'
  }
}


documentClient.delete(params).promise(); //?
