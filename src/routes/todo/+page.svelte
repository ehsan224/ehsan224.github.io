<script>

    let todos = []
    let newtodo= "sak att göra"
    function removeItem(listId) {
        todos.splice(0,1);
        todos=todos;
    
    
    }

       
    

    
    function addNewList() {
        todos = [newtodo,...todos]
    }
    
    
</script>
<body>

    <div class="container">
        <input>
        <div class="layout">
            <div class="todo">
                <h1>TODO</h1>
                <div>
                    <button on:click={addNewList}>ADD</button>
                </div>
                <ol id="todoList">
                {#each todos as task}
                    <li>{task}</li>

                {/each}
                
                    <li><input type="text" value="Ett list objekt"></li>
                    
                </ol>
                
                <div class="btn btn-two" on:click={()=>{removeItem('todoList')}}>
                    <span>REMOVE</span>
                </div>
            </div>
            <div class="doing">
                <h1>Doing</h1>
                <ol id="doingList">
                    <li><input type="text" value="Ett list objekt"></li>
                    <li><input type="text" value="Ett list objekt"></li>
                    <li><input type="text" value="Ett annat list objekt"></li>
                </ol>
                
            </div>
            <div class="complete">
                <h1>Done</h1>
                <ol id="doneList">
                    <li><input type="text" value="Ett list objekt"></li>
                    <li><input type="text" value="Ett list objekt"></li>
                    <li><input type="text" value="Ett annat list objekt"></li>
                </ol>
                
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
        .btn {
            line-height: 20px;
            height: 20px;
            text-align: center;
            width: 100px;
            cursor: pointer;
        }
        .btn-two {
            color: #FFF;
            transition: all 0.5s;
            position: relative;
            left: 5%;        /* position btn*/
        }
        .btn-two span {
            z-index: 2;
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
        }
        .btn-two::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0%;
            width: 100%;
            height: 100%;
            z-index: 1; 
            transition: all 0.5s;
            border: 1px solid rgba(255,255,255,0.2);
            background-color: rgba(255,255,255,0.1);
        }
        .btn-two::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: all 0.5s;
        border: 1px solid rgba(255,255,255,0.2);
        background-color: rgba(255,255,255,0.1);
        }
        .btn-two:hover::before {
        transform: rotate(-45deg);
        background-color: rgba(255,255,255,0);
        }
        .btn-two:hover::after {
        transform: rotate(45deg);
        background-color: rgba(255,255,255,0);
        }
        

    </style>
   
</body>