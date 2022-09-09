function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);
  let isSwapped = false;

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  // Side effect adalah efek samping setiap perubahan keadaan yang terjadi di luar function yang dipanggil
  // Assignment operator dan menggunakan variabel
  const result = [...cars];

  // Tulis code-mu disini dengan bubble sort
  for (let i = 0; i < result.length; i++) { 
    isSwapped = false; // i++ merupakan arithmetic operator
    for (let j = 0; j < result.length-1; j++) { // j++ merupakan arithmetic operator
      if(result[j].year < result[j+1].year){ // comparison operator
        let temp = result[j]
        result[j] = result[j+1]
        result[j+1] = temp
        isSwapped = true;
      }
    }

    if(!isSwapped){
      break;
    }
    
  }

  // Rubah code ini dengan array hasil sorting secara descending
  console.table(result);
  return result;
}
