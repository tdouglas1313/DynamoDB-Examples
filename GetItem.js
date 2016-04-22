/* https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#getItem-property */
/* ===================== GetItem ===================== */
var params = {
    TableName: 'table_name',
    Key: { // a map of attribute name to AttributeValue for all primary key attributes

        attribute_name: attribute_value, //(string | number | boolean | null | Binary)
        // more attributes...

    },
    AttributesToGet: [ // optional (list of specific attribute names to return)
        'attribute_name',
        // ... more attribute names ...
    ],
    ConsistentRead: false, // optional (true | false)
    ReturnConsumedCapacity: 'NONE', // optional (NONE | TOTAL | INDEXES)
};
dynamodb.getItem(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else cosole.log(data); // successful response
});
