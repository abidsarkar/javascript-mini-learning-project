let toastBox = document.getElementById('toastBox');
let buttons = document.querySelectorAll('.showToast');
buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        // console.log("toast");
        let message = button.getAttribute('data-message');
        let icon = button.getAttribute('data-icon');
        let str;
        if (icon === 'success') {
            str = '<i class="fa-solid fa-circle-check"></i>';
          }
          if (icon === 'error') {
            str = '<i class="fa-solid fa-circle-xmark"></i>';
          }
          if (icon === 'Invalid') {
            str = '<i class="fa-solid fa-circle-exclamation"></i>';
          }
        let toast = document.createElement("div");
        // add the class toast
        toast.classList.add('toast');
        //<i class="fa-solid fa-circle-check"></i>
        // <i class="fa-solid fa-circle-xmark"></i>
        //<i class="fa-solid fa-circle-exclamation"></i>
        
        toast.innerHTML = `${str} ${message}`;
        toastBox.appendChild(toast);
    })
})

