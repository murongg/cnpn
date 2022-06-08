
<p align="center">
  <h1  align="center">cnpn</h1>
</p>

<p align="center">
I want to create a npm package. I always have to visit <code>https://www.npmjs.com/</code> when I check package name is registered! And it may not be possible to check. The experience was troublesome and bad. So I publish <code>cnpn</code> tools help me check package name is registered. 😄
</p>

[![NPM version](https://img.shields.io/npm/v/cnpn?color=a1b858&label=)](https://www.npmjs.com/package/cnpn)

## 🚀 Usage 

```shell
$ npm i -g cnpn
$ cnpn <your package name>
```

### e.g.

```shell
$ cnpn cnpn
> 😫 This package name is register already!
$ cnpn cnpn2
> 😊 You can use this package name!
```
