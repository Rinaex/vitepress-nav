# 解压缩工具使用教程
等待补充

## ZSTD

部分分享者在上传打包时会使用ZSTD算法进行压缩,会导致一些不支持zstd的压缩工具报错

关于zstd是啥自己去看[zstd主页](https://facebook.github.io/zstd/)或者问问ai

### 哪些解压缩工具支持ZSTD

下面列出一些支持zstd的工具

- Windows11内置的解压缩工具,在24H2版本就支持解压zstd了
- bandizip7.x及以后版本 (6.x的主页没写,大家自测吧)
- [7-Zip-zstd](https://github.com/mcmilk/7-Zip-zstd) 基于7-Zip修改的非官方开源项目



如果要创建zstd压缩包的话需要使用[7-Zip-zstd](https://github.com/mcmilk/7-Zip-zstd)，如果仅需要解压缩的话上面三款都可以.

### WinRAR

WinRAR我个人觉得还是挺好用的,可惜原生不支持zstd,但是经过测试可以手动移植[7-Zip-zstd](https://github.com/mcmilk/7-Zip-zstd)中的dll到WinRAR中从而达成解压缩zstd压缩包的目的，具体操作如下.



首先到[7-Zip-zstd](https://github.com/mcmilk/7-Zip-zstd)项目的Release下载`7z25.01-zstd-x64.exe`,注意25.01为当前文章发布时最新版本号,下载时以最新版本为准.

下载完成后无需安装，直接对`7z25.01-zstd-x64.exe`右键,选择`用WinRAR打开`将压缩包中的`7zxa.dll`复制出来备用，打开WinRAR所在目录,将WinRAR目录中的`7zxa.dll`重命名为`7zxa.bak`，最后将复制出来的`7zxa.dll`放入WinRAR目录中即可.