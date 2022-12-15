//returns a camelCase version of a string

String.prototype.camelCase = function () {
  let theCamel = "";
  this.trim()
    .split(" ")
    .forEach((x) => {
      if (!x) return "";
      let arry = x.split("");
      theCamel += arry[0].toUpperCase() + arry.slice(1).join("");
    });
  return theCamel;
};
