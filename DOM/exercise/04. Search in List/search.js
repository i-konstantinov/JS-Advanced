function search() {
   let counter = 0;
   const q = document.getElementById('searchText').value;
   const towns = document.getElementById('towns').children;
   
   for (let i=0; i<towns.length; i++) {
      let town = towns[i];
      
      if (town.textContent.includes(q)) {
         town.style.fontWeight = 'bold';
         town.style.textDecorationLine = 'underline';
         counter ++;
      } 
      else {
         town.style.fontWeight = 'normal';
         town.style.textDecorationLine = 'none';
      }
   }
   
   document.getElementById('result').textContent = `${counter} matches found`;
}
