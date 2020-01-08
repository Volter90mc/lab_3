let element1, element2;

function selectImg(id) {
    element1 = document.getElementById(id);
    element1.style.border = 'solid 5px red';
    element2 = document.getElementById((Number(id)+1));
    element3 = document.getElementById((Number(id)-1));
}

function onclickDown() {
    let swap = element1.src;
    element1.src = element2.src;
    element2.src = swap;
    element1.style.border = 'solid 0 red';
}

function onclickUp() {
    let swap = element1.src;
    element1.src = element3.src;
    element3.src = swap;
    element1.style.border = 'solid 0 red';
}

function selectSize (selectSize) {
    let valueSize = selectSize.options[selectSize.selectedIndex].value;
    for (let i = 0; i < 7; i++) {
         document.getElementsByTagName("img").item(i).style = `width: ${valueSize}px;`;
    }
}