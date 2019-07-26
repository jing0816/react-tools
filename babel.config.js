module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'entry',
        corejs: 2,
      },
    ],
    '@babel/react',
  ],
  compact: false,
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      { loose: true },
    ],
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
  ],
};