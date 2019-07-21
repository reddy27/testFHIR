const express = require('express')
const app = express()
const port = 3000

const medicineJSON = {
    "event": {
        "header": {
            "namespace": "Alexa.Health.MedicationDispense",
            "name": "Read",
            "messageId": "febcf055-01ea-4661-90da-1bada7a7aad2",
            "payloadVersion": "1"
        },
        "payload": {
            "paginationContext": {
                "totalCount": 2,
                "nextToken": "<NEXT_TOKEN>"
            },
            "dispenseBundle": {
                "resourceType": "Bundle",
                "type": "searchset",
                "entry": [
                    {
                        "resource": {
                            "resourceType": "MedicationDispense",
                            "identifier": "00000000-00",
                            "status": "completed",
                            "medicationCodeableConcept": {
                                "text": "lisinopril 40 mg tablet",
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/sid/ndc",
                                        "code": "0000-0000-00",
                                        "display": "lisinopril 40 mg tablet"
                                    }
                                ]
                            },
                            "dosageInstruction": [
                                {
                                    "text": "",
                                    "timing": {
                                        "repeat": {
                                            "frequency": 1,
                                            "period": 1,
                                            "periodUnit": "d"
                                        },
                                        "code": {
                                            "text": "Daily"
                                        }
                                    },
                                    "route": {
                                        "coding": [
                                            {
                                                "system": "http://snomed.info/sct",
                                                "code": "26643006",
                                                "display": "Oral"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "extension": [
                                {
                                    "url": "http://api.amazonalexa.com/health/fhir/r4/extension/medication-dispense-extensions",
                                    "extension": [
                                        {
                                            "url": "prescription-number",
                                            "valueString": "00000000-00"
                                        },
                                        {
                                            "url": "prescription-status",
                                            "valueString": "Active"
                                        },
                                        {
                                            "url": "dispense-request-validity-period",
                                            "valueString": {
                                                "start": "2018-07-16"
                                            }
                                        },
                                        {
                                            "url": "dispense-method",
                                            "valueString": "Pickup"
                                        },
                                        {
                                            "url": "medication-intake-as-needed",
                                            "valueBoolean": true
                                        },
                                        {
                                            "url": "fill_status",
                                            "valueString": "PendingFill"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "resource": {
                            "resourceType": "MedicationDispense",
                            "identifier": "00000000-00",
                            "status": "completed",
                            "medicationCodeableConcept": {
                                "text": "NovoLOG Flexpen U-100 Insulin 100 unit/mL (3 mL) sub-q pen",
                                "coding": null
                            },
                            "dosageInstruction": [
                                {
                                    "text": "",
                                    "timing": {
                                        "repeat": {
                                            "frequency": 2,
                                            "period": 1,
                                            "periodUnit": "d"
                                        },
                                        "code": {
                                            "text": "2 Times Daily"
                                        }
                                    },
                                    "route": {
                                        "coding": [
                                            {
                                                "system": "http://snomed.info/sct",
                                                "code": "26643006",
                                                "display": "Subcutaneous"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "extension": [
                                {
                                    "url": "http://api.amazonalexa.com/health/fhir/r4/extension/medication-dispense-extensions",
                                    "extension": [
                                        {
                                            "url": "prescription-number",
                                            "valueString": "00000000-00"
                                        },
                                        {
                                            "url": "prescription-status",
                                            "valueString": "Active"
                                        },
                                        {
                                            "url": "dispense-request-validity-period",
                                            "valueString": {
                                                "start": "2018-07-16"
                                            }
                                        },
                                        {
                                            "url": "dispense-method",
                                            "valueString": "Pickup"
                                        },
                                        {
                                            "url": "medication-intake-as-needed",
                                            "valueBoolean": false
                                        },
                                        {
                                            "url": "fill_status",
                                            "valueString": "Canceled"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }
}

app.get('/', (req, res) => res.send(medicineJSON))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))