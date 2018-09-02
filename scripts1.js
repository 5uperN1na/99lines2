//BACK UP SCRIPT


window.addEventListener('DOMContentLoaded', function () {

    //DIV CONTAINER CREATION
    //Created div container and appended div container to the body
    let divContainer = document.createElement('div');
    document.body.appendChild(divContainer);

    //BUTTON CREATION
    //Created div element
    let divBtn = document.createElement('div');
    //Created button element
    let button = document.createElement('button');
    //Created text for button
    let text = document.createTextNode('Sing!');
    //Appended text to the button element.
    button.appendChild(text);
    //Appended button element (with text) to the div
    divBtn.appendChild(button);
    //Apended div to div container
    //div.className = 'btn';
    divContainer.appendChild(divBtn);

    //H1 CREATION
    let h1Div = document.createElement('div');
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('My Singing Friends!');
    h1.appendChild(h1Text);
    h1Div.appendChild(h1);
    divContainer.appendChild(h1Div);

    //global variables 
    var i;
    var j;
    var name = '';

    let lyrics = '';
    let lyrics1 = '';


    //let div = document.createElement('div');
    //div.className = 'friend';
    //divContainer.appendChild(div);



    divBtn.addEventListener('click', function () {

        //outer loop-to loop through friends in friend array

        var friendsName = ['Erica', 'David', 'Meredith', 'Hernan', 'Ashley'];


        for (j = 0; j < friendsName.length; j++) {
            name = friendsName[j]

            let h3Div = document.createElement('div');
            let h3 = document.createElement('h3');
            let h3Friend = document.createTextNode(name);
            h3.appendChild(h3Friend);
            h3Div.appendChild(h3);
            divContainer.appendChild(h3Div);


            //inner loop that counts down from 99 that returns first statement if >1 or second statement if = 1.
            for (i = 10; i > 0; i--) {

                if (i > 1) {

                    //let pDiv = document.createElement('div');
                    let p = document.createElement('p');
                    let pLyrics = document.createTextNode(lyrics);
                    p.appendChild(pLyrics);
                    h3Div.appendChild(p);
                    divContainer.appendChild(h3Div);

                    lyrics = i + ' lines of code in a file, ' + i + ' lines of code; ' + friendsName[j] + ' strikes one out, clears it all out, \n';
                }
                else {

                    //let pDiv1 = document.createElement('div');
                    let p1 = document.createElement('p');
                    let pLyrics1 = document.createTextNode(lyrics1);
                    p1.appendChild(pLyrics1);
                    h3Div.appendChild(p1);
                    divContainer.appendChild(h3Div);

                    lyrics1 = i + ' line of code in a file, ' + i + ' line of code; ' + friendsName[j] + ' strikes one out, clears it all out, no more lines of code in the file. \n';
                }
            }



        }
        //console.log(name);







    });

});
