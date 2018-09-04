//testing--removing divs to try and find out what is wrong with my loops.


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
    //div.className = 'h1';

    let div = document.createElement('div');
    div.className = 'friend';
    divContainer.appendChild(div);


    //global variables 
    var i;
    var j;
    var name;

    //array that lists friend's name.
    var friendsName = ['Erica', 'David', 'Meredith', 'Hernan', 'Ashley'];

    //created event listener when button clicked, it pulls each name and stores in h3 tag then lyrics of song in a p tag.
    divBtn.addEventListener('click', function () {

        //outer loop-to loop through friends in friend array
        for (j = 0; j < friendsName.length; j++) {
            //storing name from array in variable
            name = friendsName[j]


            let h3Div = document.createElement('div');
            let h3 = document.createElement('h3');
            let h3Friend = document.createTextNode(name);
            h3.appendChild(h3Friend);
            h3Div.appendChild(h3);
            divContainer.appendChild(h3Div);


            //inner loop that counts down from 99 that returns first statement if >1 or second statement if = 1.
            for (i = 99; i > 0; i--) {

                if (i > 1) {

                    var p = document.createElement('p');
                    p.innerText = i + ' lines of code in a file, ' + i + ' lines of code; ' + friendsName[j] + ' strikes one out, clears it all out, \n';
                    h3Div.appendChild(p);
                    divContainer.appendChild(h3Div);

                }
                else {

                    var p1 = document.createElement('p');
                    p1.innerText = i + ' line of code in a file, ' + i + ' line of code; ' + friendsName[j] + ' strikes one out, clears it all out, no more lines of code in the file. \n';
                    h3Div.appendChild(p1);
                    divContainer.appendChild(h3Div);

                }
            }



        }







    });

});
