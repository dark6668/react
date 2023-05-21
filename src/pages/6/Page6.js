import React from "react";
import Header2 from "../2/Header2";
export default function Page6() {
  // Asynchronous
  /*console.log("i")
console.log("eat")
console.log("ice")
console.log("crean")
console.log("with")
console.log("spoon")*/
  // Asynchronous
  /*console.log("i")
console.log("eat")
console.log("ice")
setTimeout(() =>{
    console.log("crean")

},1000)
console.log("with")
console.log("spoon")*/

  let stock = {
    fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid: ["water", "ice"],
    holder: ["Cone", "Cup", "Stick"],
    toppings: ["Chocolate", "Sprinkles"],
  };
  let isShopOpen = false;
  function time(ms) {
    return new Promise((resolve, reject) => {
      if (isShopOpen) {
        setTimeout(resolve, ms);
      } else {
        reject(console.log("shop is close"));
      }
    });
  }

  async function work() {
    try {
      await time(1000);
      console.log(-1);
      await time(3000);
      console.log(2);
      await time(2000);
      console.log(1);
    } catch (error) {
      console.log("left");
    } finally {
      console.log("end od the day ");
    }
  }
  work();

  return (
    <div>
      <Header2 />
      <h1>Page 6</h1>
    </div>
  );
}
