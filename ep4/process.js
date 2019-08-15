
console.log(process.versions.node);
console.log(process.pid);
console.log(process.argv);

const [nodepath, filepath] = process.argv;

console.log(`Path to node: ${nodepath}`);
console.log(`Path to file: ${filepath}`);