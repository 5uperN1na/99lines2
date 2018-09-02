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
    //var name = '';

    let div = document.createElement('div');
    div.className = 'friends';
    divContainer.appendChild(div);


    //let h3Div = document.createElement('div');
    // let h3 = document.createElement('h3');
    //h3Div.appendChild(h3);


    divBtn.addEventListener('click', function () {

        let pDiv = document.createElement('div');
        let name = document.createElement('p');
        //let nameText = document.createTextNode('Testing');
        //name.appendChild(nameText);
     
       



        //outer loop-to loop through friends in friend array

        var friends = ['Erica', 'David', 'Meredith', 'Hernan', 'Ashley'];


        for (j = 0; j < friends.length; j++) {
            name += friends[j].toUpperCase() + ':\n';

            //inner loop that counts down from 99 that returns first statement if >1 or second statement if = 1.
            for (i = 99; i > 0; i--) {

                if (i > 1) {
                    name += i + ' lines of code in a file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, \n';
                }
                else {
                    name += i + ' line of code in a file, ' + i + ' line of code; ' + friends[j] + ' strikes one out, clears it all out, no more lines of code in the file. \n';
                }
            }
        }
        console.log(name);
        pDiv.appendChild(name);
        divContainer.appendChild(pDiv);






    });

});
