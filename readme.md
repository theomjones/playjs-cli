# Easily generate a playground directory for quick node.js prototyping on MacOS.

## Installation
Might put it on NPM at some point. For now just clone & link. `yarn` can obviously be replaced with `npm`.
```bash
git clone git@github.com:theomjones/playjs-cli.git
cd playjs-cli
yarn
yarn link
```

## Usage

#### Without options
_Creates a directory on your Desktop, with NPM ready to go. Opens the directory in Finder and opens the file in your preferred editor._
```bash
playjs
```

#### With options
_Optional arguments for filename and path to create the directory. (The last element of your path option will be the directory to create)_
```bash
playjs --path ~/your/path --file yourfilename.js
```