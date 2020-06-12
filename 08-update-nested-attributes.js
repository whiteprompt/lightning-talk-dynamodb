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
  UpdateExpression: 'SET #data.Done = :true, #data.DoneAt = :DoneAt',
  ExpressionAttributeNames: {
    '#data': 'data'
  },
  ExpressionAttributeValues: {
    ':true': true,
    ':DoneAt': Date.now()
  }
}


documentClient.update(params).promise(); //?
