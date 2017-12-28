import { cube } from './math.js';

function component() {
    var element = document.createElement('pre');

    if (process.env.NODE_ENV !== 'production'){

        alert('处于开发环境中');
    }

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());