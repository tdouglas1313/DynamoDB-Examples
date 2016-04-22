/* https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#updateTable-property */
/* ===================== UpdateTable ===================== */
var params = {
    TableName: 'table_name',
    GlobalSecondaryIndexUpdates: [{ // optional
            Update: {
                IndexName: 'index_name',
                ProvisionedThroughput: {
                    ReadCapacityUnits: 0,
                    WriteCapacityUnits: 0,
                },
            },
        },
        // ... more optional indexes ...
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 0,
        WriteCapacityUnits: 0,
    },
};
dynamodb.updateTable(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else cosole.log(data); // successful response
});
