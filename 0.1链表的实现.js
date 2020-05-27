class Node {
  constructor(element){
    this.element = element;
    this.next =null;
  }
}
class SingleLink{
  constructor(){
    this.head = new Node('head');
  }
  // 链表查找节点
  find(target){
    let currentNode = this.head
    while(currentNode.next){
      currentNode = currentNode.next
      if(currentNode.element === target) return currentNode
    }
    return null
  }

  // 删除指定节点
  remove(target){
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
      if(currentNode.next.element === target){
        currentNode.next = currentNode.next.next
        return;
      }
    } 
    return 'notfind'
  }

  // 链表尾部插入节点
  append(element){
    const temp = new Node(element)
    let nowNode = this.head
    while (nowNode.next) {
      nowNode = nowNode.next
    }
    nowNode.next = temp
  }

  

  // 遍历节点
  travelLink(){
    let first = this.head
    let res = ''
    while (first.next) {
      first = first.next
      if(first.next)res += first.element + '->'
      else res += first.element
    }
    console.log(res)
  }
}

let link = new SingleLink()
link.append('1')
link.append('2')
link.append('3')
link.append('4')

link.remove('4')
// console.log(link.head.next)
link.travelLink()
console.log(link.find('4'))