let proxy = (fn) =>
  new Proxy(fn, {
    cache: new Map(),
    apply(target, thisArg, argArray) {
      let key = argArray.toString();
      if (!this.cache.get(key)) {
        this.cache.set(key, target.apply(thisArg, argArray));
      }
      return this.cache.get(key);
    },
  });
  
  let fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
  };

const map = new Map();
let fib_hashMap = (n) => {
  if (n <= 2) return 1;
  if (!map.get(n)) {
    map.set(n, fib(n - 1) + fib(n - 2));
  }
  return map.get(n);
};

let proxyFib = proxy(fib);
console.time('fib_hashMap');
console.log(fib_hashMap(40));
console.timeEnd('fib_hashMap');

console.time('fib');
console.log(fib(40));
console.timeEnd('fib');

