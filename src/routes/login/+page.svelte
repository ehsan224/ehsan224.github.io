<h1 align="center">Welcome</h1>
<head>
    <style>
        body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            display: grid;
            align-items: center;
            justify-content: center;
            height: 70vh;
            : 
            background-color: #f4f4f4;
        }

        h1 {
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% {
                transform: scale(2);
            }
            50% {
                transform: scale(2.2);
            }
            100% {
                transform: scale(2);
            }
        }

        .position-button{
         position: absolute;
         top: 75%;
         left: 43%;
          }
         button {
         background-color: rgb(61, 94, 183);
         width: 200px;
         font-size: 19px;
         padding: 2px;
         border-radius: 100px;
         border: 3px solid rgb(40, 174, 80);
         color: rgb(204,255,204);
          cursor: pointer;
         }
    </style>
</head>
<button on:click={() => window.location.href = 'http://localhost:5173/register'} class="position-button">Go back to Registration</button>


