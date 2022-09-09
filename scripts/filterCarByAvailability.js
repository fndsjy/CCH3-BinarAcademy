function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  // Assignment Operator dan menggunakan variabel
  const result = [];

  // Tulis code-mu disini
  for (let i = 0; i < cars.length; i++) { // i++ merupakan arithmetic operator
    if(cars[i].available === true){ // comparison operator
      result.push(cars[i]);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  console.table(result);
  return result;
}
