/* https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#updateItem-property */
/* ===================== UpdateItem ===================== */
var params = {
    TableName: 'table_name',
    Key: { // The primary key of the item (a map of attribute name to AttributeValue)

        attribute_name: attribute_value, //(string | number | boolean | null | Binary)
        // more attributes...
    },
    UpdateExpression: 'SET attribute_name :value', // String representation of the update to an attribute
        // SET set-action , ...
        // REMOVE remove-action , ...  (for document support)
        // ADD add-action , ...
        // DELETE delete-action , ...  (previous DELETE equivalent)
    ConditionExpression: 'attribute_exists(attribute_name)', // optional String describing the constraint to be placed on an attribute
    ExpressionAttributeNames: { // a map of substitutions for attribute names with special characters
        //'#name': 'attribute name'
    },
    ExpressionAttributeValues: { // a map of substitutions for all attribute values
        ':value': 'VALUE'
    },
    ReturnValues: 'NONE', // optional (NONE | ALL_OLD | UPDATED_OLD | ALL_NEW | UPDATED_NEW)
    ReturnConsumedCapacity: 'NONE', // optional (NONE | TOTAL | INDEXES)
    ReturnItemCollectionMetrics: 'NONE', // optional (NONE | SIZE)
};
dynamodb.updateItem(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else cosole.log(data); // successful response
});
