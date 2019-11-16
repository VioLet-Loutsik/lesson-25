const lodashSrc = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js'
const jQuerySrc = 'https://code.jquery.com/jquery-3.4.1.min.js'
const momentSrc = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.js'


function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

