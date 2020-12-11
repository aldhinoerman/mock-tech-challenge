const Calculator = function() {
    // do code here
    return {
      evaluate: (str) => {
        try{
          return eval(str)
        }
        catch(error) {
          return 'Unidentified'
        }
      }
    } 
  };

// const Calculator = function(str) {
//   if (!str.match(/^\d+( [\+\-\/\*] \d+)*$/)) return null;

//   let ops = str.split(" ");
//   let opsSimple = [];
  
//   for (x = 0; x < ops.length; x++) {
//     if (ops[x] === '*') {
//       const val = opsSimple.pop();
//       opsSimple.push(val * ops[x+1]);
//       x++;
//     } else if (ops[x] === '/') {
//       if (ops[x+1] === "0") return "Error! Division by zero!";
//       const val = opsSimple.pop();
//       opsSimple.push(val / ops[x+1]);
//       x++;
//     } else {
//       opsSimple.push(ops[x]);
//     }
//   }
  
//   let result = parseInt(opsSimple[0]);
//   for (x = 1; x < opsSimple.length; x = x + 2) {
//     if (opsSimple[x] === '+') {
//       result += opsSimple[x+1];
//     } else {
//       result -= opsSimple[x+1];
//     }
//   }
  
//   return result;
// }

// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}

const calculate = new Calculator()

Test(calculate.evaluate('127'), 127)
Test(calculate.evaluate('2 + 3'), 5);
Test(calculate.evaluate('2 - 3 - 4'), -5);
Test(calculate.evaluate('10 *  5 / 2'), 25);

console.log("Bonus Test")
Test(calculate.evaluate('10 + 6 / 2'), 13);