
<script>

</script>

<main>
 

<h1 align="center">
  
  Välkommen till min hemsida!
  
</h1>
<p id="inspo">
  "The only way to learn a new programming language is by writing
programs in it." - Dennis Ritchie, creator of the C programming language.
</p>

</main>


<style>


#timer {
 font-size: 50px;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);

}
#inspo{
  font-family: courier;
font-size: 160%;
color: rgb(14, 14, 14);
}
button {
  background-color: rgb(235, 228, 10);
  width: 200px;
  font-size: 20px;
  padding: 10px;
  border-radius: 100px;
  border: 3px solid yellow;
  color: rgb(243, 168, 48);
  cursor: pointer;

}
.bild-storlek {
 position: absolute;
 top: 43%;
 left: 0%;
 right: 50%;
 width: 1480px;
 height: 700px;
}
</style>

<body>
  <img src="Welocme.jpg" alt="Welcome" class="bild-storlek">
  <div id="timer">00:00:00</div>
<button onclick="startTimer(60)">Start Timer</button>



<script>
    let interval;

    function startTimer(duration) {
        let timerDisplay = document.getElementById("timer");
        let timer = duration;

        interval = setInterval(function () {
            const hours = Math.floor(timer / 3600);
            const minutes = Math.floor((timer % 3600) / 60);
            const seconds = timer % 60;

            timerDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;

            if (--timer < 0) {
                clearInterval(interval);
                timerDisplay.innerHTML = "Tiden tog slut!";
            }
        }, 1000);
    }
</script>

</body>



