const seeName = document.getElementById('see-name');
const btnName = document.getElementById('btn-name');

btnName.addEventListener('click', () => {
    seeName.classList.toggle('name-active');
});