function myIsObject(param) {
  if(typeof param === 'object'){
    return true
  }
  if(param===null){
    return false
  }
}