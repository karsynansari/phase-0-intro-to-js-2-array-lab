const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
  cats.push("Ralph");
}
function destructivelyPrependCat() {
  cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat() {
  const newCat = [...cats, "Broom"];
  return newCat;
}
function prependCat() {
  const firstCat = ["Arnold", ...cats];
  return firstCat;
}
function removeLastCat() {
  const removeLastCat = cats.slice(0, cats.length - 1);
  return removeLastCat;
}
function removeFirstCat() {
  const removeFirstCat = cats.slice(1);
  return removeFirstCat;
}
