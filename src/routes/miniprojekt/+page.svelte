<script context="module">
  export let letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
</script>

<script>

  import { onMount } from 'svelte';
    
    let letterList = [];
    let username = "";
    let usernameDisplay = false;


  

    onMount(() => {
      letterList = letters.split('').map(letter => ({ letter, selected: false }));
    });

 
    function addLetter(letter) {
      username += letter;
      usernameDisplay = true;
    }

   
    function clearUsername() {
      username = "";
      usernameDisplay = false;
    }

</script>

<div>
  {#if usernameDisplay}
    <h1>Välkommen, {username}!</h1>
    <button on:click={clearUsername}>Rensa användarnamn</button>
  {:else}
    <h1>Välj ditt användarnamn</h1>
  {/if}

  <div class="letter-buttons">
    {#each letterList as { letter, selected }, i}
      <button on:click={() => addLetter(letter)} class:selected={selected}>{letter}</button>
    {/each}
  </div>
</div>

<style>
  .letter-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }

  button {
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  button:selected {
    background-color: #45a049;
  }

  button:hover {
    background-color: #45a049;
  }
</style>
