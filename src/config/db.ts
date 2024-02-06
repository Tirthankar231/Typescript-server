import AWS from 'aws-sdk';

const AWS_ACCESS_KEY_ID : string = 'access-ley-id'
const AWS_SECRET_ACCESS_KEY : string = 'secret-access-key'

AWS.config.update({
    region:'ap-south-1',
    accessKeyId:AWS_ACCESS_KEY_ID,
    secretAccessKey:AWS_SECRET_ACCESS_KEY
})

const db = new AWS.DynamoDB.DocumentClient()

const Tables = {  
    Items: 'Items'
};

export {
    db,
    Tables,
    AWS
}