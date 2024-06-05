<script>
    import { onMount } from 'svelte';
</script>

<svelte:head>
</svelte:head>
<div class="back"></div>

<header>
    <nav>
        <ul>
            <li><a href="/minwebsida">Home</a></li>
            <li><a href="/minwebsida/ranking">Ranking</a></li>
        </ul>
    </nav>
    <h1>Pubg Mobile Spelstatistik</h1>
</header>

<section>
    <div class="container">
        <div style="width: 200px;" class="box">Online Player Count <br>Total Players: 50 million </div>
        <div style="width: 400px;" class="box">Downloads <br>Total Downloads (all platforms): 1 billion</div>
        <div style="width: 600px;" class="box">Latest Update<br>Update Date: May 15, 2024</div>
        <div style="width: 800px;" class="box">Average Playtime per Session <br>Battle Royale mode: 25 minutes</div>
        <div style="width: 1000px;" class="box">App Store Ratings <br>Rating: ★★★★☆ (4.5) <br>Rating: ★★★★☆ (4.5)</div>
    </div>
</section>

<footer>
</footer>

<style>
    .back {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgb(200, 237, 119);
        z-index: -1;
    }
    header {
        padding: 20px;
        height: 200px;
        background-color: rgb(200, 237, 119);
    }
    h1 {
        text-align: center;
        font-size: 50px;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    li {
        display: inline-block;
        margin: 0 0 100px 20px;
        color: red;
    }
    li:hover {
        background-color: lightgreen;
        text-decoration: underline;
    }
    /* section */
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin-top: 200px;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        opacity: 0; /* start with opacity 0 */
        animation: fadeIN 1s forwards; /* animate opacity */
    }
    @keyframes fadeIN {
        0% {
            opacity: 0; /* start with opacity 0 */
        }
        100% {
            opacity: 1; /* end with opacity 1 */
        }
    }
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px;
        background-color: rgb(53, 135, 207);
        text-align: center;
        width: 80%;
        transition: opacity 0.5s ease;
    }
    /* footer*/
    footer{
        margin: 10%;
    }
</style>
