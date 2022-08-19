let hideForm = () =>{
    document.querySelector("#personForm").style.display = "none"
    document.querySelector("#titleForm").style.display = "none"
    document.querySelector("#contactForm").style.display = "none"
    document.querySelector("#socioForm").style.display = "none"
    document.querySelector("#resObjective").style.display = "none"

    document.querySelector("#educationForm").style.display = "none"
    document.querySelector("#techSkillsForm").style.display = "none"
    document.querySelector("#marketSkillsForm").style.display = "none"
    document.querySelector("#projectsForm").style.display = "none"
    document.querySelector("#workForm").style.display = "none"
}
hideForm()

let displayForm =(myform) =>{
    document.getElementById(myform).style.display = "block"
}

let addEventOnForm = (myform) =>{

    document.querySelector(`.${myform}`).addEventListener('click', () =>{
        hideForm()
        displayForm(`${myform}`)
    })

}

addEventOnForm("personForm")
addEventOnForm("titleForm")
addEventOnForm("contactForm")
addEventOnForm("socioForm")
addEventOnForm("resObjective")
addEventOnForm("educationForm")
addEventOnForm("techSkillsForm")
addEventOnForm("marketSkillsForm")
addEventOnForm("projectsForm")
addEventOnForm("workForm")

let selectYear = (myselect) =>{
    let year = new Date().getFullYear()
    const yearArray =[]
    let endyear = 1950
    const select = document.getElementById(myselect)

    for (year; year >= endyear; year -= 1){
        yearArray.push(year)
        console.log(yearArray)  
    }

    for (let i = 0; i < yearArray.length; i += 1){
        const option = document.createElement("option");
        option.classList.add("option")    
        option.value = yearArray[i];
        option.text = yearArray[i];
        select.appendChild(option);
    }
}
selectYear("completion_date_year");
selectYear("projectYearStart");
selectYear("companyStartYear");
selectYear("companyEndYear")

let selectMonth = (myselect) =>{    
    let monthArray = [
        ['January', 'Jan'],
        ['February', 'Feb'],
        ['March', 'Mar'],
        ['April', 'Apr'],
        ['May', 'May'],
        ['June', 'Jun'],
        ['July', 'Jul'],
        ['August', 'Aug'],
        ['September', 'Sep'],
        ['October', 'Oct'],
        ['November', 'Nov'],
        ['December', 'Dec'],
    ];
    const selectMonth = document.getElementById(myselect);

    monthArray.forEach((monthFull) => {
        const option = document.createElement("option");
            option.classList.add("option")        
        monthFull.forEach((monthAbr) => {
            option.value = monthAbr;
        });
        
        option.text = monthFull[0];
        selectMonth.appendChild(option);
    });
}
selectMonth("completion_date_month")
selectMonth("projectNonthStart")
selectMonth("companyStartMonth")
selectMonth("companyEndMonth")

document.getElementById('projectNonthStart').addEventListener('change', function() {
    console.log('You selected: ', this.value);
  });

  let handleMonthYearEndForProject = () =>{
    document.getElementById("projectCompleted").addEventListener('change', e => {
        if(e.target.checked){
            selectMonth("projectNonthEnd");
            selectYear("projectYearEnd");      
        }
        if(!e.target.checked){  
            document.querySelector("#projectNonthEnd").replaceChildren(document.querySelector(".option3"))
            document.querySelector("#projectYearEnd").replaceChildren(document.querySelector(".option2"))
        }

    });
}
handleMonthYearEndForProject();

let handleMonthYearEndForWork = () =>{
    document.getElementById("stillWorkHere").addEventListener('change', e => {
        
        if(e.target.checked){
            document.querySelector("#companyEndMonth").replaceChildren(document.querySelector(".monthOption"))
            document.querySelector("#companyEndYear").replaceChildren(document.querySelector(".yearOption")) 
        }
        if(!e.target.checked){  
            
            selectMonth("companyEndMonth");
            selectYear("companyEndYear"); 
        }
    
    });    

}
handleMonthYearEndForWork();

let hideEduAccomplishment = () =>{
    document.querySelector(".box-Edu1").style.display = "none"
    document.querySelector(".box-Edu2").style.display = "none"
    document.querySelector(".box-Edu3").style.display = "none"        
}
hideEduAccomplishment()

let displayEduAccomplishment = () =>{
    document.querySelector(".box-Edu1").style.display = "block"
    document.querySelector(".box-Edu2").style.display = "block"
    document.querySelector(".box-Edu3").style.display = "block"   
    
}
// displayEduAccomplishment()
let hideWorkAccomplishment = () =>{
    document.querySelector(".box-Work1").style.display = "none"
    document.querySelector(".box-Work2").style.display = "none"
    document.querySelector(".box-Work3").style.display = "none"  
    document.querySelector(".box-Work4").style.display = "none"
    document.querySelector(".box-Work5").style.display = "none"
    document.querySelector(".box-Work6").style.display = "none"
    document.querySelector(".box-Work7").style.display = "none"
    document.querySelector(".box-Work8").style.display = "none"
    document.querySelector(".box-Work9").style.display = "none"
    document.querySelector(".box-Work10").style.display = "none"      
}
hideWorkAccomplishment()

let displayWorkAccomplishment = () =>{
    document.querySelector(".box-Work1").style.display = "block"
    document.querySelector(".box-Work2").style.display = "block"
    document.querySelector(".box-Work3").style.display = "block"  
    document.querySelector(".box-Work4").style.display = "block"
    document.querySelector(".box-Work5").style.display = "block"
    document.querySelector(".box-Work6").style.display = "block"
    document.querySelector(".box-Work7").style.display = "block"
    document.querySelector(".box-Work8").style.display = "block"
    document.querySelector(".box-Work9").style.display = "block"
    document.querySelector(".box-Work10").style.display = "block"      
}
// displayWorkAccomplishment()

let handleRadioEventForForm = (radioElement1, radioElement2) =>{
    document.getElementById(radioElement1).addEventListener('change',function(e){
        if(this.checked){
            if(radioElement1 === "eduIt"){
                displayEduAccomplishment()
            }
            if(radioElement1 === "itWork"){
                displayWorkAccomplishment()
            }
        }        
    });
    document.getElementById(radioElement2).addEventListener('change',function(e){
        if(this.checked){
            if(radioElement2 === "eduOther"){
                hideEduAccomplishment()
            }
            if(radioElement2 === "nonItWork"){
                hideWorkAccomplishment()
            }
            
        }        
    });
    
}
handleRadioEventForForm("eduIt", "eduOther")
handleRadioEventForForm("itWork", "nonItWork")

//   document.getElementById("projectCompleted").checked = false;

let createPerform =() =>{
    const formPerson = document.createElement("form")
    formPerson.id = "personForm"
}