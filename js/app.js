const card__link = document.querySelectorAll('.card__link');
const card__block = document.querySelectorAll('.card__block');
const card__linkRow = document.querySelectorAll('.card__link-row');
const card__itemInfo = document.querySelectorAll('.card__item-info');

for (let i = 0; i < card__link.length; i++) {
    const element = card__link[i];
    element.addEventListener('click', () => {

        for (let j = 0; j < card__link.length; j++) {
            if (i != j) {
                card__block[j].classList.remove('card__block--show');
                card__linkRow[j].classList.remove('card__link-row--rotate');
                card__itemInfo[j].classList.remove('card__item-info--show');
            }
        }

        card__block[i].classList.toggle('card__block--show');
        card__linkRow[i].classList.toggle('card__link-row--rotate');
        card__itemInfo[i].classList.toggle('card__item-info--show');
    })
}


