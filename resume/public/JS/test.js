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

let selectYear = () =>{
    let year = new Date().getFullYear()
    const yearArray =[]
    let endyear = 1950
    const select = document.getElementById("completion_date_year")

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
selectYear();