const scrolls = () => {
    const scrollServiceBlock = document.querySelector('a>img');
    let scrInterval;

    const scrollSB = () => {
        let scrollNow = document.documentElement.scrollTop;
        scrInterval = requestAnimationFrame (scrollSB);
        scrollNow += 20;
        if ( scrollNow <= 880){
            document.documentElement.scrollTop = scrollNow;
        }else{
            cancelAnimationFrame(scrInterval);
        }
    };
    scrollServiceBlock.addEventListener('click', function(){
        scrInterval = requestAnimationFrame (scrollSB);
    }); 
};

export default scrolls;