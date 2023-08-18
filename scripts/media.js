

let video_view = document.getElementById('video_view')
let image_view = document.getElementById('image_view')
let mediaType = null

class Media {
    constructor(title, type, size, blob) {
        this.title = title
        this.type = type
        this.size = size
        this.blob = blob
    }
}
let Medias = []
let videoMedias = []
let audioMedias = []
let photoMedias = []

let div_video = document.getElementById('div_video')
let div_music = document.getElementById('div_music')
let div_photo = document.getElementById('div_photo')

function RetrieveMedias(){
    let newMedias = JSON.parse(localStorage.getItem('Medias'))
    if(Array.isArray(newMedias)) {
        Medias = newMedias
    }

    let newvideoMedias = JSON.parse(localStorage.getItem('videoMedias'))
    if(Array.isArray(newvideoMedias)) {
        videoMedias = newvideoMedias
    }

    let newaudioMedias = JSON.parse(localStorage.getItem('audioMedias'))
    if(Array.isArray(newaudioMedias)) {
        audioMedias = newaudioMedias

    }

    let newphotoMedias = JSON.parse(localStorage.getItem('photoMedias')) 
    if(Array.isArray(newphotoMedias)) {
        photoMedias = newphotoMedias
    }

}
function InitializedMedia() {
    if(videoMedias.length > 0) {
        PopulateVideos()
    }
    if(audioMedias.length > 0) {
        PopulateAudios()
    }
    if(photoMedias.length > 0) {
        PopulatePhotos()
    }
}



// Medias = []
// videoMedias = []
// audioMedias = []
// photoMedias = []
// SaveMedias()



function GetFiles() {
    document.getElementById('input_file').onchange = function(){
        if(this.files.length === 1) {
            let blob = URL.createObjectURL(this.files[0])
            
            let media = new Media(this.files[0].name, this.files[0].type, this.files[0].size, blob)
        
            if(media.type.toLowerCase() === 'video/mp4' || media.type.toLowerCase() === 'video/mov' || media.type.toLowerCase() === 'video/wmv' || media.type.toLowerCase() === 'video/avi' || media.type.toLowerCase() === 'video/avchd' || media.type.toLowerCase() === 'video/flv' || media.type.toLowerCase() === 'video/f4v' || media.type.toLowerCase() === 'video/swf' || media.type.toLowerCase() === 'video/mkv' || media.type.toLowerCase() === 'video/webm' || media.type.toLowerCase() === 'video/html5' || media.type.toLowerCase() === 'video/mpeg-2'){
                let searchObeject = {id: `${media.blob}`, searchTitle: `${media.title}`}
                SearchMedias.push(searchObeject)
                videoMedias.push(media)
                Medias.push(media)
                PopulateVideos()   
                SaveMedias() 
                document.getElementById('input_file').value = '';
                // URL.revokeObjectURL(blob)

                
            } else if(media.type.toLowerCase() === 'audio/x-m4a' || media.type.toLowerCase() === 'audio/flac' || media.type.toLowerCase() === 'audio/mp3' || media.type.toLowerCase() === 'audio/mp4' || media.type.toLowerCase() === 'audio/wav' || media.type.toLowerCase() === 'audio/wma' || media.type.toLowerCase() === 'audio/mpeg') {
                let searchObeject = {id: `${media.blob}`, searchTitle: `${media.title}`}
                SearchMedias.push(searchObeject)
                audioMedias.push(media)
                Medias.push(media)
                PopulateAudios()
                SaveMedias()
                document.getElementById('input_file').value = ''
                

            } else if(media.type.toLowerCase() === 'image/jpeg' || media.type.toLowerCase() === 'image/png' || media.type.toLowerCase() === 'image/raw' || media.type.toLowerCase() === 'image/tif' || media.type.toLowerCase() === 'image/tiff' || media.type.toLowerCase() === 'image/eps' || media.type.toLowerCase() === 'image/raw' || media.type.toLowerCase() === 'image/gif') {
                let searchObeject = {id: `${media.blob}`, searchTitle: `${media.title}`}
                SearchMedias.push(searchObeject)
                photoMedias.push(media)
                Medias.push(media)
                PopulatePhotos()
                SaveMedias()
                document.getElementById('input_file').value = ''
                
            } else {
                
                document.getElementById('input_file').value = ''
                
            }

        } else if(this.files.length > 1) {
            let fileLength = this.files.length
            let file = this.files
            let currentFiles = () =>{
                return new Promise((resolve, reject)=>{
                    let tempfiles = []
                    for(let i = 0; i<fileLength; i++){
                        tempfiles.push(file[i])
                        resolve(tempfiles)
                    }
                    


                })

            }

            let newFile = async () => {
                let newFiles = await currentFiles()
                newFiles.forEach(currentFile=>{
                    let blob = URL.createObjectURL(currentFile)
                    let media = new Media(currentFile.name, currentFile.type, currentFile.size, blob)
                    
                
                    if(media.type.toLowerCase() === 'video/mp4' || media.type.toLowerCase() === 'video/mov' || media.type.toLowerCase() === 'video/wmv' || media.type.toLowerCase() === 'video/avi' || media.type.toLowerCase() === 'video/avchd' || media.type.toLowerCase() === 'video/flv' || media.type.toLowerCase() === 'video/f4v' || media.type.toLowerCase() === 'video/swf' || media.type.toLowerCase() === 'video/mkv' || media.type.toLowerCase() === 'video/webm' || media.type.toLowerCase() === 'video/html5' || media.type.toLowerCase() === 'video/mpeg-2'){
                        let searchObeject = {id: `${media.blob}`, searchTitle: `${media.title}`}
                        SearchMedias.push(searchObeject)
                        videoMedias.push(media)
                        Medias.push(media)
                        document.getElementById('input_file').value = '';
                        
          
                    } else if(media.type.toLowerCase() === 'audio/x-m4a' || media.type.toLowerCase() === 'audio/flac' || media.type.toLowerCase() === 'audio/mp3' || media.type.toLowerCase() === 'audio/mp4' || media.type.toLowerCase() === 'audio/wav' || media.type.toLowerCase() === 'audio/wma' || media.type.toLowerCase() === 'audio/mpeg') {
                        let searchObeject = {id: `${media.blob}`, searchTitle: `${media.title}`}
                        SearchMedias.push(searchObeject)
                        audioMedias.push(media)
                        Medias.push(media)
                        document.getElementById('input_file').value = ''
                        
                   
    
                    } else if(media.type.toLowerCase() === 'image/jpeg' || media.type.toLowerCase() === 'image/png' || media.type.toLowerCase() === 'image/raw' || media.type.toLowerCase() === 'image/tif' || media.type.toLowerCase() === 'image/tiff' || media.type.toLowerCase() === 'image/eps' || media.type.toLowerCase() === 'image/raw' || media.type.toLowerCase() === 'image/gif') {
                        let searchObeject = {id: `${media.blob}`, searchTitle: `${media.title}`}
                        SearchMedias.push(searchObeject)
                        photoMedias.push(media)
                        Medias.push(media)
                        document.getElementById('input_file').value = ''
                        
                    
                
                    } else {
                        
                        document.getElementById('input_file').value = ''
                        
                    }
                    
                   
                })

            }
            newFile().then(data=>{
                PopulateVideos()
                PopulateAudios()
                PopulatePhotos()
                SaveMedias() 
            })
    
        }
        
    }
    
        

}



function PopulateVideos() {
    
    div_video.innerText = ''
    Sort(videoMedias)
    if(videoMedias.length > 0){
        let counter = 0

        videoMedias.forEach(video => {
            counter ++
            let videoTitle = document.createElement('div')
            videoTitle.style.color = 'var(--dark-accent-color)'
            videoTitle.style.backgroundColor = 'var(--white-color)'
            videoTitle.style.padding = '1rem 2rem'
            videoTitle.style.fontSize = '10px'
            videoTitle.className = 'video'
            videoTitle.id = video.blob
            videoTitle.style.margin= '5px'
            videoTitle.style.width= '90%'
            videoTitle.addEventListener('mouseover', ()=> videoTitle.style.backgroundColor = 'var(--light-accent-color)')
            videoTitle.addEventListener('mouseleave', ()=> videoTitle.style.backgroundColor = 'var(--white-color)')
            videoTitle.addEventListener('click', function(event){
                mediaType = 'video'

    
                let videoURL = event.target.id
                Player(videoURL, counter)
            }) 

           
            videoTitle.innerText = video.title
            div_video.appendChild(videoTitle)
            

            

        })
    } else {
        
    }
}

function PopulateAudios(){
    
    div_music.innerText = ''
    let musicTitle = document.createElement('div') 
    Sort(audioMedias)

    if(audioMedias.length > 0) {
        audioMedias.forEach(audio => {
            let musicTitle = document.createElement('div') 

            musicTitle.style.color = 'var(--dark-accent-color)'
            musicTitle.style.backgroundColor = 'var(--white-color)'
            musicTitle.style.padding = '1rem 2rem'
            musicTitle.style.fontSize = '10px'
            musicTitle.className = 'video'
            musicTitle.id = audio.blob
            musicTitle.style.marginTop = '5px'
            musicTitle.style.margin= '5px'
            musicTitle.style.width= '90%'
            musicTitle.addEventListener('mouseover', ()=> musicTitle.style.backgroundColor = 'var(--light-accent-color)')
            musicTitle.addEventListener('mouseleave', ()=> musicTitle.style.backgroundColor = 'var(--white-color)')
            musicTitle.addEventListener('click', function(event){
                mediaType = 'audio'
    
                let URL = event.target.id
                Player(URL)
            }) 
            
            musicTitle.innerText = audio.title
            div_music.appendChild(musicTitle)

            

        })

    }
    
        
        
    

}
function PopulatePhotos(){
    
    div_photo.innerText = ''
    Sort(photoMedias)
    if(photoMedias.length > 0) {
        photoMedias.forEach(photo => {
            let photoTitle = document.createElement('div') 

            photoTitle.style.color = 'var(--dark-accent-color)'
            photoTitle.style.backgroundColor = 'var(--white-color)'
            photoTitle.style.padding = '1rem 2rem'
            photoTitle.style.fontSize = '10px'
            photoTitle.className = 'video'
            photoTitle.id = photo.blob
            photoTitle.style.margin= '5px'
            photoTitle.style.width= '90%'
            photoTitle.addEventListener('mouseover', ()=> photoTitle.style.backgroundColor = 'var(--light-accent-color)')
            photoTitle.addEventListener('mouseleave', ()=> photoTitle.style.backgroundColor = 'var(--white-color)')
        
            
            photoTitle.addEventListener('click', function(event){
                mediaType = 'photo'
    
                let URL = event.target.id
                Player(URL)
            }) 
            
            photoTitle.innerText = photo.title
            div_photo.appendChild(photoTitle)

            

        })
        
    }
    
}
// function SaveMedias(){
//     if(Medias.length === 0){
//         localStorage.setItem('Medias', JSON.stringify(Medias))
//     } 
//     if(videoMedias.length === 0) {
//         localStorage.setItem('videoMedias', JSON.stringify(videoMedias))
//     } 
//     if(audioMedias.length === 0) {
//         localStorage.setItem('audioMedias', JSON.stringify(audioMedias))

//     } 
//     if(photoMedias.length === 0) {
//         localStorage.setItem('photoMedias', JSON.stringify(photoMedias))

//     }
    
    
    
    
// }

function SaveMedias(){
    if(Medias.length > 0){
        localStorage.setItem('Medias', JSON.stringify(Medias))
    } 
    if(videoMedias.length > 0) {
        localStorage.setItem('videoMedias', JSON.stringify(videoMedias))
    } 
    if(audioMedias.length > 0) {
        localStorage.setItem('audioMedias', JSON.stringify(audioMedias))

    } 
    if(photoMedias.length > 0) {
        localStorage.setItem('photoMedias', JSON.stringify(photoMedias))

    }
    
    
    
    
}


function ToggleNextButton(){

    
    let toggle = function () {

       

        if(document.getElementById('previous_button').style.display === 'block' && document.getElementById('next_button').style.display === 'block') {

            document.getElementById('previous_button').style.display = 'none'
            document.getElementById('next_button').style.display = 'none'
            if(mediaType = 'video'){
                video_view.pause()

            } else {
                video_view.play() 

            }
            video_view.style.display === 'none' && video_view.pause() 

            
        
        } else {
            
            document.getElementById('previous_button').style.display = 'block'
            document.getElementById('next_button').style.display = 'block'
            if(mediaType = 'video'){
                video_view.play()

            } else {
                video_view.pause() 

            } 
            video_view.style.display === 'none' && video_view.pause() 

            
            
            
        }
        
       
    }
    image_view.onclick = toggle
    video_view.onclick = toggle

}

function NextPrevious(index, player, media) {
    if(media === photoMedias) {
        image_view.src = media[index].blob
        p1_title.innerText = ''
        p1_title.innerText = media[index].title


    } else {
        player.src = media[index].blob
        p1_title.innerText = ''
        p1_title.innerText = media[index].title
        player.play()

    }
   
    

}


function Player(URL, counter){
    let currentMedia = null

    let p1_title = document.getElementById('p1_title')

    

    for(let i = 0; i<Medias.length; i++){

        if(Medias[i].blob === URL) {
            currentMedia = Medias[i]
            break

        } else {
            
            
        }
    }

    if(currentMedia.type.toLowerCase() === 'video/mp4' || currentMedia.type.toLowerCase() === 'video/mov' || currentMedia.type.toLowerCase() === 'video/wmv' || currentMedia.type.toLowerCase() === 'video/avi' || currentMedia.type.toLowerCase() === 'video/avchd' || currentMedia.type.toLowerCase() === 'video/flv' || currentMedia.type.toLowerCase() === 'video/f4v' || currentMedia.type.toLowerCase() === 'video/swf' || currentMedia.type.toLowerCase() === 'video/mkv' || currentMedia.type.toLowerCase() === 'video/webm' || currentMedia.type.toLowerCase() === 'video/html5' || currentMedia.type.toLowerCase() === 'video/mpeg-2' ) {
        document.getElementById('image_view').style.display = 'none'
        document.getElementById('video_view').style.display = 'block'
        
        p1_title.innerText = currentMedia.title
        video_view.src = URL


        video_view.play()
        let index = 0
        for(let i = 0; i < videoMedias.length; i++){
            if(videoMedias[i].title === currentMedia.title){
                index = i
            }

        }

        document.getElementById('next_button').onclick = () => {
            if(index === videoMedias.length){
                index = 0
                NextPrevious(index, video_view, videoMedias)
            } else {
                index++
                NextPrevious(index, video_view, videoMedias)
            }
        }
        document.getElementById('previous_button').onclick = () => {
            if(index === 0){
                index = video.length
                NextPrevious(index, video_view, videoMedias)
            } else {
                index--
                NextPrevious(index, video_view, videoMedias)
            }
            
        }

        video_view.addEventListener('ended', function(){
            if(i < videoMedias.length){
                i++
                video_view.src = videoMedias[i].blob
                p1_title.innerText = ''
                p1_title.innerText = videoMedias[i].title
                video_view.play()

            }
            
        })

        

    } else if(currentMedia.type.toLowerCase() === 'audio/x-m4a' || currentMedia.type.toLowerCase() === 'audio/flac' || currentMedia.type.toLowerCase() === 'audio/mp3' || currentMedia.type.toLowerCase() === 'audio/mp4' || currentMedia.type.toLowerCase() === 'audio/wav' || currentMedia.type.toLowerCase() === 'audio/wma' || currentMedia.type.toLowerCase() === 'audio/mpeg') {
        video_view.setAttribute('poster', 'scripts/image.gif')
        document.getElementById('image_view').style.display = 'none'
        document.getElementById('video_view').style.display = 'block'
        p1_title.innerText = currentMedia.title
        video_view.src = URL
        video_view.play()
        let index = 0
        for(let i = 0; i < audioMedias.length; i++){
            if(audioMedias[i].title === currentMedia.title){
                index = i
            }

        }

        document.getElementById('next_button').onclick = () => {
            if(index === audioMedias.length){
                index = 0
                NextPrevious(index, video_view, audioMedias)
            } else {
                index++
                NextPrevious(index, video_view, audioMedias)
            }
        }
        document.getElementById('previous_button').onclick = () => {
            if(index === 0){
                index = audioMedias.length
                NextPrevious(index, video_view, audioMedias)
            } else {
                index--
                NextPrevious(index, video_view, audioMedias)
            }
            
        }

        

        
        video_view.addEventListener('ended', function(){
            index++
            if(index === audioMedias.length){
                index = 0
            }
            video_view.src = audioMedias[index].blob
            p1_title.innerText = ''
            p1_title.innerText = audioMedias[index].title
            video_view.play()
            
            
            
        })

    } else if(currentMedia.type.toLowerCase() === 'image/jpeg' || currentMedia.type.toLowerCase() === 'image/png' || currentMedia.type.toLowerCase() === 'image/raw' || currentMedia.type.toLowerCase() === 'image/tif' || currentMedia.type.toLowerCase() === 'image/tiff' || currentMedia.type.toLowerCase() === 'image/eps' || currentMedia.type.toLowerCase() === 'image/raw' || currentMedia.type.toLowerCase() === 'image/gif') {
        document.getElementById('image_view').style.display = 'block'
        document.getElementById('video_view').style.display = 'none'
        video_view.pause()
        p1_title.innerText = currentMedia.title
        image_view.src = URL

        let index = 0
        for(let i = 0; i < photoMedias.length; i++){
            if(photoMedias[i].title === currentMedia.title){
                index = i
            }

        }

        document.getElementById('next_button').onclick = () => {
            if(index === photoMedias.length){
                index = 0
                NextPrevious(index, video_view, photoMedias)
            } else {
                index++
                NextPrevious(index, video_view, photoMedias)
            }
        }
        document.getElementById('previous_button').onclick = () => {
            if(index === 0){
                index = photoMedias.length
                NextPrevious(index, video_view, photoMedias)
            } else {
                index--
                NextPrevious(index, video_view, photoMedias)
            }
            
        }


    } else{
        alert('Media Not Supported!')
    }

    


}
function Sort(toSort) {
    toSort.sort((a,b)=>{
        return a.title.localeCompare(b.title)
    })
    
}
// console.log('medias: ' + Medias.length + 'media:' + videoMedias.length + audioMedias.length + photoMedias.length)

// RetrieveMedias()
// InitializedMedia()

function mediaCategoryToggle(param){
    let all_toggled = document.getElementsByClassName('category-toggle')
    
    switch(param.innerText){
        case 'Videos': 
            for (i of all_toggled) {
                i.classList.remove('category-toggle')
            }
            
            div_video.style.display = 'flex'
            div_music.style.display = 'none'
            div_photo.style.display = 'none'
            param.classList.add('category-toggle')
            break
        case 'Music':
            for (i of all_toggled) {
                i.classList.remove('category-toggle')
            }
            div_video.style.display = 'none'
            div_music.style.display = 'flex'
            div_photo.style.display = 'none'
            param.classList.add('category-toggle')
            break
        case 'Images':
            for (i of all_toggled) {
                i.classList.remove('category-toggle')
            }
            div_video.style.display = 'none'
            div_music.style.display = 'none'
            div_photo.style.display = 'flex'
            param.classList.add('category-toggle')
            
            break

    }

}
GetFiles()
ToggleNextButton()

