// Unsplash API
const count = 10;
const apiKey = 'I0PabqRrq5szdGI-VfXwwPqr02MT1WSkpCl0s74s6IA';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from API

async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        const data = response.json();
        console.log(data);
    } catch (error) {
        console.log("Whoops", error)
    }
}



// On Load
getPhotos();