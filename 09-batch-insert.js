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
    'lightning-composite': [
      {
        PutRequest: {
          Item: {
            pk: 'user#1',
            sk: 'todo#2',
            data: {
              Text: 'Insert in batches',
              Done: false
            }
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'user#1',
            sk: 'todo#3',
            data: {
              Text: 'Insert in batches',
              Done: false
            }
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'user#2',
            sk: 'meta',
            data: {
              Email: 'nacho@whiteprompt.com',
              Name: 'Nacho Cidre',
              Role: 'CEO and CTO'
            }
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'user#2',
            sk: 'todo#4',
            data: {
              Text: 'Pay AWS Bill',
              Done: false
            }
          }
        }
      },
      {
        PutRequest: {
          Item: {
            pk: 'user#2',
            sk: 'todo#5',
            data: {
              Text: 'Sell new project',
              Done: false
            }
          }
        }
      }
    ]
  }
}


documentClient.batchWrite(params).promise(); //?
