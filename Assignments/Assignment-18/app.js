// EVENTS
// Assignment # 53-57

// Question:1

document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
          const src = e.target.getAttribute("src");
          document.querySelector('.modal-img').src = src;
          const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
          myModal.show();
    }
  })

// Question:2
// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.

function zoomIn(){
    let zoomPara=document.getElementById('para').style.fontSize='26px';
}
function zoomOut()
{
    let zoomPara=document.getElementById('para').style.fontSize='16px';
}