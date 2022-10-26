/**
 * dots api
 * Scalable and Flexible Payouts Infrastructure
 *
 * The version of the OpenAPI document: 1.0
 * Contact: info@dots.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Transaction {
    'id'?: any | null;
    'amount'?: any | null;
    'created'?: any | null;
    'sourceName'?: any | null;
    'destinationName'?: any | null;
    'metadata'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "any"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "any"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "any"
        },
        {
            "name": "sourceName",
            "baseName": "source_name",
            "type": "any"
        },
        {
            "name": "destinationName",
            "baseName": "destination_name",
            "type": "any"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }
}
