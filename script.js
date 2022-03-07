//Developed by Mukesh Kumar Sah

let div = document.getElementById("videodiv");


// (1) Show/Display Videos on Homepage



async function display(){

    // q = Popular Videos --> Popular%20Videos (%20 -> Space)

    let res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDsV6RK0dytl2VMbzzfwx8F-uM69r9qcLs&type=video&q&maxResults=51`);

    let data = await res.json();
    
    for({id:{videoId}}of data.items)
    {
    let videodiv= document.createElement("iframe")
    videodiv.setAttribute("class","mons")
    videodiv.src = `https://www.youtube.com/embed/${videoId}`;
    videodiv.allow = 'fullscreen'
    div.append(videodiv)
    }

}

display();




// (2) Search When Something is typed in the search-box

async function searchVideos(){
    document.getElementById("videodiv").innerHTML=""; // Empty 

    let query = document.getElementById("video").value; // Search String/ Query String

//search for videos
let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyDsV6RK0dytl2VMbzzfwx8F-uM69r9qcLs&maxResults=51`);

let data = await res.json();

for({id:{videoId}}of data.items)
{
let videodiv= document.createElement("iframe")
videodiv.setAttribute("class","mons")
videodiv.src = `https://www.youtube.com/embed/${videoId}`;
videodiv.allow = 'fullscreen'
div.append(videodiv)
}

}