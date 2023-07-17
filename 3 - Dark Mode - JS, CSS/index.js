/*
Change colors
*/
const btnSwitch = document.querySelector('#switch');

const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
};

btnSwitch.addEventListener('click', toggleDarkMode);
