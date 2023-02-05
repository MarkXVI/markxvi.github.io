#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git checkout -B gh-pages

cp -r dist/* .
git add .
git commit -m "Deploy"
git push origin gh-pages

git checkout -B main