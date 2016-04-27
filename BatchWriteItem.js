/* https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#batchWriteItem-property */
/* ===================== BatchWriteItem ===================== */
var params = {
    RequestItems: { // A map of TableName to Put or Delete requests for that table
        table_name_1: [ // a list of Put or Delete requests for that table
            { // An example PutRequest
                PutRequest: {
                    Item: { // a map of attribute name to AttributeValue
                        attribute_name: attribute_value,
                        // attribute_value (string | number | boolean | null | Binary | DynamoDBSet | Array | Object)
                        // ... more attributes ...
                    }
                }
            },
            { // An example DeleteRequest
                DeleteRequest: {
                    Key: {
                        key_attribute_name: attribute_value, //(string | number | boolean | null | Binary)
                        // more primary attributes (if the primary key is hash/range schema)
                    }
                }
            },
            // ... more put or delete requests ...
        ],
        // ... more tables ...
    },
    ReturnConsumedCapacity: 'NONE', // optional (NONE | TOTAL | INDEXES)
    ReturnItemCollectionMetrics: 'NONE', // optional (NONE | SIZE)
};
dynamodb.batchWriteItem(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else console.log(data); // successful response
});
