<script>
    let todos = [];

    function addNewList() {
        const newTodo = "<li><input type='text' value='Ett list objekt'> <input type='checkbox'> </li>";
        todos = [newTodo, ...todos];
    }
</script>

<body  style="background-color: rgb(241, 116, 7);">
    <div class="container">
        <input>
        <div class="layout">
            <div class="todo">
                <h1>TODO</h1>
                <div>
                    <button on:click={addNewList}>ADD</button>
                </div>
                <ul id="todoList">
                    {#each todos as task, index}
                        <li>{@html task}</li>
                    {/each}
                    <li><input type="text" value="Ett list objekt"> <input type="checkbox"></li>
                </ul>
            </div>
            <div class="complete">
                <h1>Done</h1>
                <ul id="doneList">
                    {#each todos as task, index}
                        <li>{@html task}</li>
                    {/each}
                    <li><input type="text" value="Ett list objekt"> <input type="checkbox"></li>
                </ul>
            </div>
            
            <div class="complete">
                <h1>Done</h1>
                <ul id="doneList">
                    {#each todos as task, index}
                        <li>{@html task}</li>
                    {/each}
                    <li><input type="text" value="Ett list objekt"> <input type="checkbox"></li>
                </ul>
            </div>
        </div>
    </div>
    
    <style>
        button{

            background-color: rgb(61, 94, 183);
            width: 50px;
            height:30px;
            font-size: 15px;
            padding: 6px;
            border-radius: 10px;
            border: 3px solid rgb(40, 174, 80);
            color: rgb(204,255,204);
            cursor: pointer;
        }
        
        ol{
            list-style-type: dicemal;
        }
        
        .container{
            width:95vw;
            height: 55vh;
            background-color: rgb(172, 71, 253);
            border-width: 10px;
            border-style:solid;
            border-color: rgb(89, 22, 245);
            border-radius: 50px;
            padding-top:10px;
            padding-left:2%;
          

        }
        

        .layout{
            display: flex;
            justify-content: space-between;
        }
    

        
        input{
            transition: border-color 0.5s, background-color 0.5s;
            background-color: rgb(172, 71, 253);
            width: 300px; 
            height: 20px;
            border-style: hidden;

        }
     
        

    </style>
   
</body>