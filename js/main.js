let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');

    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText;
        select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        // console.log(currentText);
        currentText.innerText = text;
        select.classList.add('is-active');

    }
};

select();

const menuMob = document.querySelector('.burger');
const cLosed = document.querySelector('.closed');
const menuBlock = document.querySelector('.wrapper-list');

menuMob.onclick = function () {
    menuBlock.classList.toggle('wrapper-list__active');
};

cLosed.onclick = function () {
    menuBlock.classList.remove('wrapper-list__active');
};

// const slider = document.querySelector('.slider');
// const sl = new Swiper(slider, {
//     loop: true,
//     speed: 4000,
//     slidesPerView: '7.5',
//     autoplay: {
//         enabled: true,
//         delay: 0,
//     },
//     breakpoints: {
//         320: {
//             spaceBeetwen: 4,
//             slidesPerView: '3.9',
//         },
//         // when window width is >= 575px
//         575: {
//             spaceBeetwen: 8,
//             slidesPerView: '4.7',
//         },
//         // when window width is >= 767px
//         767: {
//             slidesPerView: '5.7',
//             spaceBeetwen: 12,
//         },
//         // when window width is >= 991px
//         991: {
//             slidesPerView: '6.5',
//             spaceBeetwen: 16,
//         },
//         // when window width is >= 1200px
//         1200: {
//             slidesPerView: '8.5',
//         }
//     }
// });