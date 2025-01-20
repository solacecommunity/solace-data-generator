import { generateEvent } from '../index.js';

const event = {
  "topic": "acmeretail/oracleRetailOrder/INSERT/V1/{CHANNEL}/{SALES_REP_ID}/{ORDER_ID}",
  "eventName": "Insert Orders",
  "eventVersion": "0.1.0",
  "messageName": "Insert_Orders",
  "topicParameters": {
      "CHANNEL": {
          "schema": {
              "type": "string"
          },
          "rule": {
              "name": "CHANNEL",
              "type": "string",
              "group": "StringRules",
              "rule": "alpha",
              "casing": "mixed",
              "minLength": 10,
              "maxLength": 10
          }
      },
      "ORDER_ID": {
          "schema": {
              "type": "string"
          },
          "rule": {
              "name": "ORDER_ID",
              "type": "string",
              "group": "StringRules",
              "rule": "alpha",
              "casing": "mixed",
              "minLength": 10,
              "maxLength": 10
          }
      },
      "SALES_REP_ID": {
          "schema": {
              "type": "string"
          },
          "rule": {
              "name": "SALES_REP_ID",
              "type": "string",
              "group": "StringRules",
              "rule": "alpha",
              "casing": "mixed",
              "minLength": 10,
              "maxLength": 10
          }
      }
  },
  "payload": {
      "CHANNEL": {
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
      "ORDER_ID": {
          "type": "number",
          "rule": {
              "name": "ORDER_ID",
              "type": "number",
              "group": "NumberRules",
              "rule": "int",
              "minimum": 0,
              "maximum": 1000
          }
      },
      "ORDER_DATE": {
          "format": "date-time",
          "type": "string",
          "rule": {
              "name": "ORDER_DATE",
              "type": "string",
              "group": "DateRules",
              "rule": "recent",
              "days": 1
          }
      },
      "QUANTITY": {
          "type": "number",
          "rule": {
              "name": "QUANTITY",
              "type": "number",
              "group": "NumberRules",
              "rule": "int",
              "minimum": 0,
              "maximum": 10
          }
      },
      "CUSTOMER_ID": {
          "type": "number",
          "rule": {
              "name": "CUSTOMER_ID",
              "type": "number",
              "group": "NumberRules",
              "rule": "int",
              "minimum": 0,
              "maximum": 1000
          }
      },
      "DELIVERY_ADDRESS_ID": {
          "type": "number",
          "rule": {
              "name": "DELIVERY_ADDRESS_ID",
              "type": "number",
              "group": "NumberRules",
              "rule": "int",
              "minimum": 0,
              "maximum": 1000
          }
      },
      "STATE": {
          "type": "number",
          "enum": [
              "Created"
          ],
          "rule": {
              "name": "STATE",
              "type": "number",
              "group": "StringRules",
              "rule": "enum",
              "enum": [
                  "Created"
              ]
          }
      },
      "SALES_REP_ID": {
          "type": "number",
          "rule": {
              "name": "SALES_REP_ID",
              "type": "number",
              "group": "NumberRules",
              "rule": "int",
              "minimum": 0,
              "maximum": 1000
          }
      },
      "INVOICE_ADDRESS_ID": {
          "type": "number",
          "rule": {
              "name": "INVOICE_ADDRESS_ID",
              "type": "number",
              "group": "NumberRules",
              "rule": "int",
              "minimum": 0,
              "maximum": 1000
          }
      },
      "ORDER_TOTAL": {
          "type": "number",
          "rule": {
              "name": "ORDER_TOTAL",
              "type": "number",
              "group": "NumberRules",
              "rule": "float",
              "minimum": 0,
              "maximum": 50,
              "fractionDigits": 2
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
          "type": "Topic Parameter",
          "source": {
              "type": "Payload Parameter",
              "name": "CHANNEL",
              "fieldName": "CHANNEL",
              "fieldType": "string"
          },
          "target": {
              "type": "Topic Parameter",
              "name": "CHANNEL",
              "fieldName": "CHANNEL",
              "fieldType": "string"
          }
      },
      {
          "type": "Topic Parameter",
          "source": {
              "type": "Payload Parameter",
              "name": "ORDER_ID",
              "fieldName": "ORDER_ID",
              "fieldType": "number"
          },
          "target": {
              "type": "Topic Parameter",
              "name": "ORDER_ID",
              "fieldName": "ORDER_ID",
              "fieldType": "string"
          }
      },
      {
          "type": "Topic Parameter",
          "source": {
              "type": "Payload Parameter",
              "name": "SALES_REP_ID",
              "fieldName": "SALES_REP_ID",
              "fieldType": "number"
          },
          "target": {
              "type": "Topic Parameter",
              "name": "SALES_REP_ID",
              "fieldName": "SALES_REP_ID",
              "fieldType": "string"
          }
      }
  ]
}

const sap =  {
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

const { payload, topic } = generateEvent(sap);

console.log('Payload:\n', JSON.stringify(payload, null, 2));
console.log('Topic:', topic);