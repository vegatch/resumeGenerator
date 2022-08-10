import { loadToHtml } from './resume.js'

    document.querySelector(".btnSearchResume").addEventListener('click', () =>{
      document.querySelector(".container").innerHTML = "";
      const paramsFirstname = document.querySelector("#firstname").value
      const paramsLastname = document.querySelector("#lastname").value
      const baseUrl = 'http://localhost:5555'
      const endPoint = '/api/search/'
      console.log('click')
      fetch(baseUrl + endPoint + paramsFirstname + "/" + paramsLastname)
        .then(response => response.json())
        .then(data =>{
          console.log(data)
          loadToHtml(data)
          document.querySelector("#firstname").value = '';
          document.querySelector("#lastname").value  = '';
        })
        .catch()
      
    })


// async function renderToHtml() {
//     const baseUrl ='http://localhost:5555/'
//     const getEndPoint = 'api/allresume'
//     // const response = await fetch(`${window.location.href}api/allresume`);
//     const response = await fetch(baseUrl + getEndPoint);
//     const data = await response.json();
    
//     console.log(data)
//     loadToHtml(data)
//     // document.querySelector('.container').innerHTML = data[0].fullname;

//   }
  
// renderToHtml();



// export {renderToHtml}



// $(document).ready(function () {  
//   var form = $('.container'),  
//   cache_width = form.width(),  
//   a4 = [600.28, 841.89]; // for a4 size paper width and height  

//   $('#btnDownload').on('click', function () {  
//       $('body').scrollTop(0);  
//       createPDF();  
//   });  
  
//   function createPDF() {  
//       getCanvas().then(function (canvas) {  
//           var  
//            img = canvas.toDataURL("image/png"),  
//            doc = new jsPDF({  
//                unit: 'px',  
//                format: 'a4'  
//            });  
//           doc.addImage(img, 'JPEG', 20, 20);  
//           doc.save('ResumeFromRG.pdf');  
//           form.width(cache_width);  
//       });  
//   }  
    
//   function getCanvas() {  
//       form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');  
//       return html2canvas(form, {  
//           imageTimeout: 2000,  
//           removeContainer: true  
//       });  
//   }
// });




// ===========================================

function savePDF() {
  document.querySelector(".searchContainer").style.display = "none"
  document.querySelector(".container").style.width = "95vw"
  document.body.style.fontSize = ".95em"
  window.print();
  document.querySelector(".searchContainer").style.display = "block"
  document.querySelector(".container").style.width = "70vw"
  document.body.style.fontSize = "1em"
}

document.querySelector('.btnDownload').addEventListener('click', () =>{
  savePDF()
})