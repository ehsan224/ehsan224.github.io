<script>
    import { onMount } from 'svelte';
</script>

<svelte:head>
</svelte:head>
<div class="back"></div>

<header>
    <nav>
        <ul>
            <li><a href="/minwebsida"><span style="color: white;"> Home</span></a></li>
            <li><a href="/minwebsida/ranking"><span style="color: white;"> Rank</span></a></li>
        </ul>
    </nav>
    <h1>Call of Duty Spelstatistik</h1>
</header>

<section>
    <div class="container">
        <div style="width: 200px;" class="box">Online Player Count <br>Total Players: 3 million </div>
        <div style="width: 400px;" class="box">Downloads <br>Total Downloads (all platforms): 250 million</div>
        <div style="width: 600px;" class="box">Latest Update<br>Update Date: April 25, 2024</div>
        <div style="width: 800px;" class="box">Average Playtime per Session <br>Battle Royale mode: 30 minutes</div>
        <div style="width: 1000px;" class="box">App Store Ratings <br>App Store: Rating: ★★★★★ (4.8) <br>Google Play: Rating: Not available (only accessible on Android via Epic Games Store)</div>
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
        background-image: url("/src/routes/minwebsida/70994403007-call-of-duty-20-topper.webp");
        z-index: -1;
    }
    header {
        padding: 20px;
        height: 200px;
        background-image: url("/src/routes/minwebsida/70994403007-call-of-duty-20-topper.webp");
    }
    h1 {
        text-align: center;
        font-size: 50px;
        color: white;
        text-shadow: 10px -5px 4px rgba(18, 18, 18, 0.927);
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
        background-color: rgb(47, 48, 47);
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
        background-color: rgb(190, 236, 144);
        text-align: center;
        width: 80%;
        transition: opacity 0.5s ease;
    }
    /* footer*/
    footer{
        margin: 10%;
    }
</style>
