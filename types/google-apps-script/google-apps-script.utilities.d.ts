// Type definitions for Google Apps Script 2018-12-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  export module Utilities {
    /**
     * A typesafe enum for character sets.
     */
    export enum Charset { US_ASCII, UTF_8 }

    /**
     * Selector of Digest algorithm.
     */
    export enum DigestAlgorithm { MD2, MD5, SHA_1, SHA_256, SHA_384, SHA_512 }

    /**
     * Selector of MAC algorithm
     */
    export enum MacAlgorithm { HMAC_MD5, HMAC_SHA_1, HMAC_SHA_256, HMAC_SHA_384, HMAC_SHA_512 }

    /**
     * Selector of RSA algorithm
     */
    export enum RsaAlgorithm { RSA_SHA_1, RSA_SHA_256 }

    /**
     * This service provides utilities for string encoding/decoding, date formatting, JSON manipulation,
     * and other miscellaneous tasks.
     */
    export interface Utilities {
      Charset: typeof Charset;
      DigestAlgorithm: typeof DigestAlgorithm;
      MacAlgorithm: typeof MacAlgorithm;
      RsaAlgorithm: typeof RsaAlgorithm;
      base64Decode(encoded: string, charset?: Charset): Byte[];
      base64DecodeWebSafe(encoded: string, charset?: Charset): Byte[];
      base64Encode(data: Byte[] | string): string;
      base64Encode(data: string, charset: Charset): string;
      base64EncodeWebSafe(data: Byte[] | string): string;
      base64EncodeWebSafe(data: string, charset: Charset): string;
      computeDigest(algorithm: DigestAlgorithm, value: Byte[] | string): Byte[];
      computeDigest(algorithm: DigestAlgorithm, value: string, charset: Charset): Byte[];
      computeHmacSha256Signature(value: Byte[], key: Byte[]): Byte[];
      computeHmacSha256Signature(value: string, key: string, charset?: Charset): Byte[];
      computeHmacSignature(algorithm: MacAlgorithm, value: Byte[], key: Byte[]): Byte[];
      computeHmacSignature(algorithm: MacAlgorithm, value: string, key: string, charset?: Charset): Byte[];
      computeRsaSha1Signature(value: string, key: string, charset?: Charset): Byte[];
      computeRsaSha256Signature(value: string, key: string, charset?: Charset): Byte[];
      computeRsaSignature(algorithm: RsaAlgorithm, value: string, key: string, charset?: Charset): Byte[];
      formatDate(date: Date, timeZone: string, format: string): string;
      formatString(template: string, ...args: Object[]): string;
      getUuid(): string;
      gzip(blob: Base.BlobSource, name?: string): Base.Blob;
      newBlob(data: Byte[] | string, contentType?: string, name?: string): Base.Blob;
      parseCsv(csv: string, delimiter?: Char): string[][];
      sleep(milliseconds: Integer): void;
      ungzip(blob: Base.BlobSource): Base.Blob;
      unzip(blob: Base.BlobSource): Base.Blob[];
      zip(blobs: Base.BlobSource[], name?: string): Base.Blob;
      jsonParse(jsonString: string): Object;
      jsonStringify(obj: Object): string;
    }

  }
}

declare var Charset: GoogleAppsScript.Utilities.Charset;
declare var DigestAlgorithm: GoogleAppsScript.Utilities.DigestAlgorithm;
declare var MacAlgorithm: GoogleAppsScript.Utilities.MacAlgorithm;
declare var RsaAlgorithm: GoogleAppsScript.Utilities.RsaAlgorithm;
declare var Utilities: GoogleAppsScript.Utilities.Utilities;
