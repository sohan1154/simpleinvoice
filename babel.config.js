module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["dotenv-import",
      {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": false
      }
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@config': ['./src/config'],
          '@assets': ['./src/assets'],
          '@images': ['./src/assets/images'],
          '@components': ['./src/components'],
          '@mock': ['./src/mock'],
          '@i18n': ['./src/i18n'],
          '@navigation': ['./src/navigation'],
          '@screens': ['./src/screens'],
          '@services': ['./src/services'],
          '@utils': ['./src/utils'],
          '@theme': ['./src/theme'],
          '@store': ['./src/store'],
        },
      },
    ],
  ],
};
