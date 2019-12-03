#!/usr/bin/env bash

# Force the 1.7.5 version of cocoapods, as opposed to the version installed by AppCenter
echo "Uninstalling all cocoapods versions"
sudo gem uninstall cocoapods --all
echo "Installing cocoapods version 1.7.5"
sudo gem install cocoapods -v 1.8.4

# Upgrade Node to a version expected by React Native 0.60
set -ex
brew uninstall node@6
NODE_VERSION="10.16.0"
curl "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}.pkg" > "$HOME/Downloads/node-installer.pkg"
sudo installer -store -pkg "$HOME/Downloads/node-installer.pkg" -target "/"

# Run Yarn
yarn