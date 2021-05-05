const componentListCanvas = [];
var xPos = 5;
var yPos = 5;
const loadFile=(e)=>{
    const canvas = document.getElementById("myCanvash");
    const ctx = canvas.getContext("2d");
    var img = document.createElement('img');
    img.src = URL.createObjectURL(e.target.files[0]);
    componentListCanvas.push(img.cloneNode(true))
    const UploadedImage=componentListCanvas[componentListCanvas.length-1]  
    UploadedImage.addEventListener('load',e=>{
            ctx.drawImage(UploadedImage, xPos, yPos, 100, 100);
        })
            if (xPos>500) {
                xPos=0;
                yPos+=110
                
            }
            xPos+=110
    
    console.log(componentListCanvas)
}
const cosoleImage=()=>{
    console.log(componentListCanvas);
}