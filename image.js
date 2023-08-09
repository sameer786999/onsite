const fileInput=document.querySelector(".file-input");
const chooseImg=document.querySelector(".choose-img")
const previewImg=document.querySelector(".preview-img img")
const slider=document.querySelector(".slider input");
const filterValue=document.querySelector(".filter-info .value")
const filterOptions=document.querySelector(".filter button")
const filterName=document.querySelector(".filter-info .name")
const saveImg=document.querySelector(".save-img")


let brightness=100;
const applyFilters=()=>{
  previewImg.style.filter=`brightness(${brightness}%)`;
}





const loadImage=()=>{
  let file=fileInput.files[0];

  if(!file) return;
  //console.log(file)
 previewImg.src=URL.createObjectURL(file);
  previewImg.addEventListener('load',()=>{
    


  })
}


Object.keys(filterOptions).forEach(option=>{
  option.addEventListener("click",()=>{
    option.classList.add("button");
    filterName.innerText=option.innerText;

    if(option.id==="brightness"){
  
    slider.max="200";
      slider.value=brightness;
      filterValue.innerHTML = `${brightness}%`;
    }
 

  })
})


  const updateFilter=()=>{
    //console.log(slider.value)
    filterValue.textContent=`${slider.value}%`;
    const selectedFilter=document.querySelector(".filter .button")
    if(selectedFilter.id=="brightness"){
      brightness=slider.value;
    


    }
    applyFilters();
  
  }

  const saveImage=()=>{
    const canvas=document.createElement("canvas");
    const ctx=canvas.getContext("2d");
     canvas.width=previewImg.naturalWidth;
       canvas.height = previewImg.naturalHeight;
       ctx.filter=`brightness(${brightness}%)`;
       ctx.drawImage(previewImg,0,0,canvas.width,canvas.height);
       document.body.appendChild(canvas);
  
  }
  


fileInput.addEventListener("change",loadImage);
slider.addEventListener("input",updateFilter);
saveImg.addEventListener("click",saveImage)
chooseImg.addEventListener("click",()=> fileInput.click())