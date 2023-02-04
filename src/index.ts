export const last = (ar: number[]) => ar[ar.length - 1];
const l1 = last([2, 3, 4]);

// interface LengthWise {
//   length: number;
// }

// export const length = <T extends LengthWise>(ar: T) => ar.length;
// const l1 = length([2]);

// const l3 = length(["swdowk"]);

// length({ length: 99 });

// function getProp<Obj, Key extends keyof Obj>(o: Obj, k: Key) {
//   return o[k];
// }

// const obj = { a: 22, b: 72, c: 99 };
// getProp({ u: 999 }, "u");
// getProp(obj, "a");

// interface Point {
//   x: number;
//   y: number;
// }
// type k = keyof Point;
