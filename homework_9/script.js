function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

 
  alert( fib(1) );
  alert( fib(2) );
  alert( fib(3) ); 
  alert( fib(4) ); 
  alert( fib(5) ); 
  alert( fib(6) ); 
  alert( fib(7) ); 
  alert( fib(8) ); 
  alert( fib(9) ); 
  alert( fib(10) ); 
  