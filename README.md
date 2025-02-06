# TypeScript Closure Bug
This repository demonstrates a common error related to closures and the use of `setTimeout` within loops in TypeScript.  The bug showcases how the closure does not capture the value of `i` at the time of the `setTimeout` call, but rather captures a reference to `i`, which is updated after the loop completes.

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts` and `bugSolution.ts`.
3. Compile and run the code using a TypeScript compiler (e.g., `tsc bug.ts` and then `node bug.js`).
4. Observe the unexpected output in `bug.ts`.
5. Compare it with the corrected output in `bugSolution.ts`.

## Solution
The solution involves using an Immediately Invoked Function Expression (IIFE) or `let` inside the loop to create a new scope for each iteration, capturing the correct value of `i`.
