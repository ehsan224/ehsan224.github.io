<script>
    import { onMount } from 'svelte';

   
</script>

<svelte:head>
</svelte:head>
<div class="back">
</div>

<header>
    <nav>
        <ul>
            <li><a href="/minwebsida">Home</a></li>
            <li><a href="/minwebsida/ranking">Rank</a></li>
            
        </ul>
    </nav>
    <h1>Among Us Spelstatistik</h1>
</header>
<section>

    <div class="wrapper">
        <div class="container">
          <div class="row">
            <div class="item"><h5><span style="color: white;">Antal nedladdningar</span></h5><p> <br>Not available</p></div>
            <div class="item2"><h5><span style="color: white;">Antal spelare online</span></h5>
            <p>Totalt antal spelare: Not available</p>
            </div>
          </div>
          <div class="row">
            <div class="item2"><h5><span style="color: white;">Senaste uppdateringen</span></h5><p>Not available</p></div>
            <div class="item"><h5><span style="color: white;">Genomsnittlig speltid per session</span></h5><p>Not available</p></div>
          </div>
          <div class="row">
            <div class="item5"><h5><span style="color: white;">Betyg i appbutiker</span></h5><p>App Store:
                Betyg: ★★★★★ (3.8)
                Google Play:
                Betyg: Ej tillgängligt (endast tillgängligt på Android via Epic Games Store)</p></div>
          </div>
        </div>
      </div>
</section>

<style>
    h1{
        text-align: center;
        animation: rubrik 1s ease-in-out;
        font-size: 90px;
        color: rgb(236, 70, 33);
        text-shadow: 10px -5px 4px rgba(141, 134, 131, 0.927); /* X-offset, Y-offset, Blur-radius, Shadow-color */
        
    }
    .back{
        position: fixed;
        left: 0%;
        top:0%;
        width: 100vw;
        height: 100vh;
        background-color: rgb(229, 246, 48);
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
    /* section*/
    .container {
        position: relative;
        left: 37%;
        display: flex;
        flex-direction: column; 
        width: 410px;
        height: 814px;
        border: 2px solid rgb(16, 15, 15);
        
    }

    .wrapper {
         width: 100%;
    }

    .row {
        display: flex;
        justify-content: space-between; 
        flex: 1; /* Flex-grow för att rader ska växa lika mycket */
    }

    .item {
        width: 199px;
        height: 200px;
        background-color:red;
        border: 2px solid rgb(159, 237, 86);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1px;
        animation: fade1och4 1.5s ease-in-out;
        transition: transform 0.7s ease-out;
    }
    .item2 {
        width: 199px;
        height: 300px;
        background-color:red;
        border: 2px solid rgb(159, 237, 86);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1px ;
        animation: fade2 1.5s ease-in-out;
        transition: transform 0.7s ease-out;
    }
    .item5 {
        width: 405px;
        height: 200px;
        background-color:red;
        border: 2px solid rgb(159, 237, 86);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1px ;
        animation: fadeIN 1.5s ease-in-out;
        transition: transform 0.7s ease-out;
    }
    section{
        margin-top:300px ;
    }
    @keyframes fadeIN{
        0%{
            opacity: 1;
            transform:translateX(-200px);
        }
        100%{
            opacity: 1;
            transform:translateX(0);
        }
    }

    @keyframes fade1och4{
        0%{
            opacity: 1;
            transform:translateY(200px);
        }
        100%{
            opacity: 1;
            transform:translateY(0);
        }
    }
    @keyframes fade2{
        0%{
            opacity: 1;
            transform:translateX(200px);
        }
        100%{
            opacity: 1;
            transform:translateX(0);
        }
    }
    @keyframes rubrik {
    0%, 20%, 50%, 80%, 100% {
        opacity: 1;
        transform: translateY(0);
    }
    40% {
        opacity: 1;
        transform: translateY(-100px);
    }
    60% {
        opacity: 1;
        transform: translateY(-50px);
        }
        90%{
            opacity: 1;
            transform: translateY(-20px);
        }
    }
    section div div div div:hover{
      transform: scale(1.1, 1.1);
    }
    
    
    </style>
