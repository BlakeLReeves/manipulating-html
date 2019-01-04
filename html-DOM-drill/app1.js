document.addEventListener("DOMContentLoaded", function () {

    let btn1 = document.createElement("button");
    btn1.setAttribute("id", "domBtn");
    let text = document.createTextNode("1. Click Me!");

    btn1.appendChild(text);
    document.body.prepend(btn1);

    document.getElementById("domBtn").style.display = "block";

    btn1.addEventListener("click", function () {
        alert('I have been clicked!');
    });

    let htmlBtn = document.getElementById("htmlBtn");
    let input1 = document.getElementById("input1");
    htmlBtn.addEventListener("click", function () {
        alert(input1.value);
    });

    let colorDiv = document.getElementById("colorDiv");
    colorDiv.style.backgroundColor = "grey";
    colorDiv.addEventListener("mouseover", function (e) {
        e.target.style.backgroundColor = "orange";
    });
    colorDiv.addEventListener("mouseout", function (e) {
        e.target.style.backgroundColor = "grey";
    });

    let para = document.createElement('p');
    let paraText = document.createTextNode('4. Click to change the color!');
    para.appendChild(paraText);
    colorDiv.after(para);
    para.addEventListener("click", function (e) {

        let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        para.style.color = randomColor;

    });

    let btn5 = document.createElement('button');
    btn5.style.marginBottom = '1em';
    let div5 = document.createElement('div');
    let btn5Text = document.createTextNode('5. Click me to add a span!');
    btn5.appendChild(btn5Text);
    para.after(btn5);
    document.body.appendChild(div5);
    btn5.addEventListener('click', function () {
        let span = document.createElement('span');
        let spanText = document.createTextNode('Blake Reeves ');
        span.appendChild(spanText);
        div5.appendChild(span);
    });

    let friends = ['Robin', ' Kyle', ' David', ' Michael', ' JP', ' Jacob', ' Will', ' Bryant', ' Savannah', ' Katelin'];
    let btn6 = document.getElementById('btn6');
    let ul6 = document.getElementById('ul6');
    btn6.addEventListener('click', function () {
        let list = document.createElement('li');
        ul6.appendChild(list);

        for (i = 0; i < friends.length; i++) {
                let listText = document.createTextNode(friends[i]);
                list.appendChild(listText);
        }
    });

});