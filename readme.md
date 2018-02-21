# Easily generate a playground directory for quick node.js prototyping on MacOS.

## Installation

```zsh
yarn global add jplay
```

NPM

```zsh
npm i jplay -g
```

## Usage

#### Without options
_Creates a directory on your Desktop, with NPM ready to go. Opens the directory in Finder and opens the file in your preferred editor._
```zsh
jplay
# File written @ /Users/<user>/Desktop/playground/playground.js
```

#### With options
_Optional arguments for filename and path to create the directory. (The last element of your path option will be the directory to create)_
```zsh
jplay --path ~/your/path --file yourfilename.js
# File written @ /Users/<user>/your/path/yourfilename.js
```