// МОЕТО РЕШЕНИЕ, което работи в браузъра, но не и в джъдж

function solve() {
  // # configure event listeners #
  // select all btns and textareas
  // generate -> table generation
  // buy -> buy furniture
  const [generate, buy] = Array.from(document.querySelectorAll('button'));
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const wrapperTable = document.querySelector('tbody');

  generate.addEventListener('click', tableGenerator);
  buy.addEventListener('click', buyFurniture);

  function tableGenerator(ev) {
    const inputArr = JSON.parse(input.value);

    for (let obj of inputArr) {
      const newRowElem = document.createElement('tr');

      const imgCell = document.createElement('td');
      const img = document.createElement('img');
      img.src = obj.img;
      imgCell.appendChild(img);
      newRowElem.appendChild(imgCell);

      const nameCell = document.createElement('td');
      const name = document.createElement('p');
      name.textContent = obj.name;
      nameCell.appendChild(name);
      newRowElem.appendChild(nameCell)

      const priceCell = document.createElement('td');
      const price = document.createElement('p');
      price.textContent = obj.price;
      priceCell.appendChild(price);
      newRowElem.appendChild(priceCell)

      const decFactorCell = document.createElement('td');
      const decF = document.createElement('p');
      decF.textContent = obj.decFactor;
      decFactorCell.appendChild(decF);
      newRowElem.appendChild(decFactorCell);

      const checkBoxCell = document.createElement('td');
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.checked = false;
      checkBoxCell.appendChild(checkBox);
      newRowElem.appendChild(checkBoxCell);

      wrapperTable.appendChild(newRowElem);
    }
  }


  function buyFurniture(ev) {

    const checkedBoxes = Array.from(wrapperTable.querySelectorAll('input[type="checkbox"]:checked'));
    
    let names = [];
    let totalPrice = 0;
    let decFactorSum = 0;

    for (let b of checkedBoxes) {
      const row = b.parentElement.parentElement;
      
      names.push(row.children[1].textContent);
      totalPrice += Number(row.children[2].textContent);
      decFactorSum += Number(row.children[3].textContent);
    }

    output.value = `Bought furniture: ${names.join(', ')}\n`
      + `Total price: ${totalPrice.toFixed(2)}\n`
      + `Average decoration factor: ${decFactorSum / checkedBoxes.length}`;
  }
}