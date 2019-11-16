const lodashSrc = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js'
const jQuerySrc = 'https://code.jquery.com/jquery-3.4.1.min.js'
const momentSrc = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.js'

const newArr = [];

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error('Somethng went wrong'))
}

loadScript(jQuerySrc, (error, script) => {

    if(error) {
        console.log('Oups')
    } else {
        console.log('jQuery Loaded')
        $('#jquery-load').text('jQuery Lib Loaded')
    
        const jqueryContainer = $('#jquery-load');
        
        loadScript(lodashSrc, (error, script) => {
            if(error) {
                console.log('Oups')
            } else {
                console.log('Lodash loaded')
                console.log(_.isArray(jqueryContainer))
        
                loadScript(momentSrc, () => {
                    console.log('Moment has loaded')
                    console.log(moment().add(1, 'year'))
                })
            }
        })
    }
});



