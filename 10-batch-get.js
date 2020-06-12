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
  RequestItems: {
    'lightning-composite': {
      Keys: [
        {pk: 'user#1', sk: 'todo#1'},
        {pk: 'user#1', sk: 'todo#2'},
        {pk: 'user#1', sk: 'todo#3'}
      ]
    }
  }
}


documentClient.batchGet(params).promise(); //?
