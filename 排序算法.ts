class Sort {
  arr: Array<number>;
  orgin: Array<number>;
  time: number;
  len: number;
  constructor(arr) {
    this.orgin = arr.slice();
    this.arr = this.orgin.slice();
    this.len = this.arr.length;
  }

  // 冒泡排序
  bubbleSort() {
    console.time('bubble');
    if (this.len <= 1) {
      return;
    }
    for (let i = 0; i < this.len; i++) {
      let flag = false;
      for (let j = 1; j < this.len - i; j++) {
        if (this.arr[j - 1] > this.arr[j]) {
          this.exch(j - 1, j);
          flag = true;
        }
      }
      if (!flag) {
        break;
      }
    }
    console.timeEnd('bubble');
  }
  // 选择排序
  selectSort() {
    console.time('select');
    for (let i = 0; i < this.arr.length; i++) {
      for (let j = i + 1; j < this.arr.length; j++) {
        if (this.less(this.arr[i], this.arr[j])) {
          this.exch(i, j);
        }
      }
    }
    console.timeEnd('select');
  }
  // 插入排序
  insertSort() {
    console.time('insert');
    for (let i = 1; i < this.arr.length; i++) {
      const value = this.arr[i];
      let j = i;
      for (; j > 0; j--) {
        if (this.less(this.arr[j - 1], value)) this.exch(j - 1, j);
        else break;
      }
      this.arr[j] = value;
      console.table(this.arr);
    }
    console.timeEnd('insert');
  }
  // shell排序
  shellSort() {
    console.time('shell');
    const N = this.arr.length;
    let h = 1;
    while (h < N / 3) {
      h = 3 * h + 1;
    }
    while (h >= 1) {
      for (let i = h; i < N; i++) {
        for (
          let j = i;
          j >= h && this.less(this.arr[j], this.arr[j - h]);
          j -= h
        ) {
          this.exch(j, j - h);
        }
      }
      h = Math.floor(h / 3);
    }
    console.timeEnd('shell');
  }

  // 快排
  quickSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = arr[0]
    let left = [],
      right = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > mid) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
    return [...this.quickSort(left), mid, ...this.quickSort(right)];
  }

  // 归并排序
  mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }

    const mid = Math.floor(unsortedArray.length / 2);

    const left = unsortedArray.slice(0, mid);
    const right = unsortedArray.slice(mid);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  merge(left, right) {
    let resultArray = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        resultArray.push(left[i++]);
      } else {
        resultArray.push(right[j++]);
      }
    }
    return [...resultArray,...left.slice(i),...right.slice(j)]
  }

  // merge(arr: Array<number>, lo: number, mid: number, hi: number) {
  //   let i = lo,
  //     j = mid + 1;
  //   let aux = new Array(hi);
  //   for (let k = lo; k < hi; k++) {
  //     if (i > mid) arr[k] = aux[j++];
  //     else if (j > hi) arr[k] = aux[i++];
  //     else if (this.less(aux[j], aux[i])) arr[k] = aux[j++];
  //     else arr[k] = aux[i++];
  //   }
  // }

  less(a: number, b: number) {
    return a - b > 0;
  }
  exch(a: number, b: number) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
    // console.table(this.arr);
  }
  show() {
    console.table(this.orgin);
    console.table(this.arr);
  }
  reSet() {
    this.arr = this.orgin.slice();
  }
}

function randomArr(n: number): Array<number> {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

const arr = new Sort(randomArr(6));
// arr.bubbleSort()
// arr.reSet()
// arr.insertSort();
// arr.show()
// arr.selectSort();
// arr.insertSort()
// arr.reSet()
// arr.shellSort();
// arr.reSet()
// console.time('sort')
// arr.arr.sort((a,b)=>a-b)
// console.timeEnd('sort')
// arr.reSet()
// arr.shellSort();
// console.table(arr.mergeSort(arr.arr));
console.table(arr.quickSort(arr.arr))
// arr.show()
