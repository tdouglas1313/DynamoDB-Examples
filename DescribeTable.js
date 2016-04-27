/* https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#describeTable-property */
/* ===================== DescribeTable ===================== */
var params = {
    TableName: 'table_name',
};
dynamodb.describeTable(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else console.log(data); // successful response
});
