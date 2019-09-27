const toggleMenu = () => {
    const menu = document.querySelector('menu');
    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (!target.closest('.active-menu') || target.closest('.close-btn') || target.href ){
            menu.classList.remove('active-menu');
        } if (target.closest('.menu')){
            menu.classList.add('active-menu');
        }
    });
};
export default toggleMenu;