let index = 0;

function changeBackGroundColor()
{
   

    if( index % 2 == 0)
    {
        // // change the background color
        // anime({
        //     targets: 'body',
        //     backgroundColor: '#f0a1a5', // pink color
        //     easing: 'easeInOutSine',
        //     duration: 5000,
        // });

        // change the heart ratio to make a beating heart
        anime({
            targets: '#HEART',
            scale: [1, 4],
            duration: 3000,
            easing: "linear",
        });
    }
    else
    {
        // // change the background color
        // anime({
        //     targets: 'body',
        //     backgroundColor: '#fbc8d6',
        //     easing: 'easeInOutSine',
        //     duration: 5000,
        // });

        // change the heart ratio so it's look like a beating heart
        anime({
            targets: '#HEART',
            scale: [4, 1],
            duration: 3000,
            easing: "linear",
        });
    }
    index += 1;

}


function buttonClick()
{
    window.location.href = "./success.html";
}

let noButton = document.getElementById("no");
noButton.addEventListener('click',buttonClick);

let yesButton = document.getElementById("yes");
yesButton.addEventListener('click' , buttonClick);
// create an infinite loop call the function change background color every 3 seconds
setInterval(changeBackGroundColor , 3000);

