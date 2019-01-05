$(`#btn2`).before(`<button id="btn1">1. Click me!</button>`)
$(`#btn1`).css(`display`, `block`);
$(`#btn1`).click(function () {
    alert('I have been clicked!');
});

$(`#btn2`).click(function () {
    let getValue = $(`input[id=input1]`).val();
    alert(getValue);
});

$(`#colorDiv`).mouseover(function () {
    $(`#colorDiv`).css('background-color', 'orange');
});

$(`#colorDiv`).mouseout(function () {
    $(`#colorDiv`).css('background-color', 'grey');
});

$(`#colorDiv`).after(`<p id="p1">4. Click to change the color!</p>`);
$(`#p1`).click(function () {
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    $(`#p1`).css('color', randomColor);
});

$(`#p1`).after(`<button id="btn5">5. Click me to add a span!</button>`);
$(`#btn5`).after(`<div id="div5"></div>`);
$(`#btn5`).click(function () {
    $(`#div5`).after(`<span id="span5">Blake Reeves </span>`);
    $(`#span5`).css({ 'display': 'block', 'marginTop': '1em' });
});

let friends = ['Robin', ' Kyle', ' David', ' Michael', ' JP', ' Jacob', ' Will', ' Bryant', ' Savannah', ' Katelin'];
$(`#btn6`).click(function () {

    for (i = 0; i < friends.length; i++) {
        $(`#ul6`).append(`<li>`+friends[i]+`</li>`);
    }
});
