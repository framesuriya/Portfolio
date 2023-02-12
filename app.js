function modeChange() {
    let container = document.querySelector('.container')
    let mode = document.querySelector('.btn-mode');
    if (container.style.backgroundColor === 'rgb(254, 253, 145)') {
        container.style.backgroundColor = 'rgb(19, 16, 16)'
        document.querySelector('.btn-mode').innerHTML = '☻ MODE'
    } else {
        container.style.backgroundColor = 'rgb(254, 253, 145)'
        document.querySelector('.btn-mode').innerHTML = '☺ MODE'
    }
    console.log(container.style.backgroundColor);

}