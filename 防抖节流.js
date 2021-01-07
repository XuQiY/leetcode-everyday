function debounce(func, delay) {
  let time;
  return function () {
    clearTimeout(time);
    time = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

function throttle(func,delay) {
  let time;
  let flag = false
  if (flag) {
    return 
  }
  return function () {
    flag = true
    setTimeout(() => {
      flag = false
      func.apply(this, arguments)
    }, delay);
  }
}
