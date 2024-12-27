let toastBox = document.getElementById('toastBox');
let buttons = document.querySelectorAll('.showToast');
buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        // console.log("toast");
        let message = button.getAttribute('data-message');
        let toast = document.createElement("div");
        toast.classList.add('toast');
        toast.innerHTML = message;
        toastBox.appendChild(toast);
    })
})

