/**
 * Copyright Microsoft Corporation. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import path from 'path';

export type Config = {
  forbidOnly?: boolean;
  globalTimeout: number;
  grep?: string;
  maxFailures: number;
  outputDir: string;
  quiet?: boolean;
  repeatEach: number;
  retries: number,
  shard: { total: number, current: number } | undefined,
  snapshotDir: string;
  testDir: string;
  timeout: number;
  updateSnapshots: boolean;
  workers: number;
};

export const defaultConfig: Config = {
  forbidOnly: false,
  globalTimeout: 0,
  grep: '.*',
  maxFailures: 0,
  outputDir: path.join(process.cwd(), 'test-results'),
  quiet: false,
  repeatEach: 1,
  retries: 0,
  shard: undefined,
  snapshotDir: '__snapshots__',
  testDir: '',
  timeout: 10000,
  updateSnapshots: false,
  workers: Math.ceil(require('os').cpus().length / 2),
};
