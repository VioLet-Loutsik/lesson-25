const nasaImage = document.getElementById('nasa-image');
const nasaTitle = document.getElementById('nasa-title');
const nasaDescription = document.getElementById('nasa-description');
const nasaCopyright = document.getElementById('nasa-copyright');

fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-12-12')
    .then(response => {
        return response.json()
    })
    .then(result => {
        console.log(result)
        const { url, copyright, title, explanation } = result;
        nasaImage.src = url;
        nasaTitle.innerText = title;
        nasaDescription.innerText = explanation;
        nasaCopyright.innerText = copyright;
    })
