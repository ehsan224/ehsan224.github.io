<script>
  import { fade, fly } from 'svelte/transition';

  // Define parallax layers
  const layers = [0, 1, 2, 3];

  // Define messages for scrollytelling
  const messages = [
    'Keep scrolling...',
    'More scrolling...',
    'Almost there...',
    'You did it!',
    'You are done!'
  ];

  // Initialize scroll position, message index, and fader
  let y = 0;
  let currentMessageIndex = 0;
  let fader = true;
  $: currentMessage = messages[currentMessageIndex];
  // Calculate the step size for message changes
  const step = Math.floor(600 / messages.length);

  // Function to handle scroll events
  function handleScroll() {
    const tempIndex = currentMessageIndex;

    // Update the message index based on scroll position
    currentMessageIndex = Math.max(0,Math.floor(y / step));

    // Update the fader state based on message change
    fader = currentMessageIndex === tempIndex;
  }
</script>

<svelte:window bind:scrollY={y} on:scroll={handleScroll} />

<main>
  
  <!-- Parallax container for layers -->
  <div class="parallax" >
    <img src="log-2.png" alt="main" style="position:absolute; left: 8%; width:1200px"  >
    <h2 style="position: absolute; left: 40%;">Please scroll down</h2>
  </div>
  
  
  <div class="container">
    <p style="position: absolute; left: 40%;">You can upgrade any car </p>
      <img src="pogi.png" alt="pogi" style="width: 700px; position: absolute; left: 3%; "  >
      <img src="4set car.png" alt="4setcar" style="width: 600px; position: absolute; right: -3%; "  >
      <img src="giphy.gif" alt="dnace" style="position: absolute; left: 30%;">
  </div>
  

  <!-- Scrollytelling text section -->
  <div>
    <img src="buy-cha.png" alt="bug" style="width: 700px; position: absolute; left: 0%; "  >
    <img src="gilr-ch.png" alt="gilr" style="width: 600px; position: absolute; right: 0%; "  >

  </div>
  <div class="text">
      {#if fader && currentMessageIndex > 7.92}
        <!-- Animate text with fly-in and fade-out transitions -->
          <div class="story" in:fly={{ y: 200, duration: 2000 }}>
              <p>You did it </p>
              <p>{currentMessage}</p>
              <img src="png-image.png" alt="cheking" style="position:absolute; left: 35%;"> 
          </div>
        {:else if currentMessageIndex === 0 }
        <p>You have scrolled {y} pixels</p>
        <p>{currentMessage}</p>
      {/if}
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #121212;
  }

  main {
    height: 1900px;
    background-color: #125547;

  }

  .story img{
      width:500px;
      bottom:0;
  }

  .container {
    z-index: 1.5;
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden; /* Clip overflow for parallax effect */
  }
  .parallax {
    
    background-color: #125547;
    min-height: 900px; 

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
 

  .text {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 1;
    width: 100%;
    color: white;

  }
  


</style>
