import type { IApi } from 'vdlijs';
import { join } from 'path';
import { glob, winPath } from '@umijs/utils';

export class StoreUtils {
  api: IApi;

  constructor(api: IApi | null) {
    this.api = api as IApi;
  }

  getAllStores() {
    const stores = [
      ...this.getStores({
        base: join(this.api.paths.absSrcPath, 'stores'),
        pattern: '**/*.{ts,tsx,js,jsx}',
      }),
      ...this.getStores({
        base: join(this.api.paths.absPagesPath),
        pattern: '**/stores/**/*.{ts,tsx,js,jsx}',
      }),
    ];
    return stores;
  }

  getStores(opts: { base: string, pattern?: string }) {
    return glob
      .sync(opts.pattern || '**/*.{ts,js}', {
        cwd: opts.base,
        absolute: true,
      })
      .map(winPath)
      .filter(() => {
        return true;
      })
  }
}