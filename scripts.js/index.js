const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $forward= document.querySelector('#forward')
const $backaward= document.querySelector('#backaward')
const $range=document.querySelector('#range')


$play.addEventListener('click',handlePlay);


$pause.addEventListener('click',handlePause);
$backaward.addEventListener('click',handleBackaward);
$forward.addEventListener('click',handleForward);
$video.addEventListener('loadedmetadata',handleLoaded)
$video.addEventListener('timeupdate',handleLTimeUpdate)
$range.addEventListener('input',handleInput)



function handlePause(){
    $video.pause();
    $pause.hidden=true
    $play.hidden=false
   

}
function handlePlay(){
    $video.play();
    $play.hidden=true
    $pause.hidden=false

}
function handleBackaward(){
     $video.currentTime -= 10;

}
function handleForward(){
    $video.currentTime += 10;

}
function handleLoaded(){
$range.max = $video.duration

}
function handleLTimeUpdate(){
    $range.value=$video.currentTime
}
function handleInput(){
    $video.currentTime=$range.value
}