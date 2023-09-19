const AWS = require('aws-sdk')
const s3config = {
    s3ForcePathStyle: true
}

const S3 = new AWS.S3()

module.exports = {S3}