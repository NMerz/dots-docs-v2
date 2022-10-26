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

export class GetV2Transactions200Response {
    'hasMore'?: any | null;
    'data'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hasMore",
            "baseName": "has_more",
            "type": "any"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return GetV2Transactions200Response.attributeTypeMap;
    }
}
