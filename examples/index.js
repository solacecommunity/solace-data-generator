import { generateEventAndTopic } from '../index.js';

const data =  {
  "topic": "sap/erp/businesspartner/create/V1/{businessPartnerType}/{partnerId}",
  "topicParameters": {
    "partnerId": {
      "schema": {
        "type": "string"
      },
      "rule": {
        "name": "partnerId",
        "type": "string",
        "group": "StringRules",
        "rule": "alpha",
        "casing": "mixed",
        "minLength": 10,
        "maxLength": 10
      }
    },
    "businessPartnerType": {
      "schema": {
        "type": "string"
      },
      "rule": {
        "name": "businessPartnerType",
        "type": "string",
        "group": "StringRules",
        "rule": "enum",
        "enum": [
          "PARTNER1",
          "PARTNER2",
          "PRTNER3"
        ]
      }
    }
  },
  "eventName": "Business Partner Create",
  "eventVersion": "0.1.0",
  "messageName": "Business_Partner_Create",
  "hasPayload": true,
  "payload": {
    "businessPartner": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "firstName": {
            "type": "string",
            "rule": {
              "name": "firstName",
              "type": "string",
              "group": "StringRules",
              "rule": "alpha",
              "casing": "mixed",
              "minLength": 10,
              "maxLength": 10
            }
          },
          "lastName": {
            "type": "string",
            "rule": {
              "name": "lastName",
              "type": "string",
              "group": "StringRules",
              "rule": "alpha",
              "casing": "mixed",
              "minLength": 10,
              "maxLength": 10
            }
          },
          "addressLink": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "address": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "country": {
                        "type": "string",
                        "rule": {
                          "name": "country",
                          "type": "string",
                          "group": "StringRules",
                          "rule": "alpha",
                          "casing": "mixed",
                          "minLength": 10,
                          "maxLength": 10
                        }
                      },
                      "nation": {
                        "type": "string",
                        "rule": {
                          "name": "nation",
                          "type": "string",
                          "group": "StringRules",
                          "rule": "alpha",
                          "casing": "mixed",
                          "minLength": 10,
                          "maxLength": 10
                        }
                      },
                      "city": {
                        "type": "string",
                        "rule": {
                          "name": "city",
                          "type": "string",
                          "group": "StringRules",
                          "rule": "alpha",
                          "casing": "mixed",
                          "minLength": 10,
                          "maxLength": 10
                        }
                      },
                      "street": {
                        "type": "string",
                        "rule": {
                          "name": "street",
                          "type": "string",
                          "group": "StringRules",
                          "rule": "alpha",
                          "casing": "mixed",
                          "minLength": 10,
                          "maxLength": 10
                        }
                      },
                      "postalCode": {
                        "type": "string",
                        "rule": {
                          "name": "postalCode",
                          "type": "string",
                          "group": "StringRules",
                          "rule": "alpha",
                          "casing": "mixed",
                          "minLength": 10,
                          "maxLength": 10
                        }
                      },
                      "houseNumber": {
                        "type": "string",
                        "rule": {
                          "name": "houseNumber",
                          "type": "string",
                          "group": "StringRules",
                          "rule": "alpha",
                          "casing": "mixed",
                          "minLength": 10,
                          "maxLength": 10
                        }
                      }
                    }
                  },
                  "subType": "object",
                  "name": "address",
                  "rule": {
                    "name": "address",
                    "type": "object"
                  }
                },
                "addressNumber": {
                  "type": "string",
                  "rule": {
                    "name": "addressNumber",
                    "type": "string",
                    "group": "StringRules",
                    "rule": "alpha",
                    "casing": "mixed",
                    "minLength": 10,
                    "maxLength": 10
                  }
                },
                "dateFrom": {
                  "type": "number",
                  "rule": {
                    "name": "dateFrom",
                    "type": "number",
                    "group": "NumberRules",
                    "rule": "float",
                    "minimum": 0,
                    "maximum": 1000,
                    "fractionDigits": 2
                  }
                }
              }
            },
            "subType": "object",
            "name": "addressLink",
            "rule": {
              "name": "addressLink",
              "type": "object"
            }
          },
          "partnerId": {
            "type": "string",
            "rule": {
              "name": "partnerId",
              "type": "string",
              "group": "StringRules",
              "rule": "alpha",
              "casing": "mixed",
              "minLength": 10,
              "maxLength": 10
            }
          },
          "businessPartnerType": {
            "type": "string",
            "rule": {
              "name": "businessPartnerType",
              "type": "string",
              "group": "StringRules",
              "rule": "alpha",
              "casing": "mixed",
              "minLength": 10,
              "maxLength": 10
            }
          }
        }
      },
      "subType": "object",
      "name": "businessPartner",
      "rule": {
        "name": "businessPartner",
        "type": "object"
      }
    }
  },
  "publishSettings": {
    "count": 0,
    "interval": 1000,
    "delay": 0
  },
  "mappings": [
    {
      "type": "Payload Parameter",
      "source": {
        "type": "Topic Parameter",
        "name": "partnerId",
        "fieldName": "partnerId",
        "fieldType": "string"
      },
      "target": {
        "type": "Payload Parameter",
        "name": "businessPartner[0].partnerId",
        "fieldName": "partnerId",
        "fieldType": "string"
      }
    },
    {
      "type": "Payload Parameter",
      "source": {
        "type": "Payload Parameter",
        "name": "businessPartner[0].addressLink[0].address[0].nation",
        "fieldName": "nation",
        "fieldType": "string"
      },
      "target": {
        "type": "Payload Parameter",
        "name": "businessPartner[0].addressLink[0].address[0].country",
        "fieldName": "country",
        "fieldType": "string"
      }
    },
    {
      "type": "Topic Parameter",
      "source": {
        "type": "Payload Parameter",
        "name": "businessPartner[0].addressLink[0].address[0].country",
        "fieldName": "country",
        "fieldType": "string"
      },
      "target": {
        "type": "Topic Parameter",
        "name": "partnerId",
        "fieldName": "partnerId",
        "fieldType": "string"
      }
    }
  ]
};

const events = generateEventAndTopic({rule: data, count: 1});

for (var i=0; i<events.length; i++) {
  console.log('---- Event[' + i + '] ----');
  console.log('Payload:', JSON.stringify(events[i].payload, null, 4));
  console.log('Topic:', events[i].topic);
}
