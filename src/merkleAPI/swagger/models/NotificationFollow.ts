/* tslint:disable */
/* eslint-disable */
/**
 * Merkle API
 * API documentation for all publicly exposed APIs provided by Merkle Manufactory, Inc for Farcaster V2.
 *
 * OpenAPI spec version: 2.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { User } from "./User";
/**
 *
 * @export
 * @interface Def50
 */
export interface NotificationFollow {
  /**
   *
   * @type {string}
   * @memberof Def50
   */
  type: "follow";
  /**
   *
   * @type {string}
   * @memberof Def50
   */
  id: string;
  /**
   *
   * @type {Def18}
   * @memberof Def50
   */
  timestamp: number;
  /**
   *
   * @type {User}
   * @memberof Def50
   */
  actor: User;
}
