/* https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#deleteTable-property */
/* ===================== DeleteTable ===================== */
var params = {
    TableName: 'table_name',
};
dynamodb.deleteTable(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else cosole.log(data); // successful response
});
