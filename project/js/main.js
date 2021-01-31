window.onload = function(){
   let comments = [];
   loadComments();

   document.querySelector('.btn__form').onclick = function(){
      event.preventDefault();
      let commentName = document.querySelector('.input__name');
      let commentBody = document.querySelector('.form__area');

      let comment = {
         name : commentName.value,
         body : commentBody.value,
         time : Math.floor(Date.now() / 1000)
      }

      commentName.value = '';
      commentBody.value = '';

      comments.push(comment);

      // console.log(comment);
      saveComments();
      showComments();
   }

   function saveComments(){
      localStorage.setItem('comments', JSON.stringify(comments));
   }

   function showComments (){
      let commentField = document.querySelector('.comments__block');
      let out = '';
      comments.forEach(function(item){
         out += ` <div class="comments">`;
          out += `<p class="comments__title">${item.name}<span>${timeConverter(item.time)}</span></p>`;
          out += `<p class="comments__text">${item.body}</p>`;
          out += ` </div>`;
      });
      commentField.innerHTML = out;
      // console.log(out)
  }
  
   function loadComments(){
      if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
      showComments();
   }

   function timeConverter(UNIX_timestamp){
      let a = new Date(UNIX_timestamp * 1000);
      let months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
      let year = a.getFullYear();
      let month = months[a.getMonth()];
      let date = a.getDate();
      let hour = a.getHours();
      let min = a.getMinutes();
      let sec = a.getSeconds();
      let time = date + ' ' + month + ' ' + year;
      return time;
    }


}



