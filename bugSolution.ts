function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
}

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    (function(j) {
        setTimeout(function() {
          console.log(j);
        }, 0);
    })(i);
  }
}

function printNumbers3(n: number): void {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
}

printNumbers(5);
printNumbers2(5);
printNumbers3(5); 