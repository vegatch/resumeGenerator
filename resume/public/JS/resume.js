import {renderToHtml} from './render.js';
// import {printSave} from './printSave.js'
// printSave();
let loadToHtml = function(data){
    const resumeDiv = document.querySelector('.container');

    data.forEach((el)=>{

            let headerDiv = document.createElement("div")
            headerDiv.classList.add("header-container")
            resumeDiv.append(headerDiv)
    
            let nameTitleDiv = document.createElement("div")
            nameTitleDiv.classList.add("name-div")
            let nameP = document.createElement("p")
            let titleP = document.createElement("p")
            nameP.innerHTML = `${el.fullname}`
            titleP.innerHTML =  `${el.title1} / ${el.title2}`
            
            let headerNewline = document.createElement("br")
  
            nameTitleDiv.append(nameP, titleP)
            headerDiv.append(nameTitleDiv, headerNewline)
    
    
            let contactDiv = document.createElement("div")
            contactDiv.classList.add("contact-div")
            let contactP = document.createElement("p")
            contactP.textContent = `${el.address} ${el.remote_} ${el.relocalisation_} | ${el.email} | ${el.phone}`           
            contactDiv.append(contactP) // newly added
            headerDiv.append(contactDiv)
    
            let resumeMediaDiv = document.createElement('div')
            resumeMediaDiv.classList.add("media-container")
            let LinkedINLink = document.createElement("a")
            LinkedINLink.href = `${el.linkedin_url}`
            LinkedINLink.textContent =`${el.linkedin} |`
            let gitHubLink = document.createElement("a")
            gitHubLink.href = `${el.github_url}`
            gitHubLink.textContent = ` ${el.github} |`
            let portfolioLink = document.createElement("a")
            portfolioLink.href = ` ${el.portfolioUrl}`
            portfolioLink.textContent =`${el.portfolio}`
            resumeMediaDiv.append(LinkedINLink, gitHubLink, portfolioLink)
            headerDiv.append(resumeMediaDiv)
    
            let resumeObjectiveDiv = document.createElement("div")
            resumeObjectiveDiv.classList.add("objective-container")
            let resumeObjectiveP = document.createElement("p")
            resumeObjectiveP.innerHTML = `${el.objective_details}`
            resumeObjectiveDiv.append(resumeObjectiveP)
            headerDiv.append(resumeObjectiveDiv)
    
    
            let resumeBodyDiv = document.createElement("div")
            resumeBodyDiv.classList.add("resume-body-container")
            resumeDiv.append(resumeBodyDiv)
// ==================================================================================
//                              Education section : Begin
// ==================================================================================    
            let educationDiv = document.createElement("div")
            educationDiv.classList.add("education-container") // main div
            
            let educationHeaderDiv = document.createElement("div")
            let educationP = document.createElement("p")
            educationP.classList.add("headerSection")
            educationP.classList.add("text-bold")
            educationP.textContent = 'EDUCATION'
            educationHeaderDiv.append(educationP)
    
            if(el.schooltype1 === 'IT'){ 
            
                let educationNewLine = document.createElement("br")
                let educationWrapper = document.createElement("div")
                educationWrapper.classList.add("groupContainerA")
                let educationFirstRowDiv = document.createElement("div")
                educationFirstRowDiv.classList.add("flex-container")
                let leftFirstRowDiv = document.createElement("div")
                leftFirstRowDiv.classList.add("left-row")
                leftFirstRowDiv.classList.add("flex-container")
                let schoolNameP = document.createElement("p")
                schoolNameP.classList.add("text-bold")
                schoolNameP.textContent = `${el.schoolname1}`
                let schoolDetails = document.createElement("p")
                schoolDetails.textContent = ` `
                schoolDetails.classList.add("text-margin")
                leftFirstRowDiv.append(schoolNameP, schoolDetails)    
                let rightFirstRowDiv = document.createElement("div")
                rightFirstRowDiv.classList.add("right-row")
        
                let schoolLocationP = document.createElement("p")
                schoolLocationP.classList.add("text-bold")
                schoolLocationP.textContent = `${el.schoolcity1}, ${el.schoolstate1} ${el.attendancemethod1}`
                rightFirstRowDiv.append(schoolLocationP)
                educationFirstRowDiv.append( educationNewLine, leftFirstRowDiv, rightFirstRowDiv)
        
        
                let educationSecondRowDiv = document.createElement("div")
                educationSecondRowDiv.classList.add("flex-container")
                let leftSecondRowDiv = document.createElement("div")
                leftSecondRowDiv.classList.add("left-row")
                let certificateTitleDiv = document.createElement("div")
                let courseTitleP = document.createElement("p")
                courseTitleP.classList.add('titlePara')
                courseTitleP.textContent = `${el.certificate1}` 
                certificateTitleDiv.append(courseTitleP)
                educationSecondRowDiv.append(certificateTitleDiv)
        
                let rightSecondRowDiv = document.createElement("div")
                rightSecondRowDiv.classList.add("right-row")            
        
                let certificateDateDiv = document.createElement("div")
                let schoolYearP = document.createElement("p")
                schoolYearP.textContent = `${el.completionmonth1} ${el.completionyear1}` 
                certificateDateDiv.append(schoolYearP)
                rightSecondRowDiv.append(certificateDateDiv)
                educationSecondRowDiv.append(leftSecondRowDiv, rightSecondRowDiv)       
            
            
                let educationUl = document.createElement("div")
                educationUl.classList.add('schoolSkills', 'sub-container')
                let educationLi = document.createElement("div")
                educationUl.append(educationLi)
        
                let educationOne = document.createTextNode(`${el.achievement_one1}`)
                let educationTwo = document.createTextNode(`${el.achievement_two1}`)
                let educationThree = document.createTextNode(`${el.achievement_three1}`)
                
                let achievementDivOne = document.createElement("div")
                achievementDivOne.classList.add( "flex-container", "subContainer-flex")
                let spanOne = document.createElement("span") 
                spanOne.classList.add("circle")
                achievementDivOne.append(spanOne)
                achievementDivOne.append(educationOne)
                educationUl.append(achievementDivOne)
        
                let achievementDivTwo = document.createElement("div")
                achievementDivTwo.classList.add("flex-container", "subContainer-flex")
                let spanTwo = document.createElement("span") 
                spanTwo.classList.add("circle")
                achievementDivTwo.append(spanTwo)
                achievementDivTwo.append(educationTwo)
                educationUl.append(achievementDivTwo)
        
                let achievementDivThree = document.createElement("div")
                achievementDivThree.classList.add("flex-container", "subContainer-flex")
                let spanThree = document.createElement("span") 
                spanThree.classList.add("circle")
                achievementDivThree.append(spanThree)
                achievementDivThree.append(educationThree)
                educationUl.append(achievementDivThree)
                educationWrapper.append(educationFirstRowDiv, educationSecondRowDiv, educationUl) 
                educationDiv.append(educationHeaderDiv, educationWrapper)

            }
            else
            {
                                
                let educationNewLine = document.createElement("br")
                let educationWrapper = document.createElement("div")
                educationWrapper.classList.add("groupContainerA")
                let educationFirstRowDiv = document.createElement("div")
                educationFirstRowDiv.classList.add("flex-container")
                let leftFirstRowDiv = document.createElement("div")
                leftFirstRowDiv.classList.add("left-row")
                leftFirstRowDiv.classList.add("flex-container")
                let schoolNameP = document.createElement("p")
                schoolNameP.classList.add("text-bold")
                schoolNameP.textContent = `${el.schoolname1}`
                let schoolDetails = document.createElement("p")
                schoolDetails.textContent = ` `
                schoolDetails.classList.add("text-margin")
                leftFirstRowDiv.append(schoolNameP, schoolDetails)    
                let rightFirstRowDiv = document.createElement("div")
                rightFirstRowDiv.classList.add("right-row")
        
                let schoolLocationP = document.createElement("p")
                schoolLocationP.classList.add("text-bold")
                schoolLocationP.textContent = `${el.schoolcity1}, ${el.schoolstate1} ${el.attendancemethod1}`
                rightFirstRowDiv.append(schoolLocationP)
                educationFirstRowDiv.append( educationNewLine, leftFirstRowDiv, rightFirstRowDiv)
        
        
                let educationSecondRowDiv = document.createElement("div")
                educationSecondRowDiv.classList.add("flex-container")
                let leftSecondRowDiv = document.createElement("div")
                leftSecondRowDiv.classList.add("left-row")
                let certificateTitleDiv = document.createElement("div")
                let courseTitleP = document.createElement("p")
                courseTitleP.classList.add('titlePara')
                courseTitleP.textContent = `${el.certificate1}` 
                certificateTitleDiv.append(courseTitleP)
                educationSecondRowDiv.append(certificateTitleDiv)
        
                let rightSecondRowDiv = document.createElement("div")
                rightSecondRowDiv.classList.add("right-row")            
        
                let certificateDateDiv = document.createElement("div")
                let schoolYearP = document.createElement("p")
                schoolYearP.textContent = `${el.completionmonth1} ${el.completionyear1}` 
                certificateDateDiv.append(schoolYearP)
                rightSecondRowDiv.append(certificateDateDiv)
                educationSecondRowDiv.append(leftSecondRowDiv, rightSecondRowDiv)       
                
            
                    
                
                    // let educationUl = document.createElement("div")
                    // educationUl.classList.add('schoolSkills', 'sub-container')
                    // let educationLi = document.createElement("div")
                    // educationUl.append(educationLi)
            
                    // let educationOne = document.createTextNode(`${el.achievement_one1}`)
                    // let educationTwo = document.createTextNode(`${el.achievement_two1}`)
                    // let educationThree = document.createTextNode(`${el.achievement_three1}`)
                
                // let achievementDivOne = document.createElement("div")
                // achievementDivOne.classList.add( "flex-container", "subContainer-flex")
                // let spanOne = document.createElement("span") 
                // spanOne.classList.add("circle")
                // achievementDivOne.append(spanOne)
                // achievementDivOne.append(educationOne)
                // educationUl.append(achievementDivOne)
        
                // let achievementDivTwo = document.createElement("div")
                // achievementDivTwo.classList.add("flex-container", "subContainer-flex")
                // let spanTwo = document.createElement("span") 
                // spanTwo.classList.add("circle")
                // achievementDivTwo.append(spanTwo)
                // achievementDivTwo.append(educationTwo)
                // educationUl.append(achievementDivTwo)
        
                // let achievementDivThree = document.createElement("div")
                // achievementDivThree.classList.add("flex-container", "subContainer-flex")
                // let spanThree = document.createElement("span") 
                // spanThree.classList.add("circle")
                // achievementDivThree.append(spanThree)
                // achievementDivThree.append(educationThree)
                // educationUl.append(achievementDivThree)
                educationWrapper.append(educationFirstRowDiv, educationSecondRowDiv) 
                educationDiv.append(educationHeaderDiv, educationWrapper)

            }

            
           
        
    
//     =====================================================
        if(el.schooltype2 === 'IT'){
            let educationNewLine2 = document.createElement("br")

            let educationWrapper2 = document.createElement("div")
            educationWrapper2.classList.add("groupContainerB")
            let educationFirstRowDiv2 = document.createElement("div")
            educationFirstRowDiv2.classList.add("flex-container")
            let leftFirstRowDiv2 = document.createElement("div")
            leftFirstRowDiv2.classList.add("left-row")
            leftFirstRowDiv2.classList.add("flex-container")
            let schoolNameP2 = document.createElement("p")
            schoolNameP2.classList.add("text-bold")
            schoolNameP2.textContent = `${el.schoolname2}`
            let schoolDetails2 = document.createElement("p")
            schoolDetails2.textContent = ``
            schoolDetails2.classList.add("text-margin")
            leftFirstRowDiv2.append(schoolNameP2, schoolDetails2)
    
            let rightFirstRowDiv2 = document.createElement("div")
            rightFirstRowDiv2.classList.add("right-row")
    
            let schoolLocationP2 = document.createElement("p")
            schoolLocationP2.classList.add("text-bold")
            schoolLocationP2.textContent = `${el.schoolcity2}, ${el.schoolstate2} ${el.attendancemethod2}`
            rightFirstRowDiv2.append(schoolLocationP2)
            educationFirstRowDiv2.append(leftFirstRowDiv2, rightFirstRowDiv2)
    
    
            let educationSecondRowDiv2 = document.createElement("div")
            educationSecondRowDiv2.classList.add("flex-container")
            let leftSecondRowDiv2 = document.createElement("div")
            leftSecondRowDiv2.classList.add("left-row")
            let certificateTitleDiv2 = document.createElement("div")
            let courseTitleP2 = document.createElement("p")
            courseTitleP2.textContent = `${el.certificate2}` 
            certificateTitleDiv2.append(courseTitleP2)
            leftSecondRowDiv2.append(certificateTitleDiv2)
    
            let rightSecondRowDiv2 = document.createElement("div")
            rightSecondRowDiv2.classList.add("right-row")
    
            let certificateDateDiv2 = document.createElement("div")
            let schoolYearP2 = document.createElement("p")
            schoolYearP2.textContent = `${el.completionmonth2} ${el.completionyear2}` 
            certificateDateDiv2.append(schoolYearP2)
            rightSecondRowDiv2.append(certificateDateDiv2)    
            
            educationSecondRowDiv2.append(leftSecondRowDiv2, rightSecondRowDiv2)
        
    
            let educationUl2 = document.createElement("div")
            educationUl2.classList.add('schoolSkills')
            let educationLi2 = document.createElement("p")
            educationUl2.append(educationLi2)
    
            let educationOne2 = document.createTextNode(`${el.achievement_one2}`)
            let educationTwo2 = document.createTextNode(`${el.achievement_two2}`)
            let educationThree2 = document.createTextNode(`${el.achievement_three2}`)
    
            let achievementDivOne2 = document.createElement("div")
            achievementDivOne2.classList.add("flex-container")
            let spanOne2 = document.createElement("span") 
            spanOne2.classList.add("circle")
            achievementDivOne2.append(spanOne2)
            achievementDivOne2.append(educationOne2)
            educationUl2.append(achievementDivOne2)
    
            let achievementDivTwo2 = document.createElement("div")
            achievementDivTwo2.classList.add("flex-container")
            let spanTwo2 = document.createElement("span") 
            spanTwo2.classList.add("circle")
            achievementDivTwo2.append(spanTwo2)
            achievementDivTwo2.append(educationTwo2)
            educationUl2.append(achievementDivTwo2)
    
            let achievementDivThree2 = document.createElement("div")
            achievementDivThree2.classList.add("flex-container")
            let spanThree2 = document.createElement("span") 
            spanThree2.classList.add("circle")
            achievementDivThree2.append(spanThree2)
            achievementDivThree2.append(educationThree2)
            educationUl2.append(achievementDivThree2)
            educationWrapper2.append(educationNewLine2, educationFirstRowDiv2, educationSecondRowDiv2, educationUl2)   
            educationDiv.append(educationWrapper2)
        }

        if(el.schooltype2 === 'Other'){
            let educationNewLine2 = document.createElement("br")

            let educationWrapper2 = document.createElement("div")
            educationWrapper2.classList.add("groupContainerB")
            let educationFirstRowDiv2 = document.createElement("div")
            educationFirstRowDiv2.classList.add("flex-container")
            let leftFirstRowDiv2 = document.createElement("div")
            leftFirstRowDiv2.classList.add("left-row")
            leftFirstRowDiv2.classList.add("flex-container")
            let schoolNameP2 = document.createElement("p")
            schoolNameP2.classList.add("text-bold")
            schoolNameP2.textContent = `${el.schoolname2}`
            let schoolDetails2 = document.createElement("p")
            schoolDetails2.textContent = ` `
            schoolDetails2.classList.add("text-margin")
            leftFirstRowDiv2.append(schoolNameP2, schoolDetails2)
    
            let rightFirstRowDiv2 = document.createElement("div")
            rightFirstRowDiv2.classList.add("right-row")
    
            let schoolLocationP2 = document.createElement("p")
            schoolLocationP2.classList.add("text-bold")
            schoolLocationP2.textContent = `${el.schoolcity2}, ${el.schoolstate2} ${el.attendancemethod2}`
            rightFirstRowDiv2.append(schoolLocationP2)
            educationFirstRowDiv2.append(leftFirstRowDiv2, rightFirstRowDiv2)
    
    
            let educationSecondRowDiv2 = document.createElement("div")
            educationSecondRowDiv2.classList.add("flex-container")
            let leftSecondRowDiv2 = document.createElement("div")
            leftSecondRowDiv2.classList.add("left-row")
            let certificateTitleDiv2 = document.createElement("div")
            let courseTitleP2 = document.createElement("p")
            courseTitleP2.textContent = `${el.certificate2}` 
            certificateTitleDiv2.append(courseTitleP2)
            leftSecondRowDiv2.append(certificateTitleDiv2)
    
            let rightSecondRowDiv2 = document.createElement("div")
            rightSecondRowDiv2.classList.add("right-row")
    
            let certificateDateDiv2 = document.createElement("div")
            let schoolYearP2 = document.createElement("p")
            schoolYearP2.textContent = `${el.completionmonth2} ${el.completionyear2}` 
            certificateDateDiv2.append(schoolYearP2)
            rightSecondRowDiv2.append(certificateDateDiv2)    
            
            educationSecondRowDiv2.append(leftSecondRowDiv2, rightSecondRowDiv2)
            educationWrapper2.append(educationNewLine2, educationFirstRowDiv2, educationSecondRowDiv2)
            educationDiv.append(educationWrapper2)   
        }

// =========================================================
        if(el.schooltype3 === 'IT'){

            let educationNewLine3 = document.createElement("br")
            let educationWrapper3 = document.createElement("div")
            educationWrapper3.classList.add("groupContainerC")

            let educationFirstRowDiv3 = document.createElement("div")
            educationFirstRowDiv3.classList.add("flex-container")
            let leftFirstRowDiv3 = document.createElement("div")
            leftFirstRowDiv3.classList.add("left-row")
            leftFirstRowDiv3.classList.add("flex-container")
            let schoolNameP3 = document.createElement("p")
            schoolNameP3.classList.add("text-bold")
            schoolNameP3.textContent = `${el.schoolname3}`  
            let schoolDetails3 = document.createElement("p")
            schoolDetails3.textContent = ``
            schoolDetails3.classList.add("text-margin")
            leftFirstRowDiv3.append(schoolNameP3, schoolDetails3)

            let rightFirstRowDiv3 = document.createElement("div")
            rightFirstRowDiv3.classList.add("right-row")

            let schoolLocationP3 = document.createElement("p")
            schoolLocationP3.classList.add("text-bold")
            schoolLocationP3.textContent = `${el.schoolcity3}, ${el.schoolstate3} ${el.attendancemethod3}`
            rightFirstRowDiv3.append(schoolLocationP3)
            educationFirstRowDiv3.append(leftFirstRowDiv3, rightFirstRowDiv3)

            let educationSecondRowDiv3 = document.createElement("div")
            educationSecondRowDiv3.classList.add("flex-container")
            let leftSecondRowDiv3 = document.createElement("div")
            leftSecondRowDiv3.classList.add("left-row")
            let certificateTitleDiv3 = document.createElement("div")
            let courseTitleP3 = document.createElement("p")
            courseTitleP3.textContent = `${el.certificate3}` 
            certificateTitleDiv3.append(courseTitleP3)
            leftSecondRowDiv3.append(certificateTitleDiv3)

            let rightSecondRowDiv3 = document.createElement("div")
            rightSecondRowDiv3.classList.add("right-row")

            let certificateDateDiv3 = document.createElement("div")
            let schoolYearP3 = document.createElement("p")
            schoolYearP3.textContent = `${el.completionmonth3} ${el.completionyear3}` 
            certificateDateDiv3.append(schoolYearP3)
            rightSecondRowDiv3.append(certificateDateDiv3)
            educationSecondRowDiv3.append(leftSecondRowDiv3, rightSecondRowDiv3)

            let educationUl3 = document.createElement("div")
            educationUl3.classList.add('schoolSkills')
            let educationLi3 = document.createElement("p")
            educationUl3.append(educationLi3)

            let educationOne3 = document.createTextNode(`${el.achievement_one3}`)
            let educationTwo3 = document.createTextNode(`${el.achievement_two3}`)
            let educationThree3 = document.createTextNode(`${el.achievement_three3}`)

            let achievementDivOne3 = document.createElement("div")
            achievementDivOne3.classList.add("flex-container")
            let spanOne3 = document.createElement("span") 
            spanOne3.classList.add("circle")
            achievementDivOne3.append(spanOne3)
            achievementDivOne3.append(educationOne3)
            educationUl3.append(achievementDivOne3)

            let achievementDivTwo3 = document.createElement("div")
            achievementDivTwo3.classList.add("flex-container")
            let spanTwo3 = document.createElement("span") 
            spanTwo3.classList.add("circle")
            achievementDivTwo3.append(spanTwo3)
            achievementDivTwo3.append(educationTwo3)
            educationUl3.append(achievementDivTwo3)

            let achievementDivThree3 = document.createElement("div")
            achievementDivThree3.classList.add("flex-container")
            let spanThree3 = document.createElement("span") 
            spanThree3.classList.add("circle")
            achievementDivThree3.append(spanThree3)
            achievementDivThree3.append(educationThree3)
            educationUl3.append(achievementDivThree3)

            educationWrapper3.append(educationNewLine3, educationFirstRowDiv3, educationSecondRowDiv3, educationUl3) 
            educationDiv.append(educationWrapper3)
        }  

        
        if(el.schooltype3 === 'Other'){

            let educationNewLine3 = document.createElement("br")
            let educationWrapper3 = document.createElement("div")
            educationWrapper3.classList.add("groupContainerC")

            let educationFirstRowDiv3 = document.createElement("div")
            educationFirstRowDiv3.classList.add("flex-container")
            let leftFirstRowDiv3 = document.createElement("div")
            leftFirstRowDiv3.classList.add("left-row")
            leftFirstRowDiv3.classList.add("flex-container")
            let schoolNameP3 = document.createElement("p")
            schoolNameP3.classList.add("text-bold")
            schoolNameP3.textContent = `${el.schoolname3}`  
            let schoolDetails3 = document.createElement("p")
            schoolDetails3.textContent = ` `
            schoolDetails3.classList.add("text-margin")
            leftFirstRowDiv3.append(schoolNameP3, schoolDetails3)

            let rightFirstRowDiv3 = document.createElement("div")
            rightFirstRowDiv3.classList.add("right-row")

            let schoolLocationP3 = document.createElement("p")
            schoolLocationP3.classList.add("text-bold")
            schoolLocationP3.textContent = `${el.schoolcity3}, ${el.schoolstate3} ${el.attendancemethod3}`
            rightFirstRowDiv3.append(schoolLocationP3)
            educationFirstRowDiv3.append(leftFirstRowDiv3, rightFirstRowDiv3)

            let educationSecondRowDiv3 = document.createElement("div")
            educationSecondRowDiv3.classList.add("flex-container")
            let leftSecondRowDiv3 = document.createElement("div")
            leftSecondRowDiv3.classList.add("left-row")
            let certificateTitleDiv3 = document.createElement("div")
            let courseTitleP3 = document.createElement("p")
            courseTitleP3.textContent = `${el.certificate3}` 
            certificateTitleDiv3.append(courseTitleP3)
            leftSecondRowDiv3.append(certificateTitleDiv3)

            let rightSecondRowDiv3 = document.createElement("div")
            rightSecondRowDiv3.classList.add("right-row")

            let certificateDateDiv3 = document.createElement("div")
            let schoolYearP3 = document.createElement("p")
            schoolYearP3.textContent = `${el.completionmonth3} ${el.completionyear3}` 
            certificateDateDiv3.append(schoolYearP3)
            rightSecondRowDiv3.append(certificateDateDiv3)
            educationSecondRowDiv3.append(leftSecondRowDiv3, rightSecondRowDiv3)


            educationWrapper3.append(educationNewLine3, educationFirstRowDiv3, educationSecondRowDiv3) 
            educationDiv.append(educationWrapper3)
        }  


    // ==================== EDUCATION 4
    
// =========================================================
if(el.schooltype4 === 'IT'){

    let educationNewLine4 = document.createElement("br")
    let educationWrapper4 = document.createElement("div")
    educationWrapper4.classList.add("groupContainerC")

    let educationFirstRowDiv4 = document.createElement("div")
    educationFirstRowDiv4.classList.add("flex-container")
    let leftFirstRowDiv4 = document.createElement("div")
    leftFirstRowDiv4.classList.add("left-row")
    leftFirstRowDiv4.classList.add("flex-container")
    let schoolNameP4 = document.createElement("p")
    schoolNameP4.classList.add("text-bold")
    schoolNameP4.textContent = `${el.schoolname4}`  
    let schoolDetails4 = document.createElement("p")
    schoolDetails4.textContent = ``
    schoolDetails4.classList.add("text-margin")
    leftFirstRowDiv4.append(schoolNameP4, schoolDetails4)

    let rightFirstRowDiv4 = document.createElement("div")
    rightFirstRowDiv4.classList.add("right-row")

    let schoolLocationP4 = document.createElement("p")
    schoolLocationP4.classList.add("text-bold")
    schoolLocationP4.textContent = `${el.schoolcity4}, ${el.schoolstate4} ${el.attendancemethod4}`
    rightFirstRowDiv4.append(schoolLocationP4)
    educationFirstRowDiv4.append(leftFirstRowDiv4, rightFirstRowDiv4)

    let educationSecondRowDiv4 = document.createElement("div")
    educationSecondRowDiv4.classList.add("flex-container")
    let leftSecondRowDiv4 = document.createElement("div")
    leftSecondRowDiv4.classList.add("left-row")
    let certificateTitleDiv4 = document.createElement("div")
    let courseTitleP4 = document.createElement("p")
    courseTitleP4.textContent = `${el.certificate4}` 
    certificateTitleDiv4.append(courseTitleP4)
    leftSecondRowDiv4.append(certificateTitleDiv4)

    let rightSecondRowDiv4 = document.createElement("div")
    rightSecondRowDiv4.classList.add("right-row")

    let certificateDateDiv4 = document.createElement("div")
    let schoolYearP4 = document.createElement("p")
    schoolYearP4.textContent = `${el.completionmonth4} ${el.completionyear4}` 
    certificateDateDiv4.append(schoolYearP4)
    rightSecondRowDiv4.append(certificateDateDiv4)
    educationSecondRowDiv4.append(leftSecondRowDiv4, rightSecondRowDiv4)

    let educationUl4 = document.createElement("div")
    educationUl4.classList.add('schoolSkills')
    let educationLi4 = document.createElement("p")
    educationUl4.append(educationLi4)

    let educationOne4 = document.createTextNode(`${el.achievement_one4}`)
    let educationTwo4 = document.createTextNode(`${el.achievement_two4}`)
    let educationThree4 = document.createTextNode(`${el.achievement_three4}`)

    let achievementDivOne4 = document.createElement("div")
    achievementDivOne4.classList.add("flex-container")
    let spanOne4 = document.createElement("span") 
    spanOne4.classList.add("circle")
    achievementDivOne4.append(spanOne4)
    achievementDivOne4.append(educationOne4)
    educationUl4.append(achievementDivOne4)

    let achievementDivTwo4 = document.createElement("div")
    achievementDivTwo4.classList.add("flex-container")
    let spanTwo4 = document.createElement("span") 
    spanTwo4.classList.add("circle")
    achievementDivTwo4.append(spanTwo4)
    achievementDivTwo4.append(educationTwo4)
    educationUl4.append(achievementDivTwo4)

    let achievementDivThree4 = document.createElement("div")
    achievementDivThree4.classList.add("flex-container")
    let spanThree4 = document.createElement("span") 
    spanThree4.classList.add("circle")
    achievementDivThree4.append(spanThree4)
    achievementDivThree4.append(educationThree4)
    educationUl4.append(achievementDivThree4)

    educationWrapper4.append(educationNewLine4, educationFirstRowDiv4, educationSecondRowDiv4, educationUl4) 
    educationDiv.append(educationWrapper4)
}  


if(el.schooltype4 === 'Other'){

    let educationNewLine4 = document.createElement("br")
    let educationWrapper4 = document.createElement("div")
    educationWrapper4.classList.add("groupContainerC")

    let educationFirstRowDiv4 = document.createElement("div")
    educationFirstRowDiv4.classList.add("flex-container")
    let leftFirstRowDiv4 = document.createElement("div")
    leftFirstRowDiv4.classList.add("left-row")
    leftFirstRowDiv4.classList.add("flex-container")
    let schoolNameP4 = document.createElement("p")
    schoolNameP4.classList.add("text-bold")
    schoolNameP4.textContent = `${el.schoolname4}`  
    let schoolDetails4 = document.createElement("p")
    schoolDetails4.textContent = ` `
    schoolDetails4.classList.add("text-margin")
    leftFirstRowDiv4.append(schoolNameP4, schoolDetails4)

    let rightFirstRowDiv4 = document.createElement("div")
    rightFirstRowDiv4.classList.add("right-row")

    let schoolLocationP4 = document.createElement("p")
    schoolLocationP4.classList.add("text-bold")
    schoolLocationP4.textContent = `${el.schoolcity4}, ${el.schoolstate4} ${el.attendancemethod4}`
    rightFirstRowDiv4.append(schoolLocationP4)
    educationFirstRowDiv4.append(leftFirstRowDiv4, rightFirstRowDiv4)

    let educationSecondRowDiv4 = document.createElement("div")
    educationSecondRowDiv4.classList.add("flex-container")
    let leftSecondRowDiv4 = document.createElement("div")
    leftSecondRowDiv4.classList.add("left-row")
    let certificateTitleDiv4 = document.createElement("div")
    let courseTitleP4 = document.createElement("p")
    courseTitleP4.textContent = `${el.certificate4}` 
    certificateTitleDiv4.append(courseTitleP4)
    leftSecondRowDiv4.append(certificateTitleDiv4)

    let rightSecondRowDiv4 = document.createElement("div")
    rightSecondRowDiv4.classList.add("right-row")

    let certificateDateDiv4 = document.createElement("div")
    let schoolYearP4 = document.createElement("p")
    schoolYearP4.textContent = `${el.completionmonth4} ${el.completionyear4}` 
    certificateDateDiv4.append(schoolYearP4)
    rightSecondRowDiv4.append(certificateDateDiv4)
    educationSecondRowDiv4.append(leftSecondRowDiv4, rightSecondRowDiv4)

    educationWrapper4.append(educationNewLine4, educationFirstRowDiv4, educationSecondRowDiv4) 
    educationDiv.append(educationWrapper4)

}  

resumeBodyDiv.append(educationDiv)



//==========================================================

// ============== Education section : End ============================
    
            // Skills section : Begin
            let skillsDiv = document.createElement("div")
            skillsDiv.classList.add("skills-container")
            let skillsP = document.createElement("p")
            skillsP.classList.add("headerSection", "text-bold", "top-margin")
            skillsP.textContent = 'SKILLS'
    
            let skillsDetailDiv = document.createElement("div")
            let skillsTechDiv = document.createElement("div")
            skillsTechDiv.classList.add("flex-container", "skills-section-container")
    
            let skillsTechP = document.createElement("p")
            skillsTechP.classList.add("text-bold", "leftSkillsType")
            skillsTechP.textContent ="Technical Skills:"
            let skillsTechOneSpan = document.createElement("span")
            skillsTechOneSpan.classList.add("skills-margin", "rightSkillsType")
            skillsTechOneSpan.textContent = `${el.skill_tech1}, ${el.skill_tech2}, ${el.skill_tech3}, ${el.skill_tech4}, ${el.skill_tech5}, ${el.skill_tech6}, ${el.skill_tech7}, ${el.skill_tech8}, ${el.skill_tech9}, ${el.skill_tech10}  `
            // let skillsTechTwoSpan = document.createElement("span")
            // skillsTechTwoSpan.textContent =``
            // let skillsTechThreeSpan= document.createElement("span")
            // skillsTechThreeSpan.textContent =""
            // let skillsTechFourSpan = document.createElement("span")
            // skillsTechFourSpan.textContent =""
            // let skillsTechFiveSpan = document.createElement("span")
            // skillsTechFiveSpan.textContent =" "
            // let skillsTechSixSpan = document.createElement("span")
            // skillsTechSixSpan.textContent =" "
            skillsTechDiv.append(skillsTechP, skillsTechOneSpan)
    

            // skillsTechDiv.append(skillsTechP, skillsTechOneSpan, skillsTechTwoSpan, skillsTechThreeSpan, skillsTechFourSpan, skillsTechFiveSpan, skillsTechSixSpan)
    


            let skillsMarketDiv = document.createElement("div")
            skillsMarketDiv.classList.add("flex-container", "skills-section-container")
            let skillsMarketP = document.createElement("p")
            skillsMarketP.classList.add("text-bold", "leftSkillsType")
            skillsMarketP.textContent ="Marketable Skills:"
            let skillsMarketOne = document.createElement("span")
            skillsMarketOne.classList.add('skills-margin', 'rightSkillsType')
            skillsMarketOne.textContent = `${el.skill_market1}, ${el.skill_market2}, ${el.skill_market3}, ${el.skill_market4}, ${el.skill_market5}, ${el.skill_market6}, ${el.skill_market7}, ${el.skill_market8}, ${el.skill_market9}, ${el.skill_market10}  `
           
            skillsMarketDiv.append(skillsMarketP, skillsMarketOne)
    
           
            skillsDetailDiv.append(skillsTechDiv, skillsMarketDiv)
            skillsDiv.append(skillsP, skillsDetailDiv)
            resumeDiv.append(skillsDiv)

//================== Skills section : end================================
               
    
//================== Projects section : Begin================================
    
            let projectsDiv = document.createElement("div")
            projectsDiv.classList.add("section-container")
    
            let projectSectionDiv = document.createElement("div")
            // projectSectionDiv.classList.add("")
            let projectSectionP = document.createElement("p")
            projectSectionP.classList.add("headerSection", "text-bold", 'top-margin')
            projectSectionP.textContent = 'TECHNICAL PROJECT HIGHLIGHTS'
            projectSectionDiv.append(projectSectionP)
    
            let projectSubDiv = document.createElement("div")
            projectSubDiv.classList.add("section-container")
            let projectsDetailDiv = document.createElement("div")
            projectsDetailDiv.classList.add("flex-container")
    
            let projectsLeftDiv = document.createElement("div")
            projectsLeftDiv.classList.add("flex-container", "left-row") // to review class name ====================
    
            let projectRoleP = document.createElement("p")
            projectRoleP.classList.add("text-bold") 
            projectRoleP.textContent = `${el.role1} `
            let projectsTitle = document.createElement("p")
            projectsTitle.textContent = `| ${el.title1}`
            projectsTitle.classList.add("text-margin")
            let projectsTools = document.createElement("p")
            projectsTools.textContent = ` | ${el.language1}`
            projectsTools.classList.add("text-margin")
            projectsLeftDiv.append(projectRoleP, projectsTitle, projectsTools)
    
            let projectRightDiv = document.createElement("div")
            projectRightDiv.classList.add("right-row")
            let projectDateP = document.createElement("p")
            projectDateP.textContent =`${el.month_start1} ${el.year_start1} - ${el.month_end1} ${el.year_end1}`
            projectRightDiv.append(projectDateP)
            projectsDetailDiv.append(projectsLeftDiv, projectRightDiv)
    
            let projectsLocationDiv = document.createElement("div") // refer to location source codes are stored 
            projectsLocationDiv.classList.add("link-comtainer")
            let linkDiv = document.createElement("div")
            let projectLink = document.createElement("a")
            linkDiv.append(projectLink)
            projectLink.href= `${el.url1}`
            projectLink.textContent= `${el.url1}`
            projectsLocationDiv.append(linkDiv)
        //     projectsDetailDiv.append(projectsLeftDiv, projectRightDiv, projectsLocationDiv)
    
            let realizationOneDiv = document.createElement("div")
            realizationOneDiv.classList.add("flex-container")
            let spanRealizationOne = document.createElement("span") 
            spanRealizationOne.classList.add("circle")
            let realizationOneP = document.createElement("p")
            realizationOneP.textContent =  `${el.achievementOne1}` 
            realizationOneDiv.append(spanRealizationOne, realizationOneP)
    
            let realizationTwoDiv = document.createElement("div")
            realizationTwoDiv.classList.add("flex-container")
            let spanRealizationTwo = document.createElement("span") 
            spanRealizationTwo.classList.add("circle")
            let realizationTwoP = document.createElement("p")
            realizationTwoP.textContent = `${el.achievementTwo1}` 
            realizationTwoDiv.append(spanRealizationTwo, realizationTwoP)
    
            let realizationThreeDiv = document.createElement("div")
            realizationThreeDiv.classList.add("flex-container")
            let spanRealizationThree = document.createElement("span") 
            spanRealizationThree.classList.add("circle")
            let realizationThreeP = document.createElement("p")
            realizationThreeP.textContent = `${ el.achievementThree1}`
            realizationThreeDiv.append(spanRealizationThree, realizationThreeP)

            let projectNewLine = document.createElement("br")
    
            projectSubDiv.append(projectsDetailDiv, projectsLocationDiv,
                         realizationOneDiv, realizationTwoDiv, realizationThreeDiv, projectNewLine)

    
    
    
            // ======================================================================
            let projectSubDiv1 = document.createElement("div")
            projectSubDiv1.classList.add("section-container")
            let projectsDetailSecondDiv = document.createElement("div")
            projectsDetailSecondDiv.classList.add("flex-container")
    
                
            let projectsLeftSecondDiv = document.createElement("div")
            projectsLeftSecondDiv.classList.add("flex-container", "left-row") // to review class name ====================
    
            let projectRoleSecondP = document.createElement("p")
            projectRoleSecondP.classList.add("text-bold")
            projectRoleSecondP.textContent = `${el.role2}`
            let projectsTitleSecondP = document.createElement("p")
            projectsTitleSecondP.textContent = ` | ${el.title2}`
            projectsTitleSecondP.classList.add("text-margin")
            let projectsToolsSecondP = document.createElement("p")
            projectsToolsSecondP.textContent = ` ${el.language2}`
            projectsToolsSecondP.classList.add("text-margin")
            projectsLeftSecondDiv.append(projectRoleSecondP, projectsTitleSecondP, projectsToolsSecondP)
    
            let projectRightSecondDiv = document.createElement("div")
            projectRightSecondDiv.classList.add("right-row")
            let projectDateSecondP = document.createElement("p")
            projectDateSecondP.textContent = `${el.month_start2} ${el.year_start2} - ${el.month_end2} ${el.year_end2}`
            projectRightSecondDiv.append(projectDateSecondP)
            projectsDetailSecondDiv.append(projectsLeftSecondDiv, projectRightSecondDiv)
    
            let projectsLocationSecondDiv = document.createElement("div") // refer to location source codes are stored 
            projectsLocationSecondDiv.classList.add("link-comtainer")
            let linkSecondDiv = document.createElement("div")
            let projectSecondLink = document.createElement("a")
            linkSecondDiv.append(projectSecondLink)
            projectSecondLink.href= `${el.url2}`
            projectSecondLink.textContent=`${el.url2}`
            projectsLocationSecondDiv.append(linkSecondDiv)
    
            let realizationOneSecondDiv = document.createElement("div")
            realizationOneSecondDiv.classList.add("flex-container")
            let spanRealizationOneSecond = document.createElement("span") 
            spanRealizationOneSecond.classList.add("circle")
            let realizationOneSecondP = document.createElement("p")
            realizationOneSecondP.textContent = `${el.achievementOne2}`
            realizationOneSecondDiv.append(spanRealizationOneSecond, realizationOneSecondP)
    
            let realizationTwoSecondDiv = document.createElement("div")
            realizationTwoSecondDiv.classList.add("flex-container")
            let spanRealizationTwoSecond = document.createElement("span") 
            spanRealizationTwoSecond.classList.add("circle")
            let realizationTwoSecondP = document.createElement("p")
            realizationTwoSecondP.textContent = `${el.achievementTwo2}`
            realizationTwoSecondDiv.append(spanRealizationTwoSecond, realizationTwoSecondP)
    
            let realizationThreeSecondDiv = document.createElement("div")
            realizationThreeSecondDiv.classList.add("flex-container")
            let spanRealizationThreeSecond = document.createElement("span") 
            spanRealizationThreeSecond.classList.add("circle")
            let realizationThreeSecondP = document.createElement("p")
            realizationThreeSecondP.textContent = `${el.achievementThree2}`
            realizationThreeSecondDiv.append(spanRealizationThreeSecond, realizationThreeSecondP)
             
            let projectNewLine1 = document.createElement("br")
            
            projectSubDiv1.append(projectsDetailSecondDiv, projectsLocationSecondDiv, 
                realizationOneSecondDiv, realizationTwoSecondDiv, realizationThreeSecondDiv, projectNewLine1)
    
// ===============================================================================
//                      3RD PROJECT
// ===============================================================================
                let projectSubDiv2 = document.createElement("div")
                projectSubDiv2.classList.add("section-container")
                let projectsDetailSecondDiv1 = document.createElement("div")
                projectsDetailSecondDiv1.classList.add("flex-container")

              

                let projectsLeftSecondDiv1 = document.createElement("div")
                projectsLeftSecondDiv1.classList.add("flex-container", "left-row") // to review class name ====================

                let projectRoleSecondP1 = document.createElement("p")
                projectRoleSecondP1.classList.add("text-bold")
                projectRoleSecondP1.textContent = `${el.role2}`
                let projectsTitleSecondP1 = document.createElement("p")
                projectsTitleSecondP1.textContent = ` | ${el.title2}`
                projectsTitleSecondP1.classList.add("text-margin")
                let projectsToolsSecondP1 = document.createElement("p")
                projectsToolsSecondP1.textContent = ` ${el.language2}`
                projectsToolsSecondP1.classList.add("text-margin")
                projectsLeftSecondDiv1.append(projectRoleSecondP1, projectsTitleSecondP1, projectsToolsSecondP1)

                let projectRightSecondDiv1 = document.createElement("div")
                projectRightSecondDiv1.classList.add("right-row")
                let projectDateSecondP1 = document.createElement("p")
                projectDateSecondP1.textContent = `${el.month_start2} ${el.year_start2} - ${el.month_end2} ${el.year_end2}`
                projectRightSecondDiv1.append(projectDateSecondP1)

                projectsDetailSecondDiv1.append(projectsLeftSecondDiv1, projectRightSecondDiv1)

                let projectsLocationSecondDiv1 = document.createElement("div") // refer to location source codes are stored 
                projectsLocationSecondDiv1.classList.add("link-comtainer")
                let linkSecondDiv1 = document.createElement("div")
                let projectSecondLink1 = document.createElement("a")
                linkSecondDiv1.append(projectSecondLink1)
                projectSecondLink1.href= `${el.url2}`
                projectSecondLink1.textContent=`${el.url2}`
                projectsLocationSecondDiv1.append(linkSecondDiv1)

                let realizationOneSecondDiv1 = document.createElement("div")
                realizationOneSecondDiv1.classList.add("flex-container")
                let spanRealizationOneSecond1 = document.createElement("span") 
                spanRealizationOneSecond1.classList.add("circle")
                let realizationOneSecondP1 = document.createElement("p")
                realizationOneSecondP1.textContent = `${el.achievementOne2}`
                realizationOneSecondDiv1.append(spanRealizationOneSecond1, realizationOneSecondP1)

                let realizationTwoSecondDiv1 = document.createElement("div")
                realizationTwoSecondDiv1.classList.add("flex-container")
                let spanRealizationTwoSecond1 = document.createElement("span") 
                spanRealizationTwoSecond1.classList.add("circle")
                let realizationTwoSecondP1 = document.createElement("p")
                realizationTwoSecondP1.textContent = `${el.achievementTwo2}`
                realizationTwoSecondDiv1.append(spanRealizationTwoSecond1, realizationTwoSecondP1)

                let realizationThreeSecondDiv1 = document.createElement("div")
                realizationThreeSecondDiv1.classList.add("flex-container")
                let spanRealizationThreeSecond1 = document.createElement("span") 
                spanRealizationThreeSecond1.classList.add("circle")
                let realizationThreeSecondP1 = document.createElement("p")
                realizationThreeSecondP1.textContent = `${el.achievementThree2}`
                realizationThreeSecondDiv1.append(spanRealizationThreeSecond1, realizationThreeSecondP1)

                let projectNewLine2 = document.createElement("br")

                projectSubDiv2.append(projectsDetailSecondDiv1, projectsLocationSecondDiv1, 
                                realizationOneSecondDiv1, realizationTwoSecondDiv1, realizationThreeSecondDiv1, projectNewLine2)

// ===============================================================================
//                      4th PROJECT
// ===============================================================================
                let projectSubDiv3 = document.createElement("div")
                projectSubDiv3.classList.add("section-container")
                let projectsDetailSecondDiv2 = document.createElement("div")
                projectsDetailSecondDiv2.classList.add("flex-container")


                let projectsLeftSecondDiv2 = document.createElement("div")
                projectsLeftSecondDiv2.classList.add("flex-container", "left-row") // to review class name ====================

                let projectRoleSecondP2 = document.createElement("p")
                projectRoleSecondP2.classList.add("text-bold")
                projectRoleSecondP2.textContent = `${el.role2}`
                let projectsTitleSecondP2 = document.createElement("p")
                projectsTitleSecondP2.textContent = ` | ${el.title2}`
                projectsTitleSecondP2.classList.add("text-margin")
                let projectsToolsSecondP2 = document.createElement("p")
                projectsToolsSecondP2.textContent = ` ${el.language2}`
                projectsToolsSecondP2.classList.add("text-margin")
                projectsLeftSecondDiv2.append(projectRoleSecondP2, projectsTitleSecondP2, projectsToolsSecondP2)

                let projectRightSecondDiv2 = document.createElement("div")
                projectRightSecondDiv2.classList.add("right-row")
                let projectDateSecondP2 = document.createElement("p")
                projectDateSecondP2.textContent = `${el.month_start2} ${el.year_start2} - ${el.month_end2} ${el.year_end2}`
                projectRightSecondDiv2.append(projectDateSecondP2)

                projectsDetailSecondDiv2.append(projectsLeftSecondDiv2, projectRightSecondDiv2)

                let projectsLocationSecondDiv2 = document.createElement("div") // refer to location source codes are stored 
                projectsLocationSecondDiv2.classList.add("link-comtainer")
                let linkSecondDiv2 = document.createElement("div")
                let projectSecondLink2 = document.createElement("a")
                linkSecondDiv2.append(projectSecondLink1)
                projectSecondLink2.href= `${el.url2}`
                projectSecondLink2.textContent=`${el.url2}`
                projectsLocationSecondDiv2.append(linkSecondDiv2)

                let realizationOneSecondDiv2 = document.createElement("div")
                realizationOneSecondDiv2.classList.add("flex-container")
                let spanRealizationOneSecond2 = document.createElement("span") 
                spanRealizationOneSecond2.classList.add("circle")
                let realizationOneSecondP2 = document.createElement("p")
                realizationOneSecondP2.textContent = `${el.achievementOne2}`
                realizationOneSecondDiv2.append(spanRealizationOneSecond2, realizationOneSecondP2)

                let realizationTwoSecondDiv2 = document.createElement("div")
                realizationTwoSecondDiv2.classList.add("flex-container")
                let spanRealizationTwoSecond2 = document.createElement("span") 
                spanRealizationTwoSecond2.classList.add("circle")
                let realizationTwoSecondP2 = document.createElement("p")
                realizationTwoSecondP2.textContent = `${el.achievementTwo2}`
                realizationTwoSecondDiv2.append(spanRealizationTwoSecond2, realizationTwoSecondP2)

                let realizationThreeSecondDiv2 = document.createElement("div")
                realizationThreeSecondDiv2.classList.add("flex-container")
                let spanRealizationThreeSecond2 = document.createElement("span") 
                spanRealizationThreeSecond2.classList.add("circle")
                let realizationThreeSecondP2 = document.createElement("p")
                realizationThreeSecondP2.textContent = `${el.achievementThree2}`
                realizationThreeSecondDiv2.append(spanRealizationThreeSecond2, realizationThreeSecondP2)

                let projectNewLine3 = document.createElement("br")

                projectSubDiv3.append(projectsDetailSecondDiv2, projectsLocationSecondDiv2, 
                        realizationOneSecondDiv2, realizationTwoSecondDiv2, realizationThreeSecondDiv2, projectNewLine3)

// ===============================================================================


    
            projectsDiv.append(projectSectionDiv, projectSubDiv, 
                projectSubDiv1, projectSubDiv2, projectSubDiv3)
            resumeDiv.append(projectsDiv)
    
//=================== Projects section : End=============================
            
//=======================Technical work Experience : BEGIN=============================== 

  
let techWorkDiv = document.createElement("div") // main container
let techWorkHeaderDiv = document.createElement("div")
let techWorkHeaderP = document.createElement("p")
techWorkHeaderP.classList.add("headerSection", "text-bold", 'top-margin')
techWorkHeaderP.textContent = "TECHNICAL WORK EXPERIENCE"
techWorkHeaderDiv.append(techWorkHeaderP)

    if(el.workType_1 === "IT") {    
 
        let techWorkNewLine = document.createElement("br")

        let techFirstRowOneDiv = document.createElement("div")
        techFirstRowOneDiv.classList.add("flex-container")
        let techFirstRowOneLeftDiv = document.createElement("div")
        techFirstRowOneLeftDiv.classList.add("left-row")
        let techFirstRowOneLeftP =document.createElement("p")
        techFirstRowOneLeftP.classList.add("text-bold")
        techFirstRowOneLeftP.textContent = `${el.companyName_1}`
        techFirstRowOneLeftDiv.append(techFirstRowOneLeftP)

        let techFirstRowOneRightDiv = document.createElement("div")
        techFirstRowOneRightDiv.classList.add("right-row")
        let techFirstRowOneRightP =document.createElement("p")
        techFirstRowOneRightP.classList.add("text-bold")
        techFirstRowOneRightP.textContent = ` ${el.companyCity_1}, ${el.companyState_1}`
        techFirstRowOneRightDiv.append(techFirstRowOneRightP)

        let techFirstRowTwoDiv = document.createElement("div")
        techFirstRowTwoDiv.classList.add("flex-container")
        let techFirstRowTwoLeftDiv = document.createElement("div")
        techFirstRowTwoLeftDiv.classList.add("left-row")
        let techFirstRowTwoLeftP =document.createElement("p")
        techFirstRowTwoLeftP.textContent = `${el.jobRole_1}`
        techFirstRowTwoDiv.append(techFirstRowTwoLeftP)

        let techFirstRowTwoRightDiv = document.createElement("div")
        techFirstRowTwoRightDiv.classList.add("right-row")
        let techFirstRowTwoRightP =document.createElement("p")
        // firstRowTwoRightP.classList.add("text-bold")
        techFirstRowTwoRightP.textContent = `${el.workStartMonth_1} ${el.workStart_year_1} - ${el.workEndMonth_1} ${el.workEndYear_1}`
        techFirstRowTwoRightDiv.append(techFirstRowTwoRightP)

        let techWorkRealizationOneFirstDiv1 = document.createElement("div")
        techWorkRealizationOneFirstDiv1.classList.add("flex-container")
        let spanTechWorkRealizationOneFirst1 = document.createElement("span") 
        spanTechWorkRealizationOneFirst1.classList.add("circle")
        let techWorkRealizationOneFirstP1 = document.createElement("p")
        techWorkRealizationOneFirstP1.textContent = `${el.workAchiev1_1}`
        techWorkRealizationOneFirstDiv1.append(spanTechWorkRealizationOneFirst1, techWorkRealizationOneFirstP1)

        let techWorkRealizationOneFirstDiv2 = document.createElement("div")
        techWorkRealizationOneFirstDiv2.classList.add("flex-container")
        let spanTechWorkRealizationOneFirst2 = document.createElement("span") 
        spanTechWorkRealizationOneFirst2.classList.add("circle")
        let techWorkRealizationOneFirstP2 = document.createElement("p")
        techWorkRealizationOneFirstP2.textContent = `${el.workAchiev2_1}`
        techWorkRealizationOneFirstDiv2.append(spanTechWorkRealizationOneFirst2, techWorkRealizationOneFirstP2)

        let techWorkRealizationOneFirstDiv3 = document.createElement("div")
        techWorkRealizationOneFirstDiv3.classList.add("flex-container")
        let spanTechWorkRealizationOneFirst3 = document.createElement("span") 
        spanTechWorkRealizationOneFirst3.classList.add("circle")
        let techWorkRealizationOneFirstP3 = document.createElement("p")
        techWorkRealizationOneFirstP3.textContent = `${el.workAchiev3_1}`
        techWorkRealizationOneFirstDiv3.append(spanTechWorkRealizationOneFirst3, techWorkRealizationOneFirstP3)

        let techWorkRealizationOneFirstDiv4 = document.createElement("div")
        techWorkRealizationOneFirstDiv4.classList.add("flex-container")
        let spanTechWorkRealizationOneFirst4 = document.createElement("span") 
        spanTechWorkRealizationOneFirst4.classList.add("circle")
        let techWorkRealizationOneFirstP4 = document.createElement("p")
        techWorkRealizationOneFirstP4.textContent = `${el.workAchiev4_1}`
        techWorkRealizationOneFirstDiv4.append(spanTechWorkRealizationOneFirst4, techWorkRealizationOneFirstP4)

        let techWorkRealizationOneFirstDiv5 = document.createElement("div")
        techWorkRealizationOneFirstDiv5.classList.add("flex-container")
        let spanTechWorkRealizationOneFirst5 = document.createElement("span") 
        spanTechWorkRealizationOneFirst5.classList.add("circle")
        let techWorkRealizationOneFirstP5 = document.createElement("p")
        techWorkRealizationOneFirstP5.textContent = `${el.workAchiev5_1}`
        techWorkRealizationOneFirstDiv5.append(spanTechWorkRealizationOneFirst5, techWorkRealizationOneFirstP5)

        let techWorkRealizationOneFirstDiv6 = document.createElement("div")
        techWorkRealizationOneFirstDiv6.classList.add("flex-container")
        let spanTechWorkRealizationOneFirst6 = document.createElement("span") 
        spanTechWorkRealizationOneFirst6.classList.add("circle")
        let techWorkRealizationOneFirstP6 = document.createElement("p")
        techWorkRealizationOneFirstP6.textContent = `${el.workAchiev6_1}`
        techWorkRealizationOneFirstDiv6.append(spanTechWorkRealizationOneFirst6, techWorkRealizationOneFirstP6)

        let techWorkRealizationOneFirstDiv7 = document.createElement("div")
        techWorkRealizationOneFirstDiv7.classList.add("flex-container")
        let spanTechWorkRealizationOneFirst7 = document.createElement("span") 
        spanTechWorkRealizationOneFirst7.classList.add("circle")
        let techWorkRealizationOneFirstP7 = document.createElement("p")
        techWorkRealizationOneFirstP7.textContent = `${el.workAchiev7_1}`
        techWorkRealizationOneFirstDiv7.append(spanTechWorkRealizationOneFirst7, techWorkRealizationOneFirstP7)

        let techWorkRealizationOneFirstDiv8 = document.createElement("div")
        techWorkRealizationOneFirstDiv8.classList.add("flex-container")
        let spanTechWorkRealizationOneFirst8 = document.createElement("span") 
        spanTechWorkRealizationOneFirst8.classList.add("circle")
        let techWorkRealizationOneFirstP8 = document.createElement("p")
        techWorkRealizationOneFirstP8.textContent = `${el.workAchiev8_1}`
        techWorkRealizationOneFirstDiv8.append(spanTechWorkRealizationOneFirst8, techWorkRealizationOneFirstP8)

        let techWorkRealizationOneFirstDiv9 = document.createElement("div")
        techWorkRealizationOneFirstDiv9.classList.add("flex-container")
        let spanTechWorkRealizationOneFirst9 = document.createElement("span") 
        spanTechWorkRealizationOneFirst9.classList.add("circle")
        let techWorkRealizationOneFirstP9 = document.createElement("p")
        techWorkRealizationOneFirstP9.textContent = `${el.workAchiev9_1}`
        techWorkRealizationOneFirstDiv9.append(spanTechWorkRealizationOneFirst9, techWorkRealizationOneFirstP9)

        let techWorkRealizationOneFirstDiv10 = document.createElement("div")
        techWorkRealizationOneFirstDiv10.classList.add("flex-container")
        let spanTechWorkRealizationOneFirst10 = document.createElement("span") 
        spanTechWorkRealizationOneFirst10.classList.add("circle")
        let techWorkRealizationOneFirstP10 = document.createElement("p")
        techWorkRealizationOneFirstP10.textContent = `${el.workAchiev10_1}`
        techWorkRealizationOneFirstDiv10.append(spanTechWorkRealizationOneFirst10, techWorkRealizationOneFirstP10)

        techFirstRowOneDiv.append(techFirstRowOneLeftDiv, techFirstRowOneRightDiv)
        techFirstRowTwoDiv.append(techFirstRowTwoLeftDiv, techFirstRowTwoRightDiv)

        techWorkDiv.append(techWorkHeaderDiv, techWorkNewLine, techFirstRowOneDiv, techFirstRowTwoDiv, techWorkRealizationOneFirstDiv1, techWorkRealizationOneFirstDiv2, techWorkRealizationOneFirstDiv3, techWorkRealizationOneFirstDiv4, techWorkRealizationOneFirstDiv5, techWorkRealizationOneFirstDiv6, techWorkRealizationOneFirstDiv7, techWorkRealizationOneFirstDiv8, techWorkRealizationOneFirstDiv9, techWorkRealizationOneFirstDiv10)

    }

resumeDiv.append(techWorkDiv)


// ======================Technical work Experience : END=================================
//================== Other Work experience : Begin ===============================
    
            let workDiv = document.createElement("div") // main container
            let workHeaderDiv = document.createElement("div")
            let workHeaderP = document.createElement("p")
            workHeaderP.classList.add("headerSection", "text-bold", 'top-margin')
            workHeaderP.textContent = "OTHER WORK EXPERIENCE"
            workHeaderDiv.append(workHeaderP)
    
            let workNewLine = document.createElement("br")
    
            let firstRowOneDiv = document.createElement("div")
            firstRowOneDiv.classList.add("flex-container")
            let firstRowOneLeftDiv = document.createElement("div")
            firstRowOneLeftDiv.classList.add("left-row")
            let firstRowOneLeftP =document.createElement("p")
            firstRowOneLeftP.classList.add("text-bold")
            firstRowOneLeftP.textContent = 'Amazon FC'
            firstRowOneLeftDiv.append(firstRowOneLeftP)
    
            let firstRowOneRightDiv = document.createElement("div")
            firstRowOneRightDiv.classList.add("right-row")
            let firstRowOneRightP =document.createElement("p")
            firstRowOneRightP.classList.add("text-bold")
            firstRowOneRightP.textContent = 'Indianapolis, IN'
            firstRowOneRightDiv.append(firstRowOneRightP)
    
            let firstRowTwoDiv = document.createElement("div")
            firstRowTwoDiv.classList.add("flex-container")
            let firstRowTwoLeftDiv = document.createElement("div")
            firstRowTwoLeftDiv.classList.add("left-row")
            let firstRowTwoLeftP =document.createElement("p")
            firstRowTwoLeftP.textContent = 'Picker'
            firstRowTwoDiv.append(firstRowTwoLeftP)
    
            let firstRowTwoRightDiv = document.createElement("div")
            firstRowTwoRightDiv.classList.add("right-row")
            let firstRowTwoRightP =document.createElement("p")
            // firstRowTwoRightP.classList.add("text-bold")
            firstRowTwoRightP.textContent = 'Sep 2020 - to date'
            firstRowTwoRightDiv.append(firstRowTwoRightP)
    
            let workRealizationOneFirstDiv = document.createElement("div")
            workRealizationOneFirstDiv.classList.add("flex-container")
            let spanWorkRealizationOneFirst = document.createElement("span") 
            spanWorkRealizationOneFirst.classList.add("circle")
            let workRealizationOneFirstP = document.createElement("p")
            workRealizationOneFirstP.textContent = 'Performing six (6) sided checks on item to avoid sending incorrect to customer'
            workRealizationOneFirstDiv.append(spanWorkRealizationOneFirst, workRealizationOneFirstP)
    
            let workRealizationTwoFirstDiv = document.createElement("div")
            workRealizationTwoFirstDiv.classList.add("flex-container")
            let spanWorkRealizationTwoFirst = document.createElement("span") 
            spanWorkRealizationTwoFirst.classList.add("circle")
            let workRealizationTwoFirstP = document.createElement("p")
            workRealizationTwoFirstP.textContent = 'Inspect working condition of my Order Picker to avoid possible issues or/and dowmturn'
            workRealizationTwoFirstDiv.append(spanWorkRealizationTwoFirst, workRealizationTwoFirstP)
    
            let workRealizationThreeFirstDiv = document.createElement("div")
            workRealizationThreeFirstDiv.classList.add("flex-container")
            let spanWorkRealizationThreeFirst = document.createElement("span") 
            spanWorkRealizationThreeFirst.classList.add("circle")
            let workRealizationThreeFirstP = document.createElement("p")
            workRealizationThreeFirstP.textContent = 'Always read my scanner to avoid mistakes'
            workRealizationThreeFirstDiv.append(spanWorkRealizationThreeFirst, workRealizationThreeFirstP)
    
    
    
            firstRowOneDiv.append(firstRowOneLeftDiv, firstRowOneRightDiv)
            firstRowTwoDiv.append(firstRowTwoLeftDiv, firstRowTwoRightDiv)
    
    
    
            // second experience
    
            let secondRowOneDiv = document.createElement("div")
            secondRowOneDiv.classList.add("flex-container")
            let secondRowOneLeftDiv = document.createElement("div")
            secondRowOneLeftDiv.classList.add("left-row")
            let secondRowOneLeftP =document.createElement("p")
            secondRowOneLeftP.classList.add("text-bold")
            secondRowOneLeftP.textContent = 'Hubler Ford Franklin'
            secondRowOneLeftDiv.append(secondRowOneLeftP)
    
            let secondRowOneRightDiv = document.createElement("div")
            secondRowOneRightDiv.classList.add("right-row")
            let secondRowOneRightP =document.createElement("p")
            secondRowOneRightP.classList.add("text-bold")
            secondRowOneRightP.textContent = 'Franklin, IN'
            secondRowOneRightDiv.append(secondRowOneRightP)
    
    
    
            let secondRowTwoDiv = document.createElement("div")
            secondRowTwoDiv.classList.add("flex-container")
            let secondRowTwoLeftDiv = document.createElement("div")
            secondRowTwoLeftDiv.classList.add("left-row")
            let secondRowTwoLeftP =document.createElement("p")
            secondRowTwoLeftP.textContent = 'Salesman'
            secondRowTwoLeftDiv.append(secondRowTwoLeftP)
    
            let secondRowTwoRightDiv = document.createElement("div")
            secondRowTwoRightDiv.classList.add("right-row")
            let secondRowTwoRightP =document.createElement("p")
            // secondRowTwoRightP.classList.add("text-bold")
            secondRowTwoRightP.textContent = 'July 2021 - Dec 2021'
            secondRowTwoRightDiv.append(secondRowTwoRightP)
    
    
    
            let workRealizationOneSecondDiv = document.createElement("div")
            workRealizationOneSecondDiv.classList.add("flex-container")
            let spanWorkRealizationOneSecond = document.createElement("span") 
            spanWorkRealizationOneSecond.classList.add("circle")
            let workRealizationOneSecondP = document.createElement("p")
            workRealizationOneSecondP.textContent = 'Listen carefully to customers to better understand their needs and wants'
            workRealizationOneSecondDiv.append(spanWorkRealizationOneSecond, workRealizationOneSecondP)
    
            let workRealizationTwoSecondDiv = document.createElement("div")
            workRealizationTwoSecondDiv.classList.add("flex-container")
            let spanWorkRealizationTwoSecond = document.createElement("span") 
            spanWorkRealizationTwoSecond.classList.add("circle")
            let workRealizationTwoSecondP = document.createElement("p")
            workRealizationTwoSecondP.textContent = 'Work with finance team to get customers approved for car loan'
            workRealizationTwoSecondDiv.append(spanWorkRealizationTwoSecond, workRealizationTwoSecondP)
    
            let workRealizationThreeSecondDiv = document.createElement("div")
            workRealizationThreeSecondDiv.classList.add("flex-container")
            let spanWorkRealizationThreeSecond = document.createElement("span") 
            spanWorkRealizationThreeSecond.classList.add("circle")
            let workRealizationThreeSecondP = document.createElement("p")
            workRealizationThreeSecondP.textContent = 'Contact customers by phone or email to achieve monthly sales goals'
            workRealizationThreeSecondDiv.append(spanWorkRealizationThreeSecond, workRealizationThreeSecondP)
    
    
    
            secondRowOneDiv.append(secondRowOneLeftDiv, secondRowOneRightDiv)
            secondRowTwoDiv.append(secondRowTwoLeftDiv, secondRowTwoRightDiv)
    
            // second experience
    
            workDiv.append(workHeaderDiv, firstRowOneDiv, firstRowTwoDiv, workRealizationOneFirstDiv, workRealizationTwoFirstDiv, workRealizationThreeFirstDiv, workNewLine, secondRowOneDiv, secondRowTwoDiv, workRealizationOneSecondDiv, workRealizationTwoSecondDiv, workRealizationThreeSecondDiv)
            resumeDiv.append(workDiv)
    
            // Work experience : End ===============================
    
    
    
    
    
            // Additional Work experience : Begin =====================
            let workAdditionalDiv = document.createElement("div") // main container
            let workHeaderAdditionalDiv = document.createElement("div")
            let workHeaderAddP = document.createElement("p")
            workHeaderAddP.classList.add("headerSection", "text-bold", 'top-margin')
            workHeaderAddP.textContent = "ADDITIONAL EXPERIENCE"
            workHeaderAdditionalDiv.append(workHeaderAddP)
    
            // let workNewLine = document.createElement("br")
    
            let additionalRowOneDiv = document.createElement("div")
            additionalRowOneDiv.classList.add("flex-container")
            let additionalRowLeftDiv = document.createElement("div")
            additionalRowLeftDiv.classList.add("left-row")
            let additionalRowLeftP =document.createElement("p")
            additionalRowLeftP.classList.add("text-bold")
            additionalRowLeftP.textContent = 'Les Centres Gheskio'
            additionalRowLeftDiv.append(additionalRowLeftP)
    
            let additionalRowRightDiv = document.createElement("div")
            additionalRowRightDiv.classList.add("right-row")
            let additionalRowRightP =document.createElement("p")
            additionalRowRightP.classList.add("text-bold")
            additionalRowRightP.textContent = 'Port-au-Prince, Haiti'
            additionalRowRightDiv.append(additionalRowRightP)
    
            let additionalRowTwoDiv = document.createElement("div")
            additionalRowTwoDiv.classList.add("flex-container")
            let additionalRowTwoLeftDiv = document.createElement("div")
            additionalRowTwoLeftDiv.classList.add("left-row")
            let additionalRowTwoLeftP =document.createElement("p")
            additionalRowTwoLeftP.textContent = 'Database manager'
            additionalRowTwoLeftDiv.append(additionalRowTwoLeftP)
    
            let additionalRowTwoRightDiv = document.createElement("div")
            additionalRowTwoRightDiv.classList.add("right-row")
            let additionalRowTwoRightP =document.createElement("p")
            // firstRowTwoRightP.classList.add("text-bold")
            additionalRowTwoRightP.textContent = 'Mar 2008 - May 2018'
            additionalRowTwoRightDiv.append(additionalRowTwoRightP)
    
            let additionalWorkRealizationOneDiv = document.createElement("div")
            additionalWorkRealizationOneDiv.classList.add("flex-container")
            let spanAdditionalWorkRealizationOne = document.createElement("span") 
            spanAdditionalWorkRealizationOne.classList.add("circle")
            let additionalWorkRealizationOneP = document.createElement("p")
            additionalWorkRealizationOneP.textContent = 'Create MS Access program to store patient\'s data to analyze monthly.'
            additionalWorkRealizationOneDiv.append(spanAdditionalWorkRealizationOne, additionalWorkRealizationOneP)
    
            let additionalWorkRealizationTwoDiv = document.createElement("div")
            additionalWorkRealizationTwoDiv.classList.add("flex-container")
            let spanAdditionalWorkRealizationTwo = document.createElement("span") 
            spanAdditionalWorkRealizationTwo.classList.add("circle")
            let additionalWorkRealizationTwoP = document.createElement("p")
            additionalWorkRealizationTwoP.textContent = 'Use SSRS to make patient\'s data report dynamic and available in point in time.'
            additionalWorkRealizationTwoDiv.append(spanAdditionalWorkRealizationTwo, additionalWorkRealizationTwoP)
                               
    })


  }

        
export{loadToHtml}