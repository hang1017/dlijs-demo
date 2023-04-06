import type { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyAppData((memo) => {
    memo.umi.name = 'vdlijs';
    memo.umi.importSource = 'vdlijs';
    memo.umi.cliName = 'vdlijs';
    return memo;
  })
}