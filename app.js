const claimOfferBtn = document.querySelector('#claim-btn');
const promotionalContent = document.querySelector('#promotional-container');
const closePromo = document.querySelector('#close-btn');



claimOfferBtn.addEventListener('click', () => {
    claimOfferBtn.style.display = 'none';
    promotionalContent.style.display = 'grid';
});

closePromo.addEventListener('click', () => {
    promotionalContent.style.display = 'none';
    claimOfferBtn.style.display = 'block';
})
