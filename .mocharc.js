module.exports = {
    require: ['@babel/register', 'ts-node/register'], // Use babel and ts-node to transpile
    extension: ['ts', 'tsx', 'js', 'jsx'], // Ensure Mocha recognizes .tsx files
    recursive: true, // Recursively search for test files
  };
  