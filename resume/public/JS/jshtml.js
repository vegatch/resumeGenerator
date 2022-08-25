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

    const personInputDiv5 = document.createElement("div")    
    const personBtn1 = document.createElement("button")
    personBtn1.setAttribute("type", "submit")
    personBtn1.setAttribute("id", "SavePerson")
    personBtn1.setAttribute("value", "Save")
    personBtn1.innerHTML = "Save"
    const personBtn2 = document.createElement("button")
    personBtn2.setAttribute("type", "submit")
    personBtn2.setAttribute("id", "submit_Person")
    personBtn2.setAttribute("value", "Save & continue")
    personBtn2.innerHTML = "Save & continue"
    personInputDiv5.append(personBtn1, personBtn2)

    personFormFieldset.append(personFormLegend, personInputDiv1, personInputDiv2, personInputDiv3, personInputDiv4, personInputDiv5)
    personForm.append(personFormFieldset)
    formWrapper.append(personForm)
    // end of personForm
    //  START OF TITLE FORM
    const titleForm = document.createElement('form')
    titleForm.setAttribute("method", "POST")
    titleForm.setAttribute("id", "titleForm")
    const titleFormFieldset = document.createElement('fieldset')
    const titleFormLegend = document.createElement('legend')
    titleFormLegend.textContent = 'List professional title'    
   
    const titleInputDiv1 = document.createElement("div")
    const titleInput1 = document.createElement("input")
    titleInput1.setAttribute("type", "text")
    titleInput1.setAttribute("id", "titleId")
    titleInput1.setAttribute("name", "titleId")
    titleInput1.placeholder = 'TitleID will be displayed here'
    titleInputDiv1.append(titleInput1)    

    const titleInputDiv2 = document.createElement("div")
    const titleInput2 = document.createElement("input")
    titleInput2.setAttribute("type", "text")
    titleInput2.setAttribute("id", "pIdTitle")
    titleInput2.setAttribute("name", "pIdTitle")
    titleInput2.placeholder = 'personID will be displayed here'
    titleInputDiv2.append(titleInput2) 

    const titleInputDiv3 = document.createElement("div")
    const titleInputLabel3 = document.createElement("label")
    titleInputLabel3.setAttribute("for", "title1")
    titleInputLabel3.textContent = 'Insert your title here #1'
    const titleInput3 = document.createElement("input")
    titleInput3.setAttribute("type", "text")
    titleInput3.setAttribute("id", "title1")
    titleInput3.setAttribute("name", "title1")
    titleInputDiv3.append(titleInputLabel3, titleInput3)
    
    const titleInputDiv4 = document.createElement("div")
    const titleInputLabel4 = document.createElement("label")
    titleInputLabel4.setAttribute("for", "title2")
    titleInputLabel4.textContent = 'Insert your title here #2'
    const titleInput4 = document.createElement("input")
    titleInput4.setAttribute("type", "text")
    titleInput4.setAttribute("id", "title2")
    titleInput4.setAttribute("name", "title2")
    titleInputDiv4.append(titleInputLabel4, titleInput4)

    const titleInputDiv5 = document.createElement("div")  
    titleInputDiv5.classList.add("container")  
    const titleBtn1 = document.createElement("button")
    titleBtn1.setAttribute("type", "submit")
    titleBtn1.setAttribute("id", "SaveTitle")
    titleBtn1.setAttribute("value", "Save")
    titleBtn1.innerHTML = "Save"
    const titleBtn2 = document.createElement("button")
    titleBtn2.setAttribute("type", "submit")
    titleBtn2.setAttribute("id", "submit_title")
    titleBtn2.setAttribute("value", "Save & continue")
    titleBtn2.innerHTML = "Save & continue"
    titleInputDiv5.append(titleBtn1, titleBtn2)

    titleFormFieldset.append(titleFormLegend, titleInputDiv1, titleInputDiv2, titleInputDiv3, titleInputDiv4, titleInputDiv5)
    titleForm.append(titleFormFieldset)
    formWrapper.append(titleForm)
    // END TITLE FORM
    // START OF CONTACT FORM
    const contactForm = document.createElement('form')
    contactForm.setAttribute("method", "POST")
    contactForm.setAttribute("id", "contactForm")
    const contactFormFieldset = document.createElement('fieldset')
    const contactFormLegend = document.createElement('legend')
    contactFormLegend.textContent = 'Contact details'    
   
    const contactInputDiv1 = document.createElement("div")   
    const contactInput1 = document.createElement("input")
    contactInput1.setAttribute("type", "text")
    contactInput1.setAttribute("id", "contactId")
    contactInput1.setAttribute("name", "contactId")
    contactInput1.placeholder = 'contactID will be displayed here'
    contactInputDiv1.append(contactInput1)    

    const contactInputDiv2 = document.createElement("div")
    const contactInput2 = document.createElement("input")
    contactInput2.setAttribute("type", "text")
    contactInput2.setAttribute("id", "pIdContact")
    contactInput2.setAttribute("name", "pIdContact")
    contactInput2.placeholder = 'personID will be displayed here'
    contactInputDiv2.append(contactInput2) 

    const contactInputDiv3 = document.createElement("div")
    const contactInputLabel3 = document.createElement("label")
    contactInputLabel3.setAttribute("for", "city")
    contactInputLabel3.textContent = 'Insert your city of residence here:'
    const contactInput3 = document.createElement("input")
    contactInput3.setAttribute("type", "text")
    contactInput3.setAttribute("id", "city")
    contactInput3.setAttribute("name", "city")
    contactInputDiv3.append(contactInputLabel3, contactInput3)
    
    const contactInputDiv4 = document.createElement("div")
    const contactInputLabel4 = document.createElement("label")
    contactInputLabel4.setAttribute("for", "state")
    contactInputLabel4.textContent = 'Insert your state of residence here:'
    const contactInput4 = document.createElement("input")
    contactInput4.setAttribute("type", "text")
    contactInput4.setAttribute("id", "state")
    contactInput4.setAttribute("name", "state")
    contactInputDiv4.append(contactInputLabel4, contactInput4)

    const contactInputDiv5 = document.createElement("div")
    const contactInputLabel5 = document.createElement("label")
    contactInputLabel5.setAttribute("for", "zcode")
    contactInputLabel5.textContent = 'Insert your Zip Code here:'
    const contactInput5 = document.createElement("input")
    contactInput5.setAttribute("type", "text")
    contactInput5.setAttribute("id", "zcode")
    contactInput5.setAttribute("name", "zcode")
    contactInputDiv5.append(contactInputLabel5, contactInput5)

    const contactInputDiv6 = document.createElement("div")
    const contactInputLabel6 = document.createElement("label")
    contactInputLabel6.setAttribute("for", "remote")
    contactInputLabel6.textContent = 'Open to remote position:'
    const contactInput6 = document.createElement("input")
    contactInput6.setAttribute("type", "checkbox")
    contactInput6.setAttribute("id", "remote")
    contactInput6.setAttribute("name", "remote")
    contactInput6.setAttribute("value", "yes")
    contactInputDiv6.append(contactInput6, contactInputLabel6,)

    const contactInputDiv7 = document.createElement("div")
    const contactInputLabel7 = document.createElement("label")
    contactInputLabel7.setAttribute("for", "remote")
    contactInputLabel7.textContent = 'Open to relocalization:'
    const contactInput7 = document.createElement("input")
    contactInput7.setAttribute("type", "checkbox")
    contactInput7.setAttribute("id", "relocalization")
    contactInput7.setAttribute("name", "relocalization")
    contactInput7.setAttribute("value", "yes")
    contactInputDiv7.append(contactInput7, contactInputLabel7)

    const contactInputDiv8 = document.createElement("div")
    const contactInputLabel8 = document.createElement("label")
    contactInputLabel8.setAttribute("for", "email")
    contactInputLabel8.textContent = 'Insert your email here:'
    const contactInput8 = document.createElement("input")
    contactInput8.setAttribute("type", "email")
    contactInput8.setAttribute("id", "email")
    contactInput8.setAttribute("name", "email")
    contactInputDiv8.append(contactInputLabel8, contactInput8)

    const contactInputDiv9 = document.createElement("div")
    const contactInputLabel9 = document.createElement("label")
    contactInputLabel9.setAttribute("for", "phoneNumber")
    contactInputLabel9.textContent = 'Insert your phone number here:'
    const contactInput9 = document.createElement("input")
    contactInput9.setAttribute("type", "tel")
    contactInput9.setAttribute("id", "phoneNumber")
    contactInput9.setAttribute("name", "phoneNumber")
    contactInputDiv9.append(contactInputLabel9, contactInput9)

    const contactInputDiv10 = document.createElement("div")  
    contactInputDiv10.classList.add("container")  
    const contactBtn1 = document.createElement("button")
    contactBtn1.setAttribute("type", "submit")
    contactBtn1.setAttribute("id", "SaveContact")
    contactBtn1.setAttribute("value", "Save")
    contactBtn1.innerHTML = "Save"
    const contactBtn2 = document.createElement("button")
    contactBtn2.setAttribute("type", "submit")
    contactBtn2.setAttribute("id", "submit_contact")
    contactBtn2.setAttribute("value", "Save & continue")
    contactBtn2.innerHTML = "Save & continue"
    contactInputDiv10.append(contactBtn1, contactBtn2)

    contactFormFieldset.append(contactFormLegend, contactInputDiv1, contactInputDiv2, contactInputDiv3, contactInputDiv4, contactInputDiv5, contactInputDiv6, contactInputDiv7, contactInputDiv8, contactInputDiv9, contactInputDiv10)
    contactForm.append(contactFormFieldset)
    formWrapper.append(contactForm)
    // END OF CONTACT FORM
    // START OF SOCIAL MEDIA FORM
    const socialForm = document.createElement('form')
    socialForm.setAttribute("method", "POST")
    socialForm.setAttribute("id", "socialForm")
    const socialFormFieldset = document.createElement('fieldset')
    const socialFormLegend = document.createElement('legend')
    socialFormLegend.textContent = 'Professional Social Media link'    
   
    const socialInputDiv1 = document.createElement("div")   
    const socialInput1 = document.createElement("input")
    socialInput1.setAttribute("type", "text")
    socialInput1.setAttribute("id", "mediaId")
    socialInput1.setAttribute("name", "mediaId")
    socialInput1.placeholder = 'socialID will be displayed here'
    socialInputDiv1.append(socialInput1)    

    const socialInputDiv2 = document.createElement("div")   
    const socialInput2 = document.createElement("input")
    socialInput2.setAttribute("type", "text")
    socialInput2.setAttribute("id", "pIdSocial")
    socialInput2.setAttribute("name", "pIdSocial")
    socialInput2.placeholder = 'personID will be displayed here'
    socialInputDiv2.append(socialInput2)  

    const socialInputDiv3 = document.createElement("div")
    const socialInputLabel3 = document.createElement("label")
    socialInputLabel3.setAttribute("for", "linkedIn")
    socialInputLabel3.textContent = 'Insert your linkedIn url here:'
    const socialInput3 = document.createElement("input")
    socialInput3.setAttribute("type", "url")
    socialInput3.setAttribute("id", "linkedIn")
    socialInput3.setAttribute("name", "linkedIn")
    socialInputDiv3.append(socialInputLabel3, socialInput3)
    
    const socialInputDiv4 = document.createElement("div")
    const socialInputLabel4 = document.createElement("label")
    socialInputLabel4.setAttribute("for", "gitHub")
    socialInputLabel4.textContent = 'Insert your gitHub url here:'
    const socialInput4 = document.createElement("input")
    socialInput4.setAttribute("type", "url")
    socialInput4.setAttribute("id", "gitHub")
    socialInput4.setAttribute("name", "gitHub")
    socialInputDiv4.append(socialInputLabel4, socialInput4)

    const socialInputDiv5 = document.createElement("div")
    const socialInputLabel5 = document.createElement("label")
    socialInputLabel5.setAttribute("for", "portfolio")
    socialInputLabel5.textContent = 'Insert your portfolio url here:'
    const socialInput5 = document.createElement("input")
    socialInput5.setAttribute("type", "url")
    socialInput5.setAttribute("id", "portfolio")
    socialInput5.setAttribute("name", "portfolio")
    socialInputDiv5.append(socialInputLabel5, socialInput5)

    const socialInputDiv6 = document.createElement("div")  
    socialInputDiv6.classList.add("container")  
    const socialBtn1 = document.createElement("button")
    socialBtn1.setAttribute("type", "submit")
    socialBtn1.setAttribute("id", "SaveLink")
    socialBtn1.setAttribute("value", "Save")
    socialBtn1.innerHTML = "Save"
    const socialBtn2 = document.createElement("button")
    socialBtn2.setAttribute("type", "submit")
    socialBtn2.setAttribute("id", "submit_link")
    socialBtn2.setAttribute("value", "Save & continue")
    socialBtn2.innerHTML = "Save & continue"
    socialInputDiv6.append(socialBtn1, socialBtn2)

    socialFormFieldset.append(socialFormLegend, socialInputDiv1, socialInputDiv2, socialInputDiv3, socialInputDiv4, socialInputDiv5, socialInputDiv6)
    socialForm.append(socialFormFieldset)
    formWrapper.append(socialForm)
    // END OF SOCIAL MEDIA FORM
    // START OF SUMMARY FORM
    const summaryForm = document.createElement('form')
    summaryForm.setAttribute("method", "POST")
    summaryForm.setAttribute("id", "resObjective")
    const summaryFormFieldset = document.createElement('fieldset')
    const summaryFormLegend = document.createElement('legend')
    summaryFormLegend.textContent = 'Professional summary'    
   
    const summaryInputDiv1 = document.createElement("div")   
    const summaryInput1 = document.createElement("input")
    summaryInput1.setAttribute("type", "text")
    summaryInput1.setAttribute("id", "objectiveId")
    summaryInput1.setAttribute("name", "objectiveId")
    summaryInput1.placeholder = 'objectiveID will be displayed here'
    summaryInputDiv1.append(summaryInput1)    

    const summaryInputDiv2 = document.createElement("div")   
    const summaryInput2 = document.createElement("input")
    summaryInput2.setAttribute("type", "text")
    summaryInput2.setAttribute("id", "pIdObjective")
    summaryInput2.setAttribute("name", "pIdObjective")
    summaryInput2.placeholder = 'personID will be displayed here'
    summaryInputDiv2.append(summaryInput2)  

    const summaryInputDiv3 = document.createElement("div")
    const summaryInputLabel3 = document.createElement("label")
    summaryInputLabel3.setAttribute("for", "objective")
    summaryInputLabel3.textContent = 'Insert your linkedIn url here:'
    const summaryInput3 = document.createElement("textarea")
    summaryInput3.setAttribute("id", "objective")
    summaryInput3.setAttribute("name", "objective")
    summaryInputDiv3.append(summaryInputLabel3, summaryInput3)
        
    const summaryInputDiv4 = document.createElement("div")  
    summaryInputDiv4.classList.add("container")  
    const summaryBtn1 = document.createElement("button")
    summaryBtn1.setAttribute("type", "submit")
    summaryBtn1.setAttribute("id", "SaveObjective")
    summaryBtn1.setAttribute("value", "Save")
    summaryBtn1.innerHTML = "Save"
    const summaryBtn2 = document.createElement("button")
    summaryBtn2.setAttribute("type", "submit")
    summaryBtn2.setAttribute("id", "submit_link")
    summaryBtn2.setAttribute("value", "Save & continue")
    summaryBtn2.innerHTML = "Save & continue"
    summaryInputDiv4.append(summaryBtn1, summaryBtn2)

    summaryFormFieldset.append(summaryFormLegend, summaryInputDiv1, summaryInputDiv2, summaryInputDiv3, summaryInputDiv4)
    summaryForm.append(summaryFormFieldset)
    formWrapper.append(summaryForm)
    // END OF SUMMARY FORM
    


    console.log(personForm)


   
}
loadHtmlForm()


