const carrossel = document.querySelector('.container-cards-carrosel');
const anterior = document.querySelector('.prev-btn');
const proximo = document.querySelector('.next-btn');
const tamanhoCard = document.querySelector('.container-cards--card').offsetWidth +40;


let currentIndex = 0;
proximo.addEventListener('click', function(){
    if(currentIndex < carrossel.children.length -1 ){
        currentIndex++;
        carrossel.style.transform =`translateX(-${currentIndex * tamanhoCard}px)`
    }
});
anterior.addEventListener('click', function() {
    if(currentIndex > 0){
        currentIndex--;
        carrossel.style.transform = `translateX(-${currentIndex * tamanhoCard}px)`
    }
})