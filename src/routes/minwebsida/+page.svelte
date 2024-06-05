<script>
    import { onMount } from 'svelte';



    onMount(()=>{

        google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

        drawChart()
    })


      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['2019',     68.3],
          ['2020',      86.9],
          ['2021',  98.22],
          ['2022', 92.2]
        ]);

        var options = {
          title: 'Mobile gaming app revenue worldwide from 2019 to 2022 (in billion U.S. dollars)'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
      
</script>


<svelte:head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</svelte:head>

    <header>
        <nav>
            <ul>
                <li><a href="minwebsida">Home</a></li>
                <ul><a href="minwebsida/ranking">Rank</a></ul>
            </ul>
        </nav>
    </header>
    <section class="features">
    
    <figure>
        <a href="minwebsida/callOfDuty"><img src="characters-ghost.jpg" alt="call of duty"> </a>
        <figcaption>Call of Duty Mobile favorite character</figcaption>
    </figure>
    <figure>
        <a href="minwebsida/amongUs"><img src="amongUS.png" alt="amongUS" style="background-color: yellow;"></a>
        <figcaption>Among Us favorite character</figcaption>
    </figure>
    <figure>
        <a href="minwebsida/fortnite"><img src="Character_IceRetreat.webp" alt="fortnite"></a>
        <figcaption>Fortnite favorite character</figcaption>
    </figure>
    
    <figure>
        <a href="minwebsida/pubgMobile"><img src="https://assetsio.gnwcdn.com/PUBG-mobile.jfif?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp" alt="pubg mobile"></a>
        <figcaption>Pubg Mobile favorite character</figcaption>
    </figure>
    
    </section>
    <section class="chart">

        <div id="piechart" style="width: 800px; height: 500px;"> 
        </div>
        <div>
        <p> The data presents the revenue growth of mobile gaming apps worldwide from 2019 to 2022 in billion U.S. dollars. Starting at $68.3 billion in 2019, the revenue saw a significant jump to $86.9 billion in 2020. The trend continued upwards with revenues reaching $98.22 billion in 2021. However, by 2022, there was a slight dip to $92.2 billion. The data illustrates the booming market of mobile gaming apps and their increasing popularity over the years.</p>
        </div>
    </section>
    <section style="margin: 50px 20px;">
        <div style="flex-direction: row;">
            <div class="click">
                <div><h3 style="color: red;">Favorite Characters</h3></div>
                <div><p>By clicking on the favorite character picture, you will receive statistics for that game.</p></div>
            </div>
            <div class="click">
                <div><h3 style="color: darkblue;">Ranking Button</h3></div>
                <div><p>By clicking the Ranking button, you will receive statistics for every game.</p></div>
            </div>
            <div class="click">
                <div><h3 style="color: darkorange;">Contact Button</h3></div>
                <div><p>By clicking the Contact Button, you can get in touch with us. If you want to send us a message, you can do so now by typing your message in the section below</p></div>
            </div>
        </div>
    </section>
    
    
    
    <footer>
        <div class="footer-row">
            <div class="footer-column">
                <h2>Contact</h2>
                <form>
                    <div class="form-row">
                        <div class="form-column">
                            <label for="name">Your full name</label>
                            <input type="text" id="name" name="fullname" placeholder="Please type your Name, here....">
                        </div>
                        <div class="form-column">
                            <label for="email">Your email address</label>
                            <input type="email" id="email" name="email" placeholder="Please type your Email, here ....">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-column">
                            <label for="message">Your message</label>
                            <textarea class="message" id="message" name="message" placeholder="Please type your Message, here..."></textarea>
                        </div>
                        <div class="form-column">
                            <input type="submit" class="submit" value="Send">
                        </div>
                    </div>
                </form>
            </div>
            <div class="footer-column">
                <h2>Read More<h6>Click on text to get more information</h6></h2>
                <div class="readMore">
                    <a href="https://www.statista.com/statistics/741350/ranking-of-digital-games-developers-in-sweden-by-revenue/">Leading video game companies in Sweden in 2022, by revenue</a>
                    <a href="https://www.statista.com/topics/4104/mobile-games-publishers/#topicOverview">Mobile gaming market leaders - Statistics & Facts</a>
                    <a href="https://www.statista.com/topics/868/video-games/">Video game industry - Statistics & Facts</a>
                </div>
            </div>
        </div>
    </footer>
    
   
    


<style>
    header{
        background-color:black;
        padding: 20px;
        background-image:url("src/routes/minwebsida/tyota.jpg");
        background-size:100%;
        background-position:center;
        height:500px;   
    }
    
    h1{
        color:white;
        font-size:80px;
    }
    ul{
        margin:0px;
        padding:0px;
        list-style-type:none;
    }
    li{
        display:inline-block;
        margin:0px 0px 100px 20px;
        color:white;
        
    }
    li:hover{
        background-color:lightgreen;
        text-decoration:underline;
    }
    
    .features{
        background:white;
        color:grey;
        padding:20px;
        display:flex;
        flex-direction:row;
    }
    .features figure{
        margin:auto;
        width:300px;
        text-align:center;
        text-transform:uppercase;


    }

    .features figure img{
        width:250px;
        height:250px;
        border-radius:50%;
        box-shadow: lightgreen 0 0 50px;
        border:5px solid grey;
    }
    /* body */
    .chart div p{
        margin:auto; 
        text-align:bottom;
        color:grey;
        width: 500px;
        font-size: 20px;

    }
    .chart {
        
        display:flex;
        flex-direction:row;
    }
    .chart div{
        margin-top: 60px;
        box-shadow: rgb(235, 235, 234) 0 0 50px;
        border-radius: 1%;
        background-color: whitesmoke;
        padding:20px;
        display:flex;
        flex-direction:row;
    }
   
    section div{
        background-color:whitesmoke;
        border-radius: 1%;
        color:whitesmoke;
        padding:20px;
        display:flex;
        flex-direction:row;
        
    }
    section p{
        text-align: center;
        margin: auto;
        color: rgb(37, 37, 38);
    }
    h3{
        height: 5px;
        text-decoration:underline;

    }
    .click{
        display: flex;
        flex-direction: column;
        width: 400px;
        margin: 30px;
        background-color: white;
        border-radius:10%;
        box-shadow: lightgreen 0 0 30px;
        border:1px solid grey;
        padding: 0px;
    }


    /*footer*/
    footer {
        margin-top: 80px;
        margin-left: 20px;
    }

    .footer-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        width: 100%; 
    }

    .footer-column {
        flex: 1; 
        margin: 0 10px; 
    }

    h2 {
        text-align: left;
        margin-bottom: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        width: 100%; 
        margin-bottom: 20px;
    }

    .form-column {
        flex: 1; 
        margin: 0 10px; 
    }

    label {
        display: block;
        margin-bottom: 4px;
        text-align: right;
    }

    input, textarea {
        width: 100%; 
        padding: 4px;
        margin-bottom: 10px;
    }

    .message {
        height: 80px;
    }

    .submit {
        margin: 25px 20px;
        width: 90px;
        height: 50px;
    }

    .readMore {
        margin-top: 20px;
    }

    .readMore a {
        display: block;
        margin: 10px 20px;
    }
    form div div label{
        text-align:left;
        
    }
    a {
        color: inherit; /* Använder föräldraelementets färg */
        text-decoration: none; 
    }
    a:hover{
        background-color:lightgreen;
        text-decoration:underline;
    }


    
</style>
