const getFibonacci = ((a = 0, b = 1) => () => {
    const c = a + b
    a = b
    b = c
    return c
  })()

alert (getFibonacci(1)) 
alert (getFibonacci(2)) 
alert (getFibonacci(3)) 
alert (getFibonacci(4)) 
alert (getFibonacci(5)) 
alert (getFibonacci(6)) 
alert (getFibonacci(7)) 
alert (getFibonacci(8)) 
alert (getFibonacci(9)) 
alert (getFibonacci(10)) 
