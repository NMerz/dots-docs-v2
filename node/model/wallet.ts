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

export class Wallet {
    'amount'?: any | null;
    'withdrawableAmount'?: any | null;
    'creditBalance'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "any"
        },
        {
            "name": "withdrawableAmount",
            "baseName": "withdrawable_amount",
            "type": "any"
        },
        {
            "name": "creditBalance",
            "baseName": "credit_balance",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return Wallet.attributeTypeMap;
    }
}
