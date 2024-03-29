export default function map(items, componet) {
  return items.map((item, index) => componet(item, index)).join("");
  // using "join" for concatenete and clear the comma -->
}
