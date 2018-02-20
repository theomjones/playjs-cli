module.exports = {
  // Gives arguments back
  filterArgs(args) {
    return args.slice(2, args.length);
  },
  // Returns Array of options
  filterOptions(args) {
    return args.filter(arg => arg.charAt(0) === "-");
  },
  // Returns array of commands
  filterCommands(args) {
    return args.filter(arg => arg.charAt(0) !== "-");
  },

  getPath(args) {
    let path = null;
    if (args.length < 1) {
      return undefined;
    }
    args.forEach((arg, i) => {
      if (arg === "--path") {
        path = args[i + 1];
      }
    });
    return path;
  },

  getFileName(args) {
    if (args.length < 1) {
      return undefined;
    }
    let fileName = null;
    args.forEach((arg, i) => {
      if (arg === "--file") {
        fileName = args[i + 1];
      }
    });
    return fileName;
  }
};
