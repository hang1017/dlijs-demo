import type { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyConfig((memo) => {
    memo.alias = {
      ...memo.alias,
      vdlijs: '@@/exports',
    }
    return memo;
  })
}