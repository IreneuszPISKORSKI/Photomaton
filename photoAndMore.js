const save = window.location.search;
const urlParams = new URLSearchParams(save);
const parking = urlParams.get('parking')
const place = urlParams.get('place');
const plaque = urlParams.get('plaque');
const commentaireInput = document.getElementById('commentaire');
const nextBtn3 = document.getElementById('bt-next3');
let start = document.getElementById("start");
let video = document.getElementById("video");
let clickButton = document.getElementById("photo");
let canvas = document.getElementById("canvas");
let image_data_url;
let commentaire;

commentaireInput.addEventListener('change', (comment)=> {
    commentaire = comment.target.value
})

nextBtn3.addEventListener('click', (evt) =>{
    localStorage.setItem('image',image_data_url);
      window.location.href = `recap.html?parking=${parking}&place=${place}&plaque=${plaque}&commentaire=${commentaire}`;  
  })

start.addEventListener('click', async function() {
    let stream = null;
    
    try {
    	stream = await navigator.mediaDevices.getUserMedia({ video: {facingMode: {exact:"environment"}}, audio: false });
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
    canvas.getContext('2d').drawImage(video, 0, 0, 120, 160);
    image_data_url = canvas.toDataURL('image/jpeg');
    console.log(image_data_url);
});
