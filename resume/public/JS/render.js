import { loadToHtml } from './resume.js'

    document.querySelector(".btnSearchResume").addEventListener('click', () =>{
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

