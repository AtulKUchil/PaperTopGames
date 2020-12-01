var xoxArray = new Array(3);
for (var i=0;i<3;i++){
    xoxArray[i] = [];
}
var player = false;
var check = false;

function insertIntoArray(i, j){
    if(!player){
        xoxArray[i][j] = 0;
        player = !player;
        document.getElementById("m"+i+j).innerHTML = "X";
        document.getElementById("m"+i+j).disabled = true;
        document.getElementById("turn").innerHTML = "Turn: Player 2";
    }
    else{
        xoxArray[i][j] = 1;
        player = !player;
        document.getElementById("m"+i+j).innerHTML = "O";
        document.getElementById("m"+i+j).disabled = true;
        document.getElementById("turn").innerHTML = "Turn: Player 1";
    }
    check = checkWin();
    if(check){
        if(player){
            window.alert("Player 1 wins");
        }
        else{
            window.alert("Player 2 wins");
        }
        arrayReset();
    }
}

function printArray(){
     console.log(xoxArray);
}

function arrayReset(){
    document.getElementById("turn").innerHTML = "Turn: Player 1";
    player = false;
    for (var i=0;i<3;i++){
        xoxArray[i] = [];
        //clear all the texts
        document.getElementById("m"+i+"0").innerHTML = "";
        document.getElementById("m"+i+"1").innerHTML = "";
        document.getElementById("m"+i+"2").innerHTML = "";
        // enable all the buttons
        document.getElementById("m"+i+"0").disabled = false;
        document.getElementById("m"+i+"1").disabled = false;
        document.getElementById("m"+i+"2").disabled = false;
    }      
}

function checkWin(){
    if(xoxArray[0][0] == xoxArray[0][1] && xoxArray[0][1] == xoxArray[0][2] && typeof xoxArray[0][0] != "undefined" && typeof xoxArray[0][1] != "undefined" && typeof xoxArray[0][2] != "undefined"){
        return true;
    }
    else if(xoxArray[1][0] == xoxArray[1][1] && xoxArray[1][1] == xoxArray[1][2] && typeof xoxArray[1][0] != "undefined" && typeof xoxArray[1][1] != "undefined" && typeof xoxArray[1][2] != "undefined"){
        return true;
    }
    else if(xoxArray[2][0] == xoxArray[2][1] && xoxArray[2][1] == xoxArray[2][2] && typeof xoxArray[2][0] != "undefined" && typeof xoxArray[2][1] != "undefined" && typeof xoxArray[2][2] != "undefined"){
        return true;
    }
    else if(xoxArray[0][0] == xoxArray[1][0] && xoxArray[1][0] == xoxArray[2][0] && typeof xoxArray[0][0] != "undefined" && typeof xoxArray[1][0] != "undefined" && typeof xoxArray[2][0] != "undefined"){
        return true;
    }
    else if(xoxArray[0][1] == xoxArray[1][1] && xoxArray[1][1] == xoxArray[2][1] && typeof xoxArray[0][1] != "undefined" && typeof xoxArray[1][1] != "undefined" && typeof xoxArray[2][1] != "undefined"){
        return true;
    }
    else if(xoxArray[0][2] == xoxArray[1][2] && xoxArray[1][2] == xoxArray[2][2] && typeof xoxArray[0][2] != "undefined" && typeof xoxArray[1][2] != "undefined" && typeof xoxArray[2][2] != "undefined"){
        return true;
    }
    else if(xoxArray[0][0] == xoxArray[1][1] && xoxArray[1][1] == xoxArray[2][2] && typeof xoxArray[0][0] != "undefined" && typeof xoxArray[1][1] != "undefined" && typeof xoxArray[2][2] != "undefined"){
        return true;
    }
    else if(xoxArray[0][2] == xoxArray[1][1] && xoxArray[1][1] == xoxArray[2][0] && typeof xoxArray[0][2] != "undefined" && typeof xoxArray[1][1] != "undefined" && typeof xoxArray[2][0] != "undefined"){
        return true;
    }
    else{
        return false;
    }
}