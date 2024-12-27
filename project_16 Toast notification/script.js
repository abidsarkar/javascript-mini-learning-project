let toastBox = document.getElementById('toastBox');
let buttons = document.querySelectorAll('.showToast');
buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        console.log("toast");
        let toast = document.createElement("div");
        toast.classList.add('toast');
        toast.innerHTML = 'success';
        toastBox.appendChild(toast);
    })
})

