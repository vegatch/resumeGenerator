let hideForms = () =>{
    document.getElementById("personForm").style.display = "none"
    document.querySelector("#titleForm").style.display = "none"
    document.querySelector("#contactForm").style.display = "none"
    document.querySelector("#socialForm").style.display = "none"
    document.querySelector("#resObjectiveForm").style.display = "none"

    document.querySelector("#educationForm").style.display = "none"
    document.querySelector("#techSkillsForm").style.display = "none"
    document.querySelector("#marketSkillsForm").style.display = "none"
    document.querySelector("#projectsForm").style.display = "none"
    document.querySelector("#workForm").style.display = "none"
}
hideForms()

let displayForm =(myform) =>{
    document.getElementById(myform).style.display = "block"
}

let addEventOnForm = (myform) =>{

    document.querySelector(`.${myform}`).addEventListener('click', () =>{
        hideForms()
        displayForm(`${myform}`)
    })

}

addEventOnForm("personForm")
addEventOnForm("titleForm")
addEventOnForm("contactForm")
addEventOnForm("socialForm")
addEventOnForm("resObjectiveForm")
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
selectYear("projectYearEnd");
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
selectMonth("projectMonthStart")
selectMonth("projectMonthEnd")
selectMonth("companyStartMonth")
selectMonth("companyEndMonth")

document.getElementById('projectMonthStart').addEventListener('change', function() {
    console.log('You selected: ', this.value);
  });

  let handleMonthYearEndForProject = () =>{
    document.getElementById("projectCompleted").addEventListener('change', e => {
        if(e.target.checked){
            selectMonth("projectMonthEnd");
            selectYear("projectYearEnd");      
        }
        if(!e.target.checked){  
            document.querySelector("#projectMonthEnd").replaceChildren(document.querySelector(".option3"))
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
    document.querySelector(".eduAchievementLabel1").style.display = "none"
    document.querySelector(".eduAchievementLabel2").style.display = "none"
    document.querySelector(".eduAchievementLabel3").style.display = "none"
    document.querySelector("#eduAchievement1").style.display = "none"
    document.querySelector("#eduAchievement2").style.display = "none"
    document.querySelector("#eduAchievement3").style.display = "none"        
}
hideEduAccomplishment()

let displayEduAccomplishment = () =>{
    document.querySelector(".eduAchievementLabel1").style.display = "block"
    document.querySelector(".eduAchievementLabel2").style.display = "block"
    document.querySelector(".eduAchievementLabel3").style.display = "block"
    document.querySelector("#eduAchievement1").style.display = "block"
    document.querySelector("#eduAchievement2").style.display = "block"
    document.querySelector("#eduAchievement3").style.display = "block"   
    
}
// displayEduAccomplishment()
let hideWorkAccomplishment = () =>{
    document.querySelector(".workAchievLabel1").style.display = "none"
    document.querySelector(".workAchievLabel2").style.display = "none"
    document.querySelector(".workAchievLabel3").style.display = "none"
    document.querySelector(".workAchievLabel4").style.display = "none"
    document.querySelector(".workAchievLabel5").style.display = "none"
    document.querySelector(".workAchievLabel6").style.display = "none"
    document.querySelector(".workAchievLabel7").style.display = "none"
    document.querySelector(".workAchievLabel8").style.display = "none"
    document.querySelector(".workAchievLabel9").style.display = "none"
    document.querySelector(".workAchievLabel10").style.display = "none"
    document.querySelector("#workAchiev1").style.display = "none"
    document.querySelector("#workAchiev2").style.display = "none"
    document.querySelector("#workAchiev3").style.display = "none"  
    document.querySelector("#workAchiev4").style.display = "none"
    document.querySelector("#workAchiev5").style.display = "none"
    document.querySelector("#workAchiev6").style.display = "none"
    document.querySelector("#workAchiev7").style.display = "none"
    document.querySelector("#workAchiev8").style.display = "none"
    document.querySelector("#workAchiev9").style.display = "none"
    document.querySelector("#workAchiev10").style.display = "none"      
}
hideWorkAccomplishment()

let displayWorkAccomplishment = () =>{
    document.querySelector(".workAchievLabel1").style.display = "block"
    document.querySelector(".workAchievLabel2").style.display = "block"
    document.querySelector(".workAchievLabel3").style.display = "block"
    document.querySelector(".workAchievLabel4").style.display = "block"
    document.querySelector(".workAchievLabel5").style.display = "block"
    document.querySelector(".workAchievLabel6").style.display = "block"
    document.querySelector(".workAchievLabel7").style.display = "block"
    document.querySelector(".workAchievLabel8").style.display = "block"
    document.querySelector(".workAchievLabel9").style.display = "block"
    document.querySelector(".workAchievLabel10").style.display = "block"
    document.querySelector("#workAchiev1").style.display = "block"
    document.querySelector("#workAchiev2").style.display = "block"
    document.querySelector("#workAchiev3").style.display = "block" 
    document.querySelector("#workAchiev4").style.display = "block"
    document.querySelector("#workAchiev5").style.display = "block"
    document.querySelector("#workAchiev6").style.display = "block"
    document.querySelector("#workAchiev7").style.display = "block"
    document.querySelector("#workAchiev8").style.display = "block"
    document.querySelector("#workAchiev9").style.display = "block"
    document.querySelector("#workAchiev10").style.display = "block"    
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

export let setInputReadOnly = () =>{
    document.getElementById("tech2").readOnly = true;
    document.getElementById("tech3").readOnly = true;
    document.getElementById("tech4").readOnly = true;
    document.getElementById("tech5").readOnly = true;
    document.getElementById("tech6").readOnly = true;
    document.getElementById("tech7").readOnly = true;
    document.getElementById("tech8").readOnly = true;
    document.getElementById("tech9").readOnly = true;
    document.getElementById("tech10").readOnly = true;

    document.getElementById("market2").readOnly = true;
    document.getElementById("market3").readOnly = true;
    document.getElementById("market4").readOnly = true;
    document.getElementById("market5").readOnly = true;
    document.getElementById("market6").readOnly = true;
    document.getElementById("market7").readOnly = true;
    document.getElementById("market8").readOnly = true;
    document.getElementById("market9").readOnly = true;
    document.getElementById("market10").readOnly = true;    
} 
setInputReadOnly()

export let handleDuplicateEntry = (myform, myEntry1, myEntry2, myEntry3, myEntry4, myEntry5, myEntry6, myEntry7, myEntry8, myEntry9, myEntry10 ) =>{
    let validationArray = [];
    let msgError = document.querySelector(".error")
    
    if(myform === "titleForm"){        
            document.getElementById(myEntry1).addEventListener('change', () =>{
                const string1 = (document.getElementById(myEntry1).value).toLowerCase();
                validationArray.push(string1)
                console.log('1', validationArray)        
                document.getElementById(myEntry2).addEventListener('change', () =>{
                    const string2 = (document.getElementById(myEntry2).value).toLowerCase();
                        if(validationArray.includes(string2)){
                            msgError.textContent = `"${string2}" has been already added`
                            document.getElementById(myEntry2).focus()
                        }else{
                            validationArray.push(string2)
                            msgError.textContent = '';
                            console.log('2', validationArray)
                            
                        }
                })

            })
    } 
    if(myform === "techSkillsForm" || myform === "marketSkillsForm"){
        document.getElementById(myEntry1).addEventListener('change', () =>{
            const string1 = (document.getElementById(myEntry1).value).toLowerCase();
            validationArray.push(string1)
            console.log('1', validationArray)   
            document.getElementById(myEntry2).readOnly = false;     
            document.getElementById(myEntry2).addEventListener('change', () =>{
                const string2 = (document.getElementById(myEntry2).value).toLowerCase();
                    if(validationArray.includes(string2)){
                        msgError.textContent = `"${string2}" has been already added`
                        document.getElementById(myEntry2).focus()
                    }else{
                        validationArray.push(string2)
                        msgError.textContent = '';
                        console.log('2', validationArray)
                        document.getElementById(myEntry3).readOnly = false;
                        document.getElementById(myEntry3).addEventListener('change', () =>{
                            const string3 = (document.getElementById(myEntry3).value).toLowerCase();
                                if(validationArray.includes(string3)){
                                    msgError.textContent = `"${string3}" has been already added`
                                    document.getElementById(myEntry3).focus()
                                }else{
                                    validationArray.push(string3)
                                    msgError.textContent = '';
                                    console.log('3', validationArray)
                                    document.getElementById(myEntry4).readOnly = false;
                                    document.getElementById(myEntry4).addEventListener('change', () =>{
                                        const string4 = (document.getElementById(myEntry4).value).toLowerCase();
                                            if(validationArray.includes(string4)){
                                                msgError.textContent = `"${string4}" has been already added`
                                                document.getElementById(myEntry4).focus()
                                            }else{
                                                validationArray.push(string4)
                                                msgError.textContent = '';
                                                console.log('4', validationArray)
                                                document.getElementById(myEntry5).readOnly = false;
                                                document.getElementById(myEntry5).addEventListener('change', () =>{
                                                    const string5 = (document.getElementById(myEntry5).value).toLowerCase();
                                                        if(validationArray.includes(string5)){
                                                            msgError.textContent = `"${string5}" has been already added`
                                                            document.getElementById(myEntry5).focus()
                                                        }else{
                                                            validationArray.push(string5)
                                                            msgError.textContent = '';
                                                            console.log('5', validationArray)
                                                            document.getElementById(myEntry6).readOnly = false;
                                                            document.getElementById(myEntry6).addEventListener('change', () =>{
                                                                const string6 = (document.getElementById(myEntry6).value).toLowerCase();
                                                                    if(validationArray.includes(string6)){
                                                                        msgError.textContent = `"${string6}" has been already added`
                                                                        document.getElementById(myEntry6).focus()
                                                                    }else{
                                                                        validationArray.push(string6)
                                                                        msgError.textContent = '';
                                                                        console.log('6', validationArray)
                                                                        document.getElementById(myEntry7).readOnly = false;
                                                                        document.getElementById(myEntry7).addEventListener('change', () =>{
                                                                            const string7 = (document.getElementById(myEntry7).value).toLowerCase();
                                                                                if(validationArray.includes(string7)){
                                                                                    msgError.textContent = `"${string7}" has been already added`
                                                                                    document.getElementById(myEntry7).focus()
                                                                                }else{
                                                                                    validationArray.push(string7)
                                                                                    msgError.textContent = '';
                                                                                    console.log('7', validationArray)
                                                                                    document.getElementById(myEntry8).readOnly = false;
                                                                                    document.getElementById(myEntry8).addEventListener('change', () =>{
                                                                                        const string8 = (document.getElementById(myEntry8).value).toLowerCase();
                                                                                            if(validationArray.includes(string8)){
                                                                                                msgError.textContent = `"${string8}" has been already added`
                                                                                                document.getElementById(myEntry8).focus()
                                                                                            }else{
                                                                                                validationArray.push(string8)
                                                                                                msgError.textContent = '';
                                                                                                console.log('8', validationArray)
                                                                                                document.getElementById(myEntry9).readOnly = false;
                                                                                                document.getElementById(myEntry9).addEventListener('change', () =>{
                                                                                                    const string9 = (document.getElementById(myEntry9).value).toLowerCase();
                                                                                                        if(validationArray.includes(string9)){
                                                                                                            msgError.textContent = `"${string9}" has been already added`
                                                                                                            document.getElementById(myEntry9).focus()
                                                                                                        }else{
                                                                                                            validationArray.push(string9)
                                                                                                            msgError.textContent = '';
                                                                                                            console.log('9', validationArray)
                                                                                                            document.getElementById(myEntry10).readOnly = false;
                                                                                                            document.getElementById(myEntry10).addEventListener('change', () =>{
                                                                                                                const string10 = (document.getElementById(myEntry10).value).toLowerCase();
                                                                                                                    if(validationArray.includes(string10)){
                                                                                                                        msgError.textContent = `"${string10}" has been already added`
                                                                                                                        document.getElementById(myEntry10).focus()
                                                                                                                    }else{
                                                                                                                        validationArray.push(string10)
                                                                                                                        msgError.textContent = '';
                                                                                                                        console.log('10', validationArray)                                                                                                                        
                                                                                                                    }
                                                                                                            })
                                                                                                        }
                                                                                                })
                                                                                            }
                                                                                    })
                                                                                }
                                                                        })
                                                                    }
                                                            })
                                                        }
                                                })
                                            }
                                    })
                                }
                        })
                    }
            })
    
        })
    }
    
}

handleDuplicateEntry("titleForm", "title1", "title2")
handleDuplicateEntry("techSkillsForm", "tech1", "tech2", "tech3", "tech4", "tech5", "tech6", "tech7", "tech8", "tech9", "tech10")
handleDuplicateEntry("marketSkillsForm", "market1", "market2", "market3", "market4", "market5", "market6", "market7", "market8", "market9", "market10")





