import { dirname } from 'path';
import type { IApi } from 'vdlijs';
import { withTmpPath } from '@dlijs/vue-utils';
import { StoreUtils } from './storeUtils';

export function getAllStores(api: IApi) {
  return new StoreUtils(api).getAllStores();
}

export default (api: IApi) => {
  const pinia = dirname(require.resolve('pinia/package.json'));
  console.log('pinia:---', pinia);

  api.modifyConfig((memo) => {
    memo.alias = {
      ...memo.alias,
      pinia
    };
    return memo;
  })

  api.modifyAppData((memo) => {
    const stores = getAllStores(api);
    memo.pluginPinia = { stores };
    return memo;
  })

  api.onGenerateFiles((args) => {
    const stores = args.isFirstTime
      ? api.appData.pluginPinia.stores
      : getAllStores(api);

    api.writeTmpFile({
      path: 'index.ts',
      content: `export * from '${pinia}';
${stores.map((item: string) => {
        return `export * from '${item}';`
      })}
      `,
    });

    api.writeTmpFile({
      path: 'runtime.tsx',
      content: `
        import { createPinia } from '${pinia}';
export function onMounted({ app }) {
  const pinia = createPinia();
  app.use(pinia);
}
      `
    });
    api.writeTmpFile({
      path: 'types.d.ts',
      content: ``
    });

    api.addRuntimePlugin(() => {
      return [withTmpPath({ api, path: 'runtime.tsx' })];
    });
  });
};
