function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const q = document.getElementById('searchField').value;
      const container = document.getElementsByClassName('container')[0];
      const containerData = container.children[2];
      const rows = containerData.children;

      for (let row=0; row<rows.length; row++) {
         rows[row].className = "";

         for (let cell=0; cell<3; cell++) {
            let cell = rows[row].cells[cell];

            if (cell.textContent.includes(q)) {
               rows[row].className = "select";           
            }
         }
      }
   }
}