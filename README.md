# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



## 创建项目

```bash
pnpm create vite my-github-npm-package --template react-ts
```

## 发布项目

```bash
npm login --registry=https://npm.pkg.github.com

# 输入github username 和 Personal access tokens

npm publish
```



## 参考

1. [Create Your First Github Package](https://dev.to/dalenguyen/create-your-first-github-package-564f)

2. [How to publish a new npm package on the GitHub Registry, and what is the difference between NPM and GitHub Registry?](https://medium.com/frontendweb/how-to-publish-a-new-npm-package-on-the-github-registry-and-what-is-the-difference-between-npm-and-dd63452aed3e)
3. [Host and Publish NPM package on GitHub](https://windix.medium.com/host-and-publish-npm-package-on-github-bb419a2acfd3)
4. [Setting up GitHub packages for NPM](https://itnext.io/setting-up-github-packages-for-npm-2bc9f8e4b11e)

