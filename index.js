// Banner Vid Pause Function ------------------------------------

const pausebtn = document.getElementById('pausevid');
const vid = document.getElementById('bannervid');



const handleVidPause = (event) => {
    if (!vid.paused) {
        vid.pause();
        pausebtn.style.backgroundImage = "url('./Resources/play.svg')";
} else {
    vid.play()
    pausebtn.style.backgroundImage = "url('./Resources/pause.svg')";
}};
 
pausebtn.addEventListener("click", handleVidPause);

// Image Carousel Function ----------------------------------------

//Slide Auto Function
const autoSlide = async  () => {
    const slide1 = "url('./Resources/ss1.jpg')";
    const slide2 = "url('./Resources/ss2.jpg')";
    const slide3 = "url('./Resources/ss3.jpg')";
    const slide4 = "url('./Resources/ss4.jpg')";
    const slide5 = "url('./Resources/ss5.jpg')";

    const SlideArr = [slide1, slide2, slide3, slide4, slide5];

    const slideTime = (time) => {
        return new Promise(resolve => setTimeout(resolve, time))
    };

    let slideState = true; 

    const handleSlidePause = (event) => {
        if (slideState != false) {
        slideState = false;
        slidePauseBtn.style.backgroundImage = "url('./Resources/play.svg')";
    } else {
        slideState = true;
        slidePauseBtn.style.backgroundImage = "url('./Resources/pause.svg')";
        autoSlide();
    }

    }
    
    const slidePauseBtn = document.getElementById('slidePauseBtn');

    slidePauseBtn.addEventListener('click', handleSlidePause);



    do {
        for (let i=0; i <= SlideArr.length; i++) {
            await slideTime(6000);
            slide.style.backgroundImage = SlideArr[i];
                
                if (i === 0 ) {
                    slideBtn1.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                    slideBtn2.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn3.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn4.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn5.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';

                }

                if (i === 1) {
                    slideBtn1.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn2.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                    slideBtn3.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn4.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn5.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                }

                if (i === 2) {
                    slideBtn1.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn2.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn3.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                    slideBtn4.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn5.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                }

                if (i === 3) {
                    slideBtn1.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn2.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn3.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn4.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                    slideBtn5.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                }

                if (i === 4) {
                    slideBtn1.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn2.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn3.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn4.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    slideBtn5.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                } 
            }}
        while (slideState); };

// Slide Controls
const slideBtn1 = document.getElementById('slideIndicator1');
const slideBtn2 = document.getElementById('slideIndicator2');
const slideBtn3 = document.getElementById('slideIndicator3');
const slideBtn4 = document.getElementById('slideIndicator4');
const slideBtn5 = document.getElementById('slideIndicator5');
const slide = document.getElementById('ssUpperRight')

const handleBtn1 = (event) => {
    slideBtn1.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    slide.style.backgroundImage = "url('./Resources/ss1.jpg')";

    slideBtn2.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn3.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn4.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn5.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';

}

const handleBtn2 = (event) => {
    slideBtn2.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    slide.style.backgroundImage = "url('./Resources/ss2.jpg')";

    slideBtn1.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn3.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn4.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn5.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
}

const handleBtn3 = (event) => {
    slideBtn3.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    slide.style.backgroundImage = "url('./Resources/ss3.jpg')";

    slideBtn1.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn2.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn4.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn5.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
}

const handleBtn4 = (event) => {
    slideBtn4.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    slide.style.backgroundImage = "url('./Resources/ss4.jpg')";

    slideBtn1.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn2.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn3.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn5.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
}

const handleBtn5 = (event) => {
    slideBtn5.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    slide.style.backgroundImage = "url('./Resources/ss5.jpg')";

    slideBtn1.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn2.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn3.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slideBtn4.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
}

slideBtn1.addEventListener("click", handleBtn1);
slideBtn2.addEventListener("click", handleBtn2);
slideBtn3.addEventListener("click", handleBtn3);
slideBtn4.addEventListener("click", handleBtn4);
slideBtn5.addEventListener("click", handleBtn5);



//Slide Pause Button

autoSlide();