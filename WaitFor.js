/* https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#waitFor-property */
/* ===================== WaitFor ===================== */
// Waits for tables to be come ACTIVE.
// Useful for waiting for table operations like CreateTable to complete.
var params = {
    TableName: 'table_name',
};
// Supports 'tableExists' and 'tableNotExists'
dynamodb.waitFor('tableExists', params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else cosole.log(data); // successful response
});
