class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value)
    if(this.root === null) {
      this.root = newNode
      return this
    }

    let curent = this.root
    while(curent){
      if(value<curent.val){
        if(curent.left === null){
          curent.left = newNode
          return this
        }
        curent = curent.left
      }
      else{
        if(curent.right === null){
          curent.right = newNode
          return this
        }
        curent = curent.right
      }
    }

  }

  preOrder() {
    const res = []
    const preOrder = node=>{
      if(node===null){
        return}
      res.push(node.val)
      preOrder(node.left)
      preOrder(node.right)
    }
    preOrder(this.root)
    console.log(res);
  }

  inOrder() {}

  postOrder() {}

}

BinaryTree.prototype.arr2Tree=function (root) {
  
}



const tree = new BinaryTree()
const arr = [1,2,6,4,5,3,7,8,9]
arr.forEach(item=>tree.insert(item)) 
tree.preOrder()