<script>
  let items = 1;

  function updateBoxes(action) {
    if (action === 'increase') {
      items += 1; // Öka antalet rutor med 1
    } else if (action === 'decrease' && items > 1) {
      items -= 1; // Minska antalet rutor med 1, men inte under 1
    }
  }
</script>

<div>
  <button on:click={() => updateBoxes('increase')}>More box</button>
  <button on:click={() => updateBoxes('decrease')}>Less box</button>
</div>

<div class="container">
  <div class="first">0</div>
  {#each Array(items - 1) as _, box }
    <div class="item">{box + 1}</div>
  {/each}
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Tre kolumner */
    grid-gap: 20px; /* Mellanrum mellan boxarna */
    max-width: 800px; /* Maximal bredd för container */
    margin: 0 auto; /* Centrera container */
  }

  .first {
    grid-column: span 3; /* Ta upp tre kolumner */
    height: 200px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px; /* Mellanrum mellan raderna */
    border: 2px solid black; /* Lägg till en svart border */
  }

  .item {
    width: 100%; /* Ta upp hela bredden av sin kolumn */
    height: 200px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white; /* Lägg till en vit border */
  }
</style>
