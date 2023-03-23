const AWS = require('aws-sdk'),
    region = 'us-east-1';

AWS.config.update({
    region: region
})
const s3 = new AWS.S3();

exports.handler = async (event) => {
    // TODO implement
    const {
        body
    } = event;

    const {
        file,
        bucket
    } = JSON.parse(body);

    const {
        name,
        format,
        content
    } = file;

    const {
        bucketName,
        folder
    } = bucket;

    let fileUrl = await saveFileS3(name, content, format, folder, bucketName);

    const response = {
        statusCode: 200,
        body: JSON.stringify({fileUrl}),
    };

    return response;
};

async function saveFileS3(name, content, format, folder, bucketName) {
    const file = `${folder}/${name}.${format}`;
    let result, url, dataOriginal;

    dataOriginal = Buffer.from(content, 'base64');

    try {
        result = await s3.putObject({
            Bucket: bucketName,
            Key: file,
            Body: dataOriginal
        }).promise();

        url = setFileURL(bucketName, file);
        return url

    } catch (error) {
        throw new Error(`Error in s3: ${error}`);
    }
}

function setFileURL(bucketName, file) {
    return `https://${bucketName}.s3.${region}.amazonaws.com/${file}`;
}