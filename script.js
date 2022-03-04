let start = document.getElementById("start");
let video = document.getElementById("video");
let clickButton = document.getElementById("photo");
let canvas = document.getElementById("canvas");
let toImage = document.getElementById("showAll")
let image_data_url;

start.addEventListener('click', async function() {
    let stream = null;
    
    try {
    	stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    }
    catch(error) {
    	alert(error.message);
    	return;
    }
    video.srcObject = stream;
    video.style.display = 'block';
    start.style.display = 'none';
});

clickButton.addEventListener('click', function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.clientWidth, canvas.height);
    image_data_url = canvas.toDataURL('image/jpeg', 1.0);
    console.log(image_data_url); 
    
});

toImage.addEventListener('click', function(){
    let img = new Image();
    img.src = image_data_url;
    img_home.appendChild(img);
});

