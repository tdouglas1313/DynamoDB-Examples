/* https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#batchGetItem-property */
/* ===================== BatchGetItem ===================== */
var params = {
    RequestItems: { // map of TableName to list of Key to get from each table
        table_name_1: {
            Keys: [ // a list of primary key value maps
                {
                    key_attribute_name: attribute_value, //(string | number | boolean | null | Binary)
                    // ... more key attributes, if the primary key is hash/range
                },
                // ... more keys to get from this table ...
            ],
            AttributesToGet: [ // option (attributes to retrieve from this table)
                'attribute_name',
                // ... more attribute names ...
            ],
            ConsistentRead: false, // optional (true | false)
        },
        // ... more tables and keys ...
    },
    ReturnConsumedCapacity: 'NONE', // optional (NONE | TOTAL | INDEXES)
};
dynamodb.batchGetItem(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else console.log(data); // successful response

});
