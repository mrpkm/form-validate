
// toggle
const circle = document.querySelector('.circle');
const prices = document.querySelectorAll('.plan-price');
const tenures = document.querySelectorAll('.tenure');
let isToggled = false;

circle.addEventListener('click', () => {
    isToggled = !isToggled;

    if (isToggled) {
        circle.style.transform = 'translateX(33px)';
        for (let i = 0; i < tenures.length; i++) {
            tenures[i].style.display = 'none';
        }
        for (let i = 0; i < prices.length; i++) {
            const currentPrice = parseInt(prices[i].textContent);
            prices[i].textContent = (currentPrice * 10).toString();
        }
    } else {
        circle.style.transform = 'translateX(0)';
        for (let i = 0; i < prices.length; i++) {
            const currentPrice = parseInt(prices[i].textContent);
            prices[i].textContent = (currentPrice / 10).toString();
        }
        for (let i = 0; i < tenures.length; i++) {
            tenures[i].style.display = 'block';
        }
    }
});