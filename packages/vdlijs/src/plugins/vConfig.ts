import type { IApi } from 'umi';

export default (api: IApi) => {
  const defaultsConfig: Record<string, any> = {
    vue: {},
    mfsu: false,
    ...api.userConfig,
  }

  if (api.userConfig.complexRoute) {
    defaultsConfig.conventionRoutes = {
      // 保留umi的路由，过滤了非page的文件
      exclude: [
        /model\.(j|t)sx?$/,
        /\.test\.(j|t)sx?$/,
        /service\.(j|t)sx?$/,
        /models\//,
        /components\//,
        /services\//,
      ],
    };
  }

  api.modifyConfig((memo) => {
    Object.keys(defaultsConfig).forEach((key: string) => {
      if (key === 'alias') {
        memo[key] = { ...memo[key], ...defaultsConfig[key] }
      } else {
        memo[key] = defaultsConfig[key];
      }
    })
    // umi4 开发环境不允许配置为 './'
    if (process.env.NODE_ENV === 'development' && memo.publicPath === './') {
      memo.publicPath = '/';
    }
    return memo;
  })
}