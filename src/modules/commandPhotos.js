const commandPhotos = () => {
    const command = document.querySelector('#command');
    let srcImage;

    command.addEventListener('mouseover', (event) => {
        if (event.target.src){
            srcImage = event.target.src;
            event.target.src = event.target.dataset.img;
        }
    });

    command.addEventListener('mouseout', (event) => {
        if (event.target.src){
            event.target.src = srcImage;
        }
    });
};  
export default commandPhotos;