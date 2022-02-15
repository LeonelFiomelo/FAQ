const card__link = document.querySelectorAll('.card__link');
const card__itemInfo = document.querySelectorAll('.card__item-info');
const card__linkRow = document.querySelectorAll('.card__link-row');

for (let i = 0; i < card__link.length; i++) {
    const element = card__link[i];
    element.addEventListener('click', () => {
        card__itemInfo[i].classList.toggle('card__item-info--show');
        card__linkRow[i].classList.toggle('card__link-row--rotate');
    })
}


