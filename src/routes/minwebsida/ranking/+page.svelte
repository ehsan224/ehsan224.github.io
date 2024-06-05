<script>
    import { onMount } from 'svelte';

    let x = 0;
    let y = 0;

    onMount(() => {
    function handleScroll() {
        x = window.scrollX;
        y = window.scrollY;

        const h1Element = document.querySelector('h1');
        const h1Position = h1Element.getBoundingClientRect();

        if (h1Position.top < window.innerHeight && h1Position.bottom >= 0) {
        h1Element.style.animationPlayState = 'running';
        }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    });
</script>
<svelte:window bind:scrollX={x} bind:scrollY={y} on:scroll={handleScroll} />

<svelte:head>
</svelte:head>
<div class="back">
</div>
<header>
    <nav>
        <ul>
            <li><a href="/minwebsida">Home</a></li>
            <li><a href="/minwebsida/ranking" >Rank</a></li>
            
        </ul>
    </nav>
    <h1>Top 13 Ranking Mobile Games </h1>
</header>
<section>

    <div>
        <div class="title">
            <div>Mobile Games</div>
            <div>Number of players</div>
            <div>Popularity</div>
        </div>
        <div>1
            <div>Clash Royale</div>
            <div>1,000,000 players</div>
            <div>Globally </div>
        </div>
        <div>2
            <div>Brawl Stars</div>
            <div>1,000,000 players</div>
            <div>Globally</div>
        </div>
        <div>3
            <div>Fortnite Mobile</div>
            <div>100,000,000 players</div>
            <div>Globally during its peak popularity</div>
        </div>
        <div>4
            <div>PUBG Mobile</div>
            <div>100,000,000 players</div>
            <div>Globally during its peak popularity</div>
        </div>
        <div>5
            <div>Among Us</div>
            <div>1,000,000 players</div>
            <div>Globally, especially during the pandemic</div>
        </div>
        <div>6
            <div>Call of Duty Mobile</div>
            <div>1,000,000 players</div>
            <div>Globally</div>
        </div>
        <div>7
            <div>Mobile Legends: Bang Bang</div>
            <div> 1,000,000 players</div>
            <div>Spelare</div>
        </div>
        <div>8
            <div>Arena of Valor</div>
            <div>1,000,000 players</div>
            <div>Globally, especially in Asia</div>
        </div>
        <div>9
            <div>Free Fire</div>
            <div>1,000,000 players</div>
            <div>Globally, especially in South America and Southeast Asia</div>
        </div>
        <div>10
            <div>Hay Day</div>
            <div> 1,000,000 players</div>
            <div>Globally</div>
        </div>
        <div>11
            <div>Asphalt 9: Legends</div>
            <div>1,000,000 players</div>
            <div>Globally</div>
        </div>
        <div>12
            <div>Hearthstone</div>
            <div>1,000,000 players</div>
            <div>Globally</div>
        </div>
        <div>13
            <div>Clash of Clans</div>
            <div>1,000,000 players</div>
            <div>Globally</div>
        </div>
    </div>
</section>

<style>
    .back{
        position: fixed;
        left: 0%;
        top:0%;
        width: 100vw;
        height: 100vh;
        background-color:rgb(234, 232, 111);
        filter: blur(5px);
        z-index: -1;
    }
    header{
        padding: 20px;
        background-size:100%;
        background-position:center;
        height:100px;   
    }
    
    ul{
        margin:0px;
        padding:0px;
        list-style-type:none;
    }
    li{
        display:inline-block;
        margin:0px 0px 100px 20px;
        color:red;
        
    }
    li:hover{
        background-color:lightgreen;
        text-decoration:underline;
    }
    h1 {
        font-family: Arial, sans-serif;
        font-size: 24px;
        text-align: center;
        overflow: hidden; 
        border-right: .15em solid rgb(234, 232, 111); 
        white-space: nowrap;
        margin: 0;
        padding: 0; 
        animation: typing 3s steps(30) forwards;
     }
    
    
    @keyframes typing {
        from {
        width: 0;
        }
        to {
        width: 100%; 
        }
    }
    /* body*/
    section{
        margin-top: 10%;
        margin-bottom: 15%;
    }
    section div{
        display: flex;
        flex-direction: column;
    }
    section div div{
        display: flex;
        flex-direction: row;
        background-color: red;
        width: 900px;
        height: 50px;
        align-items: center;
        margin: 5px 19%;
        transform-origin: center center;
        transition: transform 0.7s ease-out;
        border-radius:20%;
        border:5px solid grey;
    }
    section div div div{
        
        display: flex;
        flex-direction: column;
        margin:50px ;
        
    }
    .title{
        background-color: darkorange;
        margin-bottom: 20px;
    }
   
    
  
    section div div:hover {
      transform: scale(1.1, 1.1);
    }
</style>
