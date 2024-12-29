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
        toast.innerHTML = `${str} ${message}`;
        toastBox.appendChild(toast);
        if(message.includes('error')){
            toast.classList.add('error');
        }
        if(message.includes('Invalid')){
            toast.classList.add('Invalid');
        }
        setTimeout(()=>{
            toast.remove();
        },5000);
    })
})

