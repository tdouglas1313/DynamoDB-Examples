/* ===================== PutItem ===================== */
var params = {
    TableName: 'table_name',
    Item: { // a map of attribute name to AttributeValue

        attribute_name: attribute_value,
        // attribute_value (string | number | boolean | null | Binary | DynamoDBSet | Array | Object)
        // more attributes...
    },
    ConditionExpression: 'attribute_not_exists(attribute_name)', // optional String describing the constraint to be placed on an attribute
    ExpressionAttributeNames: { // a map of substitutions for attribute names with special characters
        //'#name': 'attribute name'
    },
    ExpressionAttributeValues: { // a map of substitutions for all attribute values
        //':value': 'VALUE'
    },
    ReturnValues: 'NONE', // optional (NONE | ALL_OLD)
    ReturnConsumedCapacity: 'NONE', // optional (NONE | TOTAL | INDEXES)
    ReturnItemCollectionMetrics: 'NONE', // optional (NONE | SIZE)
};
dynamodb.putItem(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else cosole.log(data); // successful response
});

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

/* ===================== DeleteItem ===================== */
var params = {
    TableName: 'table_name',
    Key: { // a map of attribute name to AttributeValue for all primary key attributes

        attribute_name: attribute_value,
        // attribute_value (string | number | boolean | null | Binary)
        // more attributes...

    },
    ConditionExpression: 'attribute_exists(attribute_name)', // optional String describing the constraint to be placed on an attribute
    ExpressionAttributeNames: { // a map of substitutions for attribute names with special characters
        //'#name': 'attribute name'
    },
    ExpressionAttributeValues: { // a map of substitutions for all attribute values
        //':value': 'VALUE'
    },
    ReturnValues: 'NONE', // optional (NONE | ALL_OLD)
    ReturnConsumedCapacity: 'NONE', // optional (NONE | TOTAL | INDEXES)
    ReturnItemCollectionMetrics: 'NONE', // optional (NONE | SIZE)
};
dynamodb.deleteItem(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else cosole.log(data); // successful response
});

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
    else cosole.log(data); // successful response
});

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
    else cosole.log(data); // successful response

});

/* ===================== Query ===================== */
var params = {
    TableName: 'table_name',
    IndexName: 'index_name', // optional (if querying an index)
    KeyConditionExpression: 'attribute_name = :value', // a string representing a constraint on the attribute
    FilterExpression: 'attr_name = :val', // a string representing a constraint on the attribute
    ExpressionAttributeNames: { // a map of substitutions for attribute names with special characters
        //'#name': 'attribute name'
    },
    ExpressionAttributeValues: { // a map of substitutions for all attribute values
      ':value': 'STRING_VALUE',
      ':val': 0
    },
    ScanIndexForward: true, // optional (true | false) defines direction of Query in the index
    Limit: 0, // optional (limit the number of items to evaluate)
    ConsistentRead: false, // optional (true | false)
    Select: 'ALL_ATTRIBUTES', // optional (ALL_ATTRIBUTES | ALL_PROJECTED_ATTRIBUTES |
                              //           SPECIFIC_ATTRIBUTES | COUNT)
    AttributesToGet: [ // optional (list of specific attribute names to return)
        'attribute_name',
        // ... more attributes ...
    ],
    ExclusiveStartKey: { // optional (for pagination, returned by prior calls as LastEvaluatedKey)
        attribute_name: attribute_value,
        // attribute_value (string | number | boolean | null | Binary | DynamoDBSet | Array | Object)
        // anotherKey: ...

    },
    ReturnConsumedCapacity: 'NONE', // optional (NONE | TOTAL | INDEXES)
};
dynamodb.query(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else cosole.log(data); // successful response
});

/* ===================== Scan ===================== */
var params = {
    TableName: 'table_name',
    Limit: 0, // optional (limit the number of items to evaluate)
    FilterExpression: 'attribute_name = :value', // a string representing a constraint on the attribute
    ExpressionAttributeNames: { // a map of substitutions for attribute names with special characters
        //'#name': 'attribute name'
    },
    ExpressionAttributeValues: { // a map of substitutions for all attribute values
        ':value': 'STRING_VALUE'
    },
    Select: 'ALL_ATTRIBUTES', // optional (ALL_ATTRIBUTES | ALL_PROJECTED_ATTRIBUTES |
                              //           SPECIFIC_ATTRIBUTES | COUNT)
    AttributesToGet: [ // optional (list of specific attribute names to return)
        'attribute_name',
        // ... more attributes ...
    ],
    ConsistentRead: false, // optional (true | false)
    Segment: 0, // optional (for parallel scan)
    TotalSegments: 0, // optional (for parallel scan)
    ExclusiveStartKey: { // optional (for pagination, returned by prior calls as LastEvaluatedKey)
        attribute_name: attribute_value,
        // attribute_value (string | number | boolean | null | Binary | DynamoDBSet | Array | Object)
        // anotherKey: ...
    },
    ReturnConsumedCapacity: 'NONE', // optional (NONE | TOTAL | INDEXES)
};
dynamodb.scan(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else cosole.log(data); // successful response
});

/* ===================== CreateTable ===================== */
var params = {
    TableName: 'table_name',
    KeySchema: [ // The type of of schema.  Must start with a HASH type, with an optional second RANGE.
        { // Required HASH type attribute
            AttributeName: 'hash_key_attribute_name',
            KeyType: 'HASH',
        },
        { // Optional RANGE key type for HASH + RANGE tables
            AttributeName: 'range_key_attribute_name',
            KeyType: 'RANGE',
        }
    ],
    AttributeDefinitions: [ // The names and types of all primary and index key attributes only
        {
            AttributeName: 'hash_key_attribute_name',
            AttributeType: 'S', // (S | N | B) for string, number, binary
        },
        {
            AttributeName: 'range_key_attribute_name',
            AttributeType: 'S', // (S | N | B) for string, number, binary
        },
        {
            AttributeName: 'index_hash_key_attribute_name_1',
            AttributeType: 'S', // (S | N | B) for string, number, binary
        },
        {
            AttributeName: 'index_range_key_attribute_name_1',
            AttributeType: 'S', // (S | N | B) for string, number, binary
        },
        {
            AttributeName: 'index_range_key_attribute_name_2',
            AttributeType: 'S', // (S | N | B) for string, number, binary
        },

        // ... more attributes ...
    ],
    ProvisionedThroughput: { // required provisioned throughput for the table
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
    },
    GlobalSecondaryIndexes: [ // optional (list of GlobalSecondaryIndex)
        {
            IndexName: 'index_name_1',
            KeySchema: [
                { // Required HASH type attribute
                    AttributeName: 'index_hash_key_attribute_name_1',
                    KeyType: 'HASH',
                },
                { // Optional RANGE key type for HASH + RANGE secondary indexes
                    AttributeName: 'index_range_key_attribute_name_1',
                    KeyType: 'RANGE',
                }
            ],
            Projection: { // attributes to project into the index
                ProjectionType: 'INCLUDE', // (ALL | KEYS_ONLY | INCLUDE)
                NonKeyAttributes: [ // required / allowed only for INCLUDE
                    'attribute_name_1',
                    // ... more attribute names ...
                ],
            },
            ProvisionedThroughput: { // throughput to provision to the index
                ReadCapacityUnits: 1,
                WriteCapacityUnits: 1,
            },
        },
        // ... more global secondary indexes ...
    ],
    LocalSecondaryIndexes: [ // optional (list of LocalSecondaryIndex)
        {
            IndexName: 'index_name_2',
            KeySchema: [
                { // Required HASH type attribute - must match the table's HASH key attribute name
                    AttributeName: 'hash_key_attribute_name',
                    KeyType: 'HASH',
                },
                { // alternate RANGE key attribute for the secondary index
                    AttributeName: 'index_range_key_attribute_name_2',
                    KeyType: 'RANGE',
                }
            ],
            Projection: { // required
                ProjectionType: 'INCLUDE', // (ALL | KEYS_ONLY | INCLUDE)
                NonKeyAttributes: [ // required / allowed only for INCLUDE
                    'attribute_name_1',
                    // ... more attribute names ...
                ],
            },
        },
        // ... more local secondary indexes ...
    ],
};
dynamodb.createTable(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else cosole.log(data); // successful response

});

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

/* ===================== DeleteTable ===================== */
var params = {
    TableName: 'table_name',
};
dynamodb.deleteTable(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else cosole.log(data); // successful response
});

/* ===================== DescribeTable ===================== */
var params = {
    TableName: 'table_name',
};
dynamodb.describeTable(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else cosole.log(data); // successful response
});

/* ===================== ListTables ===================== */
var params = {
    ExclusiveStartTableName: 'table_name', // optional (for pagination, returned as LastEvaluatedTableName)
    Limit: 0, // optional (to further limit the number of table names returned per page)
};
dynamodb.listTables(params, function(err, data) {
    if (err) console.error(err); // an error occurred
    else cosole.log(data); // successful response
});

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
