function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      // Extracting data from input
      const rawData = document.getElementById('inputs').children[1].value;
      const dataArr = rawData.split('"').filter((element) => element.includes(' '));
      const restaurants = {};
      let bestRestaurant = null;

      // Manipulating data
      for (let i = 0; i < dataArr.length; i++) {        
         let [rName, rEmps] = dataArr[i].split(' - ');
         rEmps = rEmps.split(', ');

         // Creating new restaurant obj if needed
         if (!restaurants[rName]) {
            restaurants[rName] = {};
            restaurants[rName].name = rName;
            restaurants[rName].employees = {};
         }

         // Adding emps
         for (let i = 0; i < rEmps.length; i++) {
            let [empName, empSalary] = rEmps[i].split(' ');
            restaurants[rName].employees[empName] = Number(empSalary)
         }
         
         // Updating average and best salary
         let totalSalary = 0;
         let bestSalary = -100;
         let empNames = Object.keys(restaurants[rName].employees);
         for (let i=0; i<empNames.length; i++) {
            let currentSal = restaurants[rName].employees[empNames[i]];
            totalSalary += currentSal;
            if (currentSal > bestSalary) {
               bestSalary = currentSal;
            }
         }
         restaurants[rName].average = (totalSalary / empNames.length);
         restaurants[rName].best = bestSalary;
      }

      // Sorting the best
      let highScore = -100;
      let restaurantNames = Object.keys(restaurants);
      for (let i = 0; i < restaurantNames.length; i++) {
         let currentRestaurant = restaurants[restaurantNames[i]];
         
         if (currentRestaurant.average > highScore) {
            bestRestaurant = currentRestaurant;
            highScore = currentRestaurant.average;
         }
      }

      // Formatting the output
      let bestRestaurantOutput = `
      Name: ${bestRestaurant.name} 
      Average Salary: ${bestRestaurant.average.toFixed(2)} 
      Best Salary: ${bestRestaurant.best.toFixed(2)}
      `
      let workersOutput = '';
      let workersArr = Object.entries(bestRestaurant.employees).sort((a, b) => b[1] - a[1]);
      
      for (let i=0; i< workersArr.length; i++) {
         let [name, sal] = workersArr[i];
         workersOutput += `Name: ${name} With Salary: ${sal} `;
      }

      document.getElementById('bestRestaurant').children[2].textContent = bestRestaurantOutput;
      document.getElementById('workers').children[2].textContent = workersOutput;
   }
}