
//a curried function is  a math function which is like f(g(h(j(x))))----function inside a functiion inside a function
//basically when we have nested functions parameters can of the outer function can be accessed by the inenr function

function curry(callback) {
  const curriedCallback=(...args)=>{
    if(args.length===0){
      return callback()
    }
    return(...otherArgs)=>{
      if(otherArgs.length===0){
        return callback(...args);
    }
    return curriedCallback(...args,...otherArgs)
  }
}
return curriedCallback
}
