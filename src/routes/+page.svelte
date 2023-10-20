
<script>
	let count = 0;

	function incrementCount() {
		count += 1;
	}
</script>


<h1 align="center">
  
  Välkommen till min hemsida!
  
</h1>

<h2 class="color">Här har jag samlat min uppgifter jag gjort i samband med webbutveckling i årskurs 2 på Maja Beskowgymnasiet!</h2>
<p id="inspo">
  "The only way to learn a new programming language is by writing
  programs in it." - Dennis Ritchie, creator of the C programming language.
  </p>
<p style="align=center"> Click here 
  

  <button on:click={incrementCount}>
    Clicked {count}
    {count === 1 ? 'time' : 'times'}
  </button>

  
</p>



<style>

h1, h2, h3, p {
display: block;
}

#inspo{
font-family: courier;
font-size: 160%;
background-attachment:scroll;
}

.color{
color: rgb(240, 166, 16);
font-family:'Gill Sans';
text-align: center;
border-bottom: 1px solid black
}
  button {
		width:500px;
    text-align:center;
	}
</style>



