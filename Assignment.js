let cities = ['london', 'ManCHESTer', 'BiRMiNGAM', 'liVERpool'];

let formattedCities = cities.map(city => {
  let lowercaseCity = city.toLowerCase();
  return lowercaseCity.charAt(0).toUpperCase() + lowercaseCity.slice(1);
});

console.log(formattedCities);