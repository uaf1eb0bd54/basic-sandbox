// scratch

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

console.log(typeof sleep);
