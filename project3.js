// age in days
function ageindays()
{
    var birthyear=prompt("Enter your year of birth ");
    var ageInDays= (2021-birthyear)*365;
    document.getElementById('age').innerHTML="You are "+ageInDays+" days old";
}
function reset()
{
    document.getElementById('ans-cont').innerHTML="<h4>Click on clickme to know your age in days:</h4>";
    
}


// Cat Generator
function generatecat()
{
    var image= document.createElement('img');
    var div=document.getElementById('container-2');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

// Rock,paper and scissors
function rpsgame(yourchoice)
{
    //console.log(yourchoice);
    var humanchoice,botchoice;
    humanchoice=yourchoice.id;
    botchoice=numberToChoice(randomToRpsInt());
    console.log('computer choice ', botchoice);
    results = decidewinner(humanchoice,botchoice); //[0,1] human lost| comp won
    console.log(results);
    message=finalmessage(results); //{message:'You won!,color:'green'}
    console.log(message);
    rpsfrontend(yourchoice.id,botchoice,message);
}

function randomToRpsInt()
{
    return Math.floor(Math.random()*3);  // generates random number between 0 to 3..
}
function numberToChoice(number)
{
    return ['rock','paper','scissor'][number];
}
function decidewinner(yourchoice,botchoice){
    var rpsdatabase={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'scissor':0,'rock':1,'paper':0.5},
        'scissor':{'scissor':0.5,'rock':0,'paper':1}
    };
var yourscore=rpsdatabase[yourchoice][botchoice];
var botscore=rpsdatabase[botchoice][yourchoice];
return [yourscore,botscore];
}

function finalmessage([yourscore,botscore])
{
    if(yourscore===0)
    {
       return {"Message":"You lost!","color":"red"};
    }
    else if(yourscore===1)
    {
        return {"Message":"You Won!","color":"green"};
    }
    else
    {
        return {"Message":"You Tied!","color":"Yellow"};
    }
}
function rpsfrontend(humanimagechoice,botimagechoice,finalmessage)
{
    var imagedatabase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };
    // remove all image..
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    var humandiv=document.createElement('div');
    var botdiv=document.createElement('div');
    var messagediv=document.createElement('div');
    humandiv.innerHTML="<img src='" + imagedatabase[humanimagechoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(53, 53, 255, 0.63)'>";
    botdiv.innerHTML="<img src='" + imagedatabase[botimagechoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(234,20,20,0.63)'>";
    messagediv.innerHTML="<h1 style='color: "+finalmessage['color']+ "; font-size: 50px; padding:30px;'>"+finalmessage['Message']+"</h1>";
    document.getElementById('rps').appendChild(humandiv);
    document.getElementById('rps').appendChild(messagediv);
    document.getElementById('rps').appendChild(botdiv);
}

// Challenge 4 Change color of buttons.

var all_button=document.getElementsByTagName('button');
console.log(all_button);
var copyallButtons=[];
for(let i=0;i<all_button.length;i++)
{
    copyallButtons.push(all_button[i].classList[1]);
}
function buttoncolorchange(buttonthingy)
{
    if(buttonthingy.value==='red')
    {
        buttonsred();
    }
    else if(buttonthingy.value==='green')
    {
        buttonsgreen();
    }
    else if(buttonthingy.value==='reset')
    {
        buttonsreset();
    }
    else if(buttonthingy.value==='random')
    {
        buttonsrandom();
    }
}
function buttonsred()
{
    for(let i=0;i<all_button.length;i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]);
    }
    for(let i=0;i<all_button.length;i++)
    {
        all_button[i].classList.add('btn-danger');
    }
}
function buttonsgreen()
{
    for(let i=0;i<all_button.length;i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]);
    }
    for(let i=0;i<all_button.length;i++)
    {
        all_button[i].classList.add('btn-success');
    }
}
function buttonsreset()
{
    for(let i=0;i<all_button.length;i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyallButtons[i]);
    }
    
}
function numgenrate()
{
    return Math.floor(Math.random()*4);    
}
function buttonsrandom()
{
    for(let i=0;i<all_button.length;i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]);
    }
    for(let i=0;i<all_button.length;i++)
    {
        var randomchoice= numgenrate();
        all_button[i].classList.add(copyallButtons[randomchoice]);
    }
}

// Challenge 5: Blackjack
let blackjackgame={
    'you':{'scorespan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scorespan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'card':['2','3','4','5','6','7','8','9','10','K','Q','J','A'],
    'cardmap':{'2':2,'3':3,'4':4,'5':6,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'Q':10,'J':10,'A':[1,11]},
    'isstand':false,
    'turnover':false,
    'turns':false
}
const you=blackjackgame['you'];
const dealer=blackjackgame['dealer'];
const hitsound= new Audio('swish.m4a')
const winsound= new Audio('cash.mp3')
const losssound= new Audio('aww.mp3')
document.querySelector('#hit-button').addEventListener('click',blackjackhit);
document.querySelector('#deal-button').addEventListener('click',blackjackdeal);
document.querySelector('#stand-button').addEventListener('click',dealerlogic);
document.querySelector('#refresh').addEventListener('click',refresh);
document.querySelector('#reload').addEventListener('click',refresh);
let winscore=0;
let lossscore=0;
let drawscore=0;
function blackjackhit()
{
    if(blackjackgame['isstand']===false)
    {
        let card= randomcard();
        console.log(card);
        showcard(card,you);
        updatescore(card,you);
        showscore(you);
    }
}
function randomcard()
{
    let randomindex= Math.floor(Math.random()*13);
    return blackjackgame['card'][randomindex];
}
function showcard(card,activeplayer)
{
    if(activeplayer['score']<=21)
    {
        let cardimage= document.createElement('img');
        cardimage.src=`${card}.png`;
        cardimage.style.width="120px";
        cardimage.style.height="170px";
        cardimage.style.margin="15px";
        document.querySelector(activeplayer['div']).appendChild(cardimage);
        hitsound.play();
    }
}
function updatescore(card,activeplayer)
{
    if(card==='A')
    {
        // if adding 11 keeps me below 21 add 11 otherwise 1.
        if(activeplayer['score']+blackjackgame['cardmap'][card][1]<=21)
        {
            activeplayer['score']+=blackjackgame['cardmap'][card][1];
        }
        else
        {
            activeplayer['score']+=blackjackgame['cardmap'][card][0];
        }
    }
    else
    {
        activeplayer['score']+=blackjackgame['cardmap'][card];
    }
    
}
function showscore(activeplayer)
{
    if(activeplayer['score']>21)
    {
        document.querySelector(activeplayer['scorespan']).textContent="BURST!!";
        document.querySelector(activeplayer['scorespan']).style.color="red";
    }
    else
    {
        document.querySelector(activeplayer['scorespan']).textContent=activeplayer['score'];
    }
}
var count=0;
function blackjackdeal()
{
    if(blackjackgame['turnover']===true)
    {
        let yourimages= document.querySelector('#your-box').querySelectorAll('img');
        let dealerimages= document.querySelector('#dealer-box').querySelectorAll('img');
        for(let i=0;i<yourimages.length;i++)
        {
            yourimages[i].remove();
        }
        for(let i=0;i<dealerimages.length;i++)
        {
            dealerimages[i].remove();
        }
        you['score']=0;
        dealer['score']=0;
        document.querySelector('#your-blackjack-result').textContent=0;
        document.querySelector('#your-blackjack-result').style.color="white";
        document.querySelector('#dealer-blackjack-result').textContent=0;
        document.querySelector('#dealer-blackjack-result').style.color="white";
        document.querySelector('#blackjack-result').textContent="Let's Play";
        document.querySelector('#blackjack-result').style.color="white";
        blackjackgame['isstand']=false;
        blackjackgame['turnover']=false;
        count++;
        if(count===5)
        {
            blackjackgame['turns']=true;
            finalresult();
        }
    }
}
function dealerlogic()
{
    blackjackgame['isstand']===true;
    let card= randomcard();
    showcard(card,dealer);
    updatescore(card,dealer);
    showscore(dealer);
    if(dealer['score']>16)
    {
        blackjackgame['turnover']=true;
        let winner=computewinner();
        showresult(winner);
    }
    else
    {
        setInterval(dealerlogic(),6000);
    }
}
function computewinner()
{
    let winner;
    if(you['score']<=21)
    {
        // check if bot score is lesser or more than 21.
        if(you['score']>dealer['score'] || (dealer['score']>21))
        {
            console.log("you won");
            winner=you;
        }
        else if(you['score']<dealer['score'])
        {
            console.log("you lost");
            winner=dealer;
        }
        else if(you['score']===dealer['score'])
        {
            console.log("you tied");
        }
    // condition when user bust but dealer doesn't
    }
    else if(you['score']>21 && dealer['score']<=21)
    {
        console.log("You lost")
        winner=dealer;
        // when both bust.,\
    }
    else if(you['score']>21 && dealer['score']>21)
    {
        console.log("you drew");
    }
    return winner;
}
function showresult(win)
{
    if(win===you)
    {
        document.querySelector('#blackjack-result').textContent="You Won!";
        document.querySelector('#blackjack-result').style.color="green";
        winsound.play();
        winscore++;
        document.querySelector('#wins').textContent=winscore;
    }
    else if(win==dealer)
    {
        document.querySelector('#blackjack-result').textContent="You Lost!";
        document.querySelector('#blackjack-result').style.color="red";
        losssound.play();
        lossscore++;
        document.querySelector('#loses').textContent=lossscore;
    }
    else
    {
        document.querySelector('#blackjack-result').textContent="You Drew!";
        document.querySelector('#blackjack-result').style.color="yellow";
        drawscore++;
        document.querySelector('#draws').textContent=drawscore;
    }
    // document.querySelector('#your-blackjack-result').textContent=0;
    // document.querySelector('#your-blackjack-result').style.color="white";
    // document.querySelector('#dealer-blackjack-result').textContent=0;
    // document.querySelector('#dealer-blackjack-result').style.color="white";
}
function refresh()
{
    if(blackjackgame['turns']==true)
    {
        location.reload();
    }
}
function finalresult()
{
    console.log("i am in final result");
    var win= document.getElementById('wins').innerText;
    var loss= document.getElementById('loses').innerText;
    var div=document.getElementById('final-result');
    var h1=document.createElement('h1');
    if(win>loss)
    {
        document.getElementById('message').innerText="Winner Winner :)";
        document.getElementById('message').style.color="green";
    }
    else if(win<loss)
    {
        document.getElementById('message').innerText="LOSER :(";
        document.getElementById('message').style.color="red";
    }
    else if(win==loss)
    {
        document.getElementById('message').innerText="DRAW GAME :|";
        document.getElementById('message').style.color="yellow";
    }
}