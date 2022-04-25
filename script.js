const ratings = document.querySelectorAll('.select');
const submit = document.querySelector('.submit');
const score = document.querySelector('.rating');
const scoreCard = document.querySelector('.rating-container');
const thankYou = document.querySelector('.thank-you-container');
var answerValue = '';
const result = document.querySelector('.result');

ratings.forEach(function(rating, index){
    //console.log(index);
    //console.log(rating);
    rating.addEventListener("click", function(e){
    e.preventDefault();
    const current = document.querySelectorAll(".select.active");
    //console.log("current", current.length);
    if (current.length === 0){
        submit.disabled = false;
      //  console.log("length is zero", current);
    }
    if(current[0]){
        current[0].classList.remove('active');
    }
    this.className += " active";
    answerValue = rating.dataset.answer;
    //console.log(answerValue);
    });
});

function storeAnswer(answerValue){
    //console.log("store answer",answerValue);
    result.innerHTML = answerValue;
}

submit.addEventListener('click', function(){
    scoreCard.style.display = 'none';
    thankYou.style.display = 'flex';
    storeAnswer(answerValue);
    //console.log('this works');
});