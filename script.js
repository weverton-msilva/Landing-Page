// Função para o menu mobile
const btnMobile = document.querySelector('.btn-mobile');
const navList = document.querySelector('.nav-list');

btnMobile.addEventListener('click', () => {
  navList.classList.toggle('active');
  btnMobile.classList.toggle('active');
  btnMobile.innerHTML = btnMobile.innerHTML === '☰' ? 'X' : '☰';
  btnMobile.style.backgroundColor = btnMobile.innerHTML === 'X' ? '#FBEFE7' : '#EB7E00';
  btnMobile.style.border = btnMobile.innerHTML === 'X' ? '1px solid #EB7E00' : '1px solid transparent';
  btnMobile.style.color = btnMobile.innerHTML === 'X' ? '#EB7E00' : '#FFFFFF';
})
