const AWS = require('aws-sdk');
const dotenv = require('dotenv');

module.exports = () => {
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

  return new AWS.DynamoDB.DocumentClient();
}
