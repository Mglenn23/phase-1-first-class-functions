function receivesAFunction(callback) {
  // console.log(callback(callback));
  return callback(callback);
}
function returnsANamedFunction() {
  return function named(name) {
    return name;
  };
}
function returnsAnAnonymousFunction() {
  return (abc) => {
    return abc;
  };
}
