/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {PbKeyTemplate} from '../internal/proto';

import {AeadKeyTemplates} from './aead_key_templates';

describe('aead key templates test', function() {
  it('aes128 ctr hmac sha256', function() {
    const keyTemplate = AeadKeyTemplates.aes128CtrHmacSha256();
    expect(keyTemplate instanceof PbKeyTemplate).toBe(true);
  });

  it('aes256 ctr hmac sha256', function() {
    const keyTemplate = AeadKeyTemplates.aes256CtrHmacSha256();
    expect(keyTemplate instanceof PbKeyTemplate).toBe(true);
  });

  it('aes128 gcm', function() {
    const keyTemplate = AeadKeyTemplates.aes128Gcm();
    expect(keyTemplate instanceof PbKeyTemplate).toBe(true);
  });

  it('aes256 gcm', function() {
    const keyTemplate = AeadKeyTemplates.aes256Gcm();
    expect(keyTemplate instanceof PbKeyTemplate).toBe(true);
  });

  it('aes256 gcm no prefix', function() {
    const keyTemplate = AeadKeyTemplates.aes256GcmNoPrefix();
    expect(keyTemplate instanceof PbKeyTemplate).toBe(true);
  });
});
