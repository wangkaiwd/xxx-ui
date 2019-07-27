#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
yarn build doc

# cd 到构建输出的目录下
cd build

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:wangkaiwd/wui.git master:gh-pages

cd -
rm -rf build &; rm -rf dist &;
