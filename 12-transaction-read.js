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
  TransactItems: [
    {
      Get: {
        TableName: table,
        Key: {
          pk: 'user#1',
          sk: 'todo#1'
        }
      }
    },
    {
      Get: {
        TableName: table,
        Key: {
          pk: 'user#1',
          sk: 'todo#2'
        }
      }
    },
    {
      Get: {
        TableName: table,
        Key: {
          pk: 'user#1',
          sk: 'todo#3'
        }
      }
    }
  ]
};

documentClient.transactGet(params).promise(); //?
