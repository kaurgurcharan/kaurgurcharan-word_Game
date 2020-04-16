
  const message = document.querySelector('.message');
  const guess = document.querySelector('input');
  const btn = document.querySelector('.btn');
  let play = false;
  let newWords = "";
  let randWords = "";
  let words = ['python', 'javascript', 'c++', 'php', 'java', 'c#', 'html', 'css',
                'reactjs', 'angular', 'swift', 'android', 'sql']; 

  const createNewWords = () => {
      let randomNumber = Math.floor(Math.random() * words.length);
      //console.log(randomNumber);
      let newTempWords = words[randomNumber];
      return newTempWords;
  }
  const scrambleWords = (arr) => {
    for(let i = arr.length - 1; i>=0 ; i--){
      let temp = arr[i];
      let j = Math.floor(Math.random() * (i+1));      
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  btn.addEventListener('click', function(){
    if(!play) {
      play = true;
      btn.innerHTML = "Guess";
      guess.classList.toggle('hidden');
      newWords = createNewWords();
      randWords = scrambleWords(newWords.split("")).join("");
      message.innerHTML = `Guess the word: ${randWords}`;
    } else {
      let tempWord = guess.value;
      if( tempWord === newWords) {
        console.log("Correct");
        play = false;
        message.innerHTML = `Awesome the word is ${newWords}`;
        btn.innerHTML = "Start Again";
        guess.classList.toggle('hidden');
        guess.value = "";
      } else {
        console.log("Wrong");
        message.innerHTML = `Sorry the word is incorrect. Try Again: ${randWords}`;
      }
    }
  })
