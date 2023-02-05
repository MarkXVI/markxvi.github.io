#!/usr/bin/env sh

# abort on errors
set -e

git checkout -b gh-pages

# build
npm run build

cp -r dist/* .
git add .
git commit -m "Deploy"
git push origin gh-pages

git checkout -b main