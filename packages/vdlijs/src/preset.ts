export default () => {
  return {
    plugins: [
      require.resolve('./plugins/vAlias'),
      require.resolve('./plugins/vAppData'),
      require.resolve('./plugins/vChecker'),
      require.resolve('./plugins/vConfig'),
      require.resolve('@vdlijs/vue-pinia'),
    ]
  }
}