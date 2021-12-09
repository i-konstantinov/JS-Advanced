function solve() {
   const form = document.querySelector('form');
   form.addEventListener('submit', onCreate);

   const posts = document.querySelector('main').querySelector('section');

   const archive = document.querySelector('.archive-section').querySelector('ol');


   function onCreate(ev) {
      ev.preventDefault();

      const creator = document.getElementById('creator').value;
      const title = document.getElementById('title').value;
      const category = document.getElementById('category').value;
      const content = document.getElementById('content').value;

      if (creator != "" && title != "" && category != "" && content != "") {
         const article = createArticle({ creator, title, category, content });
         posts.appendChild(article);
      } else {
         return;
      }
   }

   function createArticle(obj) {
      const result = document.createElement('article');

      result.innerHTML = `<h1>${obj.title}</h1><p>Category:<strong>${obj.category}</strong></p><p>Creator:<strong>${obj.creator}</strong></p><p>${obj.content}</p>`;

      const buttons = document.createElement('div');
      buttons.className = 'buttons';

      const deleteBtn = document.createElement('button');
      deleteBtn.className = "btn delete";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener('click', (ev) => {
         const currentArticle = ev.target.parentElement.parentElement;
         currentArticle.remove();
      });

      const archiveBtn = document.createElement('button');
      archiveBtn.className = "btn archive";
      archiveBtn.textContent = "Archive";
      archiveBtn.addEventListener('click', (ev) => {
         const li = document.createElement('li');
         li.textContent = obj.title;
         archive.appendChild(li);

         const sorted = Array.from(archive.children).sort((a, b) => a.textContent.localeCompare(b.textContent));
         archive.innerHTML = '';
         sorted.forEach(e => archive.appendChild(e));

         const currentArticle = ev.target.parentElement.parentElement;
         currentArticle.remove();
      });

      buttons.appendChild(deleteBtn);
      buttons.appendChild(archiveBtn);

      result.appendChild(buttons);

      return result;
   }
}
