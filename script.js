const btnMobile = document.querySelector('.btn-mobile');
const navList = document.querySelector('.nav-list');

btnMobile.addEventListener('click', () => {
  const active = btnMobile.classList.toggle('active');
  navList.classList.toggle('active');

  btnMobile.textContent = active ? 'X' : '☰';
});
