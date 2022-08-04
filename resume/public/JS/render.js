import { loadToHtml } from './resume.js'

async function renderToHtml() {
    const baseUrl ='http://localhost:5555/'
    const getEndPoint = 'api/allresume'
    // const response = await fetch(`${window.location.href}api/allresume`);
    const response = await fetch(`${baseUrl}${getEndPoint}`);
    const data = await response.json();
    
    console.log(data)
    loadToHtml(data)
    // document.querySelector('.container').innerHTML = data[0].fullname;

  }
  
  renderToHtml();



  export {renderToHtml}

