import { join } from 'path';
import type { IApi } from 'umi';
import { winPath } from '@umijs/utils';

export function withTempPath(opts: { api: IApi; path: string; noPluginDir?: boolean; }) {
  return winPath(join(opts.api.paths.absTmpPath, opts.api.plugin.key && !opts.noPluginDir
    ? `plugin-${opts.api.plugin.key}`
    : '', opts.path))
}