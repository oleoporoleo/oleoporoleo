// https://www.instagram.com/mira.assessoria/
// \/ \/ \/ Open Multiple Links at 1 click \/ \/ \/
// function yourlink() {

//     var locs = ['https://www.instagram.com/mira.assessoria/']

//     for (let i = 0; i < locs.length; i++) {
//         window.open(locs[i])
//     }
// };

// Counter
const counters = document.querySelectorAll('.num');

counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 250;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 12);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});


// Make scroll btn disappear on scroll
const header = document.querySelector('.scroll-down');

window.onscroll = function () {
    var top = window.scrollY;
    // console.log(top);
    if (top >= 200) {
        header.classList.add('active')
    } else {
        header.classList.remove('active');
    }
}
// Make scroll btn disappear on scroll