#!/bin/bash

# Exit with nonzero exit code if anything fails
set -e

# Build the project
echo "Building the project..."
npm run build

# Go to the dist directory
cd dist

# Initialize a new git repository if it doesn't exist
if [ ! -d .git ]; then
  echo "Initializing git repository..."
  git init
fi

# Set the remote URL
git remote set-url origin https://github.com/MarkXVI/markxvi.github.io.git

# Replace "your-username" and "your-repository" with your GitHub username and repository name

# Checkout the gh-pages branch or create it if it doesn't exist
echo "Switching to the gh-pages branch..."
git checkout -b gh-pages || git checkout gh-pages

# Add all the files and commit the changes
echo "Committing the changes..."
git add -A
git commit -m "Deploy to GitHub Pages"

# Force push the changes to the gh-pages branch
echo "Pushing the changes to the gh-pages branch..."
git push -f origin gh-pages

# Go back to the root directory
cd ..

echo "Deployment completed successfully!"
