// 方法在范围时间内只触发一次，如多次触发，则重新计算时间
function debounce(func, delay) {
  let time;
  return function () {
    clearTimeout(time);
    time = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

function debounce(func, delay) {
  let time;
  return function () {
    clearTimeout(time);
    if(!time) func.apply(this, arguments);
    time = setTimeout(() => {
      time = undefined
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
