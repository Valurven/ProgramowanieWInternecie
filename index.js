
isSideMenuOpen =false;
isXOGameDisplay = false;
pagelanguage='/ProgramowanieWInternecie/language/en.json';



function onloadHandel(){
  changeLanguage();
}

// Pasek nawigacji
function openNav() {

    if(isSideMenuOpen==false){
  document.getElementById("mySidenav").style.height = "fit-content";

  isSideMenuOpen=true;
    }
    else{;
        document.getElementById("mySidenav").style.height = "0";
        isSideMenuOpen=false;
    }
}

function closeNav(){
  document.getElementById("mySidenav").style.height = "0";
  isSideMenuOpen=false;
}


function displayXOGame() {
  closeNav();
    if(isXOGameDisplay==false){
        document.getElementById("XOgame").style.display = "block";
        isXOGameDisplay=true;
          }
          else{
            document.getElementById("XOgame").style.display = "none";
            isXOGameDisplay=false;
          }
    
}


function brewingCheckboxHandler(){
document.getElementById("violetsCheckbox").checked = false ;
document.getElementById("badMoonCheckbox").checked = false ;
}
function violetsCheckboxHandler(){
document.getElementById("brewingCheckbox").checked = false ;
document.getElementById("badMoonCheckbox").checked = false ;
}
function badMoonCheckboxHandler(){
document.getElementById("brewingCheckbox").checked = false ;
document.getElementById("violetsCheckbox").checked = false ;
}

function brewingMenuHandler(){
  closeNav();
  document.getElementById("brewingCheckbox").checked = true ;
  document.getElementById("violetsCheckbox").checked = false ;
  document.getElementById("badMoonCheckbox").checked = false ;
  }
  function violetsMenuHandler(){
    closeNav();
    document.getElementById("brewingCheckbox").checked = false ;
    document.getElementById("violetsCheckbox").checked = true ;
    document.getElementById("badMoonCheckbox").checked = false ;
  }
  function badMoonMenuHandler(){
    closeNav();
    document.getElementById("brewingCheckbox").checked = false ;
    document.getElementById("violetsCheckbox").checked = false ;
    document.getElementById("badMoonCheckbox").checked = true ;
  }


//Skrypt do języków
async function changeLanguage(){
fetch(pagelanguage)
.then(response =>{
   return response.json();
})
.then(response =>{
   document.querySelector("#MLtext1").innerHTML = `${response.MLtext1}`;
   document.querySelector("#MLtext2").innerHTML = `${response.MLtext2 }`;
   document.querySelector("#MLtext3").innerHTML = `${response.MLtext3 }`;
   document.querySelector("#MLtext4").innerHTML = `${response.MLtext4 }`;
   document.querySelector("#MLtext5").innerHTML = `${response.MLtext5 }`;
   document.querySelector("#MLtext6").innerHTML = `${response.MLtext6 }`;
   document.querySelector("#MLtext7").innerHTML = `${response.MLtext7 }`;
   document.querySelector("#MLtext8").innerHTML = `${response.MLtext8 }`;
   document.querySelector("#MLtext9").innerHTML = `${response.MLtext9 }`;
   document.querySelector("#MLtext10").innerHTML = `${response.MLtext10 }`;
   document.querySelector("#MLtext11").innerHTML = `${response.MLtext11 }`;
   document.querySelector("#MLtext12").innerHTML = `${response.MLtext12 }`;
   document.querySelector("#MLtext13").innerHTML = `${response.MLtext13 }`;

}
)
.catch(error=>{
  console.log('error');
  console.error(error);
});
}

function changeTheLanguageEn(){  
    pagelanguage='/ProgramowanieWInternecie/language/en.json';
    changeLanguage();
  }
function changeTheLanguagePl(){  
    pagelanguage='/ProgramowanieWInternecie/language/pl.json';
    changeLanguage();
  }

function cookieButtonHandler(){
  document.querySelector("#cookieBanner").style = 'display:none';
}

  

// Gra w kółko i krzyrzyk
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

