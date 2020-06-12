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
      Delete: {
        TableName: table,
        Key: { pk: 'user#1', sk: 'todo#1' }
      }
    },
    {
      Put: {
        TableName: table,
        Item: {
          pk: 'user#1',
          sk: 'todo#4',
          data: {
            Text: 'present the lightning talk',
            Done: false
          }
        }
      }
    },
    {
      Update: {
        TableName: table,
        Key: {
          pk: 'user#1',
          sk: 'todo#2'
        },
        UpdateExpression: 'SET #data.#text = :text, #data.#done = :true',
        ExpressionAttributeNames: {
          '#data': 'data',
          '#text': 'Text',
          '#done': 'Done'
        },
        ExpressionAttributeValues: {
          ':text': 'perform a transaction write',
          ':true': true,
        }
      }
    }
  ]
};

documentClient.transactWrite(params).promise(); //?
