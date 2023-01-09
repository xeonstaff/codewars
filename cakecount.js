//given a list of cake ingredients, return how many cakes the baker can make

function cakes(recipe, available) {
  let cakecount = 0;
  const ingredients = Object.keys(recipe);
  let keepcounting = true;
  while (keepcounting) {
    ingredients.map((ingredient) => {
      if (available[ingredient]==undefined) {
        keepcounting=false
        return cakecount;
      }
      if (available[ingredient] < recipe[ingredient]) {
        keepcounting = false;
      }
      available[ingredient] -= recipe[ingredient];
    });
    cakecount += 1;
  }
  return cakecount > 0 ? cakecount - 1 : 0;
}
