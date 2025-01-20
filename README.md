# Solace Data Generator
This repo is an npm package used to generate random payloads and topics. The following two functions are exposed:

## Installation and Usage
```
npm install @solace-labs/solace-data-generator
```

```
import { generateEvent } from '@solace-labs/solace-data-generator';
const { payload, topic } = generateEvent(event);
```

### generateEvent(event)
This method generates a random payload and topic given an event definition object

## Event definition format
Event definitions is in the following format: 

```
{
    "topic": "level_1/level_2/{variable_1}/{variable_2}",
    "eventName": "Event_Name",
    "eventVersion": "Event_Version",
    "messageName": "Message_Name",
    "topicParameters": {
        "Variable_1": {
            "schema": {
                "type": "string"
            },
            "rule": {
                "name": "Variable_1",
                "type": "string",
                "group": "StringRules",
                "rule": "alpha",
                "casing": "mixed",
                "minLength": 10,
                "maxLength": 10
            }
        },
        "Variable_2": {
            "schema": {
                "type": "string"
            },
            "rule": {
                "name": "Variable_2",
                "type": "string",
                "group": "StringRules",
                "rule": "alpha",
                "casing": "mixed",
                "minLength": 10,
                "maxLength": 10
            }
        },
    },
    "payload": {
        "Element_1": {
            "type": "string",
            "enum": [
                "ONLINE",
                "IN STORE",
                "VENDING MACHINE"
            ],
            "rule": {
                "type": "string",
                "enum": [
                    "ONLINE",
                    "IN STORE",
                    "VENDING MACHINE"
                ],
                "name": "CHANNEL",
                "group": "StringRules",
                "rule": "enum"
            }
        },
    },
    "mappings": [
        {
            "type": "Topic Parameter",
            "source": {
                "type": "Payload Parameter",
                "name": "Variable_1",
                "fieldName": "Variable_1",
                "fieldType": "string"
            },
            "target": {
                "type": "Topic Parameter",
                "name": "Element_1",
                "fieldName": "Element_1",
                "fieldType": "string"
            }
        },
    ]
}
```

## Examples

For example usage, run the example as follows

```
npm i 
cd examples
node index.js
```
