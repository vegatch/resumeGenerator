console.log("Hello there" )

let loadHtmlForm = () =>{
    const mainContainer = document.querySelector(".container")
    const bannerDiv = document.createElement('div')
    bannerDiv.classList.add('banner')
    const bannerHeader = document.createElement('h1')
    bannerHeader.textContent ='Resume Generator'
    const searchContainerDiv = document.createElement('div')
    searchContainerDiv.classList.add('flex-component')
    const searchInputDiv = document.createElement('div')
    const searchInput = document.createElement('input')
    searchInput.setAttribute('id', "searchInput")
    searchInput.setAttribute('name', "searchInput")
    searchInputDiv.append(searchInput)
    searchInput.placeholder = 'Insert your resumeID here'
    const searchParaDiv = document.createElement('div')
    const searchPara = document.createElement('p')
    searchPara.classList.add('searchPara')
    searchPara.textContent = 'Search'
    searchParaDiv.append(searchPara)
    searchContainerDiv.append(searchInputDiv, searchParaDiv)
    bannerDiv.append(bannerHeader, searchContainerDiv)
    mainContainer.append(bannerDiv)

    const sectionContainer = document.createElement('div')
    sectionContainer.classList.add("wrapper-flex")
    mainContainer.append(sectionContainer)

    const leftSectionContainer = document.createElement('div')
    leftSectionContainer.classList.add("left-container")
    const leftSectionContainerElement = document.createElement('div')
    leftSectionContainerElement.classList.add("control-container")
    const leftPara1 =  document.createElement('p')
    leftPara1.classList.add('personForm')
    leftPara1.textContent = 'Personal Information'
    const leftPara2 =  document.createElement('p')
    leftPara2.classList.add('titleForm')
    leftPara2.textContent = 'Professional Title'
    const leftPara3 =  document.createElement('p')
    leftPara3.classList.add('contactForm')
    leftPara3.textContent = 'Contact Information'
    const leftPara4 =  document.createElement('p')
    leftPara4.classList.add('socialForm')
    leftPara4.textContent = 'Professional Social media link'
    const leftPara5 =  document.createElement('p')
    leftPara5.classList.add('resObjectiveForm')
    leftPara5.textContent = 'Professional Summary'
    const leftPara6 =  document.createElement('p')
    leftPara6.classList.add('educationForm')
    leftPara6.textContent = 'Education Information'
    const leftPara7 =  document.createElement('p')
    leftPara7.classList.add('techSkillsForm')
    leftPara7.textContent = 'Technical Skills'
    const leftPara8 =  document.createElement('p')
    leftPara8.classList.add('marketSkillsForm')
    leftPara8.textContent = 'Marketable Skills'
    const leftPara9 =  document.createElement('p')
    leftPara9.classList.add('projectsForm')
    leftPara9.textContent = 'Projects Realized'
    const leftPara10 =  document.createElement('p')
    leftPara10.classList.add('workForm')
    leftPara10.textContent = 'Work Experience'
    const leftPara11 =  document.createElement('p')
    leftPara11.textContent = 'Edit Indormation'
    const leftPara12 =  document.createElement('p')
    leftPara12.textContent = 'View Resume'    
    leftSectionContainerElement.append(leftPara1, leftPara2, leftPara3, leftPara4, leftPara5, leftPara6, leftPara7, leftPara8, leftPara9, leftPara10, leftPara11, leftPara12)
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
    errorUl.classList.add('error')
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
    const personBtn1 = document.createElement("input")
    personBtn1.setAttribute("type", "submit")
    personBtn1.setAttribute("id", "SavePerson")
    personBtn1.setAttribute("value", "Save")
    personBtn1.innerHTML = "Save"
    const personBtn2 = document.createElement("input")
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
    const titleBtn1 = document.createElement("input")
    titleBtn1.setAttribute("type", "submit")
    titleBtn1.setAttribute("id", "SaveTitle")
    titleBtn1.setAttribute("value", "Save")
    titleBtn1.innerHTML = "Save"
    const titleBtn2 = document.createElement("input")
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
    const contactBtn1 = document.createElement("input")
    contactBtn1.setAttribute("type", "submit")
    contactBtn1.setAttribute("id", "SaveContact")
    contactBtn1.setAttribute("value", "Save")
    contactBtn1.innerHTML = "Save"
    const contactBtn2 = document.createElement("input")
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
    const socialBtn1 = document.createElement("input")
    socialBtn1.setAttribute("type", "submit")
    socialBtn1.setAttribute("id", "SaveLink")
    socialBtn1.setAttribute("value", "Save")
    socialBtn1.innerHTML = "Save"
    const socialBtn2 = document.createElement("input")
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
    summaryForm.setAttribute("id", "resObjectiveForm")
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
    const summaryBtn1 = document.createElement("input")
    summaryBtn1.setAttribute("type", "submit")
    summaryBtn1.setAttribute("id", "SaveObjective")
    summaryBtn1.setAttribute("value", "Save")
    summaryBtn1.innerHTML = "Save"
    const summaryBtn2 = document.createElement("input")
    summaryBtn2.setAttribute("type", "submit")
    summaryBtn2.setAttribute("id", "submit_link")
    summaryBtn2.setAttribute("value", "Save & continue")
    summaryBtn2.innerHTML = "Save & continue"
    summaryInputDiv4.append(summaryBtn1, summaryBtn2)

    summaryFormFieldset.append(summaryFormLegend, summaryInputDiv1, summaryInputDiv2, summaryInputDiv3, summaryInputDiv4)
    summaryForm.append(summaryFormFieldset)
    formWrapper.append(summaryForm)
    // END OF SUMMARY FORM
    // START OF EDUCATION FORM
    const educationForm = document.createElement('form')
    educationForm.setAttribute("method", "POST")
    educationForm.setAttribute("id", "educationForm")
    const educationFormFieldset = document.createElement('fieldset')
    const educationFormLegend = document.createElement('legend')
    educationFormLegend.textContent = 'Education Information'    
   
    const educationInputDiv1 = document.createElement("div")   
    const educationInput1 = document.createElement("input")
    educationInput1.setAttribute("type", "text")
    educationInput1.setAttribute("id", "educationId")
    educationInput1.setAttribute("name", "educationId")
    educationInput1.placeholder = 'educationID will be displayed here'
    educationInputDiv1.append(educationInput1)    

    const educationInputDiv2 = document.createElement("div")   
    const educationInput2 = document.createElement("input")
    educationInput2.setAttribute("type", "text")
    educationInput2.setAttribute("id", "pIdEducation")
    educationInput2.setAttribute("name", "pIdEducation")
    educationInput2.placeholder = 'personID will be displayed here'
    educationInputDiv2.append(educationInput2)   
    
    const educationInputDiv3 = document.createElement("div")   
    const educationInput3 = document.createElement("input")
    educationInput3.setAttribute("type", "text")
    educationInput3.setAttribute("id", "education_number")
    educationInput3.setAttribute("name", "education_number")
    educationInput3.placeholder = 'education # will be displayed here'
    educationInputDiv3.append(educationInput3)   

    const educationInputDiv4 = document.createElement("div")
    const educationInputLabel4 = document.createElement("label")
    educationInputLabel4.setAttribute("for", "eduFieldStudy")
    educationInputLabel4.textContent = 'Select your field of study below:'
    const radioContainerDiv4 = document.createElement("div")
    radioContainerDiv4.classList.add("radioGroup")
    const eduInputRadio1 = document.createElement("input")
    eduInputRadio1.setAttribute("type", "radio")
    eduInputRadio1.setAttribute("id", "eduIt")
    eduInputRadio1.setAttribute("name", "eduFieldStudy")
    eduInputRadio1.setAttribute("value", "IT")
    const eduInputRadioLabel1 = document.createElement("label")
    eduInputRadioLabel1.setAttribute("for", "IT")
    eduInputRadioLabel1.textContent = 'Information Technology'
    const eduInputRadio2 = document.createElement("input")
    eduInputRadio2.setAttribute("type", "radio")
    eduInputRadio2.setAttribute("id", "eduOther")
    eduInputRadio2.setAttribute("name", "eduFieldStudy")
    eduInputRadio2.setAttribute("value", "Other")
    const eduInputRadioLabel2 = document.createElement("label")
    eduInputRadioLabel2.setAttribute("for", "Other")
    eduInputRadioLabel2.textContent = 'Other'
    radioContainerDiv4.append(eduInputRadio1, eduInputRadioLabel1, eduInputRadio2, eduInputRadioLabel2)
    educationInputDiv4.append(educationInputLabel4, radioContainerDiv4)
        
    const educationInputDiv5 = document.createElement("div")   
    const educationInputLabel5 = document.createElement("label")
    educationInputLabel5.setAttribute("for", "school_name")
    educationInputLabel5.textContent = 'Insert your school name:'
    const educationInput5 = document.createElement("input")
    educationInput5.setAttribute("type", "text")
    educationInput5.setAttribute("id", "school_name")
    educationInput5.setAttribute("name", "school_name")
    educationInputDiv5.append(educationInputLabel5, educationInput5)  

    const educationInputDiv6 = document.createElement("div")   
    const educationInputLabel6 = document.createElement("label")
    educationInputLabel6.setAttribute("for", "school_city")
    educationInputLabel6.textContent = 'Insert the city of your school:'
    const educationInput6 = document.createElement("input")
    educationInput6.setAttribute("type", "text")
    educationInput6.setAttribute("id", "school_city")
    educationInput6.setAttribute("name", "school_city")
    educationInputDiv6.append(educationInputLabel6, educationInput6)  

    const educationInputDiv7 = document.createElement("div")   
    const educationInputLabel7 = document.createElement("label")
    educationInputLabel7.setAttribute("for", "school_state")
    educationInputLabel7.textContent = 'Insert the state of your school:'
    const educationInput7 = document.createElement("input")
    educationInput7.setAttribute("type", "text")
    educationInput7.setAttribute("id", "school_state")
    educationInput7.setAttribute("name", "school_state")
    educationInputDiv7.append(educationInputLabel7, educationInput7)  
    
    const educationInputDiv8 = document.createElement("div")
    const educationInputLabel8 = document.createElement("label")
    educationInputLabel8.setAttribute("for", "school_attendance_method")
    educationInputLabel8.textContent = 'Select attendance method below:'
    const radioContainerDiv8 = document.createElement("div")
    radioContainerDiv8.classList.add("radioGroup")
    const attendanceInputRadio1 = document.createElement("input")
    attendanceInputRadio1.setAttribute("type", "radio")
    attendanceInputRadio1.setAttribute("id", "remote")
    attendanceInputRadio1.setAttribute("name", "school_attendance_method")
    attendanceInputRadio1.setAttribute("value", "remote")
    const attendanceInputRadioLabel1 = document.createElement("label")
    attendanceInputRadioLabel1.setAttribute("for", "remote")
    attendanceInputRadioLabel1.textContent = 'Remote'
    const attendanceInputRadio2 = document.createElement("input")
    attendanceInputRadio2.setAttribute("type", "radio")
    attendanceInputRadio2.setAttribute("id", "InPerson")
    attendanceInputRadio2.setAttribute("name", "school_attendance_method")
    attendanceInputRadio2.setAttribute("value", "in person")
    const attendanceInputRadioLabel2 = document.createElement("label")
    attendanceInputRadioLabel2.setAttribute("for", "inPerson")
    attendanceInputRadioLabel2.textContent = 'In person'
    radioContainerDiv8.append(attendanceInputRadio1, attendanceInputRadioLabel1, attendanceInputRadio2, attendanceInputRadioLabel2)
    educationInputDiv8.append(educationInputLabel8, radioContainerDiv8)

    const educationInputDiv9 = document.createElement("div")   
    const educationInputLabel9 = document.createElement("label")
    educationInputLabel9.setAttribute("for", "certificate_title")
    educationInputLabel9.textContent = 'Insert the title of the certificate obtained:'
    const educationInput9 = document.createElement("input")
    educationInput9.setAttribute("type", "text")
    educationInput9.setAttribute("id", "certificate_title")
    educationInput9.setAttribute("name", "certificate_title")
    educationInputDiv9.append(educationInputLabel9, educationInput9) 

    const educationInputDiv10 = document.createElement("div")   
    const educationInputLabel10 = document.createElement("label")
    educationInputLabel10.setAttribute("for", "graduationDate")
    educationInputLabel10.textContent = 'Insert your graduation date (month and year):'
    const eduGraduationDateDiv10 = document.createElement("div")
    eduGraduationDateDiv10.classList.add("monthYear")
    eduGraduationDateDiv10.setAttribute("name", "graduationDate")
    const graduationMonth10 = document.createElement("select")    
    graduationMonth10.setAttribute("id", "completion_date_month")
    graduationMonth10.setAttribute("name", "completion_date_month")
    const graduationMonthOption10 = document.createElement("option") 
    graduationMonthOption10.classList.add("option")
    graduationMonthOption10.setAttribute("value", " ")
    graduationMonthOption10.text = 'Select month'
    graduationMonth10.append(graduationMonthOption10)
    const graduationYear10 = document.createElement("select")    
    graduationYear10.setAttribute("id", "completion_date_year")
    graduationYear10.setAttribute("name", "completion_date_year")
    const graduationYearOption10 = document.createElement("option") 
    graduationYearOption10.classList.add("option")
    graduationYearOption10.setAttribute("value", " ")
    graduationYearOption10.setAttribute("id", "selectOption ")
    graduationYearOption10.text= 'Select year'
    graduationYear10.append(graduationYearOption10)
    eduGraduationDateDiv10.append(graduationMonth10, graduationYear10)
    educationInputDiv10.append(educationInputLabel10, eduGraduationDateDiv10) 
    
    const educationInputDiv11 = document.createElement("div")   
    const educationInputLabel11 = document.createElement("label")
    educationInputLabel11.classList.add('eduAchievementLabel1')
    educationInputLabel11.setAttribute("for", "eduAchievement1")
    educationInputLabel11.textContent = 'Insert accomplishment #1:'
    const educationInput11 = document.createElement("textarea")
    educationInput11.setAttribute("type", "text")
    educationInput11.setAttribute("id", "eduAchievement1")
    educationInput11.setAttribute("name", "eduAchievement1")
    educationInputDiv11.append(educationInputLabel11, educationInput11)
    
    const educationInputDiv12 = document.createElement("div")   
    const educationInputLabel12 = document.createElement("label")
    educationInputLabel12.classList.add('eduAchievementLabel2')
    educationInputLabel12.setAttribute("for", "eduAchievement2")
    educationInputLabel12.textContent = 'Insert accomplishment #2:'
    const educationInput12 = document.createElement("textarea")
    educationInput12.setAttribute("type", "text")
    educationInput12.setAttribute("id", "eduAchievement2")
    educationInput12.setAttribute("name", "eduAchievement2")
    educationInputDiv12.append(educationInputLabel12, educationInput12) 

    const educationInputDiv13 = document.createElement("div")   
    const educationInputLabel13 = document.createElement("label")
    educationInputLabel13.classList.add('eduAchievementLabel3')
    educationInputLabel13.setAttribute("for", "eduAchievement3")
    educationInputLabel13.textContent = 'Insert accomplishment #3:'
    const educationInput13 = document.createElement("textarea")
    educationInput13.setAttribute("type", "text")
    educationInput13.setAttribute("id", "eduAchievement3")
    educationInput13.setAttribute("name", "eduAchievement3")
    educationInputDiv13.append(educationInputLabel13, educationInput13) 

    const educationInputDiv14 = document.createElement("div")  
    educationInputDiv14.classList.add("container")  
    const educationBtn1 = document.createElement("input")
    educationBtn1.setAttribute("type", "submit")
    educationBtn1.setAttribute("id", "SaveObjective")
    educationBtn1.setAttribute("value", "Save")
    educationBtn1.innerHTML = "Save"
    const educationBtn2 = document.createElement("input")
    educationBtn2.setAttribute("type", "submit")
    educationBtn2.setAttribute("id", "submit_link")
    educationBtn2.setAttribute("value", "Save & continue")
    educationBtn2.innerHTML = "Save & continue"
    educationInputDiv14.append(educationBtn1, educationBtn2)

    educationFormFieldset.append(educationFormLegend, educationInputDiv1, educationInputDiv2, educationInputDiv3, educationInputDiv4, educationInputDiv5, educationInputDiv6, educationInputDiv7, educationInputDiv8, educationInputDiv9, educationInputDiv10, educationInputDiv11, educationInputDiv12, educationInputDiv13, educationInputDiv14)
    educationForm.append(educationFormFieldset)
    formWrapper.append(educationForm)
    // END OF EDUCATION FORM
    // START OF TECH SKILLS FORM
    const techSkillsForm = document.createElement('form')
    techSkillsForm.setAttribute("method", "POST")
    techSkillsForm.setAttribute("id", "techSkillsForm")
    const techSkillsFormFieldset = document.createElement('fieldset')
    const techSkillsFormLegend = document.createElement('legend')
    techSkillsFormLegend.textContent = 'Technical Skills'    
   
    const techSkillsInputDiv1 = document.createElement("div")   
    const techSkillsInput1 = document.createElement("input")
    techSkillsInput1.setAttribute("type", "text")
    techSkillsInput1.setAttribute("id", "techId")
    techSkillsInput1.setAttribute("name", "techId")
    techSkillsInput1.placeholder = 'techID will be displayed here'
    techSkillsInputDiv1.append(techSkillsInput1)    

    const techSkillsInputDiv2 = document.createElement("div")   
    const techSkillsInput2 = document.createElement("input")
    techSkillsInput2.setAttribute("type", "text")
    techSkillsInput2.setAttribute("id", "pidTech")
    techSkillsInput2.setAttribute("name", "pidTech")
    techSkillsInput2.placeholder = 'personID will be displayed here'
    techSkillsInputDiv2.append(techSkillsInput2)  

    const techSkillsInputDiv3 = document.createElement("div")
    const techSkillsInputLabel3 = document.createElement("label")
    techSkillsInputLabel3.setAttribute("for", "tech1")
    techSkillsInputLabel3.textContent = 'Insert your technical skill #1:'
    const techSkillsInput3 = document.createElement("input")
    techSkillsInput3.setAttribute("type", "text")
    techSkillsInput3.setAttribute("id", "tech1")
    techSkillsInput3.setAttribute("name", "tech1")
    techSkillsInputDiv3.append(techSkillsInputLabel3, techSkillsInput3)

    const techSkillsInputDiv4 = document.createElement("div")
    const techSkillsInputLabel4 = document.createElement("label")
    techSkillsInputLabel4.setAttribute("for", "tech2")
    techSkillsInputLabel4.textContent = 'Insert your technical skill #2:'
    const techSkillsInput4 = document.createElement("input")
    techSkillsInput4.setAttribute("type", "text")
    techSkillsInput4.setAttribute("id", "tech2")
    techSkillsInput4.setAttribute("name", "tech2")
    techSkillsInputDiv4.append(techSkillsInputLabel4, techSkillsInput4)

    const techSkillsInputDiv5 = document.createElement("div")
    const techSkillsInputLabel5 = document.createElement("label")
    techSkillsInputLabel5.setAttribute("for", "tech3")
    techSkillsInputLabel5.textContent = 'Insert your technical skill #3:'
    const techSkillsInput5 = document.createElement("input")
    techSkillsInput5.setAttribute("type", "text")
    techSkillsInput5.setAttribute("id", "tech3")
    techSkillsInput5.setAttribute("name", "tech3")
    techSkillsInputDiv5.append(techSkillsInputLabel5, techSkillsInput5)
    
    const techSkillsInputDiv6 = document.createElement("div")
    const techSkillsInputLabel6 = document.createElement("label")
    techSkillsInputLabel6.setAttribute("for", "tech4")
    techSkillsInputLabel6.textContent = 'Insert your technical skill #4:'
    const techSkillsInput6 = document.createElement("input")
    techSkillsInput6.setAttribute("type", "text")
    techSkillsInput6.setAttribute("id", "tech4")
    techSkillsInput6.setAttribute("name", "tech4")
    techSkillsInputDiv6.append(techSkillsInputLabel6, techSkillsInput6)

    const techSkillsInputDiv7 = document.createElement("div")
    const techSkillsInputLabel7 = document.createElement("label")
    techSkillsInputLabel7.setAttribute("for", "tech5")
    techSkillsInputLabel7.textContent = 'Insert your technical skill #5:'
    const techSkillsInput7 = document.createElement("input")
    techSkillsInput7.setAttribute("type", "text")
    techSkillsInput7.setAttribute("id", "tech5")
    techSkillsInput7.setAttribute("name", "tech5")
    techSkillsInputDiv7.append(techSkillsInputLabel7, techSkillsInput7)        

    const techSkillsInputDiv8 = document.createElement("div")
    const techSkillsInputLabel8 = document.createElement("label")
    techSkillsInputLabel8.setAttribute("for", "tech6")
    techSkillsInputLabel8.textContent = 'Insert your technical skill #6:'
    const techSkillsInput8 = document.createElement("input")
    techSkillsInput8.setAttribute("type", "text")
    techSkillsInput8.setAttribute("id", "tech6")
    techSkillsInput8.setAttribute("name", "tech6")
    techSkillsInputDiv8.append(techSkillsInputLabel8, techSkillsInput8)

    const techSkillsInputDiv9 = document.createElement("div")
    const techSkillsInputLabel9 = document.createElement("label")
    techSkillsInputLabel9.setAttribute("for", "tech7")
    techSkillsInputLabel9.textContent = 'Insert your technical skill #7:'
    const techSkillsInput9 = document.createElement("input")
    techSkillsInput9.setAttribute("type", "text")
    techSkillsInput9.setAttribute("id", "tech7")
    techSkillsInput9.setAttribute("name", "tech7")
    techSkillsInputDiv9.append(techSkillsInputLabel9, techSkillsInput9)

    const techSkillsInputDiv10 = document.createElement("div")
    const techSkillsInputLabel10 = document.createElement("label")
    techSkillsInputLabel10.setAttribute("for", "tech8")
    techSkillsInputLabel10.textContent = 'Insert your technical skill #8:'
    const techSkillsInput10 = document.createElement("input")
    techSkillsInput10.setAttribute("type", "text")
    techSkillsInput10.setAttribute("id", "tech8")
    techSkillsInput10.setAttribute("name", "tech8")
    techSkillsInputDiv10.append(techSkillsInputLabel10, techSkillsInput10)

    const techSkillsInputDiv11 = document.createElement("div")
    const techSkillsInputLabel11 = document.createElement("label")
    techSkillsInputLabel11.setAttribute("for", "tech9")
    techSkillsInputLabel11.textContent = 'Insert your technical skill #9:'
    const techSkillsInput11 = document.createElement("input")
    techSkillsInput11.setAttribute("type", "text")
    techSkillsInput11.setAttribute("id", "tech9")
    techSkillsInput11.setAttribute("name", "tech9")
    techSkillsInputDiv11.append(techSkillsInputLabel11, techSkillsInput11)
    
    const techSkillsInputDiv12 = document.createElement("div")
    const techSkillsInputLabel12 = document.createElement("label")
    techSkillsInputLabel12.setAttribute("for", "tech10")
    techSkillsInputLabel12.textContent = 'Insert your technical skill #9:'
    const techSkillsInput12 = document.createElement("input")
    techSkillsInput12.setAttribute("type", "text")
    techSkillsInput12.setAttribute("id", "tech10")
    techSkillsInput12.setAttribute("name", "tech10")
    techSkillsInputDiv12.append(techSkillsInputLabel12, techSkillsInput12)

    const techSkillsInputDiv13 = document.createElement("div")  
    techSkillsInputDiv13.classList.add("container")  
    const techBtn1 = document.createElement("input")
    techBtn1.setAttribute("type", "submit")
    techBtn1.setAttribute("id", "SaveObjective")
    techBtn1.setAttribute("value", "Save")
    techBtn1.innerHTML = "Save"
    const techBtn2 = document.createElement("input")
    techBtn2.setAttribute("type", "submit")
    techBtn2.setAttribute("id", "submit_link")
    techBtn2.setAttribute("value", "Save & continue")
    techBtn2.innerHTML = "Save & continue"
    techSkillsInputDiv13.append(techBtn1, techBtn2)

    techSkillsFormFieldset.append(techSkillsFormLegend, techSkillsInputDiv3, techSkillsInputDiv4, techSkillsInputDiv5, techSkillsInputDiv6, techSkillsInputDiv7, techSkillsInputDiv8, techSkillsInputDiv9, techSkillsInputDiv10, techSkillsInputDiv11, techSkillsInputDiv12, techSkillsInputDiv13)
    techSkillsForm.append(techSkillsFormFieldset)
    formWrapper.append(techSkillsForm)    
    // END OF TECH SKILLS FORM
    // START OF MARKET SKILLS FORM
    const marketSkillsForm = document.createElement('form')
    marketSkillsForm.setAttribute("method", "POST")
    marketSkillsForm.setAttribute("id", "marketSkillsForm")
    const marketSkillsFormFieldset = document.createElement('fieldset')
    const marketSkillsFormLegend = document.createElement('legend')
    marketSkillsFormLegend.textContent = 'Marketable Skills'    
   
    const marketSkillsInputDiv1 = document.createElement("div")   
    const marketSkillsInput1 = document.createElement("input")
    marketSkillsInput1.setAttribute("type", "text")
    marketSkillsInput1.setAttribute("id", "marketId")
    marketSkillsInput1.setAttribute("name", "marketId")
    marketSkillsInput1.placeholder = 'marketID will be displayed here'
    marketSkillsInputDiv1.append(marketSkillsInput1)    

    const marketSkillsInputDiv2 = document.createElement("div")   
    const marketSkillsInput2 = document.createElement("input")
    marketSkillsInput2.setAttribute("type", "text")
    marketSkillsInput2.setAttribute("id", "pidMarket")
    marketSkillsInput2.setAttribute("name", "pidMarket")
    marketSkillsInput2.placeholder = 'personID will be displayed here'
    marketSkillsInputDiv2.append(marketSkillsInput2) 

    const marketSkillsInputDiv3 = document.createElement("div")
    const marketSkillsInputLabel3 = document.createElement("label")
    marketSkillsInputLabel3.setAttribute("for", "market1")
    marketSkillsInputLabel3.textContent = 'Insert your marketable skill #1:'
    const marketSkillsInput3 = document.createElement("input")
    marketSkillsInput3.setAttribute("type", "text")
    marketSkillsInput3.setAttribute("id", "market1")
    marketSkillsInput3.setAttribute("name", "market1")
    marketSkillsInputDiv3.append(marketSkillsInputLabel3, marketSkillsInput3)

    const marketSkillsInputDiv4 = document.createElement("div")
    const marketSkillsInputLabel4 = document.createElement("label")
    marketSkillsInputLabel4.setAttribute("for", "market2")
    marketSkillsInputLabel4.textContent = 'Insert your marketable skill #2:'
    const marketSkillsInput4 = document.createElement("input")
    marketSkillsInput4.setAttribute("type", "text")
    marketSkillsInput4.setAttribute("id", "market2")
    marketSkillsInput4.setAttribute("name", "market2")
    marketSkillsInputDiv4.append(marketSkillsInputLabel4, marketSkillsInput4)

    const marketSkillsInputDiv5 = document.createElement("div")
    const marketSkillsInputLabel5 = document.createElement("label")
    marketSkillsInputLabel5.setAttribute("for", "market3")
    marketSkillsInputLabel5.textContent = 'Insert your marketable skill #3:'
    const marketSkillsInput5 = document.createElement("input")
    marketSkillsInput5.setAttribute("type", "text")
    marketSkillsInput5.setAttribute("id", "market3")
    marketSkillsInput5.setAttribute("name", "market3")
    marketSkillsInputDiv5.append(marketSkillsInputLabel5, marketSkillsInput5)
    
    const marketSkillsInputDiv6 = document.createElement("div")
    const marketSkillsInputLabel6 = document.createElement("label")
    marketSkillsInputLabel6.setAttribute("for", "market4")
    marketSkillsInputLabel6.textContent = 'Insert your marketable skill #4:'
    const marketSkillsInput6 = document.createElement("input")
    marketSkillsInput6.setAttribute("type", "text")
    marketSkillsInput6.setAttribute("id", "market4")
    marketSkillsInput6.setAttribute("name", "market4")
    marketSkillsInputDiv6.append(marketSkillsInputLabel6, marketSkillsInput6)

    const marketSkillsInputDiv7 = document.createElement("div")
    const marketSkillsInputLabel7 = document.createElement("label")
    marketSkillsInputLabel7.setAttribute("for", "market5")
    marketSkillsInputLabel7.textContent = 'Insert your marketable skill #5:'
    const marketSkillsInput7 = document.createElement("input")
    marketSkillsInput7.setAttribute("type", "text")
    marketSkillsInput7.setAttribute("id", "market5")
    marketSkillsInput7.setAttribute("name", "market5")
    marketSkillsInputDiv7.append(marketSkillsInputLabel7, marketSkillsInput7)      

    const marketSkillsInputDiv8 = document.createElement("div")
    const marketSkillsInputLabel8 = document.createElement("label")
    marketSkillsInputLabel8.setAttribute("for", "market6")
    marketSkillsInputLabel8.textContent = 'Insert your marketable skill #6:'
    const marketSkillsInput8 = document.createElement("input")
    marketSkillsInput8.setAttribute("type", "text")
    marketSkillsInput8.setAttribute("id", "market6")
    marketSkillsInput8.setAttribute("name", "market6")
    marketSkillsInputDiv8.append(marketSkillsInputLabel8, marketSkillsInput8)

    const marketSkillsInputDiv9 = document.createElement("div")
    const marketSkillsInputLabel9 = document.createElement("label")
    marketSkillsInputLabel9.setAttribute("for", "market7")
    marketSkillsInputLabel9.textContent = 'Insert your marketable skill #7:'
    const marketSkillsInput9 = document.createElement("input")
    marketSkillsInput9.setAttribute("type", "text")
    marketSkillsInput9.setAttribute("id", "market7")
    marketSkillsInput9.setAttribute("name", "market7")
    marketSkillsInputDiv9.append(marketSkillsInputLabel9, marketSkillsInput9)

    const marketSkillsInputDiv10 = document.createElement("div")
    const marketSkillsInputLabel10 = document.createElement("label")
    marketSkillsInputLabel10.setAttribute("for", "market8")
    marketSkillsInputLabel10.textContent = 'Insert your marketable skill #8:'
    const marketSkillsInput10 = document.createElement("input")
    marketSkillsInput10.setAttribute("type", "text")
    marketSkillsInput10.setAttribute("id", "market8")
    marketSkillsInput10.setAttribute("name", "market8")
    marketSkillsInputDiv10.append(marketSkillsInputLabel10, marketSkillsInput10)

    const marketSkillsInputDiv11 = document.createElement("div")
    const marketSkillsInputLabel11 = document.createElement("label")
    marketSkillsInputLabel11.setAttribute("for", "market9")
    marketSkillsInputLabel11.textContent = 'Insert your marketable skill #9:'
    const marketSkillsInput11 = document.createElement("input")
    marketSkillsInput11.setAttribute("type", "text")
    marketSkillsInput11.setAttribute("id", "market9")
    marketSkillsInput11.setAttribute("name", "market9")
    marketSkillsInputDiv11.append(marketSkillsInputLabel11, marketSkillsInput11)

    
    const marketSkillsInputDiv12 = document.createElement("div")
    const marketSkillsInputLabel12 = document.createElement("label")
    marketSkillsInputLabel12.setAttribute("for", "market10")
    marketSkillsInputLabel12.textContent = 'Insert your marketable skill #10:'
    const marketSkillsInput12 = document.createElement("input")
    marketSkillsInput12.setAttribute("type", "text")
    marketSkillsInput12.setAttribute("id", "market10")
    marketSkillsInput12.setAttribute("name", "market10")
    marketSkillsInput12.value = 'I am here to see'
    marketSkillsInputDiv12.append(marketSkillsInputLabel12, marketSkillsInput12)

    const marketSkillsInputDiv13 = document.createElement("div")  
    marketSkillsInputDiv13.classList.add("container")  
    const marketBtn1 = document.createElement("input")
    marketBtn1.setAttribute("type", "submit")
    marketBtn1.setAttribute("id", "SaveObjective")
    marketBtn1.setAttribute("value", "Save")
    marketBtn1.innerHTML = "Save"
    const marketBtn2 = document.createElement("input")
    marketBtn2.setAttribute("type", "submit")
    marketBtn2.setAttribute("id", "submit_link")
    marketBtn2.setAttribute("value", "Save & continue")
    marketBtn2.innerHTML = "Save & continue"
    marketSkillsInputDiv13.append(marketBtn1, marketBtn2)

    marketSkillsFormFieldset.append(marketSkillsFormLegend, marketSkillsInputDiv3, marketSkillsInputDiv4, marketSkillsInputDiv5, marketSkillsInputDiv6, marketSkillsInputDiv7, marketSkillsInputDiv8, marketSkillsInputDiv9, marketSkillsInputDiv10, marketSkillsInputDiv11, marketSkillsInputDiv12, marketSkillsInputDiv13)
    marketSkillsForm.append(marketSkillsFormFieldset)
    formWrapper.append(marketSkillsForm)
    // END OF MARKET SKILLS FORM
    // START OF REALIZED PROJECTS FORM
    const projectsForm = document.createElement('form')
    projectsForm.setAttribute("method", "POST")
    projectsForm.setAttribute("id", "projectsForm")
    const projectsFormFieldset = document.createElement('fieldset')
    const projectsFormLegend = document.createElement('legend')
    projectsFormLegend.textContent = 'Technical Projects realized'    
   
    const projectsInputDiv1 = document.createElement("div")   
    const projectsInput1 = document.createElement("input")
    projectsInput1.setAttribute("type", "text")
    projectsInput1.setAttribute("id", "projectId")
    projectsInput1.setAttribute("name", "projectId")
    projectsInput1.placeholder = 'projectID will be displayed here'
    projectsInputDiv1.append(projectsInput1)    

    const projectsInputDiv2 = document.createElement("div")   
    const projectsInput2 = document.createElement("input")
    projectsInput2.setAttribute("type", "text")
    projectsInput2.setAttribute("id", "pidProject")
    projectsInput2.setAttribute("name", "pidProject")
    projectsInput2.placeholder = 'personID will be displayed here'
    projectsInputDiv2.append(projectsInput2)
    
    const projectsInputDiv3 = document.createElement("div")
    const projectsInputLabel3 = document.createElement("label")
    projectsInputLabel3.setAttribute("for", "projectRole")
    projectsInputLabel3.textContent = 'Insert your role in the project:'
    const projectsInput3 = document.createElement("input")
    projectsInput3.setAttribute("type", "text")
    projectsInput3.setAttribute("id", "projectRole")
    projectsInput3.setAttribute("name", "projectRole")    
    projectsInputDiv3.append(projectsInputLabel3, projectsInput3)
        
    const projectsInputDiv4 = document.createElement("div")
    const projectsInputLabel4 = document.createElement("label")
    projectsInputLabel4.setAttribute("for", "projectName")
    projectsInputLabel4.textContent = 'Insert name of the project:'
    const projectsInput4 = document.createElement("input")
    projectsInput4.setAttribute("type", "text")
    projectsInput4.setAttribute("id", "projectName")
    projectsInput4.setAttribute("name", "projectName")    
    projectsInputDiv4.append(projectsInputLabel4, projectsInput4) 

    const projectsInputDiv5 = document.createElement("div")
    const projectsInputLabel5 = document.createElement("label")
    projectsInputLabel5.setAttribute("for", "projectLanguage")
    projectsInputLabel5.textContent = 'Insert language used to create the project:'
    const projectsInput5 = document.createElement("input")
    projectsInput5.setAttribute("type", "text")
    projectsInput5.setAttribute("id", "projectLanguage")
    projectsInput5.setAttribute("name", "projectLanguage")    
    projectsInputDiv5.append(projectsInputLabel5, projectsInput5) 

    const projectsInputDiv6 = document.createElement("div")   
    const projectsInputLabel6 = document.createElement("label")
    projectsInputLabel6.setAttribute("for", "projectStartingDate")
    projectsInputLabel6.textContent = 'Insert project\'s starting date (month, year):'
    const projectStartDateDiv6 = document.createElement("div")
    projectStartDateDiv6.classList.add("monthYear")
    projectStartDateDiv6.setAttribute("name", "graduationDate")
    const projectStartMonth6 = document.createElement("select")    
    projectStartMonth6.setAttribute("id", "projectMonthStart")
    projectStartMonth6.setAttribute("name", "projectMonthStart")
    const projectStartMonthOption6 = document.createElement("option") 
    projectStartMonthOption6.classList.add("option")
    projectStartMonthOption6.setAttribute("value", " ")
    projectStartMonthOption6.text = 'Select month'
    projectStartMonth6.append(projectStartMonthOption6)
    const projectStartYear6 = document.createElement("select")    
    projectStartYear6.setAttribute("id", "projectYearStart")
    projectStartYear6.setAttribute("name", "projectYearStart")
    const projectStartYearOption6 = document.createElement("option") 
    projectStartYearOption6.classList.add("option")
    projectStartYearOption6.setAttribute("value", " ")
    projectStartYearOption6.setAttribute("id", "selectOption ")
    projectStartYearOption6.text= 'Select year'
    projectStartYear6.append(projectStartYearOption6)
    projectStartDateDiv6.append(projectStartMonth6, projectStartYear6)
    projectsInputDiv6.append(projectsInputLabel6, projectStartDateDiv6) 

    const projectsInputDiv7 = document.createElement("div")
    const projectsInputLabel7 = document.createElement("label")
    projectsInputLabel7.setAttribute("for", "projectCompleted")
    projectsInputLabel7.textContent = 'Check box if project is completed:'
    const projectsInput7 = document.createElement("input")
    projectsInput7.setAttribute("type", "checkbox")
    projectsInput7.setAttribute("id", "projectCompleted")
    projectsInput7.setAttribute("name", "projectCompleted")   
    projectsInput7.setAttribute("value", "yes") 
    projectsInputDiv7.append(projectsInputLabel7, projectsInput7) 

    const projectsInputDiv8 = document.createElement("div")   
    const projectsInputLabel8 = document.createElement("label")
    projectsInputLabel8.setAttribute("for", "projectEndingDate")
    projectsInputLabel8.textContent = 'Insert project\'s ending date (month, year):'
    const projectEndDateDiv8 = document.createElement("div")
    projectEndDateDiv8.classList.add("monthYear")
    projectEndDateDiv8.setAttribute("name", "projectEndDate")
    const projectEndtMonth8 = document.createElement("select")    
    projectEndtMonth8.setAttribute("id", "projectMonthEnd")
    projectEndtMonth8.setAttribute("name", "projectMonthEnd")
    const projectEndMonthOption8 = document.createElement("option") 
    projectEndMonthOption8.classList.add("option", "option3")
    projectEndMonthOption8.setAttribute("value", " ")
    projectEndMonthOption8.text = 'Select month'
    projectEndtMonth8.append(projectEndMonthOption8)
    const projectEndYear8 = document.createElement("select")    
    projectEndYear8.setAttribute("id", "projectYearEnd")
    projectEndYear8.setAttribute("name", "projectYearEnd")
    const projectEndYearOption8 = document.createElement("option") 
    projectEndYearOption8.classList.add("option", "option2")
    projectEndYearOption8.setAttribute("value", " ")
    projectEndYearOption8.setAttribute("id", "selectOption ")
    projectEndYearOption8.text= 'Select year'
    projectEndYear8.append(projectEndYearOption8)
    projectEndDateDiv8.append(projectEndtMonth8, projectEndYear8)
    projectsInputDiv8.append(projectsInputLabel8, projectEndDateDiv8) 

    const projectsInputDiv9 = document.createElement("div")
    const projectsInputLabel9 = document.createElement("label")
    projectsInputLabel9.setAttribute("for", "projectUrl")
    projectsInputLabel9.textContent = 'Insert the url of the project:'
    const projectsInput9 = document.createElement("input")
    projectsInput9.setAttribute("type", "url")
    projectsInput9.setAttribute("id", "projectUrl")
    projectsInput9.setAttribute("name", "projectUrl") 
    projectsInputDiv9.append(projectsInputLabel9, projectsInput9) 
       
    const projectsInputDiv10 = document.createElement("div")
    const projectsInputLabel10 = document.createElement("label")
    projectsInputLabel10.setAttribute("for", "projectAchievementOne")
    projectsInputLabel10.textContent = 'Insert project\'s achievement #1:'
    const projectsInput10 = document.createElement("textarea")
    projectsInput10.setAttribute("id", "projectAchievementOne")
    projectsInput10.setAttribute("name", "projectAchievementOne") 
    projectsInputDiv10.append(projectsInputLabel10, projectsInput10) 

    const projectsInputDiv11 = document.createElement("div")
    const projectsInputLabel11 = document.createElement("label")
    projectsInputLabel11.setAttribute("for", "projectAchievementTwo")
    projectsInputLabel11.textContent = 'Insert project\'s achievement #2:'
    const projectsInput11 = document.createElement("textarea")
    projectsInput11.setAttribute("id", "projectAchievementTwo")
    projectsInput11.setAttribute("name", "projectAchievementTwo") 
    projectsInputDiv11.append(projectsInputLabel11, projectsInput11) 
    
    const projectsInputDiv12 = document.createElement("div")
    const projectsInputLabel12 = document.createElement("label")
    projectsInputLabel12.setAttribute("for", "projectAchievementThree")
    projectsInputLabel12.textContent = 'Insert project\'s achievement #3:'
    const projectsInput12 = document.createElement("textarea")
    projectsInput12.setAttribute("id", "projectAchievementThree")
    projectsInput12.setAttribute("name", "projectAchievementThree") 
    projectsInputDiv12.append(projectsInputLabel12, projectsInput12) 

    const projectsInputDiv13 = document.createElement("div")  
    projectsInputDiv13.classList.add("container")  
    const projectBtn1 = document.createElement("input")
    projectBtn1.setAttribute("type", "submit")
    projectBtn1.setAttribute("id", "SaveProject")
    projectBtn1.setAttribute("value", "Save")
    projectBtn1.innerHTML = "Save"
    const projectBtn2 = document.createElement("input")
    projectBtn2.setAttribute("type", "submit")
    projectBtn2.setAttribute("id", "submit_project")
    projectBtn2.setAttribute("value", "Save & continue")
    projectBtn2.innerHTML = "Save & continue"
    projectsInputDiv13.append(projectBtn1, projectBtn2)

    projectsFormFieldset.append(projectsFormLegend, projectsInputDiv1, projectsInputDiv2, projectsInputDiv3, projectsInputDiv4, projectsInputDiv5, projectsInputDiv6, projectsInputDiv7, projectsInputDiv8, projectsInputDiv9, projectsInputDiv10, projectsInputDiv11, projectsInputDiv12, projectsInputDiv13)
    projectsForm.append(projectsFormFieldset)
    formWrapper.append(projectsForm)
    // END OF REALIZED PROJECTS FORM
    // START OF WORK EXPERIENCE FORM
    const workForm = document.createElement('form')
    workForm.setAttribute("method", "POST")
    workForm.setAttribute("id", "workForm")
    const workFormFieldset = document.createElement('fieldset')
    const workFormLegend = document.createElement('legend')
    workFormLegend.textContent = 'Work Experience'    
   
    const workInputDiv1 = document.createElement("div")   
    const workInput1 = document.createElement("input")
    workInput1.setAttribute("type", "text")
    workInput1.setAttribute("id", "workId")
    workInput1.setAttribute("name", "workId")
    workInput1.placeholder = 'workID will be displayed here'
    workInputDiv1.append(workInput1)    

    const workInputDiv2 = document.createElement("div")   
    const workInput2 = document.createElement("input")
    workInput2.setAttribute("type", "text")
    workInput2.setAttribute("id", "pidWork")
    workInput2.setAttribute("name", "pidWork")
    workInput2.placeholder = 'personID will be displayed here'
    workInputDiv2.append(workInput2)

    const workInputDiv3 = document.createElement("div")
    const workInputLabel3 = document.createElement("label")
    workInputLabel3.setAttribute("for", "projectStartingDate")
    workInputLabel3.textContent = 'Select the industry of the company:'
    const workRadioContainerDiv3 = document.createElement("div")
    workRadioContainerDiv3.classList.add("radioGroup")
    const industryInputRadio1 = document.createElement("input")
    industryInputRadio1.setAttribute("type", "radio")
    industryInputRadio1.setAttribute("id", "itWork")
    industryInputRadio1.setAttribute("name", "workType")
    industryInputRadio1.setAttribute("value", "IT")
    const industryInputRadioLabel1 = document.createElement("label")
    industryInputRadioLabel1.setAttribute("for", "workType")
    industryInputRadioLabel1.textContent = 'Computer and Technology'
    const industryInputRadio2 = document.createElement("input")
    industryInputRadio2.setAttribute("type", "radio")
    industryInputRadio2.setAttribute("id", "nonItWork")
    industryInputRadio2.setAttribute("name", "workType")
    industryInputRadio2.setAttribute("value", "Other")
    const industryInputRadioLabel2 = document.createElement("label")
    industryInputRadioLabel2.setAttribute("for", "inPerson")
    industryInputRadioLabel2.textContent = 'Other'
    workRadioContainerDiv3.append(industryInputRadio1, industryInputRadioLabel1, industryInputRadio2, industryInputRadioLabel2)
    workInputDiv3.append(workInputLabel3, workRadioContainerDiv3)
    
    const workInputDiv4 = document.createElement("div")
    const workInputLabel4 = document.createElement("label")
    workInputLabel4.setAttribute("for", "companyName")
    workInputLabel4.textContent = 'Insert the name of the company:'
    const workInput4 = document.createElement("input")
    workInput4.setAttribute("type", "text")
    workInput4.setAttribute("id", "companyName")
    workInput4.setAttribute("name", "companyName")    
    workInputDiv4.append(workInputLabel4, workInput4)
        
    const workInputDiv5 = document.createElement("div")
    const workInputLabel5 = document.createElement("label")
    workInputLabel5.setAttribute("for", "citySate")
    workInputLabel5.textContent = 'Insert company\'s location:'
    const workLocationContainerDiv5 = document.createElement("div")
    workLocationContainerDiv5.classList.add('cityState')
    workLocationContainerDiv5.setAttribute("name", "cityState")  
    const workCityDiv5 = document.createElement("div")
    const workInputCity5 = document.createElement("input")
    workInputCity5.setAttribute("type", "text")
    workInputCity5.setAttribute("id", "companyCity")
    workInputCity5.setAttribute("name", "companyCity")    
    workInputCity5.placeholder = 'Insert company\'s city'
    workCityDiv5.append(workInputCity5)
    const workStateDiv5 = document.createElement("div")
    const workInputState5 = document.createElement("input")
    workInputState5.setAttribute("type", "text")
    workInputState5.setAttribute("id", "companyState")
    workInputState5.setAttribute("name", "companyState")   
    workInputState5.placeholder = 'Insert company\'s state' 
    workStateDiv5.append(workInputState5)
    workLocationContainerDiv5.append(workCityDiv5, workStateDiv5)
    workInputDiv5.append(workInputLabel5, workLocationContainerDiv5)

    const workInputDiv6 = document.createElement("div")
    const workInputLabel6 = document.createElement("label")
    workInputLabel6.setAttribute("for", "positionInCompany")
    workInputLabel6.textContent = 'Insert your job title in the company:'
    const workInput6 = document.createElement("input")
    workInput6.setAttribute("type", "text")
    workInput6.setAttribute("id", "positionInCompany")
    workInput6.setAttribute("name", "positionInCompany")    
    workInputDiv6.append(workInputLabel6, workInput6) 

    const workInputDiv7 = document.createElement("div")   
    const workInputLabel7 = document.createElement("label")
    workInputLabel7.setAttribute("for", "workStartingDate")
    workInputLabel7.textContent = 'Insert starting date (month, year) in company:'
    const workStartDateDiv7 = document.createElement("div")
    workStartDateDiv7.classList.add("monthYear")
    workStartDateDiv7.setAttribute("name", "workStartingDate")
    const workStartMonth7 = document.createElement("select")    
    workStartMonth7.setAttribute("id", "companyStartMonth")
    workStartMonth7.setAttribute("name", "companyStartMonth")
    const workStartMonthOption7 = document.createElement("option") 
    workStartMonthOption7.classList.add("option")
    workStartMonthOption7.setAttribute("value", " ")
    workStartMonthOption7.text = 'Select month'
    workStartMonth7.append(workStartMonthOption7)
    const workStartYear7 = document.createElement("select")    
    workStartYear7.setAttribute("id", "companyStartYear")
    workStartYear7.setAttribute("name", "companyStartYear")
    const workStartYearOption7 = document.createElement("option") 
    workStartYearOption7.classList.add("option")
    workStartYearOption7.setAttribute("value", " ")
    workStartYearOption7.setAttribute("id", "selectOption ")
    workStartYearOption7.text= 'Select year'
    workStartYear7.append(workStartYearOption7)
    workStartDateDiv7.append(workStartMonth7, workStartYear7)
    workInputDiv7.append(workInputLabel7, workStartDateDiv7) 

    const workInputDiv8 = document.createElement("div")
    const workInputLabel8 = document.createElement("label")
    workInputLabel8.setAttribute("for", "stillWorkHere")
    workInputLabel8.textContent = 'Check box if you currently work in the company:'
    const workInput8 = document.createElement("input")
    workInput8.setAttribute("type", "checkbox")
    workInput8.setAttribute("id", "stillWorkHere")
    workInput8.setAttribute("name", "stillWorkHere")   
    workInput8.setAttribute("value", "yes") 
    workInputDiv8.append(workInputLabel8, workInput8) 

    const workInputDiv9 = document.createElement("div")   
    const workInputLabel9 = document.createElement("label")
    workInputLabel9.setAttribute("for", "workEndingDate")
    workInputLabel9.textContent = 'Insert ending date (month, year) with company:'
    const workSEndDateDiv9 = document.createElement("div")
    workSEndDateDiv9.classList.add("monthYear")
    workSEndDateDiv9.setAttribute("name", "workEndingDate")
    const workSEndMonth9 = document.createElement("select")    
    workSEndMonth9.setAttribute("id", "companyEndMonth")
    workSEndMonth9.setAttribute("name", "companyEndMonth")
    const workEndMonthOption9 = document.createElement("option") 
    workEndMonthOption9.classList.add("option", "monthOption")
    workEndMonthOption9.setAttribute("value", " ")
    workEndMonthOption9.text = 'Select month'
    workSEndMonth9.append(workEndMonthOption9)
    const workEndYear9 = document.createElement("select")    
    workEndYear9.setAttribute("id", "companyEndYear")
    workEndYear9.setAttribute("name", "companyEndYear")
    const workEndYearOption9 = document.createElement("option") 
    workEndYearOption9.classList.add("option", "yearOption")
    workEndYearOption9.setAttribute("value", " ")
    workEndYearOption9.setAttribute("id", "selectOption ")
    workEndYearOption9.text= 'Select year'
    workEndYear9.append(workEndYearOption9)
    workSEndDateDiv9.append(workSEndMonth9, workEndYear9)
    workInputDiv9.append(workInputLabel9, workSEndDateDiv9) 

    const workInputDiv10 = document.createElement("div")
    const workInputLabel10 = document.createElement("label")
    workInputLabel10.setAttribute("for", "workAchiev1")
    workInputLabel10.textContent = 'Insert work\'s accomplishment #1:'
    workInputLabel10.classList.add('workAchievLabel1')
    const workInput10 = document.createElement("textarea")
    workInput10.setAttribute("id", "workAchiev1")
    workInput10.setAttribute("name", "workAchiev1")    
    workInputDiv10.append(workInputLabel10, workInput10)  

    const workInputDiv11 = document.createElement("div")
    const workInputLabel11 = document.createElement("label")
    workInputLabel11.classList.add('workAchievLabel2')
    workInputLabel11.setAttribute("for", "workAchiev2")
    workInputLabel11.textContent = 'Insert work\'s accomplishment #2:'
    const workInput11 = document.createElement("textarea")
    workInput11.setAttribute("id", "workAchiev2")
    workInput11.setAttribute("name", "workAchiev2")    
    workInputDiv11.append(workInputLabel11, workInput11)

    const workInputDiv12 = document.createElement("div")
    const workInputLabel12 = document.createElement("label")
    workInputLabel12.classList.add('workAchievLabel3')
    workInputLabel12.setAttribute("for", "workAchiev3")
    workInputLabel12.textContent = 'Insert work\'s accomplishment #3:'
    const workInput12 = document.createElement("textarea")
    workInput12.setAttribute("id", "workAchiev3")
    workInput12.setAttribute("name", "workAchiev3")    
    workInputDiv12.append(workInputLabel12, workInput12)

    const workInputDiv13 = document.createElement("div")
    const workInputLabel13 = document.createElement("label")
    workInputLabel13.classList.add('workAchievLabel4')
    workInputLabel13.setAttribute("for", "workAchiev4")
    workInputLabel13.textContent = 'Insert work\'s accomplishment #4:'
    const workInput13 = document.createElement("textarea")
    workInput13.setAttribute("id", "workAchiev4")
    workInput13.setAttribute("name", "workAchiev4")    
    workInputDiv13.append(workInputLabel13, workInput13)
   
    const workInputDiv14 = document.createElement("div")
    const workInputLabel14 = document.createElement("label")
    workInputLabel14.classList.add('workAchievLabel5')
    workInputLabel14.setAttribute("for", "workAchiev5")
    workInputLabel14.textContent = 'Insert work\'s accomplishment #5:'
    const workInput14 = document.createElement("textarea")
    workInput14.setAttribute("id", "workAchiev5")
    workInput14.setAttribute("name", "workAchiev5")    
    workInputDiv14.append(workInputLabel14, workInput14)
    
    const workInputDiv15 = document.createElement("div")
    const workInputLabel15 = document.createElement("label")
    workInputLabel15.classList.add('workAchievLabel6')
    workInputLabel15.setAttribute("for", "workAchiev6")
    workInputLabel15.textContent = 'Insert work\'s accomplishment #6:'
    const workInput15 = document.createElement("textarea")
    workInput15.setAttribute("id", "workAchiev6")
    workInput15.setAttribute("name", "workAchiev6")    
    workInputDiv15.append(workInputLabel15, workInput15)

    const workInputDiv16 = document.createElement("div")
    const workInputLabel16 = document.createElement("label")
    workInputLabel16.classList.add('workAchievLabel7')
    workInputLabel16.setAttribute("for", "workAchiev7")
    workInputLabel16.textContent = 'Insert work\'s accomplishment #7:'
    const workInput16 = document.createElement("textarea")
    workInput16.setAttribute("id", "workAchiev7")
    workInput16.setAttribute("name", "workAchiev7")    
    workInputDiv16.append(workInputLabel16, workInput16)

    const workInputDiv17 = document.createElement("div")
    const workInputLabel17 = document.createElement("label")
    workInputLabel17.classList.add('workAchievLabel8')
    workInputLabel17.setAttribute("for", "workAchiev8")
    workInputLabel17.textContent = 'Insert work\'s accomplishment #8:'
    const workInput17 = document.createElement("textarea")
    workInput17.setAttribute("id", "workAchiev8")
    workInput17.setAttribute("name", "workAchiev8")    
    workInputDiv17.append(workInputLabel17, workInput17)

    const workInputDiv18 = document.createElement("div")
    const workInputLabel18 = document.createElement("label")
    workInputLabel18.classList.add('workAchievLabel9')
    workInputLabel18.setAttribute("for", "workAchiev9")
    workInputLabel18.textContent = 'Insert work\'s accomplishment #9:'
    const workInput18 = document.createElement("textarea")
    workInput18.setAttribute("id", "workAchiev9")
    workInput18.setAttribute("name", "workAchiev9")    
    workInputDiv18.append(workInputLabel18, workInput18)

    const workInputDiv19 = document.createElement("div")
    const workInputLabel19 = document.createElement("label")
    workInputLabel19.classList.add('workAchievLabel10')
    workInputLabel19.setAttribute("for", "workAchiev10")
    workInputLabel19.textContent = 'Insert work\'s accomplishment #10:'
    const workInput19 = document.createElement("textarea")
    workInput19.setAttribute("id", "workAchiev10")
    workInput19.setAttribute("name", "workAchiev10")    
    workInputDiv19.append(workInputLabel19, workInput19)

    const workInputDiv20 = document.createElement("div")  
    workInputDiv20.classList.add("container")  
    const workBtn1 = document.createElement("input")
    workBtn1.setAttribute("type", "submit")
    workBtn1.setAttribute("id", "SaveWork")
    workBtn1.setAttribute("value", "Save")
    workBtn1.innerHTML = "Save"
    const workBtn2 = document.createElement("input")
    workBtn2.setAttribute("type", "submit")
    workBtn2.setAttribute("id", "submit_work")
    workBtn2.setAttribute("value", "Save & continue")
    workBtn2.innerHTML = "Save & continue"
    workInputDiv20.append(workBtn1, workBtn2)

    workFormFieldset.append(workFormLegend, workInputDiv1, workInputDiv2, workInputDiv3, workInputDiv4, workInputDiv5, workInputDiv6, workInputDiv7, workInputDiv8, workInputDiv9, workInputDiv10, workInputDiv11, workInputDiv12, workInputDiv13, workInputDiv14, workInputDiv15, workInputDiv16, workInputDiv17, workInputDiv18, workInputDiv19, workInputDiv20)
    workForm.append(workFormFieldset)
    formWrapper.append(workForm)
    // END OF WORK EXPERIENCE FORM



    //RIGHT CONTAINER START HERE
    const rightSectionContainer = document.createElement('div')
    rightSectionContainer.classList.add("right-container")
    const rightSectionContainerElement = document.createElement('div')
    rightSectionContainerElement.classList.add("control-container")
    const rightPara1 =  document.createElement('p')
    rightPara1.textContent = 'Right Section goes here'
    rightSectionContainerElement.append(rightPara1)
    rightSectionContainer.append(rightSectionContainerElement)
    sectionContainer.append(rightSectionContainer)

    console.log(personForm)


   
}
loadHtmlForm()


