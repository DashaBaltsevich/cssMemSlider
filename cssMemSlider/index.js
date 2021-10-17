const slider = () => {
    const slider = document.querySelectorAll('.slider'),
        point = document.querySelectorAll('.point-li'),
        pointInner = document.querySelectorAll('.point'),
        sliderWrap = document.querySelector('.slider-wrap'),
        sliderContent = document.querySelector('.slider-content'),
        coursor = document.querySelector('.coursor'),
        sliderTexts = document.querySelectorAll('.slider-text');
    let currentSlider = 0,
        currentText = 0,
        interval;
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };
    const autoPlay = () => {
        prevSlide(slider, currentSlider, 'slider-active');
        prevSlide(point, currentSlider, 'point-active');
        prevSlide(sliderTexts, currentText, 'active-text');
        currentSlider++;
        currentText++;
        if(currentSlider >= slider.length) {
            currentSlider = 0;
            currentText = 0;
        }
        nextSlide(slider, currentSlider, 'slider-active');
        nextSlide(point, currentSlider, 'point-active');
        nextSlide(sliderTexts, currentText, 'active-text');
    };
    const startSlide = () => {
        interval = setInterval(autoPlay, 300000);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };
    const coursorMove = (event) => {
        coursor.style.width = 15 + "px";
        coursor.style.height = 15 + "px";
        coursor.style.top = event.pageY + "px";
        coursor.style.left = event.pageX + "px";
    };
    sliderWrap.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        prevSlide(slider, currentSlider, 'slider-active');
        prevSlide(point, currentSlider, 'point-active');
        prevSlide(sliderTexts, currentText, 'active-text');
        if(target.matches('.point-li') || target.matches('.point')) {
            point.forEach((elem, index) => {
                if(elem === target) {
                    currentSlider = index;
                    currentText = index;
                }
            });
            pointInner.forEach((elem, index) => {
                if(elem === target) {
                    currentSlider = index;
                    currentText = index;
                }
            });
        } 
        nextSlide(slider, currentSlider, 'slider-active');
        nextSlide(point, currentSlider, 'point-active');
        nextSlide(sliderTexts, currentText, 'active-text');
    });
    sliderContent.addEventListener('mouseover', (event) => {
        if (event.target.matches('.point-li') || event.target.matches('.point') || event.target.matches('.slider-points')) {
            stopSlide();
        }
    })
    sliderContent.addEventListener('mouseout', (event) => {
        if (event.target.matches('.point-li') || event.target.matches('.point')) {
            startSlide();
        }
    });
    //здесь должна быть реализована функция изменения курсора при наведении
    // sliderContent.addEventListener('mousedown', (event) => {
    //     event.stopPropagation();
    //     console.log(3);
    //     coursorMove(event);
    // });
    // sliderPoints.addEventListener('click', (event) => {
    //     console.log(4);
    //     coursor.style.opacity = 0;
    // });
    startSlide();
};
slider();
