// Моето решение
// function create(words) {
//    const content = document.getElementById('content');
   
//    // for every word in input list
//    for (let word of words) {
//       // create p, add textContent and style display:none
//       let p = document.createElement('p');
//       p.textContent = word;
//       p.style.display = 'none'

//       // create <div>, append <p> to it
//       let div = document.createElement('div');
//       div.appendChild(p);

//       // add event listener to div and add <div> to 'content'
//       div.addEventListener('click', onClick);
//       content.appendChild(div);

//       function onClick(ev) {
//          // първоначално мина с target, но трябва да
//          // използваме currentTarget, защото при кликване
//          // върху, вече показан, елемент <p>, браузърът хвърля грешка, тъй като
//          // <p> елемента няма .querySelector('p') / children
//          // curretTarget винаги сочи към елемента, от който е 'чут' ивента (div-a);  
//          ev.currentTarget.querySelector('p').style.display = '';
//       }
//    }
// }


// в клас
// -- изкарваме функцията onClick, извън цикъла; няма нужда да я презаписваме;
// -- правим проверка, за да избегнем грешката с кликването върху грешен елемент, <p>
// или между елементите, направо върху <body>, парента на <div>овете
function create(words) {
   const content = document.getElementById('content');
   
   // for every word in input list
   for (let word of words) {
      // create p, add textContent and style display:none
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';

      // create <div>, append <p> to it
      let div = document.createElement('div');
      div.appendChild(p);

      // add event listener to div and add <div> to 'content'
      div.addEventListener('click', onClick);
      content.appendChild(div);
   }

   function onClick(ev) {
      let thisTarget = ev.target;
      if (thisTarget.tagName == 'DIV' && thisTarget != content) {
            thisTarget.querySelector('p').style.display = '';
      }
   }
}