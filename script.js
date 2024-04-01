const textareaEl=document.querySelector('.textarea');
const twitterCharacterEl=document.querySelector('.stat__number--twitter');
const facebookcharacterEl=document.querySelector('.stat__number--facebook');
const characterEl=document.querySelector('.stat__number--characters');
const wordsCharacterEl=document.querySelector('.stat__number--words');

const inputHandler = () => {
    //example of input validation
    if(textareaEl.value.includes('<script>')){
        alert('you can not use that');
        textareaEl.value=textareaEl.value.replace('<script>' , ' ');
    }

    //determine new numbers
  let numberOfWords = textareaEl.value.split(' ').length;
  if(textareaEl.value.length===0){
    numberOfWords=0;
  }
  const numberOfCharacters= textareaEl.value.length;
  const twitterCharacterLeft = 280 - numberOfCharacters;
  const facebookcharacterLeft = 2200 - numberOfCharacters;
  
    //set new numbers
     wordsCharacterEl.textContent = numberOfWords;
    characterEl.textContent=numberOfCharacters;
    twitterCharacterEl.textContent=twitterCharacterLeft;
    facebookcharacterEl.textContent = facebookcharacterLeft;

  //add visiual indicator if limits is exceeeded
    if (twitterCharacterLeft < 0 ){
        twitterCharacterEl.classList.add('stat__number--limit');
    }else {
        twitterCharacterEl.classList.remove('stat__number--limit');
    };
    
      if (facebookcharacterLeft < 0 ){
        facebookcharacterEl.classList.add('stat__number--limit');
      }else{
        facebookcharacterEl.classList.remove('stat__number--limit');
      };
};

textareaEl.addEventListener('input',inputHandler);