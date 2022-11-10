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
  alert( fib(3) ); // 2
  alert( fib(4) ); // 2
  alert( fib(5) ); // 2
  alert( fib(6) ); // 2
  alert( fib(7) ); // 2
  alert( fib(8) ); // 2
  alert( fib(9) ); // 2
  alert( fib(10) ); // 2
  alert( fib(11) ); // 2
  alert( fib(12) ); // 2
  alert( fib(13) ); // 2
  alert( fib(14) ); // 2
  alert( fib(15) ); // 13
  alert( fib(16) ); // 