console.log("Hello there" )

let loadHtmlForm = () =>{
    const mainContainer = document.querySelector(".container")
    const bannerDiv = document.createElement('div')
    bannerDiv.classList.add('banner')
    const bannerHeader = document.createElement('h1')
    bannerHeader.textContent ='Resume Generator'
    bannerDiv.append(bannerHeader)
    mainContainer.append(bannerDiv)

    const sectionContainer = document.createElement('div')
    sectionContainer.classList.add("wrapper-flex")
    mainContainer.append(sectionContainer)

    const leftSectionContainer = document.createElement('div')
    sectionContainer.classList.add("left-container")
    const leftSectionContainerElement = document.createElement('div')
    leftSectionContainerElement.classList.add("control-container")
    const leftPara1 =  document.createElement('p')
    leftPara1.textContent = 'Personal Information'
    // remaining p element to add here
    leftSectionContainerElement.append(leftPara1)
    leftSectionContainer.append(leftSectionContainerElement)
    sectionContainer.append(leftSectionContainer)

    const middleSectionContainer = document.createElement('div')
    middleSectionContainer.classList.add("middle-container")
    const middleMainContainer = document.createElement('div')
    middleMainContainer.classList.add("main")
    middleSectionContainer.append(middleMainContainer)
    sectionContainer.append(middleSectionContainer)

    const errorDiv = document.createElement('div')
    const errorUl = document.createElement('ul')
    errorUl.classList.add('errot')
    errorUl.textContent = 'Error will be displayed here'
    errorDiv.append(errorUl)
    middleMainContainer.append(errorDiv)

    const formWrapper = document.createElement('div')
    middleMainContainer.append(formWrapper)

    const personForm = document.createElement('form')
    personForm.setAttribute("method", "POST")
    personForm.setAttribute("id", "personForm")
    const personFormFieldset = document.createElement('fieldset')
    const personFormLegend = document.createElement('legend')
    personFormLegend.textContent = 'Personal Information'    
    const personInputDiv1 = document.createElement("div")
    const personInputLable1 = document.createElement("label")
    personInputLable1.setAttribute("for", "pId")
    personInputLable1.textContent = 'Insert your ID'
    const personIdInput1 = document.createElement("input")
    personIdInput1.setAttribute("type", "text")
    personIdInput1.setAttribute("id", "pId")
    personIdInput1.setAttribute("name", "pId")
    personInputDiv1.append(personInputLable1, personIdInput1)    

    const personInputDiv2 = document.createElement("div")
    const personInputLable2 = document.createElement("label")
    personInputLable2.setAttribute("for", "firstName")
    personInputLable2.textContent = 'Insert your first name'
    const personIdInput2 = document.createElement("input")
    personIdInput2.setAttribute("type", "text")
    personIdInput2.setAttribute("id", "firstName")
    personIdInput2.setAttribute("name", "firstName")
    personInputDiv2.append(personInputLable2, personIdInput2) 

    const personInputDiv3 = document.createElement("div")
    const personInputLable3 = document.createElement("label")
    personInputLable3.setAttribute("for", "middleName")
    personInputLable3.textContent = 'Insert your middle name'
    const personIdInput3 = document.createElement("input")
    personIdInput3.setAttribute("type", "text")
    personIdInput3.setAttribute("id", "middleName")
    personIdInput3.setAttribute("name", "middleName")
    personInputDiv3.append(personInputLable3, personIdInput3)
    
    const personInputDiv4 = document.createElement("div")
    const personInputLable4 = document.createElement("label")
    personInputLable4.setAttribute("for", "lastName")
    personInputLable4.textContent = 'Insert your last name'
    const personIdInput4 = document.createElement("input")
    personIdInput4.setAttribute("type", "text")
    personIdInput4.setAttribute("id", "lastName")
    personIdInput4.setAttribute("name", "lastName")
    personInputDiv4.append(personInputLable4, personIdInput4)

    personFormFieldset.append(personFormLegend, personInputDiv1, personInputDiv2, personInputDiv3, personInputDiv4)
    personForm.append(personFormFieldset)
    formWrapper.append(personForm)
    // end of personForm


    console.log(personForm)


   
}
loadHtmlForm()


