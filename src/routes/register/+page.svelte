
<h1 align="center">
  
    Registration Form
    
</h1>

<form>
    
    <label for="Name">Name:</label>
    <div class="name">
        <input type="text" id="Name" name="first name" placeholder="Enter your first name"/>
        <input type="text" id="last Name" placeholder="Enter your last name" />
    </div>
 
    <div class="gender">
    <label for="Gender">Gender:</label>
    <select id="gender" name="gender" class="gender-size">
        <option value="man">Man</option>
        <option value="woman">Woman</option>
        <option value="other">Other</option>
    </select>
    </div>
    
    
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"/>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password"/>

    
    

    <script>
        function login(){
            
        Var email= <label for="email">Email:</label>;
        email += <input type="email" id="email" name="email"/>;
        var password= <label for="email">Email:</label>
        password += <input type="password" id="password" name="password"/>
        console.log(email+' '+ password)
        }

    

        
    
    </script>
 </form>
<head>
    <style>
        body {
            display: grid;
            place-items: center;
            height: 80vh;
            margin-top: 10px;
            
        }

        form {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(1.3, minmax(200px, 1fr));
        }
        .name{
            display:flex;
            grid-column: 2;
            justify-content: space-around;
        }
        .gender-size {
            width: 300px; 
            height: 30px;
        }
        .gender {
            display:flex;
            grid-column: 2;
            justify-content: space-around;
        }
        label {
            grid-column: 2;
            grid-row: span 3;
        }

        input {
            grid-column: 2;
            grid-row: span 3;
            margin-right:2px;
        }
        .position-button{
         position: absolute;
         top: 75%;
          }
         button {
         background-color: rgb(61, 94, 183);
         width: 140px;
         font-size: 20px;
         padding: 6px;
         border-radius: 100px;
         border: 3px solid rgb(40, 174, 80);
         color: rgb(204,255,204);
          cursor: pointer;

        }

    </style>
</head>

<button onclick=handleSave()>Save</button>
<button on:click={() => window.location.href = 'http://localhost:5173/login'} class="position-button">Login</button>
