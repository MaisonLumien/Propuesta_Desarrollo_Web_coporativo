
document.getElementById('menuBtn').onclick=()=>document.getElementById('nav').classList.toggle('show');
document.getElementById('form').onsubmit=(e)=>{
e.preventDefault();
const msg='Hola, deseo una cotización para impresoras.';
window.open('https://wa.me/573024157799?text='+encodeURIComponent(msg));
};
