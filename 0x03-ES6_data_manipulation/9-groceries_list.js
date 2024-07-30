export default function groceriesList() {
  const myMap = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  //   get all the keys in the object into an array
  const list = Array.from(Object.keys(obj));

  //   map through the array and set value to the key in myMap
  list.map((item) => myMap.set(item, obj[item]));
  return myMap;
}

