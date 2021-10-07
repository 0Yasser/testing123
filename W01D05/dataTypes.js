let age = 24,
  address = "Riyadh",
  meals = ["breakfast", "lunch", "Dinner"],
  fullName = { fName: "Yasser", lName: "Altamimi" };

console.log(age + "\n" + address + "\n" + meals + "\n" + fullName.fName);
console.log(fullName);

console.log(
  typeof age +
    "\n" +
    typeof address +
    "\n" +
    typeof meals +
    "\n" +
    typeof fullName.fName +
    "\n" +
    typeof fullName +
    "\n"
);

let newArr = [100, "Ahmed", "\n", 2, "xx"];
/* This array type will probably be an object */
console.log(typeof newArr);

let var1 = null,
  var2 = undefined;
