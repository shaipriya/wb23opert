//Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
var curr_year = 2022;
var birth_year = 2005;
var age = curr_year - birth_year;
if (13 >= age <= 19) {
  console.log("Teenage");
} else if (20 >= age <= 29) {
  console.log("Twenties");
}