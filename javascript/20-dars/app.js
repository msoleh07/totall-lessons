const li = document.querySelectorAll('header .header_links ul li')[0]
const extra_information = document.querySelectorAll('.extra_information')[0]
const li2 = document.querySelectorAll('header .header_links ul li')[1]
const extra_information2 = document.querySelectorAll('.extra_information')[1]


console.log(extra_information2);

li.addEventListener('mouseenter', () => {
    extra_information.style.top = '44px'
})

extra_information.addEventListener('mouseleave', () => {
    extra_information.style.top = '-100%'
})

li2.addEventListener('mouseenter', () => {
    extra_information2.style.top = '44px'
})

extra_information2.addEventListener('mouseleave', () => {
    extra_information2.style.top = '-100%'
})

