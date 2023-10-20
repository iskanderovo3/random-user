const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

// toggle mode 
const toggleModeBtn = ()=>{
    darkBtn.classList.toggle('hidden');
    lightBtn.classList.toggle('hidden');
    body.classList.toggle('dark-mode');
}

const modeLocal = localStorage.getItem('mode');

if(modeLocal){
    toggleModeBtn()
}

darkBtn.addEventListener('click', ()=>{
    toggleModeBtn();
    localStorage.setItem('mode', 'dark-mode')
})

lightBtn.addEventListener('click', ()=>{
    toggleModeBtn();
    localStorage.setItem('mode', '')
})