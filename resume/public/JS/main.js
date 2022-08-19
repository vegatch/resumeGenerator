// import {renderToHtml} from './render.js'
// import { loadToHtml } from './resume.js'

// import {shortid} from "https://unpkg.com/shortid-dist@1.0.5/dist/shortid-2.2.13.min.js"

//================HTML form access in JS ==================================
const form = document.querySelector("#personForm")
const formTitle = document.querySelector('#titleForm')
const formContact = document.querySelector('#contactForm')
const formMedia = document.querySelector('#socioForm')
const formObjective = document.querySelector('#resObjective')
const formEducation = document.querySelector('#educationForm')
const formTech = document.querySelector('#techSkillsForm')
const formMarket = document.querySelector('#marketSkillsForm')
const formProject = document.querySelector('#projectsForm')
const formWork = document.querySelector('#workForm')


//==========================================================================

//================= HTML SUBMIT BUTTON ACCESS IN JS ========================
    // btnTitle = document.querySelector('#titleSubmit')

//==========================================================================


// ============================DEFAULT SHORTID VALUE TO PRIMARY KEY
const primaryId = shortid.generate();
let personId = document.querySelector('#pId')
personId.defaultValue = primaryId
document.querySelector("#pIdTitle").defaultValue = primaryId
personId.readOnly = true;
let titleId = document.querySelector('#title_id')
titleId.defaultValue = shortid.generate();;
titleId.readOnly = true;
let contactId = document.querySelector('#contactId')
contactId.defaultValue = shortid.generate();;
contactId.readOnly = true;

let mediaId = document.querySelector('#media_id')
mediaId.defaultValue = shortid.generate();;
mediaId.readOnly = true;


let objectiveid = document.querySelector('#objective_id')
objectiveid.defaultValue = shortid.generate();;
objectiveid.readOnly = true;

let techId = document.querySelector('#tech_id')
techId.defaultValue = shortid.generate();;
techId.readOnly = true;

let marketId = document.querySelector('#market_id')
marketId.defaultValue = shortid.generate();;
marketId.readOnly = true;

let projectId = document.querySelector('#project_id')
projectId.defaultValue = shortid.generate();;
projectId.readOnly = true;

let workId = document.querySelector('#work_id')
workId.defaultValue = shortid.generate();;
workId.readOnly = true;

let educationId = document.querySelector('#education_id')
educationId.defaultValue = shortid.generate();;
educationId.readOnly = true;



// ============================================================


// =============== ASSIGNUNG VALUES TO FOREIGN KEYS============
let personIdTitle = document.querySelector('#pIdTitle')
personIdTitle.defaultValue = pId.value;
personIdTitle.readOnly = true;

let personIdContact = document.querySelector('#pIdContact')
personIdContact.defaultValue = pId.value;
personIdContact.readOnly = true;


let personIdSocio = document.querySelector('#pidSocio')
personIdSocio.defaultValue = pId.value;
personIdSocio.readOnly = true;

let personIdObjective = document.querySelector('#pidObjective')
personIdObjective.defaultValue = pId.value;
personIdObjective.readOnly = true;


let personIdTech = document.querySelector('#pidTech')
personIdTech.defaultValue = pId.value;
personIdTech.readOnly = true;

let personIdMarket = document.querySelector('#pidMarket')
personIdMarket.defaultValue = pId.value;
personIdMarket.readOnly = true;


let personIdProject = document.querySelector('#pidProject')
personIdProject.defaultValue = pId.value;
personIdProject.readOnly = true;


let personIdWork = document.querySelector('#pIdWork')
personIdWork.defaultValue = pId.value;
personIdWork.readOnly = true;

let personIdEducation = document.querySelector('#pIdEducation')
personIdEducation.defaultValue = pId.value;
personIdEducation.readOnly = true;



// ============================================================






// console.log('from form',resumePersonId)




// const successMsg = document.querySelector('.message')
// successMsg.style.display = "none";

// const personForm = document.querySelector("#personForm")



// let titleNum = document.querySelector('#titleNum');
// let tech_number = document.querySelector('#tech_num');
// let marketNum = document.querySelector('#marketNum');
let project_number = document.querySelector('#project_num');
let work_number = document.querySelector('#work_num');
let educationNumber = document.querySelector('#education_number');

// titleNum.readOnly = true;
// tech_number.readOnly = true;
// marketNum.readOnly = true;
project_number.readOnly = true;
work_number.readOnly = true;
educationNumber.readOnly = true;


// titleNum.defaultValue = 0;
// link_number.defaultValue = 1
// tech_number.defaultValue = 1
// market_number.defaultValue = 1
// project_number.defaultValue = 1
// work_number.defaultValue = 1
// ============================== ASSIGN STARTING VALUE 
// let titleInput = document.querySelector('#title')
// titleInput.addEventListener('input', () =>{       
//     if(isNaN(titleNum)){
//         titleNum.defaultValue = 0;
//         console.log('i love my life')
//     }
// })

// let technicalSkillsInput = document.querySelector('#technicalSkills')
// tech1.addEventListener('input', () =>{       
//     if(isNaN(tech_num)){
//         tech_num.defaultValue = 0;
//     }
// })

// let marketableSkillsInput = document.querySelector('#marketableSkills')
// marketableSkillsInput.addEventListener('input', () =>{       
//     if(isNaN(marketNum)){
//         marketNum.defaultValue = 0;
//     }
// })


let projectRoleInput = document.querySelector('#projectRole')
projectRoleInput.addEventListener('input', () =>{       
    if(isNaN(project_number)){
        project_number.defaultValue = 0;
    }
})


let companyNameInput = document.querySelector('#companyName')
companyNameInput.addEventListener('input', () =>{       
    if(isNaN(work_number)){
        work_number.defaultValue = 0;
    }
})


let school_nameInput = document.querySelector('#school_name')
school_nameInput.addEventListener('input', () =>{       
    if(isNaN(educationNumber)){
        educationNumber.defaultValue = 0;
    }
})


// ================================================================================
// let urlnameInput = document.querySelector('#urlname')
// urlnameInput.addEventListener('keydown', () =>{ 
//     if(link_number !== null && link_number.value === ""){
//         link_number.defaultValue = 1
//     }    
// })

let addOne = function (input){
    return input.value ++
}
// ====================== ADD ONE TO VALUE========================
let title_submit = document.querySelector('#titleSubmit')
let link_submit = document.querySelector('#submit_link')
let tech_submit = document.querySelector('#submit_tech')

let market_submit = document.querySelector('#submit_market')
let project_submit = document.querySelector('#submit_project')
let work_submit = document.querySelector('#submit_work')
let education_submit = document.querySelector('#submit_education')

// let titleNumInput = document.querySelector('#titleNum')

// title_submit.addEventListener('click', () =>{addOne(titleNum)})
// tech_submit.addEventListener('click', () =>{addOne(tech_number)})
// market_submit.addEventListener('click', () =>{addOne(marketNum)})
project_submit.addEventListener('click', () =>{addOne(project_number)})
work_submit.addEventListener('click', () =>{addOne(work_number)})
education_submit.addEventListener('click', () =>{addOne(educationNumber)})


// ============================================================================
// ======================= API ENDPOINT SERVER ====================
const resumeUrl = '/api/resume'
const titleUrl = "/api/title"
const contactUrl = '/api/contact'
const mediaUrl = '/api/media'
const objectiveUrl = '/api/objective'
const techUrl = '/api/tech'
const marketUrl = '/api/market'
const projectUrl = '/api/project'
const workUrl = '/api/work'
const educationUrl = '/api/education'

// =================================================================



// ==================== clear radion Button and CheckBox ===========

let clearRadio = function(myName){
const radioElement = document.getElementsByName(myName);
   for(let i = 0; i < radioElement.length; i +=1)
   return radioElement[i].checked = false;
   
}
//  function refuses to work 

// clearRadio("school_attendance_method")
// console.log('log to see', clearRadio("school_attendance_method"))




// ========================= ERROR CLASS  ============================ //
let errorContainer = document.querySelector('.error');

const renderError = function(data){
    errorContainer.innerHTML ='';
    data.errors.forEach(err =>{
        errorContainer.innerHTML +=`<li>${err.msg} for ${err.param}</li>`
        setTimeout(() =>{ errorContainer.innerHTML = " " },4000000)
    })
}


//===============================================================
//=========== PERSON
// form.addEventListener('submit', (e) =>{
//     e.preventDefault();

//     const formData = new FormData(form);

//     const searchParams = new URLSearchParams();
//     for(const pair of formData){
//         searchParams.append(pair[0], pair[1])
//     }
    
//     fetch(resumeUrl, {
//         method: "POST",
//         body: searchParams
//     })
//     .then(response => response.json())
//     .then(data => renderError(data) )       
//     .catch(error => console.log(error))
//     // document.querySelector('#titleForm').refresh()    
        
//     document.querySelector("#fname").value = "";
//     document.querySelector("#middlename").value = "";
//     document.querySelector("#lastname").value = "";
//     // document.querySelector("#createUser").value ="";
//     // cUser.defaultValue='SBA'

// })

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(form);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(resumeUrl, {
        method: "POST",
        body: searchParams
    })
    // .then((result) => {
    //     if (result.status != 200) { throw new Error("Bad Server Response"); }
    //     renderError(data);
    //     // return result.text();
    //   })
      .then(response => response.json())
      .then(data => {
          console.log(data.errors)
          
          renderError(data);
          return false
          
      })   
    .catch(error => {
        console.log(error)
        return false
    })
    // document.querySelector('#titleForm').refresh()    
        
    document.querySelector("#fname").value = "";
    document.querySelector("#middlename").value = "";
    document.querySelector("#lastname").value = "";
    // document.querySelector("#createUser").value ="";
    // cUser.defaultValue='SBA'
      
})





//=========== TITLE
formTitle.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formTitle);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(titleUrl, {
        method: "POST",
        body: searchParams
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.errors)
        
        renderError(data);
        // if(!(data.errors)===''){
        //     title1,
        //     title2
        // }
    })
    .catch(error => console.log(error))
    titleId.defaultValue = shortid.generate();
    document.querySelector('#title1').value = '';
    document.querySelector('#title2').value = '';

    hideInput()
    document.querySelector(".box-Title2").style.display = "none"
    document.querySelector(".box-Title1").style.display = "block"
    document.querySelector("#title2").readOnly = false;
    

})




//========================= CONTACT
formContact.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formContact);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(contactUrl, {
        method: "POST",
        body: searchParams
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    document.querySelector('#contactId').defaultValue = shortid.generate();
    // titleId.defaultValue = generateString(12);
    document.querySelector("#city").value ='';
    document.querySelector("#state").value ='';
    document.querySelector("#zcode").value ='';
    document.querySelector("#remote").value ='';
    document.querySelector("#relocalization").value ='';
    document.querySelector("#email").value ='';
    document.querySelector("#phoneNumber").value ='';

})



//========================= MEDIA
formMedia.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formMedia);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(mediaUrl, {
        method: "POST",
        body: searchParams
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    document.querySelector('#media_id').defaultValue = shortid.generate();
    // titleId.defaultValue = generateString(12);
    document.querySelector("#linkedIn").value ='';
    document.querySelector("#gitHub").value ='';
    document.querySelector("#portfolio").value ='';

})




//========================= OBJECTIVE
formObjective.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formObjective);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(objectiveUrl, {
        method: "POST",
        body: searchParams
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    // document.querySelector('#objective_id').defaultValue = generateString(12);
    document.querySelector('#objective_id').defaultValue = shortid.generate();
    document.querySelector("#objective").value ='';

})




//========================= TECH SKILLS
formTech.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formTech);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(techUrl, {
        method: "POST",
        body: searchParams
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    // document.querySelector('#objective_id').defaultValue = generateString(12);
    document.querySelector('#tech_id').defaultValue = shortid.generate();
    document.querySelector("#tech1").value ='';
    document.querySelector("#tech2").value ='';
    document.querySelector("#tech3").value ='';
    document.querySelector("#tech4").value ='';
    document.querySelector("#tech5").value ='';
    document.querySelector("#tech6").value ='';
    document.querySelector("#tech7").value ='';
    document.querySelector("#tech8").value ='';
    document.querySelector("#tech9").value ='';
    document.querySelector("#tech10").value ='';

})




//========================= MARKET SKILSS
formMarket.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formMarket);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(marketUrl, {
        method: "POST",
        body: searchParams
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    // document.querySelector('#objective_id').defaultValue = generateString(12);
    document.querySelector('#market_id').defaultValue = shortid.generate();
    document.querySelector("#market1").value ='';
    document.querySelector("#market2").value ='';
    document.querySelector("#market3").value ='';
    document.querySelector("#market4").value ='';
    document.querySelector("#market5").value ='';
    document.querySelector("#market6").value ='';
    document.querySelector("#market7").value ='';
    document.querySelector("#market8").value ='';
    document.querySelector("#market9").value ='';
    document.querySelector("#market10").value ='';

})



//========================= PROJECTS
formProject.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formProject);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(projectUrl, {
        method: "POST",
        body: searchParams
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    // document.querySelector('#objective_id').defaultValue = generateString(12);
    document.querySelector('#project_id').defaultValue = shortid.generate();
    document.querySelector("#projectRole").value ='';
    document.querySelector("#projectName").value ='';
    document.querySelector("#projectLanguage").value ='';
    document.querySelector("#projectNonthStart").value ='';
    document.querySelector("#projectYearStart").value ='';
    document.querySelector("#projectNonthEnd").value ='';
    document.querySelector("#projectYearEnd").value ='';
    document.querySelector("#projectUrl").value ='';
    document.querySelector("#project_achievementOne").value ='';
    document.querySelector("#project_achievementTwo").value ='';
    document.querySelector("#project_achievementThree").value ='';
    

})



//========================= WORK EXPERIENCE

let clearFormWork = () => {
    document.querySelector("#workAchiev1").value ='';
    document.querySelector("#workAchiev2").value ='';
    document.querySelector("#workAchiev3").value ='';    
    document.querySelector("#workAchiev4").value =''; 
    document.querySelector("#workAchiev5").value ='';  
    document.querySelector("#workAchiev6").value ='';    
    document.querySelector("#workAchiev7").value ='';   
    document.querySelector("#workAchiev8").value ='';   
    document.querySelector("#workAchiev9").value ='';   
    document.querySelector("#workAchiev10").value ='';   
    

}
formWork.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formWork);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(workUrl, {
        method: "POST",
        body: searchParams
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

        // clearRadio("stillWorkHere")
        // clearRadio("workType")   
        const workHere = document.getElementsByName("stillWorkHere");
        for(let i = 0; i < workHere.length; i +=1)
        workHere[i].checked = false;
        const workType = document.getElementsByName("workType");
        for(let i = 0; i < workType.length; i +=1)
        workType[i].checked = false;
    document.querySelector('#work_id').defaultValue = shortid.generate();
    document.querySelector("#companyName").value ='';
    document.querySelector("#companyCity").value ='';
    document.querySelector("#companyState").value ='';
    document.querySelector("#positionInCompany").value ='';
    document.querySelector("#companyStartMonth").value ='';
    document.querySelector("#companyStartYear").checked =false;
    // document.querySelector("#stillWorkThere").value ='';
    document.querySelector("#companyEndMonth").value ='';
    document.querySelector("#companyEndYear").value ='';
    document.querySelector("#workAchiev1").value ='';
    document.querySelector("#workAchiev2").value ='';
    document.querySelector("#workAchiev3").value ='';    
    document.querySelector("#workAchiev4").value =''; 
    document.querySelector("#workAchiev5").value ='';  
    document.querySelector("#workAchiev6").value ='';    
    document.querySelector("#workAchiev7").value ='';   
    document.querySelector("#workAchiev8").value ='';   
    document.querySelector("#workAchiev9").value ='';   
    document.querySelector("#workAchiev10").value ='';   
    
    hideInput()
    document.querySelector('#nonItWork').checked = false;
    document.querySelector(".box-Work1").style.display = "block"
    document.querySelector("#workAchiev4").readOnly = false;
    document.querySelector(".btn-work1").addEventListener('click', () =>{workHandlerUI("box-Work", "workAchiev", 1) })

    // document.querySelector("#workAchiev1").readOnly = false
    // document.querySelector("#workAchiev2").readOnly = false
    // document.querySelector("#workAchiev3").readOnly = false
    // document.querySelector("#workAchiev4").readOnly = false
    // document.querySelector("#workAchiev5").readOnly = false 
    // document.querySelector("#workAchiev6").readOnly = false
    // document.querySelector("#workAchiev7").readOnly = false
    // document.querySelector("#workAchiev8").readOnly = false
    // document.querySelector("#workAchiev9").readOnly = false
    // document.querySelector("#workAchiev10").readOnly = false

})



//========================= EDUCATION
formEducation.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formEducation);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(educationUrl, {
        method: "POST",
        body: searchParams
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    // document.querySelector('#objective_id').defaultValue = generateString(12);
    // const educ = document.getElementsByName("school_attendance_method");
    //     for(var i=0; i<educ.length; i++)
    //     educ[i].checked = false;
        // clearRadio("school_attendance_method")
        // clearRadio("eduFieldStudy")
    const fieldStudy = document.getElementsByName("eduFieldStudy");
        for(let i = 0; i < fieldStudy.length; i +=1)
        fieldStudy[i].checked = false;
    const schoolAttendadance = document.getElementsByName("school_attendance_method");
        for(let i = 0; i < schoolAttendadance.length; i +=1)
        schoolAttendadance[i].checked = false;
    document.querySelector('#education_id').defaultValue = shortid.generate(); 
    document.querySelector("#school_name").value ='';
    document.querySelector("#school_city").value ='';
    document.querySelector("#school_state").value ='';
    // document.querySelector("[name='school_attendance_method']").value = clearRadio("school_attendance_method");
    document.querySelector("#remote").checked = false;
    document.querySelector("#in_person").checked = false;
    document.querySelector("#certificate_title").value ='';
    document.querySelector("#completion_date_month").value ='';
    document.querySelector("#completion_date_year").value ='';
    document.querySelector("#eduAchievement1").value ='';
    document.querySelector("#eduAchievement2").value ='';
    document.querySelector("#eduAchievement3").value ='';    

})




//===============================================================


const countriesAPI = "https://restcountries.com/v3.1/all"

fetch(countriesAPI)
.then(response => response.json())
.then(countriesData => {
    const my = countriesData.find(el =>{ el.CIOC==='CYP'})
    console.log(countriesData)})
.catch(err => console.log(err.message))


const states = './States.json'

fetch(states)
.then(res => res.json())
.then(stateslist => console.log(stateslist))

// =========================== get data

// let getDataFromBackEnd = async function(){
    
//     fetch('http://localhost:5555/api/allresume')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .then(data => loadToHtml(data))


// }
// getDataFromBackEnd()


// async function renderToHtml() {
//     const response = await fetch(`${window.location.href}api/allresume`);
//     const data = await response.json();
    
//     console.log(data)
//     loadToHtml(data)
//     // document.querySelector('.container').innerHTML = data[0].fullname;

//   }
  
//   renderToHtml();
//   loadToHtml(data);



//   export {renderToHtml}




let hideInput =() =>{
    
document.querySelector(".box-Title2").style.display = "none";    

document.querySelector(".box-Edu2").style.display = "none";   
document.querySelector(".box-Edu3").style.display = "none";   

document.querySelector(".box-Tech2").style.display = "none";
document.querySelector(".box-Tech3").style.display = "none";
document.querySelector(".box-Tech4").style.display = "none";
document.querySelector(".box-Tech5").style.display = "none";
document.querySelector(".box-Tech6").style.display = "none";
document.querySelector(".box-Tech7").style.display = "none";
document.querySelector(".box-Tech8").style.display = "none";
document.querySelector(".box-Tech9").style.display = "none";
document.querySelector(".box-Tech10").style.display = "none";

document.querySelector(".box-Market2").style.display = "none";
document.querySelector(".box-Market3").style.display = "none";
document.querySelector(".box-Market4").style.display = "none";
document.querySelector(".box-Market5").style.display = "none";
document.querySelector(".box-Market6").style.display = "none";
document.querySelector(".box-Market7").style.display = "none";
document.querySelector(".box-Market8").style.display = "none";
document.querySelector(".box-Market9").style.display = "none";
document.querySelector(".box-Market10").style.display = "none";


document.querySelector(".box-Work2").style.display = "none";
document.querySelector(".box-Work3").style.display = "none";
document.querySelector(".box-Work4").style.display = "none";
document.querySelector(".box-Work5").style.display = "none";
document.querySelector(".box-Work6").style.display = "none";
document.querySelector(".box-Work7").style.display = "none";
document.querySelector(".box-Work8").style.display = "none";
document.querySelector(".box-Work9").style.display = "none";
document.querySelector(".box-Work10").style.display = "none";

}
// hideInput()


    // document.querySelector(".btn-title1").addEventListener('click', () =>{
    //         // e.preventDefault();
    //     if(document.querySelector("#title1").value === ""){
    //         document.querySelector("#title1").focus()
    //     }else{
    //         document.querySelector(".btn-title1").style.display = "none"
    //         document.querySelector("#title1").style.display = "none"
    //         document.querySelector(".btn-title2").style.display = "block"
    //         document.querySelector("#title2").style.display = "block"
    //         document.querySelector(".box-hideTitle2").style.display = "block" 
    //         document.querySelector("#title2").focus();
    //     }
    //     // console.log('i click')
    // }) 
    


//  work UI handler function 

    // let workHandlerUI = (index) =>{
    //     if((document.querySelector("#workAchiev" + index).value).length === 0){
    //         document.querySelector("#workAchiev" + index).focus()
    //     }
    //     else{
    //         document.querySelector(".box-Work" + index).style.display = "none"        
    //         document.querySelector(".box-Work" + (index + 1)).style.display = "block"
    //         document.querySelector("#workAchiev" + (index + 1)).focus();
    //     }
    // }

    // let workHandlerUILastChild = (index) =>{
    //     if((document.querySelector("#workAchiev" + index).value).length === 0){
    //         document.querySelector("#workAchiev" + index).focus()
    //     }
    //     else{
    //         document.querySelector(".box-Work" + index).style.display = "block"   
    //         document.querySelector("#workAchiev" + index).readOnly = true  
    //         document.querySelector("#msgError").style.display = "block";
    //         document.querySelector("#msgError").innerHTML = 'Oops! you can\'t add more'
    //         setTimeout(() => {document.querySelector("#msgError").style.display = "none" }, 2000)
            
    //     }
    // }


    // document.querySelector(".btn-work1").addEventListener('click', () =>{workHandlerUI(1) })
    // document.querySelector(".btn-work2").addEventListener('click', () =>{workHandlerUI(2) })
    // document.querySelector(".btn-work3").addEventListener('click', () =>{workHandlerUI(3) })
    // document.querySelector(".btn-work4").addEventListener('click', () =>{workHandlerUI(4) })
    // document.querySelector(".btn-work5").addEventListener('click', () =>{workHandlerUI(5) })
    // document.querySelector(".btn-work6").addEventListener('click', () =>{workHandlerUI(6) })
    // document.querySelector(".btn-work7").addEventListener('click', () =>{workHandlerUI(7) })
    // document.querySelector(".btn-work8").addEventListener('click', () =>{workHandlerUI(8) })
    // document.querySelector(".btn-work9").addEventListener('click', () =>{workHandlerUI(9) })
    // document.querySelector(".btn-work10").addEventListener('click', () =>{workHandlerUILastChild(10) })



    let workHandlerUI = (mybox, myfield, index) =>{
        if((document.querySelector("#" +  myfield + index).value).length === 0){
            document.querySelector("#" +  myfield + index).focus()
            console.log("#" +  myfield + index)
        }
        else{
            document.querySelector("." + mybox + index).style.display = "none"        
            document.querySelector("." + mybox + (index + 1)).style.display = "block"
            document.querySelector("#" +  myfield + (index + 1)).focus();
        }
    }

    let workHandlerUILastChild = (mybox, myfield, index, myError) =>{
        if((document.querySelector("#" +  myfield + index).value).length === 0){
            document.querySelector("#" +  myfield + index).focus()
        }
        else{
            document.querySelector("." + mybox + index).style.display = "block"   
            document.querySelector("#" +  myfield + index).readOnly = true  
            document.querySelector("#" +  myError).style.display = "block";
            document.querySelector("#" +  myError).innerHTML = 'Oops! you reach the max alloqed. Please press button above'
            setTimeout(() => {document.querySelector("#" +  myError).style.display = "none" }, 6000)
            
        }
    }

     // Tech work   
     document.querySelector('#itWork').addEventListener('change',function(e){
        if(this.checked){
            hideInput()
            clearFormWork()
            document.querySelector(".box-Work1").style.display = "block"
            document.querySelector("#workAchiev4").readOnly = false;  

            document.querySelector(".btn-work1").addEventListener('click', () =>{workHandlerUI("box-Work", "workAchiev", 1) })
            document.querySelector(".btn-work2").addEventListener('click', () =>{workHandlerUI("box-Work", "workAchiev", 2) })
            document.querySelector(".btn-work3").addEventListener('click', () =>{workHandlerUI("box-Work", "workAchiev", 3) })
            document.querySelector(".btn-work4").addEventListener('click', () =>{workHandlerUI("box-Work", "workAchiev", 4) })
            document.querySelector(".btn-work5").addEventListener('click', () =>{workHandlerUI("box-Work", "workAchiev", 5) })
            document.querySelector(".btn-work6").addEventListener('click', () =>{workHandlerUI("box-Work", "workAchiev", 6) })
            document.querySelector(".btn-work7").addEventListener('click', () =>{workHandlerUI("box-Work", "workAchiev", 7) })
            document.querySelector(".btn-work8").addEventListener('click', () =>{workHandlerUI("box-Work", "workAchiev", 8) })
            document.querySelector(".btn-work9").addEventListener('click', () =>{workHandlerUI("box-Work", "workAchiev", 9) })
            document.querySelector(".btn-work10").addEventListener('click', () =>{workHandlerUILastChild("box-Work", "workAchiev", 10, "msgError") })

        }
    });
    
    document.querySelector('#nonItWork').addEventListener('change',function(e){
        if(this.checked){
            hideInput()
            clearFormWork()            
            document.querySelector(".box-Work1").style.display = "block"  
            document.querySelector("#workAchiev4").readOnly = false;          
            
            document.querySelector(".btn-work1").addEventListener('click', () =>{workHandlerUI("box-Work", "workAchiev", 1) })
            document.querySelector(".btn-work2").addEventListener('click', () =>{workHandlerUI("box-Work", "workAchiev", 2) })
            document.querySelector(".btn-work3").addEventListener('click', () =>{
                workHandlerUI("box-Work", "workAchiev", 3)
                // ddocument.querySelector(".box-Work3").style.display = "block"
                document.querySelector(".box-Work4").style.display = "none"
                document.querySelector(".box-Work3").style.display = "block"
                document.querySelector("#workAchiev4").value = "";
                document.querySelector("#msgError").innerHTML = 'Oops! you reach the max alloqed. Please press button above'
                setTimeout(() => {document.querySelector("#msgError").style.display = "none" }, 6000)
                // document.querySelector("#workAchiev4").readOnly = false;    
             })
            // document.querySelector(".btn-work4").addEventListener('click', () =>{ 
            //     // document.querySelector("#workAchiev4").readOnly = true
            //     // document.querySelector("#msgError").innerHTML = 'Oops! you reach the max alloqed. Please press button above'
            //     // document.querySelector("#workAchiev4").value = "";
            //     // setTimeout(() => {document.querySelector("#msgError").style.display = "none" }, 6000)
            //     document.querySelector("#workAchiev4").readOnly = false;     
            
            // })
            
        }else{
            document.querySelector("#workAchiev4").readOnly = false
        }
    });




    //  market skills
    document.querySelector(".btn-market1").addEventListener('click', () =>{workHandlerUI("box-Market", "market", 1) })
    document.querySelector(".btn-market2").addEventListener('click', () =>{workHandlerUI("box-Market", "market", 2) })
    document.querySelector(".btn-market3").addEventListener('click', () =>{workHandlerUI("box-Market", "market",  3) })
    document.querySelector(".btn-market4").addEventListener('click', () =>{workHandlerUI("box-Market", "market",  4) })
    document.querySelector(".btn-market5").addEventListener('click', () =>{workHandlerUI("box-Market", "market",  5) })
    document.querySelector(".btn-market6").addEventListener('click', () =>{workHandlerUI("box-Market", "market",  6) })
    document.querySelector(".btn-market7").addEventListener('click', () =>{workHandlerUI("box-Market", "market",  7) })
    document.querySelector(".btn-market8").addEventListener('click', () =>{workHandlerUI("box-Market", "market",  8) })
    document.querySelector(".btn-market9").addEventListener('click', () =>{workHandlerUI("box-Market", "market",  9) })
    document.querySelector(".btn-market10").addEventListener('click', () =>{workHandlerUILastChild("box-Market", "market",  10, "marketError") })


    //  tech skills
    document.querySelector(".btn-tech1").addEventListener('click', () =>{workHandlerUI("box-Tech", "tech", 1) })
    document.querySelector(".btn-tech2").addEventListener('click', () =>{workHandlerUI("box-Tech", "tech", 2) })
    document.querySelector(".btn-tech3").addEventListener('click', () =>{workHandlerUI("box-Tech", "tech",  3) })
    document.querySelector(".btn-tech4").addEventListener('click', () =>{workHandlerUI("box-Tech", "tech",  4) })
    document.querySelector(".btn-tech5").addEventListener('click', () =>{workHandlerUI("box-Tech", "tech",  5) })
    document.querySelector(".btn-tech6").addEventListener('click', () =>{workHandlerUI("box-Tech", "tech",  6) })
    document.querySelector(".btn-tech7").addEventListener('click', () =>{workHandlerUI("box-Tech", "tech",  7) })
    document.querySelector(".btn-tech8").addEventListener('click', () =>{workHandlerUI("box-Tech", "tech",  8) })
    document.querySelector(".btn-tech9").addEventListener('click', () =>{workHandlerUI("box-Tech", "tech",  9) })
    document.querySelector(".btn-tech10").addEventListener('click', () =>{workHandlerUILastChild("box-Tech", "tech",  10, "techError") })

    //  Title
    document.querySelector(".btn-title1").addEventListener('click', () =>{workHandlerUI("box-Title", "title",  1) })
    document.querySelector(".btn-title2").addEventListener('click', () =>{workHandlerUILastChild("box-Title", "title",  2, "titleError") })

    // Education
    document.querySelector(".btn-edu1").addEventListener('click', () =>{workHandlerUI("box-Edu", "eduAchievement",  1) })
    document.querySelector(".btn-edu2").addEventListener('click', () =>{workHandlerUI("box-Edu", "eduAchievement",  2) })
    document.querySelector(".btn-edu3").addEventListener('click', () =>{workHandlerUILastChild("box-Edu", "eduAchievement",  3, "eduError") })

    
    // document.querySelector(".btn-title1").addEventListener('click', () =>{
    //     // e.preventDefault();
    // if(document.querySelector("#title1").value === ""){
    //     document.querySelector("#title1").focus()
    // }else{
    //     document.querySelector(".btn-title1").style.display = "none"
    //     document.querySelector("#title1").style.display = "none"
    //     document.querySelector(".btn-title2").style.display = "block"
    //     document.querySelector("#title2").style.display = "block"
    //     document.querySelector(".box-hideTitle2").style.display = "block" 
    //     document.querySelector("#title2").focus();
    // }
    // console.log('i click')
// }) 



//  ================ form validation==============================

document.querySelector('#eduOther').addEventListener('change',function(e){
    if(this.checked){
        document.querySelector(".box-Edu1").style.visibility = "hidden";
    }
});


document.querySelector('#eduIt').addEventListener('change',function(e){
    if(this.checked){
        document.querySelector(".box-Edu1").style.visibility = "visible";
    }
});


document.getElementById('projectCompleted').addEventListener('change', function() {
    
    if(this.value ==='Yes'){
        document.querySelector('#projectNonthEnd').readOnly = false
        document.querySelector('#projectYearEnd').readOnly = false
    }else{
        document.querySelector('#projectNonthEnd').readOnly = true
        document.querySelector('#projectYearEnd').readOnly = true
    }
  });


  
document.querySelector('#yes').addEventListener('change', function(e){
    if(this.checked){
        document.querySelector("#companyEndMonth").readOnly = true;
        document.querySelector("#companyEndYear").readOnly = true;
    }
});


document.querySelector('#no').addEventListener('change', function(e){
    if(this.checked){
        document.querySelector("#companyEndMonth").readOnly = false;
        document.querySelector("#companyEndYear").readOnly = false;
        
    }
});

document.querySelector("#submit_work").addEventListener('click', (e) =>{

    document.querySelector("#workAchiev4").readOnly = false;    
})