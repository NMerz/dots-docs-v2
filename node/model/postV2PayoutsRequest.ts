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

export class PostV2PayoutsRequest {
    'userId': any | null;
    'amount': any | null;
    'platform': PostV2PayoutsRequest.PlatformEnum;
    /**
    * Required for `ach` and `intl_bank`
    */
    'accountId'?: any | null;
    'fund'?: any | null;
    'metadata'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "any"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "any"
        },
        {
            "name": "platform",
            "baseName": "platform",
            "type": "PostV2PayoutsRequest.PlatformEnum"
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "any"
        },
        {
            "name": "fund",
            "baseName": "fund",
            "type": "any"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return PostV2PayoutsRequest.attributeTypeMap;
    }
}

export namespace PostV2PayoutsRequest {
    export enum PlatformEnum {
        Paypal = <any> 'paypal',
        Venmo = <any> 'venmo',
        Ach = <any> 'ach',
        BankTransfer = <any> 'bank_transfer',
        CashApp = <any> 'cash_app',
        Default = <any> 'default'
    }
}