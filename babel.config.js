module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true
        }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-flow'
  ],
  plugins: ['@babel/plugin-proposal-class-properties']
};


