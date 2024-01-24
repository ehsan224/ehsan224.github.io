
<button on:click={() => resetGame()} class="position-button">Reset</button>
<script>
  var blue = 0;
  var red = 0;
  var tur = false;
  let flippedcards = [];
  let flipcount = 0;
  let cards = [];
  let timer;

  const images = [
    "https://picsum.photos/200/300?grayscale",
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/200/300/?blur",
    "https://picsum.photos/id/22/367/267",
    "https://picsum.photos/id/26/367/267",
    "https://picsum.photos/id/15/367/267",
  ];

  const duplicate = [...images, ...images];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function resetGame() {
    clearTimeout(timer);
    blue = 0;
    red = 0;
    tur = false;
    cards = [];
    flippedcards = [];
    flipcount = 0;
    const shuffledArray = shuffle(duplicate);

    for (let index = 0; index < 12; index++) {
      cards.push({
        id: index, // TODO: unique ids per card card
        img: shuffledArray[index], // TODO: unique images per card card
        flipped: false, // TODO: think
        completed: false,
      });
    }
    startTimer();
  }

  const shuffledArray = shuffle(duplicate);

  for (let index = 0; index < 12; index++) {
    cards.push({
      id: index,
      img: shuffledArray[index],
      flipped: false,
      completed: false,
    });
  }

  function startTimer() {
    timer = setTimeout(() => {
      endTurn();
    }, 10000);
  }

  function resetTimer() {
    clearTimeout(timer);
    startTimer();
  }

  function endTurn() {
    if (flipcount > 0) {
      cards.forEach((card) => {
        card.flipped = card.completed;
      });
      flippedcards = [];
      flipcount = 0;
      cards = cards;
      tur = !tur;
      resetTimer();
    }
  }

  function flip(card) {
    // flip card over if two cards are not already flipped
    if (!card.flipped && flipcount < 2 && !flippedcards.includes(card)) {
      card.flipped = true;
      flippedcards.push(card);
      flipcount++;

       // flip the cards over after 2s from seeing both cards
      if (flipcount === 2) {
        if (flippedcards[0].img === flippedcards[1].img) {
          flippedcards.forEach((completedCard) => {
            completedCard.completed = true;
          });
          tur ? blue++ : red++;
        }

        setTimeout(() => {
        // flip over cards that have not been marked as "completed"
          endTurn();
        }, 2000);
      }

      cards = cards;
      resetTimer();
    } else {
      alert("Chill!");
    }
  }
</script>
<p>{blue,red}npm run</p>

<main>
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />
      </div>
    {/each}
  </div>
  <div class="box" id="red-box"><p>{red}</p></div>
  <div class="box" id ="blue-box"><p>{blue}</p></div>
  <div class = "box" id = "turn-box" style={tur?"right: 10px;":"left:10px"}></div>
  </main>
  <div style="width:600px; height:800px; background-
color:bisque;"></div>

<style>
  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  @media (max-width:800px){
    .row{
      grid-template-columns: repeat(4, 100px);
    }
  }

  @media (max-width:600px){
    .row{
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(6, 100px);

    }
  }

  .card {
    border: 1px solid black;
    border-radius: 10% 30% 50% 70%;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
    
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    border-radius: 50% 20% / 10% 40%;;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }
#red-box {
  background-color: red;
  left: 0px;
}
#blue-box {
  background-color: blue;
  right: 0px;
}
.box {
  width: 100px;
  height: 100px;
  position: fixed;
  text-align: center;
  font-size: 30px;
}
#red-box, #blue-box{
bottom: 0px;
z-index: 2;
position: fixed;
}
#turn-box{ 
  bottom: 10px;
  z-index: 1;
  background-color: greenyellow;
  box-shadow: 0 0 20px 20px greenyellow;
}
.position-button{
    position: absolute;
    top: 60%;
    left: 45% }
    button {
  background-color: rgb(226, 227, 229);
  width: 100px;
  font-size: 20px;
  padding: 20px;
  border-radius: 100px;
  box-shadow: 0 0 10px 10px rgb(47, 186, 255);
  color: rgb(12, 12, 12);
  cursor: pointer;

}


</style>
