  //Инициализация первого слайдера
const resultSwiper = new Swiper('.result-slider', {
    direction: 'horizontal',
    loop: true,
    slideToClickedSlide: true,    
    navigation: {
      nextEl: '.result-slider__next',
      prevEl: '.result-slider__prev',
    },     
    breakpoints: {     
      320: {
        slidesPerView: 1,
        spaceBetween: 20,      
      },
     
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoHeight:true, 
      }
    }
  });
const swiperPrev = document.querySelector('.result-slider__prev');
const swiperNext = document.querySelector('.result-slider__next');
swiperPrev.addEventListener('click', () => {
  resultSwiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
  resultSwiper.slideNext();
})
//Инициализация  слайдера library
window.onload = function() {
const librarySwiper = new Swiper('.library-slider', {
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  autoHeight:true,  
  centeredSlides:true,
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
  navigation: {
    nextEl: '.library-slider__next',
    prevEl: '.library-slider__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,     
    },   
    768: {
      slidesPerView: 1,
      spaceBetween: 30,      
    },
    1000: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      
    }
  }
});
//Инициализация слайдера care
const careSwiper = new Swiper('.care-slider', {
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,  
  autoHeight:true,  
  centeredSlides:true,
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
  navigation: {
    nextEl: '.care-slider__next',
    prevEl: '.care-slider__prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,     
    },   
    768: {
      slidesPerView: 1,
      spaceBetween: 30,      
    },
    1000: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      
    }
  }
});
//Инициализация слайдера perm
const permSwiper = new Swiper('.perm-slider', {
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  autoHeight:true,  
  centeredSlides:true,
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
  navigation: {
    nextEl: '.perm-slider__next',
    prevEl: '.perm-slider__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,     
    },   
    768: {
      slidesPerView: 1,
      spaceBetween: 30,      
    },
    1000: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      
    }
  }
});
//Инициализация слайдера styling
const stylingSwiper = new Swiper('.styling-slider', {
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,  
  autoHeight:true,  
  centeredSlides:true,
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
  navigation: {
    nextEl: '.styling-slider__next',
    prevEl: '.styling-slider__prev',
  },
  breakpoints: {  
    320: {
      slidesPerView: 1,
      spaceBetween: 20,     
    },   
    768: {
      slidesPerView: 1,
      spaceBetween: 30,      
    },
    1000: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      
    }
  }
});
//Инициализация слайдера products
const productsSwiper = new Swiper('.products-slider', {
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,  
  autoHeight:true,  
  centeredSlides:true,
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
  navigation: {
    nextEl: '.products-slider__next',
    prevEl: '.products-slider__prev',
  },
  breakpoints: {  
    320: {
      slidesPerView: 1,
      spaceBetween: 20,     
    },   
    768: {
      slidesPerView: 1,
      spaceBetween: 30,      
    },
    1000: {
      slidesPerView: 'auto',
      spaceBetween: 30,      
    }
  }
});
}
  function ham(){
    const ham=document.querySelector('.hamburger');
    const ham_menu=document.querySelector('.ham-menu');
    const body=document.querySelector('body');
    function toggleMenu(){
        ham.classList.toggle('active');
        ham_menu.classList.toggle('is-active');    
        body.classList.toggle('locked'); 
    }
    ham.addEventListener('click',function(e){
    e.preventDefault();  
    toggleMenu();
    })  
    ham_menu.addEventListener('click',function(e){  
      let target=e.target;      
      if (target.className==='menu__link') {    
        toggleMenu();
      }       
    })    
    };
    ham();
  // Функция работы модального окна с формой
function toggleModal(modalWindow, openButton, closeButton) {
  const openBtns = document.querySelectorAll(openButton);
  const modal = document.querySelector(modalWindow);
  if (modal) {
    const closeBtn = modal.querySelector(closeButton);
    openBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.style.overflowY = "hidden";
        modal.classList.add('active');
      });
    });
    closeBtn.addEventListener("click", () => {
      document.body.style.overflowY = "";
      modal.classList.remove('active');
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeBtn.click();
      }
    });
  }
}

toggleModal(".form-modal", ".btn", ".btn-close");
toggleModal(".policy-modal", ".btn_policy", ".btn-close");

  //функция переключения табов
  function toggleTab() {
    tabs = document.querySelectorAll(".tab");
    tabContents = document.querySelectorAll(".tab-content");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", () => {
        for (let i = 0; i < tabs.length; i++) {
          tabs[i].classList.remove("active");
          tabContents[i].classList.remove("active");
        }
        tabs[i].classList.add("active");
        tabContents[i].classList.add("active");
      });
    }
  }
  toggleTab();
  //функция запуска видео о бренде
  function brandVideo() {
    const videoBtn = document.querySelector('.video__btn');
    const meet = document.querySelector('.meet');
    videoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      meet.insertAdjacentHTML('afterbegin', '<iframe class="meet__iframe" allow=autoplay width="100%" height="100%" src="https://www.youtube.com/embed/Mad2tToZwgY?autoplay=1"  frameborder="0" ></iframe>');
    })
  }
  brandVideo();
  function brandVideo1() {
    const videoBtn = document.querySelector('.brand__img');
    const brand = document.querySelector('.brand__video');
    const videoPoster = document.querySelector('.brand__img');
    videoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      brand.insertAdjacentHTML('afterbegin', '<iframe class="brand__iframe" allow=autoplay allowfullscreen width="100%" height="100%" src="https://www.youtube.com/embed/qlhZK2sl8Ts?autoplay=1" frameborder="0"></iframe>');
      videoPoster.style.display = 'none';
    })
  }
  brandVideo1();
  //функция для отработки действий при скролле
  function scrollAсtion() {
    window.addEventListener("scroll", () => {
      if (document.documentElement.clientWidth > 768) {
        elemAnimate(".h2", "titleAnimation");
      }
      elemAnimate(".brand__text", "appear-up");
      elemAnimate(".brand__info", "appear-up-info");
      elemAnimate(".result-slide_slide1", "in-scale_slide1");
      elemAnimate(".result-slide_slide2", "in-scale_slide2");
      elemAnimate(".result-slide_slide3", "in-scale_slide3");
      elemAnimate(".result-slide_slide3", "in-scale_slide3");
      if (document.documentElement.clientWidth > 900) {
        elemAnimate(".result-slider__next", "in-scale_arrow-next");
      }
    });
  }
  //Функция, которая проверяет, появился ли элемент в области видимости
  function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;
    return top + height >= 0 && height + window.innerHeight >= bottom;
  }
  //Функция анимации элемента, который появляется в области видимости
  function elemAnimate(elemClass, animationClass) {
    let el = document.querySelectorAll(elemClass);
    el.forEach((element) => {
      if (isPartiallyVisible(element)) {
        element.classList.add(animationClass);
      }
    });
  }
  scrollAсtion();
  //функция плавающего меню
  function menuFixed() {
    window.onscroll = function () {
      const menu = document.querySelector('.menu');
      const back = document.querySelector('.sticky-back');
      let sticky = menu.offsetTop;
      if (window.pageYOffset > sticky) {
        menu.classList.add("sticky");
        const stickyMenu = document.querySelector('.sticky');
        // if (document.documentElement.clientWidth > 768) 
        // {
          back.style.visibility = 'visible';
          back.style.opacity = '1';
        // }
        stickyMenu.style.opacity = '1';
      } else {
        menu.classList.remove("sticky");
        back.style.visibility = 'hidden';
        back.style.opacity = '0';
      }
    };
  }
  //end of menuFixed()
  menuFixed();
  //функция плавной прокрутки к секции
  function scrollToSection() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.menu__link').forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href').replace('#', '') === entry.target.id);
          })
        }
      })
    }, {
      threshold: 0.5,
    });
    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section);
    })
    document.querySelector('.menu__list').addEventListener('click', (e) => {
      if (e.target.classList.contains('menu__link')) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        window.scrollTo({
          top: document.getElementById(id).offsetTop - document.querySelector('.sticky-back').offsetHeight,
          behavior: "smooth"
        });
      }
    })
  }
  //end of scrollToSection()
  scrollToSection();
  //функции модальных окон с видео
function videoModal(modalWindow, openButton, closeButton) {
    const openBtns = document.querySelectorAll(openButton);    
      const modal = document.querySelector(modalWindow);      
      if (modal) {
        const closeBtn = modal.querySelector(closeButton);    
        openBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {           
        e.preventDefault();      
        const content = document.querySelector('.video-modal__content');
        content.insertAdjacentHTML('afterbegin', '<iframe class ="video1" width="960" height="540"  src="https://www.youtube.com/embed/XitxkwKyYLM?autoplay=1" title="YouTube video player" frameborder="0" allow=autoplay allowfullscreen></iframe>');     
        modal.classList.add('active');
        document.body.style.overflowY = "hidden";
      });
      });  
        closeBtn.addEventListener("click", () => {         
          modal.classList.remove('active');   
          document.body.style.overflowY = "";
          document.querySelector('.video1').remove();
        });
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            closeBtn.click();
          }
        });
      }
    }
    function videoModal(modalWindow, openButton, closeButton) {
        const openBtns = document.querySelectorAll(openButton);    
          const modal = document.querySelector(modalWindow);      
          if (modal) {
            const closeBtn = modal.querySelector(closeButton);    
            openBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {           
            e.preventDefault();      
            const content = document.querySelector('.video-modal__content');
            content.insertAdjacentHTML('afterbegin', '<iframe class ="video1" width="960" height="540"  src="https://www.youtube.com/embed/XitxkwKyYLM?autoplay=1" title="YouTube video player" frameborder="0" allow=autoplay allowfullscreen></iframe>');     
            modal.classList.add('active');
            document.body.style.overflowY = "hidden";
          });
          });  
            closeBtn.addEventListener("click", () => {         
              modal.classList.remove('active');   
              document.body.style.overflowY = "";
              document.querySelector('.video1').remove();
            });
            modal.addEventListener("click", (e) => {
              if (e.target === modal) {
                closeBtn.click();
              }
            });
          }
        }   
    videoModal('.video-modal','.placeholder1','.btn-close_white');
    function videoModal2(modalWindow, openButton, closeButton) {
        const openBtns = document.querySelectorAll(openButton);    
          const modal = document.querySelector(modalWindow);      
          if (modal) {
            const closeBtn = modal.querySelector(closeButton);    
            openBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {           
            e.preventDefault();      
            const content = document.querySelector('.video2-modal__content');
            content.insertAdjacentHTML('afterbegin', '<iframe class ="video2" width="960" height="540" src="https://www.youtube.com/embed/80C5milVfO4?autoplay=1" title="YouTube video player" frameborder="0" allow=autoplay allowfullscreen></iframe>');     
            modal.classList.add('active');
            document.body.style.overflowY = "hidden";
          });
          });  
            closeBtn.addEventListener("click", () => {         
              modal.classList.remove('active');   
              document.body.style.overflowY = "";
              document.querySelector('.video2').remove();
            });
            modal.addEventListener("click", (e) => {
              if (e.target === modal) {
                closeBtn.click();
              }
            });
          }
        }
      videoModal2('.video2-modal','.placeholder2','.btn-close_white');  
  //функция масок формы
Inputmask({regex:"[a-zA-Zа-яА-я-]*"}).mask(document.getElementsByName('name'));
Inputmask({regex:"[a-zA-Zа-яА-я-]*"}).mask(document.getElementsByName('city'));
document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');
    var getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }
    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }
    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }
        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})
//валидация формы
function validateForms(selector, rules) {
    new window.JustValidate(selector, {
        rules: rules,
        messages: {
            name: 'Обязательное поле. Должно содержать только буквы и знак тире "-"',
            email: 'Обязательное поле. Введите корректный адрес email',
            tel: 'Обязательное поле. Введите номер телефона',
            city: 'Обязательное поле. Введите название Вашего города',
          },
        submitHandler: function (form, values, ajax) {
            console.log(form);
            
            let formData = new FormData(form);
            fetch("mail.php", {
                method: "POST",
                body: formData
            })
            .then(function(data) {       
                form.reset();
                successModal(".thanks-modal",".btn-close"); 
                                          
            });
        }
    });
}
validateForms('.form', { email: { required: true, email: true }, name: { required: true }, tel: { required: true },city: { required: true } });
// Функция работы модального окна thanks
function successModal(modalWindow, closeButton) {  
    const modal = document.querySelector(modalWindow);
    const closeBtn = modal.querySelector(closeButton); 
    const btn = document.querySelector('.submit-btn-wrap');    
    document.body.style.overflowY = "";
    modal.classList.add('active');
    btn.style.pointerEvents='none';    
    setTimeout(() => closeBtn.click(), 3000);   
      closeBtn.addEventListener("click", () => {
        modal.classList.remove('active');
        document.body.style.overflowY = "";
        const formModal = document.querySelector('.form-modal');
        formModal.classList.remove('active');
      });
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeBtn.click();
        }
      });
    }


