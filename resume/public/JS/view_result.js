import {loadHtmlForm} from './loadHtmlForms.js'



document.querySelector(".searchPara").addEventListener('click', () =>{
      document.querySelector(".container").innerHTML = "";
      const resumeID = document.querySelector("#resumeId").value
      const baseUrl = 'http://localhost:5555'
      const endPoint = '/api/search/'
      console.log('click')
      fetch(baseUrl + endPoint + resumeID )
        .then(response => response.json())
        .then(data =>{
          console.log(data)
          loadHtmlForm(data)
          document.querySelector("#resumeId").value = '';
          
        })
        .catch()
      
    })
