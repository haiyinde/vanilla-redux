import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(action);
  return count;
};

const countStore = createStore(countModifier);

countStore = creatStore(countModifier);
console.log(countStore.getState());