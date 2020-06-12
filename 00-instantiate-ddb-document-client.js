// Item
// {
//   "Name": "Fabricio Quagliariello",
//   "pk": "fabricio.quagliariello@whiteprompt.com"
// }

const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

const {
  AWS_DEFAULT_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY
} = process.env;

AWS.config.update({
  region: AWS_DEFAULT_REGION,
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY
});

const documentClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'lightning',
  Key: {
    pk: 'fabricio.quagliariello@whiteprompt.com'
  }
}


documentClient.get(params, (err, data) => {
  if (err) {
    console.log('Error!', err);
  } else {
    console.log(data);
  }
})
