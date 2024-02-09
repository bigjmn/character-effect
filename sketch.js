let video;
let asciiDiv;
const density = 'Ñ@W$9876543210?!abc;:+=-,._ '

function setup(){
    noCanvas()
    video = createCapture(VIDEO)
    video.size(48, 48)
    asciiDiv = createDiv()
}

function draw() {
    video.loadPixels();
    let asciiString = ""
    for (let j = 0; j < video.height; j++){
      
      for (let i = 0; i < video.width; i++){
        const pixelIdx = (i+j*video.width)*4 
        const redP = video.pixels[pixelIdx]
        const greenP = video.pixels[pixelIdx+1]
        const blueP = video.pixels[pixelIdx+2]
        const avg = (redP+greenP+blueP)/3 
        const len = density.length
        const charIdx = floor(map(avg,0,255,len,0))
        
        const c = density[charIdx]
        if (c === ' '){
          asciiString += '&nbsp;'
        } else {
          asciiString += c
        }
        
        
      }
      asciiString+= '<br/>'

    }
    asciiDiv.html(asciiString)
  }