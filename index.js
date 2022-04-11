function newXOGame(){
    playerTurn = 'X';
    areYouWinning =false;
    winner = '';

    document.getElementById('XOContainer').style.display="table";
    document.getElementById('XOWinBanner').style.display="none";   

    document.getElementById('xoField1').innerHTML='';
    document.getElementById('xoField2').innerHTML='';
    document.getElementById('xoField3').innerHTML='';
    document.getElementById('xoField4').innerHTML='';
    document.getElementById('xoField5').innerHTML='';
    document.getElementById('xoField6').innerHTML='';
    document.getElementById('xoField7').innerHTML='';
    document.getElementById('xoField8').innerHTML='';
    document.getElementById('xoField9').innerHTML='';
    document.getElementById('xoField1').style='font-size: 10px;';
    document.getElementById('xoField2').style='font-size: 10px;';
    document.getElementById('xoField3').style='font-size: 10px;';
    document.getElementById('xoField4').style='font-size: 10px;';
    document.getElementById('xoField5').style='font-size: 10px;';
    document.getElementById('xoField6').style='font-size: 10px;';
    document.getElementById('xoField7').style='font-size: 10px;';
    document.getElementById('xoField8').style='font-size: 10px;';
    document.getElementById('xoField9').style='font-size: 10px;';
}
playerTurn = 'X';
areYouWinning =false;
winner = '';

function handleClickField(){
    console.log(event.target);
    console.log(event.target);
    console.log(event.target);
    console.log(event.target);
    if(event.target.innerHTML==''){
        if(playerTurn=='X'){
        event.target.innerHTML='X';
        event.target.style='transition: 1.5s; font-size: 60px;';
        this.playerTurn='O';
    }
    else if(playerTurn=='O'){
            event.target.innerHTML='O';
            event.target.style='transition: 1.5s; font-size: 60px;';
            this.playerTurn='X';
    }}
    checkWinCondition();    
}

function checkWinCondition(){
     p1 = document.getElementById('xoField1').innerHTML;
     p2 = document.getElementById('xoField2').innerHTML;
     p3 = document.getElementById('xoField3').innerHTML;
     p4 = document.getElementById('xoField4').innerHTML;
     p5 = document.getElementById('xoField5').innerHTML;
     p6 = document.getElementById('xoField6').innerHTML;
     p7 = document.getElementById('xoField7').innerHTML;
     p8 = document.getElementById('xoField8').innerHTML;
     p9 = document.getElementById('xoField9').innerHTML;
    if((p1==p2&&p2==p3)&&(p1=='X')){areYouWinning = true; winner='X'}
    if((p4==p5&&p5==p6)&&(p4=='X')){areYouWinning = true; winner='X'}
    if((p7==p8&&p8==p9)&&(p7=='X')){areYouWinning = true; winner='X'}
    if((p1==p4&&p4==p7)&&(p1=='X')){areYouWinning = true; winner='X'}
    if((p2==p5&&p5==p8)&&(p2=='X')){areYouWinning = true; winner='X'}
    if((p3==p6&&p6==p9)&&(p3=='X')){areYouWinning = true; winner='X'}
    if((p1==p5&&p5==p9)&&(p1=='X')){areYouWinning = true; winner='X'}
    if((p3==p5&&p5==p9)&&(p3=='X')){areYouWinning = true; winner='X'}

    if((p1==p2&&p2==p3)&&(p1=='O')){areYouWinning = true; winner='O'}
    if((p4==p5&&p5==p6)&&(p4=='O')){areYouWinning = true; winner='O'}
    if((p7==p8&&p8==p9)&&(p7=='O')){areYouWinning = true; winner='O'}
    if((p1==p4&&p4==p7)&&(p1=='O')){areYouWinning = true; winner='O'}
    if((p2==p5&&p5==p8)&&(p2=='O')){areYouWinning = true; winner='O'}
    if((p3==p6&&p6==p9)&&(p3=='O')){areYouWinning = true; winner='O'}
    if((p1==p5&&p5==p9)&&(p1=='O')){areYouWinning = true; winner='O'}
    if((p3==p5&&p5==p9)&&(p3=='O')){areYouWinning = true; winner='O'}
    if(p1!=''&& p2!=''&&p3!=''&&p4!=''&&p5!=''&&p6!=''&&p7!=''&&p8!=''&&p9!='') {areYouWinning = true; winner='Draw';};
    displaywinnerBanner()
}

function displaywinnerBanner(){
if(areYouWinning==true) {
    document.getElementById('XOContainer').style.display="none";
    document.getElementById('XOWinBanner').style.display="block";
    window.alert("Winner is "+ winner);
}
}