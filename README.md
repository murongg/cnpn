
<p align="center">
  <h1  align="center">cnpn</h1>
</p>

<p align="center">
I want to create a npm package. I always have to visit <code>https://www.npmjs.com/</code> when I check package name is registered! And it may not be possible to check. The experience was troublesome and bad. So I published <code>cnpn</code> tool to help me check package name was registered. 😄
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/cnpn">
    <img align="middle" src="https://img.shields.io/npm/v/cnpn/latest">
  </a>
  <a href="https://github.com/murongg/cnpn/blob/main/LICENSE">
    <img align="middle" src="https://img.shields.io/github/license/murongg/cnpn">
  <a/>
   <img align="middle" src="https://img.shields.io/bundlephobia/min/cnpn" />
  <img align="middle" src="https://img.shields.io/github/languages/top/murongg/cnpn">
</p>

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
