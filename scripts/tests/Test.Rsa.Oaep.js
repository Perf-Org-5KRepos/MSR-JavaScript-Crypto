﻿//*******************************************************************************
//
//    Copyright 2020 Microsoft
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.
//
//*******************************************************************************

// NOTE:
//
// Microsoft Edge :
//     does not support 32 or 64 bit tag lengths
//     will fail on jwk keys with 'short' data elements (truncated leading zeros resulting in shorter data array)
//     encrypt/decrypt alg with modulusLength or publicExponent will throw error (only needed on key functions)
//     incorrectly requires 'hash' property on the encrypt/decrypt alg object
//
// Chrome :
//     does not support 192 bit AES keys
//

// tslint:disable: max-line-length

"use strict";

rsaOaepTests();

function rsaOaepTests() {

    QUnit.module("RSA-OAEP");

    var ts = testShared;
    var context = ts.testContext;

    QUnit.test(label + " key import/export spki 1024 sha-1 ", function(assert) {
        ts.keyImportExportTestSpki(
            rsa.oaep._1024.sha1.spki, undefined, undefined, context(iterations, assert));
    });

    QUnit.test(label + " key import/export spki 1024 sha-256 ", function(assert) {
        ts.keyImportExportTestSpki(
            rsa.oaep._1024.sha256.spki, undefined, undefined, context(iterations, assert));
    });

    QUnit.test(label + " key import/export spki 1024 sha-384 ", function(assert) {
        ts.keyImportExportTestSpki(
            rsa.oaep._1024.sha384.spki, undefined, undefined, context(iterations, assert));
    });

    QUnit.test(label + " key import/export spki 1024 sha-512 ", function(assert) {
        ts.keyImportExportTestSpki(
            rsa.oaep._1024.sha512.spki, undefined, undefined, context(iterations, assert));
    });

    QUnit.test(label + " key import/export spki 2048 sha-1 ", function(assert) {
        ts.keyImportExportTestSpki(
            rsa.oaep._2048.sha1.spki, undefined, undefined, context(iterations, assert));
    });

    QUnit.test(label + " key import/export spki 2048 sha-256 ", function(assert) {
        ts.keyImportExportTestSpki(
            rsa.oaep._2048.sha256.spki, undefined, undefined, context(iterations, assert));
    });

    QUnit.test(label + " key import/export spki 2048 sha-384 ", function(assert) {
        ts.keyImportExportTestSpki(
            rsa.oaep._2048.sha384.spki, undefined, undefined, context(iterations, assert));
    });

    QUnit.test(label + " key import/export spki 2048 sha-512 ", function(assert) {
        ts.keyImportExportTestSpki(
            rsa.oaep._2048.sha512.spki, undefined, undefined, context(iterations, assert));
    });

    QUnit.test(label + " key import/export spki 4096 sha-1 ", function(assert) {
        ts.keyImportExportTestSpki(
            rsa.oaep._4096.sha1.spki, undefined, undefined, context(iterations, assert));
    });

    QUnit.test(label + " key import/export spki 4096 sha-256 ", function(assert) {
        ts.keyImportExportTestSpki(
            rsa.oaep._4096.sha256.spki, undefined, undefined, context(iterations, assert));
    });

    QUnit.test(label + " key import/export spki 4096 sha-384 ", function(assert) {
        ts.keyImportExportTestSpki(
            rsa.oaep._4096.sha384.spki, undefined, undefined, context(iterations, assert));
    });

    QUnit.test(label + " key import/export spki 4096 sha-512 ", function(assert) {
        ts.keyImportExportTestSpki(
            rsa.oaep._4096.sha512.spki, undefined, undefined, context(iterations, assert));
    });

    QUnit.test( label + " key import/export jwk 1024 sha-1 ", function( assert ) {
        ts.keyPairImportExportTest(
            rsa.oaep._1024.sha1.jwk, undefined, undefined, context( iterations, assert ) );
    } );

    QUnit.test( label + " key import/export jwk 1024 sha-256 ", function( assert ) {
        ts.keyPairImportExportTest(
            rsa.oaep._1024.sha256.jwk, undefined, undefined, context( iterations, assert ) );
    } );

    QUnit.test( label + " key import/export jwk 1024 sha-384 ", function( assert ) {
        ts.keyPairImportExportTest(
            rsa.oaep._1024.sha384.jwk, undefined, undefined, context( iterations, assert ) );
    } );

    QUnit.test( label + " key import/export jwk 1024 sha-512 ", function( assert ) {
        ts.keyPairImportExportTest(
            rsa.oaep._1024.sha512.jwk, undefined, undefined, context( iterations, assert ) );
    } );

    QUnit.test( label + " key import/export jwk 2048 sha-1 ", function( assert ) {
        ts.keyPairImportExportTest(
            rsa.oaep._2048.sha1.jwk, undefined, undefined, context( iterations, assert ) );
    } );

    QUnit.test( label + " key import/export jwk 2048 sha-256 ", function( assert ) {
        ts.keyPairImportExportTest(
            rsa.oaep._2048.sha256.jwk, undefined, undefined, context( iterations, assert ) );
    } );

    QUnit.test( label + " key import/export jwk 2048 sha-384 ", function( assert ) {
        ts.keyPairImportExportTest(
            rsa.oaep._2048.sha384.jwk, undefined, undefined, context( iterations, assert ) );
    } );

    QUnit.test( label + " key import/export jwk 2048 sha-512 ", function( assert ) {
        ts.keyPairImportExportTest(
            rsa.oaep._2048.sha512.jwk, undefined, undefined, context( iterations, assert ) );
    } );

    QUnit.test( label + " key import/export jwk 4096 sha-1 ", function( assert ) {
        ts.keyPairImportExportTest(
            rsa.oaep._4096.sha1.jwk, undefined, undefined, context( iterations, assert ) );
    } );

    QUnit.test( label + " key import/export jwk 4096 sha-256 ", function( assert ) {
        ts.keyPairImportExportTest(
            rsa.oaep._4096.sha256.jwk, undefined, undefined, context( iterations, assert ) );
    } );

    QUnit.test( label + " key import/export jwk 4096 sha-384 ", function( assert ) {
        ts.keyPairImportExportTest(
            rsa.oaep._4096.sha384.jwk, undefined, undefined, context( iterations, assert ) );
    } );

    QUnit.test( label + " key import/export jwk 4096 sha-512 ", function( assert ) {
        ts.keyPairImportExportTest(
            rsa.oaep._4096.sha512.jwk, undefined, undefined, context( iterations, assert ) );
    } );

    //=============================

    QUnit.test( label + " generateKeyTest 1024 SHA-1", function( assert ) {
        ts.keyGeneratePairTest(
            rsaOaepKeyAlg( 1024, "SHA-1" ), ["encrypt", "decrypt"], inspectRsaOaepKey, context( iterations, assert ) );
    } );

    QUnit.test( label + " generateKeyTest 1024 SHA-256", function( assert ) {
        ts.keyGeneratePairTest(
            rsaOaepKeyAlg( 1024, "SHA-256" ), ["encrypt", "decrypt"], inspectRsaOaepKey, context( iterations, assert ) );
    } );

    QUnit.test( label + " generateKeyTest 1024 SHA-384", function( assert ) {
        ts.keyGeneratePairTest(
            rsaOaepKeyAlg( 1024, "SHA-384" ), ["encrypt", "decrypt"], inspectRsaOaepKey, context( iterations, assert ) );
    } );

    QUnit.test( label + " generateKeyTest 1024 SHA-512", function( assert ) {
        ts.keyGeneratePairTest(
            rsaOaepKeyAlg( 1024, "SHA-512" ), ["encrypt", "decrypt"], inspectRsaOaepKey, context( iterations, assert ) );
    } );

    slowTest( label + " generateKeyTest 2048 SHA-1", function( assert ) {
        ts.keyGeneratePairTest(
            rsaOaepKeyAlg( 2048, "SHA-1" ), ["encrypt", "decrypt"], inspectRsaOaepKey, context( iterations, assert ) );
    } );

    slowTest( label + " generateKeyTest 2048 SHA-256", function( assert ) {
        ts.keyGeneratePairTest(
            rsaOaepKeyAlg( 2048, "SHA-256" ), ["encrypt", "decrypt"], inspectRsaOaepKey, context( iterations, assert ) );
    } );

    slowTest( label + " generateKeyTest 2048 SHA-384", function( assert ) {
        ts.keyGeneratePairTest(
            rsaOaepKeyAlg( 2048, "SHA-384" ), ["encrypt", "decrypt"], inspectRsaOaepKey, context( iterations, assert ) );
    } );

    slowTest( label + " generateKeyTest 2048 SHA-512", function( assert ) {
        ts.keyGeneratePairTest(
            rsaOaepKeyAlg( 2048, "SHA-512" ), ["encrypt", "decrypt"], inspectRsaOaepKey, context( iterations, assert ) );
    } );

    slowTest( label + " generateKeyTest 4096 SHA-1", function( assert ) {
        ts.keyGeneratePairTest(
            rsaOaepKeyAlg( 4096, "SHA-1" ), ["encrypt", "decrypt"], inspectRsaOaepKey, context( iterations, assert ) );
    } );

    slowTest( label + " generateKeyTest 4096 SHA-256", function( assert ) {
        ts.keyGeneratePairTest(
            rsaOaepKeyAlg( 4096, "SHA-256" ), ["encrypt", "decrypt"], inspectRsaOaepKey, context( iterations, assert ) );
    } );

    slowTest( label + " generateKeyTest 4096 SHA-384", function( assert ) {
        ts.keyGeneratePairTest(
            rsaOaepKeyAlg( 4096, "SHA-384" ), ["encrypt", "decrypt"], inspectRsaOaepKey, context( iterations, assert ) );
    } );

    slowTest( label + " generateKeyTest 4096 SHA-512", function( assert ) {
        ts.keyGeneratePairTest(
            rsaOaepKeyAlg( 4096, "SHA-512" ), ["encrypt", "decrypt"], inspectRsaOaepKey, context( iterations, assert ) );
    } );

    //=============================

    QUnit.test( label + " encrypt/decrypt 1024 SHA-1", function( assert ) {
        ts.encryptDecryptTest( rsaOaepKeyAlg( 1024, "SHA-1" ), rsaOaepEncryptAlg, context( iterations, assert ) );
    } );

    QUnit.test( label + " encrypt/decrypt 1024 SHA-256", function( assert ) {
        ts.encryptDecryptTest( rsaOaepKeyAlg( 1024, "SHA-256" ), rsaOaepEncryptAlg, context( iterations, assert ) );
    } );

    QUnit.test( label + " encrypt/decrypt 1024 SHA-384", function( assert ) {
        ts.encryptDecryptTest( rsaOaepKeyAlg( 1024, "SHA-384" ), rsaOaepEncryptAlg, context( iterations, assert ) );
    } );

    QUnit.skip( label + " encrypt/decrypt 1024 SHA-512 ** would result in -1 allowed message size **", function( assert ) {
        ts.encryptDecryptTest( rsaOaepKeyAlg( 1024, "SHA-512" ), rsaOaepEncryptAlg, context( iterations, assert ) );
    } );

    slowTest( label + " encrypt/decrypt 2048 SHA-1", function( assert ) {
        ts.encryptDecryptTest( rsaOaepKeyAlg( 2048, "SHA-1" ), rsaOaepEncryptAlg, context( iterations, assert ) );
    } );

    slowTest( label + " encrypt/decrypt 2048 SHA-256", function( assert ) {
        ts.encryptDecryptTest( rsaOaepKeyAlg( 2048, "SHA-256" ), rsaOaepEncryptAlg, context( iterations, assert ) );
    } );

    slowTest( label + " encrypt/decrypt 2048 SHA-384", function( assert ) {
        ts.encryptDecryptTest( rsaOaepKeyAlg( 2048, "SHA-384" ), rsaOaepEncryptAlg, context( iterations, assert ) );
    } );

    slowTest( label + " encrypt/decrypt 2048 SHA-512", function( assert ) {
        ts.encryptDecryptTest( rsaOaepKeyAlg( 2048, "SHA-512" ), rsaOaepEncryptAlg, context( iterations, assert ) );
    } );

    slowTest( label + " encrypt/decrypt 4096 SHA-1", function( assert ) {
        ts.encryptDecryptTest( rsaOaepKeyAlg( 4096, "SHA-1" ), rsaOaepEncryptAlg, context( iterations, assert ) );
    } );

    slowTest( label + " encrypt/decrypt 4096 SHA-256", function( assert ) {
        ts.encryptDecryptTest( rsaOaepKeyAlg( 4096, "SHA-256" ), rsaOaepEncryptAlg, context( iterations, assert ) );
    } );

    slowTest( label + " encrypt/decrypt 4096 SHA-384", function( assert ) {
        ts.encryptDecryptTest( rsaOaepKeyAlg( 4096, "SHA-384" ), rsaOaepEncryptAlg, context( iterations, assert ) );
    } );

    slowTest( label + " encrypt/decrypt 4096 SHA-512", function( assert ) {
        ts.encryptDecryptTest( rsaOaepKeyAlg( 4096, "SHA-512" ), rsaOaepEncryptAlg, context( iterations, assert ) );
    } );

    //=============================

    QUnit.test( label + " decrypt native ciphers 1024 SHA-1", function( assert ) {
        ts.decryptNativeCiphersTest( rsa.oaep._1024.sha1.ciphers, context( iterations, assert ) );
    } );

    QUnit.test( label + " decrypt native ciphers 1024 SHA-256", function( assert ) {
        ts.decryptNativeCiphersTest( rsa.oaep._1024.sha256.ciphers, context( iterations, assert ) );
    } );

    QUnit.test( label + " decrypt native ciphers 1024 SHA-384", function( assert ) {
        ts.decryptNativeCiphersTest( rsa.oaep._1024.sha384.ciphers, context( iterations, assert ) );
    } );

    QUnit.skip( label + " decrypt native ciphers 1024 SHA-512", function( assert ) {
        ts.decryptNativeCiphersTest( rsa.oaep._1024.sha512.ciphers, context( iterations, assert ) );
    } );

    QUnit.test( label + " decrypt native ciphers 2048 SHA-1", function( assert ) {
        ts.decryptNativeCiphersTest( rsa.oaep._2048.sha1.ciphers, context( iterations, assert ) );
    } );

    QUnit.test( label + " decrypt native ciphers 2048 SHA-256", function( assert ) {
        ts.decryptNativeCiphersTest( rsa.oaep._2048.sha256.ciphers, context( iterations, assert ) );
    } );

    QUnit.test( label + " decrypt native ciphers 2048 SHA-384", function( assert ) {
        ts.decryptNativeCiphersTest( rsa.oaep._2048.sha384.ciphers, context( iterations, assert ) );
    } );

    QUnit.test( label + " decrypt native ciphers 2048 SHA-512", function( assert ) {
        ts.decryptNativeCiphersTest( rsa.oaep._2048.sha512.ciphers, context( iterations, assert ) );
    } );

    slowTest( label + " decrypt native ciphers 4096 SHA-1", function( assert ) {
        ts.decryptNativeCiphersTest( rsa.oaep._4096.sha1.ciphers, context( iterations, assert ) );
    } );

    slowTest( label + " decrypt native ciphers 4096 SHA-256", function( assert ) {
        ts.decryptNativeCiphersTest( rsa.oaep._4096.sha256.ciphers, context( iterations, assert ) );
    } );

    slowTest( label + " decrypt native ciphers 4096 SHA-384", function( assert ) {
        ts.decryptNativeCiphersTest( rsa.oaep._4096.sha384.ciphers, context( iterations, assert ) );
    } );

    slowTest( label + " decrypt native ciphers 4096 SHA-512", function( assert ) {
        ts.decryptNativeCiphersTest( rsa.oaep._4096.sha512.ciphers, context( iterations, assert ) );
    } );
}

function rsaOaepKeyAlg(modulusLength, hashAlg) {
    return {
        name: "RSA-OAEP",
        modulusLength: modulusLength,
        publicExponent: testShared.arr([0x01, 0x00, 0x01]),
        hash: {
            name: hashAlg
        }
    };
}

function rsaOaepEncryptAlg() {
    var alg = {
        name: "RSA-OAEP"
    };

    // add a random label half the time
    if (testShared.chance(0.5)) {
        alg.label = testShared.arr(testShared.getRandomBytes(1, 100));
    }

    return alg;
}

var inspectRsaOaepKey = {
    public: function(keyObj, algorithm, usages, reason) {
        //     "publicKey": {
        //         "alg": "RSA-OAEP-256",
        //         "e": "AQAB",
        //         "ext": true,
        //         "key_ops": [
        //             "encrypt",
        //         ],
        //         "kty": "RSA",
        //         "n": "ush3d1BXcw3VjzD8jhff8GZD4KE5gmeJ...",
        //     },

        var fail = [];

        var hashName = algorithm.hash.name.toUpperCase();
        var hashLen = hashName === "SHA-1" ? "" : "-" + hashName.slice(hashName.indexOf("-") + 1);

        var expLenMax = algorithm.modulusLength / 8;
        var expLenMin = expLenMax - 2;

        // has alg property RSA-OAEP-256 (just RSA-OAEP when hash is SHA-1)
        if (!validation.prop.string(keyObj, "alg", algorithm.name + hashLen)) {
            fail.push("key.alg !== " + algorithm.name + hashLen);
        }

        // has ext property equal to true
        if (!validation.prop.boolean(keyObj, "ext", true)) {
            fail.push("key.ext !== true");
        }

        // has e property that is base64url
        if (!validation.prop.isBase64Url(keyObj, "e")) {
            fail.push("key.e !== true");
        }

        // has n property that is base64url
        if (!validation.prop.isBase64Url(keyObj, "n", expLenMin, expLenMax)) {
            fail.push("key.n !== true");
        }

        // has key_ops property with expected usages
        if (Object.prototype.toString.call(keyObj.key_ops) !== "[object Array]") {
            fail.push("key.key_ops missing or not Array");
        }

        if (keyObj.key_ops && !testShared.compareUsages(keyObj.key_ops, usages)) {
            fail.push("key.key_ops invalid usage(s)");
        }

        // has kty property equal to 'RSA'
        if (!validation.prop.string(keyObj, "kty", "RSA")) {
            fail.push("key.kty !== RSA");
        }

        reason.message = fail.join(";  ");

        return (fail.length === 0);
    },
    private: function(keyObj, algorithm, usages, reason) {
        //   "privateKey": {
        //       "alg": "RSA-OAEP-256",
        //       "d": "Aw88kbpBrHNKD73kLSmr8-Kg8wGBESdEA2SwRk6JLYhQjUmqwed7nW2WfR69ZY5dulPhl1BpGy...",
        //       "dp": "MzaNxLv5qiZ5tcXSZiQUuCr9Z1ivnNGd9HGK3xKLN4tqJGkqjEuBwThQFVaa-SkTU5bIK4o0AuX0sSRI8X26Yw",
        //       "dq": "hC-5kaiWpoBqWfndCNBFo7h4SVLe-g7dHSo-XN2uVCTykt-3kan_hfuzkcUNSb4WBsCvjzeSX5TySPPrDILKQQ",
        //       "e": "AQAB",
        //       "ext": true,
        //       "key_ops": [
        //           "decrypt",
        //       ],
        //       "kty": "RSA",
        //       "n": "ush3d1BXcw3VjzD8jhff8GZD4KE5gmeJZeA0OW03dgrAWjHZ-wykw1tvLXvFaAlePiXl0IteNXc92...",
        //       "p": "6l2mtx2Xdtvn-rNMPWTsrj-hXwwno8hZM5k8xV_ouiuciSGR8lgFhM0GBJapx9XADVZamb0sDEMiZRZmY4tygw",
        //       "q": "zAZglPR34FqV9QpbpVSuT-wB9tfCALLK-X2jA7IyNX9eRn5ZAmQT2PmpJ3ncGH-S1K9716X1oxBeO888qTXvQQ",
        //       "qi": "1lFKci4J7DlMzmi0J5_MdfNawjme8uJLBU4orqt_8ygqDQy9K5I3Qy5Lo6ifS9o9_yBVZmGZ-HInkTvppv82-w",
        //   },

        //        var hashLen = algorithm.hash.name.slice(algorithm.hash.name.indexOf("-"));
        var expLenMin;
        var expLenMax;

        this.public(keyObj, algorithm, ["decrypt"], reason);

        var fail = reason.message ? reason.message.split(";  ") : [];

        expLenMax = algorithm.modulusLength / 8;
        expLenMin = expLenMax - 2;

        // d property is base64url bytes
        if (!validation.prop.isBase64Url(keyObj, "d", expLenMin, expLenMax)) {
            fail.push("key.d !== true");
        }

        expLenMax = algorithm.modulusLength / 16;
        expLenMin = expLenMax - 2;

        // dp property is base64url bytes
        if (!validation.prop.isBase64Url(keyObj, "dp", expLenMin, expLenMax)) {
            fail.push("key.dp !== true");
        }

        // dq property is base64url bytes
        if (!validation.prop.isBase64Url(keyObj, "dq", expLenMin, expLenMax)) {
            fail.push("key.dq !== true");
        }

        // p property is base64url bytes
        if (!validation.prop.isBase64Url(keyObj, "p", expLenMin, expLenMax)) {
            fail.push("key.p !== true");
        }

        // q property is base64url bytes
        if (!validation.prop.isBase64Url(keyObj, "q", expLenMin, expLenMax)) {
            fail.push("key.q !== true");
        }

        // qi property is base64url bytes
        if (!validation.prop.isBase64Url(keyObj, "qi", expLenMin, expLenMax)) {
            fail.push("key.qi fail");
        }

        reason.message = fail.join(";  ");

        return (fail.length === 0);
    }
};
