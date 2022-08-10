// import {renderToHtml} from './render.js';
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
            titleP.innerHTML =  `${el.title1}  ${el.title2} `  // separator to add in qry in title2
            
            // let headerNewline = document.createElement("br")
            // headerNewline.classList.add("header-line")

            nameTitleDiv.append(nameP, titleP)
            headerDiv.append(nameTitleDiv)
    
    
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
            let EduNewLine1 = document.createElement("br")
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
                
                

                
    let eduAchievementArray1 = [el.achievement_one1, el.achievement_two1, el.achievement_three1]

    const eduAchievementArrayWithoutEmpty1 = eduAchievementArray1.filter(function (el) {
        return el != "";
      });
    
    let eduAchievementDiv1 = document.createElement("div")
    eduAchievementDiv1.classList.add("list")
       
    eduAchievementArrayWithoutEmpty1.forEach((projectAchievement) => {
        let li = document.createElement("li");
        li.innerText = projectAchievement;
        eduAchievementDiv1.appendChild(li);
        
      });
            
      
                educationWrapper.append(educationFirstRowDiv, educationSecondRowDiv, eduAchievementDiv1) 
                educationDiv.append(EduNewLine1, educationHeaderDiv, educationWrapper)

            }


//======================== SECOND  =====================================================
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

    let eduAchievementArray2 = [el.achievement_one2, el.achievement_two2, el.achievement_three2]

    const eduAchievementArrayWithoutEmpty2 = eduAchievementArray2.filter(function (el) {
        return el != "";
      });
    
    let eduAchievementDiv2 = document.createElement("div")
    eduAchievementDiv2.classList.add("list")
    
    eduAchievementArrayWithoutEmpty2.forEach((projectAchievement) => {
        let li = document.createElement("li");
        li.innerText = projectAchievement;
        eduAchievementDiv2.appendChild(li);
      });
    
            educationWrapper2.append(educationNewLine2, educationFirstRowDiv2, educationSecondRowDiv2, eduAchievementDiv2)   
            educationDiv.append(educationWrapper2)
        }

            
// ======================== THIRD ==============================================
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

    let eduAchievementArray3 = [el.achievement_one3, el.achievement_two3, el.achievement_three3]

    const eduAchievementArrayWithoutEmpty3 = eduAchievementArray3.filter(function (el) {
        return el != "";
      });
    
    let eduAchievementDiv3 = document.createElement("div")
    eduAchievementDiv3.classList.add("list")
    
    eduAchievementArrayWithoutEmpty3.forEach((projectAchievement) => {
        let li = document.createElement("li");
        li.innerText = projectAchievement;
        eduAchievementDiv3.appendChild(li);
      });    
    
    
    educationWrapper3.append(educationNewLine3, educationFirstRowDiv3, educationSecondRowDiv3, eduAchievementDiv3) 
    educationDiv.append(educationWrapper3)
}  


// ========================== FOURTH IT =================================
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

    let eduAchievementArray4 = [el.achievement_one4, el.achievement_two4, el.achievement_three4]

    const eduAchievementArrayWithoutEmpty4 = eduAchievementArray4.filter(function (el) {
        return el != "";
      });
    
    let eduAchievementDiv4 = document.createElement("div")
    eduAchievementDiv4.classList.add("list")
    
    eduAchievementArrayWithoutEmpty4.forEach((projectAchievement) => {
        let li = document.createElement("li");
        li.innerText = projectAchievement;
        eduAchievementDiv4.appendChild(li);
      });    

    educationWrapper4.append(educationNewLine4, educationFirstRowDiv4, educationSecondRowDiv4, eduAchievementDiv4) 
    educationDiv.append(educationWrapper4)
}  

            
            
// ======================= FIRST OTHER ======================================


            if(el.schooltype1 === 'Other'){
                                
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
                
                educationWrapper.append(educationFirstRowDiv, educationSecondRowDiv) 
                educationDiv.append(educationHeaderDiv, educationWrapper)

            }

            
// ======================= SECOND OTHER ======================================           

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

// ======================= THIRD OTHER ======================================
        
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



// ======================= THIRD OTHER ======================================
    

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
// resumeDiv.append(resumeBodyDiv)


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
            skillsTechOneSpan.textContent = `${el.skill_tech1}${el.skill_tech2}${el.skill_tech3}${el.skill_tech4}${el.skill_tech5}${el.skill_tech6}${el.skill_tech7}${el.skill_tech8}${el.skill_tech9}${el.skill_tech10}  `
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
            skillsMarketOne.textContent = `${el.skill_market1}${el.skill_market2}${el.skill_market3}${el.skill_market4}${el.skill_market5}${el.skill_market6}${el.skill_market7}${el.skill_market8}${el.skill_market9}${el.skill_market10}  `
           
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
            projectsTitle.textContent = `| ${el.pname1}`
            projectsTitle.classList.add("text-margin")
            let projectsTools = document.createElement("p")
            projectsTools.textContent = ` | ${el.language1}`
            projectsTools.classList.add("text-margin")
            projectsLeftDiv.append(projectRoleP, projectsTitle, projectsTools)
    
            let projectRightDiv = document.createElement("div")
            projectRightDiv.classList.add("right-row")
            let projectDateP = document.createElement("p")
            projectDateP.textContent =`${el.month_start1} ${el.year_start1}  ${el.month_end1} ${el.year_end1}`
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
    
        

    let projectAchievementArray1 = [el.achievementOne1, el.achievementTwo1, el.achievementThree1]

    const projectAchievementArrayWithoutEmpty1 = projectAchievementArray1.filter(function (el) {
        return el != "";
      });
    
    let projectAchievementDiv1 = document.createElement("div")
    projectAchievementDiv1.classList.add("list")
    
    projectAchievementArrayWithoutEmpty1.forEach((projectAchievement) => {
        let li = document.createElement("li");
        li.innerText = projectAchievement;
        projectAchievementDiv1.appendChild(li);
      });
        
            let projectNewLine = document.createElement("br")
    
            projectSubDiv.append(projectsDetailDiv, projectsLocationDiv, projectAchievementDiv1,
                          projectNewLine)

                         if(el.role1.length === 0){
                            projectSubDiv.style.display = "none"
                        }else{
                            projectSubDiv.style.display = "block"
                        }
    
    
// =================================  SECOND PROJECT======================================

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
            projectsTitleSecondP.textContent = ` | ${el.pname2}`
            projectsTitleSecondP.classList.add("text-margin")
            let projectsToolsSecondP = document.createElement("p")
            projectsToolsSecondP.textContent = ` |  ${el.language2}`
            projectsToolsSecondP.classList.add("text-margin")
            projectsLeftSecondDiv.append(projectRoleSecondP, projectsTitleSecondP, projectsToolsSecondP)
    
            let projectRightSecondDiv = document.createElement("div")
            projectRightSecondDiv.classList.add("right-row")
            let projectDateSecondP = document.createElement("p")
            projectDateSecondP.textContent = `${el.month_start2} ${el.year_start2}  ${el.month_end2} ${el.year_end2}`
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
    

            let projectAchievementArray2 = [el.achievementOne2, el.achievementTwo2, el.achievementThree2]

            const projectAchievementArrayWithoutEmpty2 = projectAchievementArray2.filter(function (el) {
                return el != "";
              });
            
            let projectAchievementDiv2 = document.createElement("div")
            projectAchievementDiv2.classList.add("list")
            
            projectAchievementArrayWithoutEmpty2.forEach((projectAchievement) => {
                let li = document.createElement("li");
                li.innerText = projectAchievement;
                projectAchievementDiv2.appendChild(li);
              });

            // let realizationOneSecondDiv = document.createElement("div")
            // realizationOneSecondDiv.classList.add("flex-container")
            // let spanRealizationOneSecond = document.createElement("span") 
            // spanRealizationOneSecond.classList.add("fa-solid","fa-circle-dot", "circle")
            // let realizationOneSecondP = document.createElement("p")
            // realizationOneSecondP.textContent = `${el.achievementOne2}`
            // realizationOneSecondDiv.append(spanRealizationOneSecond, realizationOneSecondP)
    
            // let realizationTwoSecondDiv = document.createElement("div")
            // realizationTwoSecondDiv.classList.add("flex-container")
            // let spanRealizationTwoSecond = document.createElement("span") 
            // spanRealizationTwoSecond.classList.add("fa-solid","fa-circle-dot", "circle")
            // let realizationTwoSecondP = document.createElement("p")
            // realizationTwoSecondP.textContent = `${el.achievementTwo2}`
            // realizationTwoSecondDiv.append(spanRealizationTwoSecond, realizationTwoSecondP)
    
            // let realizationThreeSecondDiv = document.createElement("div")
            // realizationThreeSecondDiv.classList.add("flex-container")
            // let spanRealizationThreeSecond = document.createElement("span") 
            // spanRealizationThreeSecond.classList.add("fa-solid","fa-circle-dot", "circle")
            // let realizationThreeSecondP = document.createElement("p")
            // realizationThreeSecondP.textContent = `${el.achievementThree2}`
            // realizationThreeSecondDiv.append(spanRealizationThreeSecond, realizationThreeSecondP)
             
            let projectNewLine1 = document.createElement("br")
            
            projectSubDiv1.append(projectsDetailSecondDiv, projectsLocationSecondDiv, projectAchievementDiv2,
                
                 projectNewLine1)
                if(el.role2.length === 0){
                    projectSubDiv1.style.display = "none"
                }else{
                    projectSubDiv1.style.display = "block"
                }
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
                projectRoleSecondP1.textContent = `${el.role3}`
                let projectsTitleSecondP1 = document.createElement("p")
                projectsTitleSecondP1.textContent = ` | ${el.pname3}`
                projectsTitleSecondP1.classList.add("text-margin")
                let projectsToolsSecondP1 = document.createElement("p")
                projectsToolsSecondP1.textContent = ` | ${el.language3}`
                projectsToolsSecondP1.classList.add("text-margin")
                projectsLeftSecondDiv1.append(projectRoleSecondP1, projectsTitleSecondP1, projectsToolsSecondP1)

                let projectRightSecondDiv1 = document.createElement("div")
                projectRightSecondDiv1.classList.add("right-row")
                let projectDateSecondP1 = document.createElement("p")
                projectDateSecondP1.textContent = `${el.month_start3} ${el.year_start3} ${el.month_end3} ${el.year_end3}`
                projectRightSecondDiv1.append(projectDateSecondP1)

                projectsDetailSecondDiv1.append(projectsLeftSecondDiv1, projectRightSecondDiv1)

                let projectsLocationSecondDiv1 = document.createElement("div") // refer to location source codes are stored 
                projectsLocationSecondDiv1.classList.add("link-comtainer")
                let linkSecondDiv1 = document.createElement("div")
                let projectSecondLink1 = document.createElement("a")
                linkSecondDiv1.append(projectSecondLink1)
                projectSecondLink1.href= `${el.url3}`
                projectSecondLink1.textContent=`${el.url3}`
                projectsLocationSecondDiv1.append(linkSecondDiv1)


                let projectAchievementArray3 = [el.achievementOne3, el.achievementTwo3, el.achievementThree3]

                const projectAchievementArrayWithoutEmpty3 = projectAchievementArray3.filter(function (el) {
                    return el != "";
                  });
                
                let projectAchievementDiv3 = document.createElement("div")
                projectAchievementDiv3.classList.add("list")
                
                projectAchievementArrayWithoutEmpty3.forEach((projectAchievement) => {
                    let li = document.createElement("li");
                    li.innerText = projectAchievement;
                    projectAchievementDiv3.appendChild(li);
                  });
    

                let projectNewLine2 = document.createElement("br")

                projectSubDiv2.append(projectsDetailSecondDiv1, projectsLocationSecondDiv1,  projectAchievementDiv3, projectNewLine2)
                               
                
                                if(el.role3.length === 0){
                                    projectSubDiv2.style.display = "none"
                                }else{
                                    projectSubDiv2.style.display = "block"
                                }
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
                projectRoleSecondP2.textContent = `${el.role4}`
                let projectsTitleSecondP2 = document.createElement("p")
                projectsTitleSecondP2.textContent = ` | ${el.pname4}`
                projectsTitleSecondP2.classList.add("text-margin")
                let projectsToolsSecondP2 = document.createElement("p")
                projectsToolsSecondP2.textContent = ` | ${el.language4}`
                projectsToolsSecondP2.classList.add("text-margin")
                projectsLeftSecondDiv2.append(projectRoleSecondP2, projectsTitleSecondP2, projectsToolsSecondP2)

                let projectRightSecondDiv2 = document.createElement("div")
                projectRightSecondDiv2.classList.add("right-row")
                let projectDateSecondP2 = document.createElement("p")
                projectDateSecondP2.textContent = `${el.month_start4} ${el.year_start4} ${el.month_end4} ${el.year_end4}`
                projectRightSecondDiv2.append(projectDateSecondP2)

                projectsDetailSecondDiv2.append(projectsLeftSecondDiv2, projectRightSecondDiv2)

                let projectsLocationSecondDiv2 = document.createElement("div") // refer to location source codes are stored 
                projectsLocationSecondDiv2.classList.add("link-comtainer")
                let linkSecondDiv2 = document.createElement("div")
                let projectSecondLink2 = document.createElement("a")
                linkSecondDiv2.append(projectSecondLink1)
                projectSecondLink2.href= `${el.url4}`
                projectSecondLink2.textContent=`${el.url4}`
                projectsLocationSecondDiv2.append(linkSecondDiv2)


                
                let projectAchievementArray4 = [el.achievementOne4, el.achievementTwo4, el.achievementThree4]

                const projectAchievementArrayWithoutEmpty4 = projectAchievementArray4.filter(function (el) {
                    return el != "";
                  });
                
                let projectAchievementDiv4 = document.createElement("div")
                projectAchievementDiv4.classList.add("list")
                
                projectAchievementArrayWithoutEmpty4.forEach((projectAchievement) => {
                    let li = document.createElement("li");
                    li.innerText = projectAchievement;
                    projectAchievementDiv4.appendChild(li);
                  });

                // let realizationOneSecondDiv2 = document.createElement("div")
                // realizationOneSecondDiv2.classList.add("flex-container")
                // let spanRealizationOneSecond2 = document.createElement("span") 
                // spanRealizationOneSecond2.classList.add("fa-solid","fa-circle-dot", "circle")
                // let realizationOneSecondP2 = document.createElement("p")
                // realizationOneSecondP2.textContent = `${el.achievementOne4}`
                // realizationOneSecondDiv2.append(spanRealizationOneSecond2, realizationOneSecondP2)

                // let realizationTwoSecondDiv2 = document.createElement("div")
                // realizationTwoSecondDiv2.classList.add("flex-container")
                // let spanRealizationTwoSecond2 = document.createElement("span") 
                // spanRealizationTwoSecond2.classList.add("fa-solid","fa-circle-dot", "circle")
                // let realizationTwoSecondP2 = document.createElement("p")
                // realizationTwoSecondP2.textContent = `${el.achievementTwo4}`
                // realizationTwoSecondDiv2.append(spanRealizationTwoSecond2, realizationTwoSecondP2)

                // let realizationThreeSecondDiv2 = document.createElement("div")
                // realizationThreeSecondDiv2.classList.add("flex-container")
                // let spanRealizationThreeSecond2 = document.createElement("span") 
                // spanRealizationThreeSecond2.classList.add("fa-solid","fa-circle-dot", "circle")
                // let realizationThreeSecondP2 = document.createElement("p")
                // realizationThreeSecondP2.textContent = `${el.achievementThree4}`
                // realizationThreeSecondDiv2.append(spanRealizationThreeSecond2, realizationThreeSecondP2)

                let projectNewLine3 = document.createElement("br")

                projectSubDiv3.append(projectsDetailSecondDiv2, projectsLocationSecondDiv2, projectAchievementDiv4, projectNewLine3)
                        
                    // realizationOneSecondDiv2, realizationTwoSecondDiv2, realizationThreeSecondDiv2, projectNewLine3)

                        if(el.role4.length === 0){
                            projectSubDiv3.style.display = "none"
                        }else{
                            projectSubDiv3.style.display = "block"
                        }
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
techWorkDiv.append(techWorkHeaderDiv)

// ========================= FIRST TECHNICAL WORK ===============================
    if(el.workType_1 === "IT") {    
 
        // let techWorkNewLine1 = document.createElement("br")
        let techworkWrapper1 = document.createElement("div")
        techWorkDiv.append(techworkWrapper1)
        let techFirstRowOneDiv1 = document.createElement("div")
        techFirstRowOneDiv1.classList.add("flex-container")
        let techFirstRowOneLeftDiv1 = document.createElement("div")
        techFirstRowOneLeftDiv1.classList.add("left-row")
        let techFirstRowOneLeftP1 =document.createElement("p")
        techFirstRowOneLeftP1.classList.add("text-bold")
        techFirstRowOneLeftP1.textContent = `${el.companyName_1}`
        techFirstRowOneLeftDiv1.append(techFirstRowOneLeftP1)

        let techFirstRowOneRightDiv1 = document.createElement("div")
        techFirstRowOneRightDiv1.classList.add("right-row")
        let techFirstRowOneRightP1 =document.createElement("p")
        techFirstRowOneRightP1.classList.add("text-bold")
        techFirstRowOneRightP1.textContent = ` ${el.companyCity_1}, ${el.companyState_1}`
        techFirstRowOneRightDiv1.append(techFirstRowOneRightP1)

        let techFirstRowTwoDiv1 = document.createElement("div")
        techFirstRowTwoDiv1.classList.add("flex-container")
        let techFirstRowTwoLeftDiv1 = document.createElement("div")
        techFirstRowTwoLeftDiv1.classList.add("left-row")
        let techFirstRowTwoLeftP1 =document.createElement("p")
        techFirstRowTwoLeftP1.classList.add("left-row")
        techFirstRowTwoLeftP1.textContent = `${el.jobRole_1}`
        techFirstRowTwoDiv1.append(techFirstRowTwoLeftP1)

        let techFirstRowTwoRightDiv1 = document.createElement("div")
        techFirstRowTwoRightDiv1.classList.add("right-row")
        let techFirstRowTwoRightP1 =document.createElement("p")
        techFirstRowTwoRightP1.classList.add("right-row")
        techFirstRowTwoRightP1.textContent = `${el.workStartMonth_1} ${el.workStart_year_1} ${el.workEndMonth_1} ${el.workEndYear_1}`
        techFirstRowTwoRightDiv1.append(techFirstRowTwoRightP1)

        let achievementArray1 = [el.workAchiev1_1, el.workAchiev2_1, el.workAchiev3_1, el.workAchiev4_1, el.workAchiev5_1, el.workAchiev6_1, el.workAchiev7_1, el.workAchiev8_1, el.workAchiev9_1, el.workAchiev10_1]

        const achievementArrayWithoutEmpty1 = achievementArray1.filter(function (el) {
            return el != "";
          });

        let techWorkAchievementDiv1 = document.createElement("div")
        techWorkAchievementDiv1.classList.add("list")

        achievementArrayWithoutEmpty1.forEach((workAchievement) => {
            let li = document.createElement("li");
            li.innerText = workAchievement;
            techWorkAchievementDiv1.appendChild(li);
          });

          

        techFirstRowOneDiv1.append(techFirstRowOneLeftDiv1, techFirstRowOneRightDiv1)
        techFirstRowTwoDiv1.append(techFirstRowTwoLeftDiv1, techFirstRowTwoRightDiv1)

        techworkWrapper1.append( techFirstRowOneDiv1, techFirstRowTwoDiv1, techWorkAchievementDiv1  )
    }


// =================  SECOND TECHNICAL WORK EXPERIENCE ============================

if(el.workType_2 === "IT") {    

    let techworkWrapper2 = document.createElement("div") 
    let techWorkNewLine2 = document.createElement("br")   
    
    let techFirstRowOneDiv2 = document.createElement("div")
    techFirstRowOneDiv2.classList.add("flex-container")
    let techFirstRowOneLeftDiv2 = document.createElement("div")
    techFirstRowOneLeftDiv2.classList.add("left-row")
    let techFirstRowOneLeftP2 =document.createElement("p")
    techFirstRowOneLeftP2.classList.add("text-bold")
    techFirstRowOneLeftP2.textContent = `${el.companyName_2}`
    techFirstRowOneLeftDiv2.append(techFirstRowOneLeftP2)

    let techFirstRowOneRightDiv2 = document.createElement("div")
    techFirstRowOneRightDiv2.classList.add("right-row")
    let techFirstRowOneRightP2 =document.createElement("p")
    techFirstRowOneRightP2.classList.add("text-bold")
    techFirstRowOneRightP2.textContent = ` ${el.companyCity_2}, ${el.companyState_2}`
    techFirstRowOneRightDiv2.append(techFirstRowOneRightP2)

    let techFirstRowTwoDiv2 = document.createElement("div")
    techFirstRowTwoDiv2.classList.add("flex-container")
    let techFirstRowTwoLeftDiv2 = document.createElement("div")
    techFirstRowTwoLeftDiv2.classList.add("left-row")
    let techFirstRowTwoLeftP2 =document.createElement("p")
    techFirstRowTwoLeftP2.classList.add("left-row")
    techFirstRowTwoLeftP2.textContent = `${el.jobRole_2}`
    techFirstRowTwoDiv2.append(techFirstRowTwoLeftP2)

    let techFirstRowTwoRightDiv2 = document.createElement("div")
    techFirstRowTwoRightDiv2.classList.add("right-row")
    let techFirstRowTwoRightP2 =document.createElement("p")
    techFirstRowTwoRightP2.textContent = `${el.workStartMonth_2} ${el.workStart_year_2} ${el.workEndMonth_2} ${el.workEndYear_2}`
    techFirstRowTwoRightDiv2.append(techFirstRowTwoRightP2)

    let achievementArray2 = [el.workAchiev1_2, el.workAchiev2_2, el.workAchiev3_2, el.workAchiev4_2, el.workAchiev5_2, el.workAchiev6_2, el.workAchiev7_2, el.workAchiev8_2, el.workAchiev9_2, el.workAchiev10_2]

    const achievementArrayWithoutEmpty2 = achievementArray2.filter(function (el) {
        return el != "";
      });

    let techWorkAchievementDiv2 = document.createElement("div")
    techWorkAchievementDiv2.classList.add("list")
    
    achievementArrayWithoutEmpty2.forEach((workAchievement) => {
        let li = document.createElement("li");
        li.innerText = workAchievement;
        techWorkAchievementDiv2.appendChild(li);
      });

    
        
    // let techWorkRealizationOneFirstDiv1_2 = document.createElement("div")
    // techWorkRealizationOneFirstDiv1_2.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst1_2 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst1_2.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP1_2 = document.createElement("p")
    // techWorkRealizationOneFirstP1_2.textContent = `${el.workAchiev1_2}`
    // techWorkRealizationOneFirstDiv1_2.append(spanTechWorkRealizationOneFirst1_2, techWorkRealizationOneFirstP1_2)

    // let techWorkRealizationOneFirstDiv2_2 = document.createElement("div")
    // techWorkRealizationOneFirstDiv2_2.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst2_2 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst2_2.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP2_2 = document.createElement("p")
    // techWorkRealizationOneFirstP2_2.textContent = `${el.workAchiev2_2}`
    // techWorkRealizationOneFirstDiv2_2.append(spanTechWorkRealizationOneFirst2_2, techWorkRealizationOneFirstP2_2)

    // let techWorkRealizationOneFirstDiv3_2 = document.createElement("div")
    // techWorkRealizationOneFirstDiv3_2.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst3_2 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst3_2.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP3_2 = document.createElement("p")
    // techWorkRealizationOneFirstP3_2.textContent = `${el.workAchiev3_2}`
    // techWorkRealizationOneFirstDiv3_2.append(spanTechWorkRealizationOneFirst3_2, techWorkRealizationOneFirstP3_2)

    // let techWorkRealizationOneFirstDiv4_2 = document.createElement("div")
    // techWorkRealizationOneFirstDiv4_2.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst4_2 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst4_2.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP4_2 = document.createElement("p")
    // techWorkRealizationOneFirstP4_2.textContent = `${el.workAchiev4_2}`
    // techWorkRealizationOneFirstDiv4_2.append(spanTechWorkRealizationOneFirst4_2, techWorkRealizationOneFirstP4_2)

    // let techWorkRealizationOneFirstDiv5_2 = document.createElement("div")
    // techWorkRealizationOneFirstDiv5_2.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst5_2 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst5_2.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP5_2 = document.createElement("p")
    // techWorkRealizationOneFirstP5_2.textContent = `${el.workAchiev5_2}`
    // techWorkRealizationOneFirstDiv5_2.append(spanTechWorkRealizationOneFirst5_2, techWorkRealizationOneFirstP5_2)

    // let techWorkRealizationOneFirstDiv6_2 = document.createElement("div")
    // techWorkRealizationOneFirstDiv6_2.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst6_2 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst6_2.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP6_2 = document.createElement("p")
    // techWorkRealizationOneFirstP6_2.textContent = `${el.workAchiev6_2}`
    // techWorkRealizationOneFirstDiv6_2.append(spanTechWorkRealizationOneFirst6_2, techWorkRealizationOneFirstP6_2)

    // let techWorkRealizationOneFirstDiv7_2 = document.createElement("div")
    // techWorkRealizationOneFirstDiv7_2.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst7_2 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst7_2.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP7_2 = document.createElement("p")
    // techWorkRealizationOneFirstP7_2.textContent = `${el.workAchiev7_2}`
    // techWorkRealizationOneFirstDiv7_2.append(spanTechWorkRealizationOneFirst7_2, techWorkRealizationOneFirstP7_2)

    // let techWorkRealizationOneFirstDiv8_2 = document.createElement("div")
    // techWorkRealizationOneFirstDiv8_2.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst8_2 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst8_2.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP8_2 = document.createElement("p")
    // techWorkRealizationOneFirstP8_2.textContent = `${el.workAchiev8_2}`
    // techWorkRealizationOneFirstDiv8_2.append(spanTechWorkRealizationOneFirst8_2, techWorkRealizationOneFirstP8_2)

    // let techWorkRealizationOneFirstDiv9_2 = document.createElement("div")
    // techWorkRealizationOneFirstDiv9_2.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst9_2 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst9_2.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP9_2 = document.createElement("p")
    // techWorkRealizationOneFirstP9_2.textContent = `${el.workAchiev9_2}`
    // techWorkRealizationOneFirstDiv9_2.append(spanTechWorkRealizationOneFirst9_2, techWorkRealizationOneFirstP9_2)

    // let techWorkRealizationOneFirstDiv10_2 = document.createElement("div")
    // techWorkRealizationOneFirstDiv10_2.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst10_2 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst10_2.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP10_2 = document.createElement("p")
    // techWorkRealizationOneFirstP10_2.textContent = `${el.workAchiev10_2}`
    // techWorkRealizationOneFirstDiv10_2.append(spanTechWorkRealizationOneFirst10_2, techWorkRealizationOneFirstP10_2)

    techFirstRowOneDiv2.append(techFirstRowOneLeftDiv2, techFirstRowOneRightDiv2)
    techFirstRowTwoDiv2.append(techFirstRowTwoLeftDiv2, techFirstRowTwoRightDiv2)

    techworkWrapper2.append(techWorkNewLine2, techFirstRowOneDiv2, techFirstRowTwoDiv2, techWorkAchievementDiv2
        
        // ,techWorkRealizationOneFirstDiv1_2, techWorkRealizationOneFirstDiv2_2, techWorkRealizationOneFirstDiv3_2, techWorkRealizationOneFirstDiv4_2, techWorkRealizationOneFirstDiv5_2, techWorkRealizationOneFirstDiv6_2, techWorkRealizationOneFirstDiv7_2, techWorkRealizationOneFirstDiv8_2, techWorkRealizationOneFirstDiv9_2, techWorkRealizationOneFirstDiv10_2
        )


    
    if(el.companyName_2.length === 0){
        techworkWrapper2.style.display = "none"
    }else{
        techworkWrapper2.style.display = "block"
    }
}

// =================  THIRD TECHNICAL WORK EXPERIENCE ============================

if(el.workType_3 === "IT") {    
 
    let techworkWrapper3 = document.createElement("div")
    let techWorkNewLine3 = document.createElement("br")

        let techFirstRowOneDiv3 = document.createElement("div")
        techFirstRowOneDiv3.classList.add("flex-container")
        let techFirstRowOneLeftDiv3 = document.createElement("div")
        techFirstRowOneLeftDiv3.classList.add("left-row")
        let techFirstRowOneLeftP3 =document.createElement("p")
        techFirstRowOneLeftP3.classList.add("text-bold")
        techFirstRowOneLeftP3.textContent = `${el.companyName_3}`
        techFirstRowOneLeftDiv3.append(techFirstRowOneLeftP3)
    
        let techFirstRowOneRightDiv3 = document.createElement("div")
        techFirstRowOneRightDiv3.classList.add("right-row")
        let techFirstRowOneRightP3 =document.createElement("p")
        techFirstRowOneRightP3.classList.add("text-bold")
        techFirstRowOneRightP3.textContent = ` ${el.companyCity_3}, ${el.companyState_3}`
        techFirstRowOneRightDiv3.append(techFirstRowOneRightP3)
    
        let techFirstRowTwoDiv3 = document.createElement("div")
        techFirstRowTwoDiv3.classList.add("flex-container")
        let techFirstRowTwoLeftDiv3 = document.createElement("div")
        techFirstRowTwoLeftDiv3.classList.add("left-row")
        let techFirstRowTwoLeftP3 =document.createElement("p")
        techFirstRowTwoLeftP3.textContent = `${el.jobRole_3}`
        techFirstRowTwoDiv3.append(techFirstRowTwoLeftP3)
    
        let techFirstRowTwoRightDiv3 = document.createElement("div")
        techFirstRowTwoRightDiv3.classList.add("right-row")
        let techFirstRowTwoRightP3 =document.createElement("p")
        techFirstRowTwoRightP3.textContent = `${el.workStartMonth_3} ${el.workStart_year_3} ${el.workEndMonth_3} ${el.workEndYear_3}`
        techFirstRowTwoRightDiv3.append(techFirstRowTwoRightP3)


    
    let achievementArray3 = [el.workAchiev1_3, el.workAchiev2_3, el.workAchiev3_3, el.workAchiev4_3, el.workAchiev5_3, el.workAchiev6_3, el.workAchiev7_3, el.workAchiev8_3, el.workAchiev9_3, el.workAchiev10_3]

    const achievementArrayWithoutEmpty3 = achievementArray3.filter(function (el) {
        return el != "";
      });

    let techWorkAchievementDiv3 = document.createElement("div")
    techWorkAchievementDiv3.classList.add("list")
    
    achievementArrayWithoutEmpty3.forEach((workAchievement) => {
        let li = document.createElement("li");
        li.innerText = workAchievement;
        techWorkAchievementDiv3.appendChild(li);
      });

        
    // let techWorkRealizationOneFirstDiv1_3 = document.createElement("div")
    // techWorkRealizationOneFirstDiv1_3.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst1_3 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst1_3.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP1_3 = document.createElement("p")
    // techWorkRealizationOneFirstP1_3.textContent = `${el.workAchiev1_3}`
    // techWorkRealizationOneFirstDiv1_3.append(spanTechWorkRealizationOneFirst1_3, techWorkRealizationOneFirstP1_3)

    // let techWorkRealizationOneFirstDiv2_3 = document.createElement("div")
    // techWorkRealizationOneFirstDiv2_3.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst2_3 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst2_3.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP2_3 = document.createElement("p")
    // techWorkRealizationOneFirstP2_3.textContent = `${el.workAchiev2_3}`
    // techWorkRealizationOneFirstDiv2_3.append(spanTechWorkRealizationOneFirst2_3, techWorkRealizationOneFirstP2_3)

    // let techWorkRealizationOneFirstDiv3_3 = document.createElement("div")
    // techWorkRealizationOneFirstDiv3_3.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst3_3 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst3_3.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP3_3 = document.createElement("p")
    // techWorkRealizationOneFirstP3_3.textContent = `${el.workAchiev3_3}`
    // techWorkRealizationOneFirstDiv3_3.append(spanTechWorkRealizationOneFirst3_3, techWorkRealizationOneFirstP3_3)

    // let techWorkRealizationOneFirstDiv4_3 = document.createElement("div")
    // techWorkRealizationOneFirstDiv4_3.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst4_3 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst4_3.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP4_3 = document.createElement("p")
    // techWorkRealizationOneFirstP4_3.textContent = `${el.workAchiev4_3}`
    // techWorkRealizationOneFirstDiv4_3.append(spanTechWorkRealizationOneFirst4_3, techWorkRealizationOneFirstP4_3)

    // let techWorkRealizationOneFirstDiv5_3 = document.createElement("div")
    // techWorkRealizationOneFirstDiv5_3.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst5_3 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst5_3.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP5_3 = document.createElement("p")
    // techWorkRealizationOneFirstP5_3.textContent = `${el.workAchiev5_3}`
    // techWorkRealizationOneFirstDiv5_3.append(spanTechWorkRealizationOneFirst5_3, techWorkRealizationOneFirstP5_3)

    // let techWorkRealizationOneFirstDiv6_3 = document.createElement("div")
    // techWorkRealizationOneFirstDiv6_3.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst6_3 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst6_3.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP6_3 = document.createElement("p")
    // techWorkRealizationOneFirstP6_3.textContent = `${el.workAchiev6_3}`
    // techWorkRealizationOneFirstDiv6_3.append(spanTechWorkRealizationOneFirst6_3, techWorkRealizationOneFirstP6_3)

    // let techWorkRealizationOneFirstDiv7_3 = document.createElement("div")
    // techWorkRealizationOneFirstDiv7_3.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst7_3 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst7_3.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP7_3 = document.createElement("p")
    // techWorkRealizationOneFirstP7_3.textContent = `${el.workAchiev7_3}`
    // techWorkRealizationOneFirstDiv7_3.append(spanTechWorkRealizationOneFirst7_3, techWorkRealizationOneFirstP7_3)

    // let techWorkRealizationOneFirstDiv8_3 = document.createElement("div")
    // techWorkRealizationOneFirstDiv8_3.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst8_3 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst8_3.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP8_3 = document.createElement("p")
    // techWorkRealizationOneFirstP8_3.textContent = `${el.workAchiev8_3}`
    // techWorkRealizationOneFirstDiv8_3.append(spanTechWorkRealizationOneFirst8_3, techWorkRealizationOneFirstP8_3)

    // let techWorkRealizationOneFirstDiv9_3 = document.createElement("div")
    // techWorkRealizationOneFirstDiv9_3.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst9_3 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst9_3.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP9_3 = document.createElement("p")
    // techWorkRealizationOneFirstP9_3.textContent = `${el.workAchiev9_3}`
    // techWorkRealizationOneFirstDiv9_3.append(spanTechWorkRealizationOneFirst9_3, techWorkRealizationOneFirstP9_3)

    // let techWorkRealizationOneFirstDiv10_3 = document.createElement("div")
    // techWorkRealizationOneFirstDiv10_3.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst10_3 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst10_3.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP10_3 = document.createElement("p")
    // techWorkRealizationOneFirstP10_3.textContent = `${el.workAchiev10_3}`
    // techWorkRealizationOneFirstDiv10_3.append(spanTechWorkRealizationOneFirst10_3, techWorkRealizationOneFirstP10_3)

    techFirstRowOneDiv3.append(techFirstRowOneLeftDiv3, techFirstRowOneRightDiv3)
    techFirstRowTwoDiv3.append(techFirstRowTwoLeftDiv3, techFirstRowTwoRightDiv3)

    techworkWrapper3.append(techWorkNewLine3, techFirstRowOneDiv3, techFirstRowTwoDiv3, techWorkAchievementDiv3 
        
        // ,techWorkRealizationOneFirstDiv1_3, techWorkRealizationOneFirstDiv2_3, techWorkRealizationOneFirstDiv3_3, techWorkRealizationOneFirstDiv4_3, techWorkRealizationOneFirstDiv5_3, techWorkRealizationOneFirstDiv6_3, techWorkRealizationOneFirstDiv7_3, techWorkRealizationOneFirstDiv8_3, techWorkRealizationOneFirstDiv9_3, techWorkRealizationOneFirstDiv10_3
        )

    if(el.companyName_3.length === 0){
        techworkWrapper3.style.display = "none"
    }else{
        techworkWrapper3.style.display = "block"
    }

}




// =================  FOURTH TECHNICAL WORK EXPERIENCE ============================

if(el.workType_4 === "IT") {    
 
    let techworkWrapper4 = document.createElement("div")
    let techWorkNewLine4 = document.createElement("br")

        let techFirstRowOneDiv4 = document.createElement("div")
        techFirstRowOneDiv4.classList.add("flex-container")
        let techFirstRowOneLeftDiv4 = document.createElement("div")
        techFirstRowOneLeftDiv4.classList.add("left-row")
        let techFirstRowOneLeftP4 =document.createElement("p")
        techFirstRowOneLeftP4.classList.add("text-bold")
        techFirstRowOneLeftP4.textContent = `${el.companyName_4}`
        techFirstRowOneLeftDiv4.append(techFirstRowOneLeftP4)
    
        let techFirstRowOneRightDiv4 = document.createElement("div")
        techFirstRowOneRightDiv4.classList.add("right-row")
        let techFirstRowOneRightP4 =document.createElement("p")
        techFirstRowOneRightP4.classList.add("text-bold")
        techFirstRowOneRightP4.textContent = ` ${el.companyCity_4}, ${el.companyState_4}`
        techFirstRowOneRightDiv4.append(techFirstRowOneRightP4)
    
        let techFirstRowTwoDiv4 = document.createElement("div")
        techFirstRowTwoDiv4.classList.add("flex-container")
        let techFirstRowTwoLeftDiv4 = document.createElement("div")
        techFirstRowTwoLeftDiv4.classList.add("left-row")
        let techFirstRowTwoLeftP4 =document.createElement("p")
        techFirstRowTwoLeftP4.textContent = `${el.jobRole_4}`
        techFirstRowTwoDiv4.append(techFirstRowTwoLeftP4)
    
        let techFirstRowTwoRightDiv4 = document.createElement("div")
        techFirstRowTwoRightDiv4.classList.add("right-row")
        let techFirstRowTwoRightP4 =document.createElement("p")
        techFirstRowTwoRightP4.textContent = `${el.workStartMonth_4} ${el.workStart_year_4} - ${el.workEndMonth_4} ${el.workEndYear_4}`
        techFirstRowTwoRightDiv4.append(techFirstRowTwoRightP4)
    
   

let achievementArray4 = [el.workAchiev1_4, el.workAchiev2_4, el.workAchiev3_4, el.workAchiev4_4, el.workAchiev5_4, el.workAchiev6_4, el.workAchiev7_4, el.workAchiev8_4, el.workAchiev9_4, el.workAchiev10_4]

const achievementArrayWithoutEmpty4 = achievementArray4.filter(function (el) {
    return el != "";
  });

let techWorkAchievementDiv4 = document.createElement("div")
techWorkAchievementDiv4.classList.add("list")

achievementArrayWithoutEmpty4.forEach((workAchievement) => {
    let li = document.createElement("li");
    li.innerText = workAchievement;
    techWorkAchievementDiv4.appendChild(li);
  });



    // let techWorkRealizationOneFirstDiv1_4 = document.createElement("div")
    // techWorkRealizationOneFirstDiv1_4.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst1_4 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst1_4.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP1_4 = document.createElement("p")
    // techWorkRealizationOneFirstP1_4.textContent = `${el.workAchiev1_1}`
    // techWorkRealizationOneFirstDiv1_4.append(spanTechWorkRealizationOneFirst1_3, techWorkRealizationOneFirstP1_3)

    // let techWorkRealizationOneFirstDiv2_4 = document.createElement("div")
    // techWorkRealizationOneFirstDiv2_4.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst2_4 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst2_4.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP2_4 = document.createElement("p")
    // techWorkRealizationOneFirstP2_4.textContent = `${el.workAchiev2_1}`
    // techWorkRealizationOneFirstDiv2_4.append(spanTechWorkRealizationOneFirst2_4, techWorkRealizationOneFirstP2_4)

    // let techWorkRealizationOneFirstDiv3_4 = document.createElement("div")
    // techWorkRealizationOneFirstDiv3_4.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst3_4 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst3_4.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP3_4 = document.createElement("p")
    // techWorkRealizationOneFirstP3_4.textContent = `${el.workAchiev3_1}`
    // techWorkRealizationOneFirstDiv3_4.append(spanTechWorkRealizationOneFirst3_4, techWorkRealizationOneFirstP3_4)

    // let techWorkRealizationOneFirstDiv4_4 = document.createElement("div")
    // techWorkRealizationOneFirstDiv4_4.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst4_4 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst4_4.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP4_4 = document.createElement("p")
    // techWorkRealizationOneFirstP4_4.textContent = `${el.workAchiev4_1}`
    // techWorkRealizationOneFirstDiv4_4.append(spanTechWorkRealizationOneFirst4_4, techWorkRealizationOneFirstP4_4)

    // let techWorkRealizationOneFirstDiv5_4 = document.createElement("div")
    // techWorkRealizationOneFirstDiv5_4.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst5_4 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst5_4.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP5_4 = document.createElement("p")
    // techWorkRealizationOneFirstP5_4.textContent = `${el.workAchiev5_1}`
    // techWorkRealizationOneFirstDiv5_4.append(spanTechWorkRealizationOneFirst5_4, techWorkRealizationOneFirstP5_4)

    // let techWorkRealizationOneFirstDiv6_4 = document.createElement("div")
    // techWorkRealizationOneFirstDiv6_4.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst6_4 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst6_4.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP6_4 = document.createElement("p")
    // techWorkRealizationOneFirstP6_4.textContent = `${el.workAchiev6_1}`
    // techWorkRealizationOneFirstDiv6_4.append(spanTechWorkRealizationOneFirst6_4, techWorkRealizationOneFirstP6_4)

    // let techWorkRealizationOneFirstDiv7_4 = document.createElement("div")
    // techWorkRealizationOneFirstDiv7_4.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst7_4 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst7_4.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP7_4 = document.createElement("p")
    // techWorkRealizationOneFirstP7_4.textContent = `${el.workAchiev7_1}`
    // techWorkRealizationOneFirstDiv7_4.append(spanTechWorkRealizationOneFirst7_4, techWorkRealizationOneFirstP7_4)

    // let techWorkRealizationOneFirstDiv8_4 = document.createElement("div")
    // techWorkRealizationOneFirstDiv8_4.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst8_4 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst8_4.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP8_4 = document.createElement("p")
    // techWorkRealizationOneFirstP8_4.textContent = `${el.workAchiev8_1}`
    // techWorkRealizationOneFirstDiv8_4.append(spanTechWorkRealizationOneFirst8_4, techWorkRealizationOneFirstP8_4)

    // let techWorkRealizationOneFirstDiv9_4 = document.createElement("div")
    // techWorkRealizationOneFirstDiv9_4.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst9_4 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst9_4.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP9_4 = document.createElement("p")
    // techWorkRealizationOneFirstP9_4.textContent = `${el.workAchiev9_1}`
    // techWorkRealizationOneFirstDiv9_4.append(spanTechWorkRealizationOneFirst9_4, techWorkRealizationOneFirstP9_4)

    // let techWorkRealizationOneFirstDiv10_4 = document.createElement("div")
    // techWorkRealizationOneFirstDiv10_4.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst10_4 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst10_4.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP10_4 = document.createElement("p")
    // techWorkRealizationOneFirstP10_4.textContent = `${el.workAchiev10_1}`
    // techWorkRealizationOneFirstDiv10_4.append(spanTechWorkRealizationOneFirst10_4, techWorkRealizationOneFirstP10_4)

    techFirstRowOneDiv4.append(techFirstRowOneLeftDiv4, techFirstRowOneRightDiv4)
    techFirstRowTwoDiv4.append(techFirstRowTwoLeftDiv4, techFirstRowTwoRightDiv4)

    techworkWrapper4.append(techWorkNewLine4, techFirstRowOneDiv4, techFirstRowTwoDiv4,techWorkAchievementDiv4 
        
        // ,techWorkRealizationOneFirstDiv1_4, techWorkRealizationOneFirstDiv2_4, techWorkRealizationOneFirstDiv3_4, techWorkRealizationOneFirstDiv4_4, techWorkRealizationOneFirstDiv5_4, techWorkRealizationOneFirstDiv6_4, techWorkRealizationOneFirstDiv7_4, techWorkRealizationOneFirstDiv8_4, techWorkRealizationOneFirstDiv9_4, techWorkRealizationOneFirstDiv10_4
        )

    if(el.companyName_3.length === 0){
        techworkWrapper3.style.display = "none"
    }else{
        techworkWrapper3.style.display = "block"
    }
}


resumeDiv.append(techWorkDiv)


// ======================Technical work Experience : END=================================
//================== Other Work experience : Begin ===============================

            let otherWorkDiv = document.createElement("div") // main container
            let workHeaderDiv = document.createElement("div")
            let workHeaderP = document.createElement("p")
            workHeaderP.classList.add("headerSection", "text-bold", 'top-margin')
            workHeaderP.textContent = "OTHER WORK EXPERIENCE"
            workHeaderDiv.append(workHeaderP)
            otherWorkDiv.append(workHeaderDiv)
        
// ========================= FIRST NON TECHNICAL WORK ===============================
if(el.workType_1 === "Other") {    
 
    // let techWorkNewLine1 = document.createElement("br")
    let otherWorkWrapper1 = document.createElement("div")
    otherWorkDiv.append(otherWorkWrapper1)
    let otherTechFirstRowOneDiv1 = document.createElement("div")
    otherTechFirstRowOneDiv1.classList.add("flex-container")
    let otherTechFirstRowOneLeftDiv1 = document.createElement("div")
    otherTechFirstRowOneLeftDiv1.classList.add("left-row")
    let otherTechFirstRowOneLeftP1 =document.createElement("p")
    otherTechFirstRowOneLeftP1.classList.add("text-bold")
    otherTechFirstRowOneLeftP1.textContent = `${el.companyName_1}`
    otherTechFirstRowOneLeftDiv1.append(otherTechFirstRowOneLeftP1)

    let otherTechFirstRowOneRightDiv1 = document.createElement("div")
    otherTechFirstRowOneRightDiv1.classList.add("right-row")
    let otherTechFirstRowOneRightP1 =document.createElement("p")
    otherTechFirstRowOneRightP1.classList.add("text-bold")
    otherTechFirstRowOneRightP1.textContent = ` ${el.companyCity_1}, ${el.companyState_1}`
    otherTechFirstRowOneRightDiv1.append(otherTechFirstRowOneRightP1)

    let otherTechFirstRowTwoDiv1 = document.createElement("div")
    otherTechFirstRowTwoDiv1.classList.add("flex-container")
    let otherTechFirstRowTwoLeftDiv1 = document.createElement("div")
    otherTechFirstRowTwoLeftDiv1.classList.add("left-row")
    let otherTechFirstRowTwoLeftP1 =document.createElement("p")
    otherTechFirstRowTwoLeftP1.classList.add("left-row")
    otherTechFirstRowTwoLeftP1.textContent = `${el.jobRole_1}`
    otherTechFirstRowTwoDiv1.append(techFirstRowTwoLeftP1)

    let otherTechFirstRowTwoRightDiv1 = document.createElement("div")
    otherTechFirstRowTwoRightDiv1.classList.add("right-row")
    let otherTechFirstRowTwoRightP1 =document.createElement("p")
    firstRowTwoRightP.classList.add("right-row")
    otherTechFirstRowTwoRightP1.textContent = `${el.workStartMonth_1} ${el.workStart_year_1} ${el.workEndMonth_1} ${el.workEndYear_1}`
    otherTechFirstRowTwoRightDiv1.append(otherTechFirstRowTwoRightP1)

    let otherAchievementArray1 = [el.workAchiev1_1, el.workAchiev2_1, el.workAchiev3_1, el.workAchiev4_1, el.workAchiev5_1, el.workAchiev6_1, el.workAchiev7_1, el.workAchiev8_1, el.workAchiev9_1, el.workAchiev10_1]

const otherAchievementArrayWithoutEmpty1 = otherAchievementArray1.filter(function (el) {
    return el != "";
  });

let otherWorkAchievementDiv1 = document.createElement("div")
otherWorkAchievementDiv1.classList.add("list")

otherAchievementArrayWithoutEmpty1.forEach((workAchievement) => {
    let li = document.createElement("li");
    li.innerText = workAchievement;
    otherWorkAchievementDiv1.appendChild(li);
  });
    
    
    // let otherTechWorkRealizationOneFirstDiv1_1 = document.createElement("div")
    // otherTechWorkRealizationOneFirstDiv1_1.classList.add("flex-container")
    // let otherSpanTechWorkRealizationOneFirst1_1 = document.createElement("span") 
    // otherSpanTechWorkRealizationOneFirst1_1.classList.add("fa-solid","fa-circle-dot", "circle")
    // let otherTechWorkRealizationOneFirstP1_1 = document.createElement("p")
    // otherTechWorkRealizationOneFirstP1_1.textContent = `${el.workAchiev1_1}`
    // otherTechWorkRealizationOneFirstDiv1_1.append(otherSpanTechWorkRealizationOneFirst1_1, otherSechWorkRealizationOneFirstP1_1)

    // let otherTechWorkRealizationOneFirstDiv2_1 = document.createElement("div")
    // otherTechWorkRealizationOneFirstDiv2_1.classList.add("flex-container")
    // let otherSpanTechWorkRealizationOneFirst2_1 = document.createElement("span") 
    // otherSpanTechWorkRealizationOneFirst2_1.classList.add("fa-solid","fa-circle-dot", "circle")
    // let otherTechWorkRealizationOneFirstP2_1 = document.createElement("p")
    // otherTechWorkRealizationOneFirstP2_1.textContent = `${el.workAchiev2_1}`
    // otherTechWorkRealizationOneFirstDiv2_1.append(otherSpanTechWorkRealizationOneFirst2_1, otherTechWorkRealizationOneFirstP2_1)

    // let otherTechWorkRealizationOneFirstDiv3_1 = document.createElement("div")
    // otherTechWorkRealizationOneFirstDiv3_1.classList.add("flex-container")
    // let otherSpanTechWorkRealizationOneFirst3_1 = document.createElement("span") 
    // otherSpanTechWorkRealizationOneFirst3_1.classList.add("fa-solid","fa-circle-dot", "circle")
    // let otherTechWorkRealizationOneFirstP3_1 = document.createElement("p")
    // otherTechWorkRealizationOneFirstP3_1.textContent = `${el.workAchiev3_1}`
    // otherTechWorkRealizationOneFirstDiv3_1.append(otherSpanTechWorkRealizationOneFirst3_1, otherTechWorkRealizationOneFirstP3_1)

    // let otherTechWorkRealizationOneFirstDiv4_1 = document.createElement("div")
    // otherTechWorkRealizationOneFirstDiv4_1.classList.add("flex-container")
    // let otherSpanTechWorkRealizationOneFirst4_1 = document.createElement("span") 
    // otherSpanTechWorkRealizationOneFirst4_1.classList.add("fa-solid","fa-circle-dot", "circle")
    // let otherTechWorkRealizationOneFirstP4_1 = document.createElement("p")
    // otherTechWorkRealizationOneFirstP4_1.textContent = `${el.workAchiev4_1}`
    // otherTechWorkRealizationOneFirstDiv4_1.append(otherSpanTechWorkRealizationOneFirst4_1, otherTechWorkRealizationOneFirstP4_1)

    // let techWorkRealizationOneFirstDiv5_1 = document.createElement("div")
    // techWorkRealizationOneFirstDiv5_1.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst5_1 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst5_1.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP5_1 = document.createElement("p")
    // techWorkRealizationOneFirstP5_1.textContent = `${el.workAchiev5_1}`
    // techWorkRealizationOneFirstDiv5_1.append(spanTechWorkRealizationOneFirst5_1, techWorkRealizationOneFirstP5_1)

    // let techWorkRealizationOneFirstDiv6_1 = document.createElement("div")
    // techWorkRealizationOneFirstDiv6_1.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst6_1 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst6_1.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP6_1 = document.createElement("p")
    // techWorkRealizationOneFirstP6_1.textContent = `${el.workAchiev6_1}`
    // techWorkRealizationOneFirstDiv6_1.append(spanTechWorkRealizationOneFirst6_1, techWorkRealizationOneFirstP6_1)

    // let techWorkRealizationOneFirstDiv7_1 = document.createElement("div")
    // techWorkRealizationOneFirstDiv7_1.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst7_1 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst7_1.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP7_1 = document.createElement("p")
    // techWorkRealizationOneFirstP7_1.textContent = `${el.workAchiev7_1}`
    // techWorkRealizationOneFirstDiv7_1.append(spanTechWorkRealizationOneFirst7_1, techWorkRealizationOneFirstP7_1)

    // let techWorkRealizationOneFirstDiv8_1 = document.createElement("div")
    // techWorkRealizationOneFirstDiv8_1.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst8_1 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst8_1.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP8_1 = document.createElement("p")
    // techWorkRealizationOneFirstP8_1.textContent = `${el.workAchiev8_1}`
    // techWorkRealizationOneFirstDiv8_1.append(spanTechWorkRealizationOneFirst8_1, techWorkRealizationOneFirstP8_1)

    // let techWorkRealizationOneFirstDiv9_1 = document.createElement("div")
    // techWorkRealizationOneFirstDiv9_1.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst9_1 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst9_1.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP9_1 = document.createElement("p")
    // techWorkRealizationOneFirstP9_1.textContent = `${el.workAchiev9_1}`
    // techWorkRealizationOneFirstDiv9_1.append(spanTechWorkRealizationOneFirst9_1, techWorkRealizationOneFirstP9_1)

    // let techWorkRealizationOneFirstDiv10_1 = document.createElement("div")
    // techWorkRealizationOneFirstDiv10_1.classList.add("flex-container")
    // let spanTechWorkRealizationOneFirst10_1 = document.createElement("span") 
    // spanTechWorkRealizationOneFirst10_1.classList.add("fa-solid","fa-circle-dot", "circle")
    // let techWorkRealizationOneFirstP10_1 = document.createElement("p")
    // techWorkRealizationOneFirstP10_1.textContent = `${el.workAchiev10_1}`
    // techWorkRealizationOneFirstDiv10_1.append(spanTechWorkRealizationOneFirst10_1, techWorkRealizationOneFirstP10_1)

    otherTechFirstRowOneDiv1.append(otherTechFirstRowOneLeftDiv1, otherTechFirstRowOneRightDiv1)
    otherTechFirstRowTwoDiv1.append(otherTechFirstRowTwoLeftDiv1, otherTechFirstRowTwoRightDiv1)

    otherWorkWrapper1.append( otherTechFirstRowOneDiv1, otherTechFirstRowTwoDiv1, otherWorkAchievementDiv1
        // otherTechWorkRealizationOneFirstDiv1_1, otherTechWorkRealizationOneFirstDiv2_1, otherTechWorkRealizationOneFirstDiv3_1
        // otherTechWorkRealizationOneFirstDiv4_1, otherTechWorkRealizationOneFirstDiv5_1, otherTechWorkRealizationOneFirstDiv6_1, otherTechWorkRealizationOneFirstDiv7_1, otherTechWorkRealizationOneFirstDiv8_1, otherTechWorkRealizationOneFirstDiv9_1, techWorkRealizationOneFirstDiv10_1
        )
}
// resumeDiv.append(otherWorkDiv)

// =================  SECOND NON TECHNICAL WORK EXPERIENCE ============================

if(el.workType_2 === "Other") {    

let otherWorkWrapper2 = document.createElement("div") 
let otherTechWorkNewLine2 = document.createElement("br")   

    let otherTechFirstRowOneDiv2 = document.createElement("div")
    otherTechFirstRowOneDiv2.classList.add("flex-container")
    let otherTechFirstRowOneLeftDiv2 = document.createElement("div")
    otherTechFirstRowOneLeftDiv2.classList.add("left-row")
    let otherTechFirstRowOneLeftP2 =document.createElement("p")
    otherTechFirstRowOneLeftP2.classList.add("text-bold")
    otherTechFirstRowOneLeftP2.textContent = `${el.companyName_2}`
    otherTechFirstRowOneLeftDiv2.append(otherTechFirstRowOneLeftP2)

    let otherTechFirstRowOneRightDiv2 = document.createElement("div")
    otherTechFirstRowOneRightDiv2.classList.add("right-row")
    let otherTechFirstRowOneRightP2 =document.createElement("p")
    otherTechFirstRowOneRightP2.classList.add("text-bold")
    otherTechFirstRowOneRightP2.textContent = ` ${el.companyCity_2}, ${el.companyState_2}`
    otherTechFirstRowOneRightDiv2.append(otherTechFirstRowOneRightP2)

    let otherTechFirstRowTwoDiv2 = document.createElement("div")
    otherTechFirstRowTwoDiv2.classList.add("flex-container")
    let otherTechFirstRowTwoLeftDiv2 = document.createElement("div")
    otherTechFirstRowTwoLeftDiv2.classList.add("left-row")
    let otherTechFirstRowTwoLeftP2 =document.createElement("p")
    otherTechFirstRowTwoLeftP2.classList.add("left-row")
    otherTechFirstRowTwoLeftP2.textContent = `${el.jobRole_2}`
    otherTechFirstRowTwoDiv2.append(otherTechFirstRowTwoLeftP2)

    let otherTechFirstRowTwoRightDiv2 = document.createElement("div")
    otherTechFirstRowTwoRightDiv2.classList.add("right-row")
    let otherTechFirstRowTwoRightP2 =document.createElement("p")
    otherTechFirstRowTwoRightP2.textContent = `${el.workStartMonth_2} ${el.workStart_year_2} ${el.workEndMonth_2} ${el.workEndYear_2}`
otherTechFirstRowTwoRightDiv2.append(otherTechFirstRowTwoRightP2)


let otherAchievementArray2 = [el.workAchiev1_2, el.workAchiev2_2, el.workAchiev3_2, el.workAchiev4_2, el.workAchiev5_2, el.workAchiev6_2, el.workAchiev7_2, el.workAchiev8_2, el.workAchiev9_2, el.workAchiev10_2]

const otherAchievementArrayWithoutEmpty2 = otherAchievementArray2.filter(function (el) {
    return el != "";
  });

let otherWorkAchievementDiv2 = document.createElement("div")
otherWorkAchievementDiv2.classList.add("list")

otherAchievementArrayWithoutEmpty2.forEach((workAchievement) => {
    let li = document.createElement("li");
    li.innerText = workAchievement;
    otherWorkAchievementDiv2.appendChild(li);
  });
    
    
// let otherTechWorkRealizationOneFirstDiv1_2 = document.createElement("div")
// otherTechWorkRealizationOneFirstDiv1_2.classList.add("flex-container")
// let otherSpanTechWorkRealizationOneFirst1_2 = document.createElement("span") 
// otherSpanTechWorkRealizationOneFirst1_2.classList.add("fa-solid","fa-circle-dot", "circle")
// let otherTechWorkRealizationOneFirstP1_2 = document.createElement("p")
// otherTechWorkRealizationOneFirstP1_2.textContent = `${el.workAchiev1_2}`
// otherTechWorkRealizationOneFirstDiv1_2.append(otherSpanTechWorkRealizationOneFirst1_2, otherTechWorkRealizationOneFirstP1_2)

// let otherTechWorkRealizationOneFirstDiv2_2 = document.createElement("div")
// otherTechWorkRealizationOneFirstDiv2_2.classList.add("flex-container")
// let otherSpanTechWorkRealizationOneFirst2_2 = document.createElement("span") 
// otherSpanTechWorkRealizationOneFirst2_2.classList.add("fa-solid","fa-circle-dot", "circle")
// let otherTechWorkRealizationOneFirstP2_2 = document.createElement("p")
// otherTechWorkRealizationOneFirstP2_2.textContent = `${el.workAchiev2_2}`
// otherTechWorkRealizationOneFirstDiv2_2.append(otherSpanTechWorkRealizationOneFirst2_2, otherTechWorkRealizationOneFirstP2_2)

// let otherTechWorkRealizationOneFirstDiv3_2 = document.createElement("div")
// otherTechWorkRealizationOneFirstDiv3_2.classList.add("flex-container")
// let otherSpanTechWorkRealizationOneFirst3_2 = document.createElement("span") 
// otherSpanTechWorkRealizationOneFirst3_2.classList.add("fa-solid","fa-circle-dot", "circle")
// let otherTechWorkRealizationOneFirstP3_2 = document.createElement("p")
// otherTechWorkRealizationOneFirstP3_2.textContent = `${el.workAchiev3_2}`
// otherTechWorkRealizationOneFirstDiv3_2.append(otherSpanTechWorkRealizationOneFirst3_2, otherTechWorkRealizationOneFirstP3_2)

// let techWorkRealizationOneFirstDiv4_2 = document.createElement("div")
// techWorkRealizationOneFirstDiv4_2.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst4_2 = document.createElement("span") 
// spanTechWorkRealizationOneFirst4_2.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP4_2 = document.createElement("p")
// techWorkRealizationOneFirstP4_2.textContent = `${el.workAchiev4_2}`
// techWorkRealizationOneFirstDiv4_2.append(spanTechWorkRealizationOneFirst4_2, techWorkRealizationOneFirstP4_2)

// let techWorkRealizationOneFirstDiv5_2 = document.createElement("div")
// techWorkRealizationOneFirstDiv5_2.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst5_2 = document.createElement("span") 
// spanTechWorkRealizationOneFirst5_2.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP5_2 = document.createElement("p")
// techWorkRealizationOneFirstP5_2.textContent = `${el.workAchiev5_2}`
// techWorkRealizationOneFirstDiv5_2.append(spanTechWorkRealizationOneFirst5_2, techWorkRealizationOneFirstP5_2)

// let techWorkRealizationOneFirstDiv6_2 = document.createElement("div")
// techWorkRealizationOneFirstDiv6_2.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst6_2 = document.createElement("span") 
// spanTechWorkRealizationOneFirst6_2.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP6_2 = document.createElement("p")
// techWorkRealizationOneFirstP6_2.textContent = `${el.workAchiev6_2}`
// techWorkRealizationOneFirstDiv6_2.append(spanTechWorkRealizationOneFirst6_2, techWorkRealizationOneFirstP6_2)

// let techWorkRealizationOneFirstDiv7_2 = document.createElement("div")
// techWorkRealizationOneFirstDiv7_2.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst7_2 = document.createElement("span") 
// spanTechWorkRealizationOneFirst7_2.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP7_2 = document.createElement("p")
// techWorkRealizationOneFirstP7_2.textContent = `${el.workAchiev7_2}`
// techWorkRealizationOneFirstDiv7_2.append(spanTechWorkRealizationOneFirst7_2, techWorkRealizationOneFirstP7_2)

// let techWorkRealizationOneFirstDiv8_2 = document.createElement("div")
// techWorkRealizationOneFirstDiv8_2.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst8_2 = document.createElement("span") 
// spanTechWorkRealizationOneFirst8_2.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP8_2 = document.createElement("p")
// techWorkRealizationOneFirstP8_2.textContent = `${el.workAchiev8_2}`
// techWorkRealizationOneFirstDiv8_2.append(spanTechWorkRealizationOneFirst8_2, techWorkRealizationOneFirstP8_2)

// let techWorkRealizationOneFirstDiv9_2 = document.createElement("div")
// techWorkRealizationOneFirstDiv9_2.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst9_2 = document.createElement("span") 
// spanTechWorkRealizationOneFirst9_2.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP9_2 = document.createElement("p")
// techWorkRealizationOneFirstP9_2.textContent = `${el.workAchiev9_2}`
// techWorkRealizationOneFirstDiv9_2.append(spanTechWorkRealizationOneFirst9_2, techWorkRealizationOneFirstP9_2)

// let techWorkRealizationOneFirstDiv10_2 = document.createElement("div")
// techWorkRealizationOneFirstDiv10_2.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst10_2 = document.createElement("span") 
// spanTechWorkRealizationOneFirst10_2.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP10_2 = document.createElement("p")
// techWorkRealizationOneFirstP10_2.textContent = `${el.workAchiev10_2}`
// techWorkRealizationOneFirstDiv10_2.append(spanTechWorkRealizationOneFirst10_2, techWorkRealizationOneFirstP10_2)

otherTechFirstRowOneDiv2.append(otherTechFirstRowOneLeftDiv2, otherTechFirstRowOneRightDiv2)
otherTechFirstRowTwoDiv2.append(otherTechFirstRowTwoLeftDiv2, otherTechFirstRowTwoRightDiv2)

otherWorkWrapper2.append(otherTechWorkNewLine2, otherTechFirstRowOneDiv2, otherTechFirstRowTwoDiv2, otherWorkAchievementDiv2
    // otherTechWorkRealizationOneFirstDiv1_2, otherTechWorkRealizationOneFirstDiv2_2, otherTechWorkRealizationOneFirstDiv3_2
    // , techWorkRealizationOneFirstDiv4_2, techWorkRealizationOneFirstDiv5_2, techWorkRealizationOneFirstDiv6_2, techWorkRealizationOneFirstDiv7_2, techWorkRealizationOneFirstDiv8_2, techWorkRealizationOneFirstDiv9_2, techWorkRealizationOneFirstDiv10_2
    )

    otherWorkDiv.append(otherWorkWrapper2)

if(el.companyName_2.length === 0){
    otherWorkWrapper2.style.display = "none"
}else{
    otherWorkWrapper2.style.display = "block"
}
}


// =================  THIRD NON TECHNICAL WORK EXPERIENCE ============================

if(el.workType_3 === "Other") {    

let otherWorkWrapper3 = document.createElement("div")
let otherTechWorkNewLine3 = document.createElement("br")

    let otherTechFirstRowOneDiv3 = document.createElement("div")
    otherTechFirstRowOneDiv3.classList.add("flex-container")
    let otherTechFirstRowOneLeftDiv3 = document.createElement("div")
    otherTechFirstRowOneLeftDiv3.classList.add("left-row")
    let otherTechFirstRowOneLeftP3 =document.createElement("p")
    otherTechFirstRowOneLeftP3.classList.add("text-bold")
    otherTechFirstRowOneLeftP3.textContent = `${el.companyName_3}`
    otherTechFirstRowOneLeftDiv3.append(otherTechFirstRowOneLeftP3)

    let otherTechFirstRowOneRightDiv3 = document.createElement("div")
    otherTechFirstRowOneRightDiv3.classList.add("right-row")
    let otherTechFirstRowOneRightP3 =document.createElement("p")
    otherTechFirstRowOneRightP3.classList.add("text-bold")
    otherTechFirstRowOneRightP3.textContent = ` ${el.companyCity_3}, ${el.companyState_3}`
    otherTechFirstRowOneRightDiv3.append(otherTechFirstRowOneRightP3)

    let otherTechFirstRowTwoDiv3 = document.createElement("div")
    otherTechFirstRowTwoDiv3.classList.add("flex-container")
    let otherTechFirstRowTwoLeftDiv3 = document.createElement("div")
    otherTechFirstRowTwoLeftDiv3.classList.add("left-row")
    let otherTechFirstRowTwoLeftP3 =document.createElement("p")
    otherTechFirstRowTwoLeftP3.textContent = `${el.jobRole_3}`
    otherTechFirstRowTwoDiv3.append(otherTechFirstRowTwoLeftP3)

    let otherTechFirstRowTwoRightDiv3 = document.createElement("div")
    otherTechFirstRowTwoRightDiv3.classList.add("right-row")
    let otherTechFirstRowTwoRightP3 =document.createElement("p")
    otherTechFirstRowTwoRightP3.textContent = `${el.workStartMonth_3} ${el.workStart_year_3} ${el.workEndMonth_3} ${el.workEndYear_3}`
    otherTechFirstRowTwoRightDiv3.append(otherTechFirstRowTwoRightP3)


let otherAchievementArray3 = [el.workAchiev1_3, el.workAchiev2_3, el.workAchiev3_3, el.workAchiev4_3, el.workAchiev5_3, el.workAchiev6_3, el.workAchiev7_3, el.workAchiev8_3, el.workAchiev9_3, el.workAchiev10_3]

const otherAchievementArrayWithoutEmpty3 = otherAchievementArray3.filter(function (el) {
    return el != "";
  });

let otherWorkAchievementDiv3 = document.createElement("div")
otherWorkAchievementDiv3.classList.add("list")

otherAchievementArrayWithoutEmpty3.forEach((workAchievement) => {
    let li = document.createElement("li");
    li.innerText = workAchievement;
    otherWorkAchievementDiv3.appendChild(li);
  });
    
// let otherTechWorkRealizationOneFirstDiv1_3 = document.createElement("div")
// otherTechWorkRealizationOneFirstDiv1_3.classList.add("flex-container")
// let otherSpanTechWorkRealizationOneFirst1_3 = document.createElement("span") 
// otherSpanTechWorkRealizationOneFirst1_3.classList.add("fa-solid","fa-circle-dot", "circle")
// let otherTechWorkRealizationOneFirstP1_3 = document.createElement("p")
// otherTechWorkRealizationOneFirstP1_3.textContent = `${el.workAchiev1_3}`
// otherTechWorkRealizationOneFirstDiv1_3.append(otherSpanTechWorkRealizationOneFirst1_3, otherTechWorkRealizationOneFirstP1_3)

// let otherTechWorkRealizationOneFirstDiv2_3 = document.createElement("div")
// otherTechWorkRealizationOneFirstDiv2_3.classList.add("flex-container")
// let otherSpanTechWorkRealizationOneFirst2_3 = document.createElement("span") 
// otherSpanTechWorkRealizationOneFirst2_3.classList.add("fa-solid","fa-circle-dot", "circle")
// let otherTechWorkRealizationOneFirstP2_3 = document.createElement("p")
// otherTechWorkRealizationOneFirstP2_3.textContent = `${el.workAchiev2_3}`
// otherTechWorkRealizationOneFirstDiv2_3.append(otherSpanTechWorkRealizationOneFirst2_3, otherTechWorkRealizationOneFirstP2_3)

// let otherTechWorkRealizationOneFirstDiv3_3 = document.createElement("div")
// otherTechWorkRealizationOneFirstDiv3_3.classList.add("flex-container")
// let otherSpanTechWorkRealizationOneFirst3_3 = document.createElement("span") 
// otherSpanTechWorkRealizationOneFirst3_3.classList.add("fa-solid","fa-circle-dot", "circle")
// let otherTechWorkRealizationOneFirstP3_3 = document.createElement("p")
// otherTechWorkRealizationOneFirstP3_3.textContent = `${el.workAchiev3_3}`
// otherTechWorkRealizationOneFirstDiv3_3.append(otherSpanTechWorkRealizationOneFirst3_3, otherTechWorkRealizationOneFirstP3_3)

// let techWorkRealizationOneFirstDiv4_3 = document.createElement("div")
// techWorkRealizationOneFirstDiv4_3.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst4_3 = document.createElement("span") 
// spanTechWorkRealizationOneFirst4_3.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP4_3 = document.createElement("p")
// techWorkRealizationOneFirstP4_3.textContent = `${el.workAchiev4_3}`
// techWorkRealizationOneFirstDiv4_3.append(spanTechWorkRealizationOneFirst4_3, techWorkRealizationOneFirstP4_3)

// let techWorkRealizationOneFirstDiv5_3 = document.createElement("div")
// techWorkRealizationOneFirstDiv5_3.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst5_3 = document.createElement("span") 
// spanTechWorkRealizationOneFirst5_3.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP5_3 = document.createElement("p")
// techWorkRealizationOneFirstP5_3.textContent = `${el.workAchiev5_3}`
// techWorkRealizationOneFirstDiv5_3.append(spanTechWorkRealizationOneFirst5_3, techWorkRealizationOneFirstP5_3)

// let techWorkRealizationOneFirstDiv6_3 = document.createElement("div")
// techWorkRealizationOneFirstDiv6_3.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst6_3 = document.createElement("span") 
// spanTechWorkRealizationOneFirst6_3.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP6_3 = document.createElement("p")
// techWorkRealizationOneFirstP6_3.textContent = `${el.workAchiev6_3}`
// techWorkRealizationOneFirstDiv6_3.append(spanTechWorkRealizationOneFirst6_3, techWorkRealizationOneFirstP6_3)

// let techWorkRealizationOneFirstDiv7_3 = document.createElement("div")
// techWorkRealizationOneFirstDiv7_3.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst7_3 = document.createElement("span") 
// spanTechWorkRealizationOneFirst7_3.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP7_3 = document.createElement("p")
// techWorkRealizationOneFirstP7_3.textContent = `${el.workAchiev7_3}`
// techWorkRealizationOneFirstDiv7_3.append(spanTechWorkRealizationOneFirst7_3, techWorkRealizationOneFirstP7_3)

// let techWorkRealizationOneFirstDiv8_3 = document.createElement("div")
// techWorkRealizationOneFirstDiv8_3.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst8_3 = document.createElement("span") 
// spanTechWorkRealizationOneFirst8_3.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP8_3 = document.createElement("p")
// techWorkRealizationOneFirstP8_3.textContent = `${el.workAchiev8_3}`
// techWorkRealizationOneFirstDiv8_3.append(spanTechWorkRealizationOneFirst8_3, techWorkRealizationOneFirstP8_3)

// let techWorkRealizationOneFirstDiv9_3 = document.createElement("div")
// techWorkRealizationOneFirstDiv9_3.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst9_3 = document.createElement("span") 
// spanTechWorkRealizationOneFirst9_3.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP9_3 = document.createElement("p")
// techWorkRealizationOneFirstP9_3.textContent = `${el.workAchiev9_3}`
// techWorkRealizationOneFirstDiv9_3.append(spanTechWorkRealizationOneFirst9_3, techWorkRealizationOneFirstP9_3)

// let techWorkRealizationOneFirstDiv10_3 = document.createElement("div")
// techWorkRealizationOneFirstDiv10_3.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst10_3 = document.createElement("span") 
// spanTechWorkRealizationOneFirst10_3.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP10_3 = document.createElement("p")
// techWorkRealizationOneFirstP10_3.textContent = `${el.workAchiev10_3}`
// techWorkRealizationOneFirstDiv10_3.append(spanTechWorkRealizationOneFirst10_3, techWorkRealizationOneFirstP10_3)

otherTechFirstRowOneDiv3.append(otherTechFirstRowOneLeftDiv3, otherTechFirstRowOneRightDiv3)
otherTechFirstRowTwoDiv3.append(otherTechFirstRowTwoLeftDiv3, otherTechFirstRowTwoRightDiv3)

otherWorkWrapper3.append(otherTechWorkNewLine3, otherTechFirstRowOneDiv3, otherTechFirstRowTwoDiv3, otherWorkAchievementDiv3
    
    // otherTechWorkRealizationOneFirstDiv1_3, otherTechWorkRealizationOneFirstDiv2_3, otherTechWorkRealizationOneFirstDiv3_3
    // , techWorkRealizationOneFirstDiv4_3, techWorkRealizationOneFirstDiv5_3, techWorkRealizationOneFirstDiv6_3, techWorkRealizationOneFirstDiv7_3, techWorkRealizationOneFirstDiv8_3, techWorkRealizationOneFirstDiv9_3, techWorkRealizationOneFirstDiv10_3
    )

    otherWorkDiv.append(otherWorkWrapper3)

if(el.companyName_3.length === 0){
    otherWorkWrapper3.style.display = "none"
}else{
    otherWorkWrapper3.style.display = "block"
}

}




// =================  FOURTH NON TECHNICAL WORK EXPERIENCE ============================

if(el.workType_4 === "Other") {    

let otherWorkWrapper4 = document.createElement("div")
let techWorkNewLine4 = document.createElement("br")

        let otherTechFirstRowOneDiv4 = document.createElement("div")
        otherTechFirstRowOneDiv4.classList.add("flex-container")
        let otherTechFirstRowOneLeftDiv4 = document.createElement("div")
        otherTechFirstRowOneLeftDiv4.classList.add("left-row")
        let otherTechFirstRowOneLeftP4 =document.createElement("p")
        otherTechFirstRowOneLeftP4.classList.add("text-bold")
        otherTechFirstRowOneLeftP4.textContent = `${el.companyName_4}`
        otherTechFirstRowOneLeftDiv4.append(otherTechFirstRowOneLeftP4)
    
        let otherTechFirstRowOneRightDiv4 = document.createElement("div")
        otherTechFirstRowOneRightDiv4.classList.add("right-row")
        let otherTechFirstRowOneRightP4 =document.createElement("p")
        otherTechFirstRowOneRightP4.classList.add("text-bold")
        otherTechFirstRowOneRightP4.textContent = ` ${el.companyCity_4}, ${el.companyState_4}`
        otherTechFirstRowOneRightDiv4.append(otherTechFirstRowOneRightP4)
    
        let otherTechFirstRowTwoDiv4 = document.createElement("div")
        otherTechFirstRowTwoDiv4.classList.add("flex-container")
        let otherTechFirstRowTwoLeftDiv4 = document.createElement("div")
        otherTechFirstRowTwoLeftDiv4.classList.add("left-row")
        let otherTechFirstRowTwoLeftP4 =document.createElement("p")
        otherTechFirstRowTwoLeftP4.textContent = `${el.jobRole_4}`
        otherTechFirstRowTwoDiv4.append(otherTechFirstRowTwoLeftP4)
    
        let otherTechFirstRowTwoRightDiv4 = document.createElement("div")
        otherTechFirstRowTwoRightDiv4.classList.add("right-row")
        let otherTechFirstRowTwoRightP4 =document.createElement("p")
        otherTechFirstRowTwoRightP4.textContent = `${el.workStartMonth_4} ${el.workStart_year_4} - ${el.workEndMonth_4} ${el.workEndYear_4}`
        otherTechFirstRowTwoRightDiv4.append(techFirstRowTwoRightP4)


   

let otherAchievementArray4 = [el.workAchiev1_4, el.workAchiev2_4, el.workAchiev3_4, el.workAchiev4_4, el.workAchiev5_4, el.workAchiev6_4, el.workAchiev7_4, el.workAchiev8_4, el.workAchiev9_4, el.workAchiev10_4]

const otherAchievementArrayWithoutEmpty4 = otherAchievementArray4.filter(function (el) {
    return el != "";
  });

let otherWorkAchievementDiv4 = document.createElement("div")
otherWorkAchievementDiv4.classList.add("list")

otherAchievementArrayWithoutEmpty4.forEach((workAchievement) => {
    let li = document.createElement("li");
    li.innerText = workAchievement;
    otherWorkAchievementDiv4.appendChild(li);
  });



    
// let otherTechWorkRealizationOneFirstDiv1_4 = document.createElement("div")
// otherTechWorkRealizationOneFirstDiv1_4.classList.add("flex-container")
// let otherSpanTechWorkRealizationOneFirst1_4 = document.createElement("span") 
// otherSpanTechWorkRealizationOneFirst1_4.classList.add("fa-solid","fa-circle-dot", "circle")
// let otherTechWorkRealizationOneFirstP1_4 = document.createElement("p")
// otherTechWorkRealizationOneFirstP1_4.textContent = `${el.workAchiev1_1}`
// otherTechWorkRealizationOneFirstDiv1_4.append(otherSpanTechWorkRealizationOneFirst1_3, otherTechWorkRealizationOneFirstP1_3)

// let otherTechWorkRealizationOneFirstDiv2_4 = document.createElement("div")
// otherTechWorkRealizationOneFirstDiv2_4.classList.add("flex-container")
// let otherSpanTechWorkRealizationOneFirst2_4 = document.createElement("span") 
// otherSpanTechWorkRealizationOneFirst2_4.classList.add("fa-solid","fa-circle-dot", "circle")
// let otherTechWorkRealizationOneFirstP2_4 = document.createElement("p")
// otherTechWorkRealizationOneFirstP2_4.textContent = `${el.workAchiev2_1}`
// otherTechWorkRealizationOneFirstDiv2_4.append(otherSpanTechWorkRealizationOneFirst2_4, otherTechWorkRealizationOneFirstP2_4)

// let otherTechWorkRealizationOneFirstDiv3_4 = document.createElement("div")
// otherTechWorkRealizationOneFirstDiv3_4.classList.add("flex-container")
// let otherSpanTechWorkRealizationOneFirst3_4 = document.createElement("span") 
// otherSpanTechWorkRealizationOneFirst3_4.classList.add("fa-solid","fa-circle-dot", "circle")
// let otherTechWorkRealizationOneFirstP3_4 = document.createElement("p")
// otherTechWorkRealizationOneFirstP3_4.textContent = `${el.workAchiev3_1}`
// otherTechWorkRealizationOneFirstDiv3_4.append(otherSpanTechWorkRealizationOneFirst3_4, otherTechWorkRealizationOneFirstP3_4)

// let otherTechWorkRealizationOneFirstDiv4_4 = document.createElement("div")
// otherTechWorkRealizationOneFirstDiv4_4.classList.add("flex-container")
// let otherSpanTechWorkRealizationOneFirst4_4 = document.createElement("span") 
// otherSpanTechWorkRealizationOneFirst4_4.classList.add("fa-solid","fa-circle-dot", "circle")
// let otherTechWorkRealizationOneFirstP4_4 = document.createElement("p")
// otherTechWorkRealizationOneFirstP4_4.textContent = `${el.workAchiev4_1}`
// otherTechWorkRealizationOneFirstDiv4_4.append(otherSpanTechWorkRealizationOneFirst4_4, otherTechWorkRealizationOneFirstP4_4)

// let techWorkRealizationOneFirstDiv5_4 = document.createElement("div")
// techWorkRealizationOneFirstDiv5_4.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst5_4 = document.createElement("span") 
// spanTechWorkRealizationOneFirst5_4.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP5_4 = document.createElement("p")
// techWorkRealizationOneFirstP5_4.textContent = `${el.workAchiev5_1}`
// techWorkRealizationOneFirstDiv5_4.append(spanTechWorkRealizationOneFirst5_4, techWorkRealizationOneFirstP5_4)

// let techWorkRealizationOneFirstDiv6_4 = document.createElement("div")
// techWorkRealizationOneFirstDiv6_4.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst6_4 = document.createElement("span") 
// spanTechWorkRealizationOneFirst6_4.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP6_4 = document.createElement("p")
// techWorkRealizationOneFirstP6_4.textContent = `${el.workAchiev6_1}`
// techWorkRealizationOneFirstDiv6_4.append(spanTechWorkRealizationOneFirst6_4, techWorkRealizationOneFirstP6_4)

// let techWorkRealizationOneFirstDiv7_4 = document.createElement("div")
// techWorkRealizationOneFirstDiv7_4.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst7_4 = document.createElement("span") 
// spanTechWorkRealizationOneFirst7_4.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP7_4 = document.createElement("p")
// techWorkRealizationOneFirstP7_4.textContent = `${el.workAchiev7_1}`
// techWorkRealizationOneFirstDiv7_4.append(spanTechWorkRealizationOneFirst7_4, techWorkRealizationOneFirstP7_4)

// let techWorkRealizationOneFirstDiv8_4 = document.createElement("div")
// techWorkRealizationOneFirstDiv8_4.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst8_4 = document.createElement("span") 
// spanTechWorkRealizationOneFirst8_4.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP8_4 = document.createElement("p")
// techWorkRealizationOneFirstP8_4.textContent = `${el.workAchiev8_1}`
// techWorkRealizationOneFirstDiv8_4.append(spanTechWorkRealizationOneFirst8_4, techWorkRealizationOneFirstP8_4)

// let techWorkRealizationOneFirstDiv9_4 = document.createElement("div")
// techWorkRealizationOneFirstDiv9_4.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst9_4 = document.createElement("span") 
// spanTechWorkRealizationOneFirst9_4.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP9_4 = document.createElement("p")
// techWorkRealizationOneFirstP9_4.textContent = `${el.workAchiev9_1}`
// techWorkRealizationOneFirstDiv9_4.append(spanTechWorkRealizationOneFirst9_4, techWorkRealizationOneFirstP9_4)

// let techWorkRealizationOneFirstDiv10_4 = document.createElement("div")
// techWorkRealizationOneFirstDiv10_4.classList.add("flex-container")
// let spanTechWorkRealizationOneFirst10_4 = document.createElement("span") 
// spanTechWorkRealizationOneFirst10_4.classList.add("fa-solid","fa-circle-dot", "circle")
// let techWorkRealizationOneFirstP10_4 = document.createElement("p")
// techWorkRealizationOneFirstP10_4.textContent = `${el.workAchiev10_1}`
// techWorkRealizationOneFirstDiv10_4.append(spanTechWorkRealizationOneFirst10_4, techWorkRealizationOneFirstP10_4)

otherTechFirstRowOneDiv4.append(otherTechFirstRowOneLeftDiv4, otherTechFirstRowOneRightDiv4)
otherTechFirstRowTwoDiv4.append(otherTechFirstRowTwoLeftDiv4, otherTechFirstRowTwoRightDiv4)

otherWorkWrapper4.append(otherTechWorkNewLine4, otherTechFirstRowOneDiv4, otherTechFirstRowTwoDiv4, otherWorkAchievementDiv4 
    // ,otherTechWorkRealizationOneFirstDiv1_4, otherTechWorkRealizationOneFirstDiv2_4, otherTechWorkRealizationOneFirstDiv3_4
    // , techWorkRealizationOneFirstDiv4_4, techWorkRealizationOneFirstDiv5_4, techWorkRealizationOneFirstDiv6_4, techWorkRealizationOneFirstDiv7_4, techWorkRealizationOneFirstDiv8_4, techWorkRealizationOneFirstDiv9_4, techWorkRealizationOneFirstDiv10_4
    )

    otherWorkDiv.append(otherWorkWrapper4)

if(el.companyName_4.length === 0){
    otherWorkWrapper4.style.display = "none"
}else{
    otherWorkWrapper4.style.display = "block"
}
}


resumeDiv.append(otherWorkDiv)
    
// if(el.workType_1 === "Other"){
    

//             let workNewLine = document.createElement("br")
    
//             let firstRowOneDiv = document.createElement("div")
//             firstRowOneDiv.classList.add("flex-container")
//             let firstRowOneLeftDiv = document.createElement("div")
//             firstRowOneLeftDiv.classList.add("left-row")
//             let firstRowOneLeftP =document.createElement("p")
//             firstRowOneLeftP.classList.add("text-bold")
//             firstRowOneLeftP.textContent = 'Amazon FC'
//             firstRowOneLeftDiv.append(firstRowOneLeftP)
    
//             let firstRowOneRightDiv = document.createElement("div")
//             firstRowOneRightDiv.classList.add("right-row")
//             let firstRowOneRightP =document.createElement("p")
//             firstRowOneRightP.classList.add("text-bold")
//             firstRowOneRightP.textContent = 'Indianapolis, IN'
//             firstRowOneRightDiv.append(firstRowOneRightP)
    
//             let firstRowTwoDiv = document.createElement("div")
//             firstRowTwoDiv.classList.add("flex-container")
//             let firstRowTwoLeftDiv = document.createElement("div")
//             firstRowTwoLeftDiv.classList.add("left-row")
//             let firstRowTwoLeftP =document.createElement("p")
//             firstRowTwoLeftP.textContent = 'Picker'
//             firstRowTwoDiv.append(firstRowTwoLeftP)
    
//             let firstRowTwoRightDiv = document.createElement("div")
//             firstRowTwoRightDiv.classList.add("right-row")
//             let firstRowTwoRightP =document.createElement("p")
//             // firstRowTwoRightP.classList.add("text-bold")
//             firstRowTwoRightP.textContent = 'Sep 2020 - to date'
//             firstRowTwoRightDiv.append(firstRowTwoRightP)
    
//             let workRealizationOneFirstDiv = document.createElement("div")
//             workRealizationOneFirstDiv.classList.add("flex-container")
//             let spanWorkRealizationOneFirst = document.createElement("span") 
//             spanWorkRealizationOneFirst.classList.add("circle")
//             let workRealizationOneFirstP = document.createElement("p")
//             workRealizationOneFirstP.textContent = 'Performing six (6) sided checks on item to avoid sending incorrect to customer'
//             workRealizationOneFirstDiv.append(spanWorkRealizationOneFirst, workRealizationOneFirstP)
    
//             let workRealizationTwoFirstDiv = document.createElement("div")
//             workRealizationTwoFirstDiv.classList.add("flex-container")
//             let spanWorkRealizationTwoFirst = document.createElement("span") 
//             spanWorkRealizationTwoFirst.classList.add("circle")
//             let workRealizationTwoFirstP = document.createElement("p")
//             workRealizationTwoFirstP.textContent = 'Inspect working condition of my Order Picker to avoid possible issues or/and dowmturn'
//             workRealizationTwoFirstDiv.append(spanWorkRealizationTwoFirst, workRealizationTwoFirstP)
    
//             let workRealizationThreeFirstDiv = document.createElement("div")
//             workRealizationThreeFirstDiv.classList.add("flex-container")
//             let spanWorkRealizationThreeFirst = document.createElement("span") 
//             spanWorkRealizationThreeFirst.classList.add("circle")
//             let workRealizationThreeFirstP = document.createElement("p")
//             workRealizationThreeFirstP.textContent = 'Always read my scanner to avoid mistakes'
//             workRealizationThreeFirstDiv.append(spanWorkRealizationThreeFirst, workRealizationThreeFirstP)
    
    
    
//             firstRowOneDiv.append(firstRowOneLeftDiv, firstRowOneRightDiv)
//             firstRowTwoDiv.append(firstRowTwoLeftDiv, firstRowTwoRightDiv)

//             workDiv.append(workHeaderDiv, workNewLine , firstRowOneDiv, firstRowTwoDiv, workRealizationOneFirstDiv, workRealizationTwoFirstDiv, workRealizationThreeFirstDiv)
    
// }    
    
//  //============================ SECOND OTHER WORK EXPERIENCE =============================================

//  if(el.workType_2 === "Other"){
//             let secondWorkNewLine = document.createElement("br")
//             let secondRowOneDiv = document.createElement("div")
//             secondRowOneDiv.classList.add("flex-container")
//             let secondRowOneLeftDiv = document.createElement("div")
//             secondRowOneLeftDiv.classList.add("left-row")
//             let secondRowOneLeftP =document.createElement("p")
//             secondRowOneLeftP.classList.add("text-bold")
//             secondRowOneLeftP.textContent = 'Hubler Ford Franklin'
//             secondRowOneLeftDiv.append(secondRowOneLeftP)
    
//             let secondRowOneRightDiv = document.createElement("div")
//             secondRowOneRightDiv.classList.add("right-row")
//             let secondRowOneRightP =document.createElement("p")
//             secondRowOneRightP.classList.add("text-bold")
//             secondRowOneRightP.textContent = 'Franklin, IN'
//             secondRowOneRightDiv.append(secondRowOneRightP)
    
    
    
//             let secondRowTwoDiv = document.createElement("div")
//             secondRowTwoDiv.classList.add("flex-container")
//             let secondRowTwoLeftDiv = document.createElement("div")
//             secondRowTwoLeftDiv.classList.add("left-row")
//             let secondRowTwoLeftP =document.createElement("p")
//             secondRowTwoLeftP.textContent = 'Salesman'
//             secondRowTwoLeftDiv.append(secondRowTwoLeftP)
    
//             let secondRowTwoRightDiv = document.createElement("div")
//             secondRowTwoRightDiv.classList.add("right-row")
//             let secondRowTwoRightP =document.createElement("p")
//             // secondRowTwoRightP.classList.add("text-bold")
//             secondRowTwoRightP.textContent = 'July 2021 - Dec 2021'
//             secondRowTwoRightDiv.append(secondRowTwoRightP)
    
    
    
//             let workRealizationOneSecondDiv = document.createElement("div")
//             workRealizationOneSecondDiv.classList.add("flex-container")
//             let spanWorkRealizationOneSecond = document.createElement("span") 
//             spanWorkRealizationOneSecond.classList.add("circle")
//             let workRealizationOneSecondP = document.createElement("p")
//             workRealizationOneSecondP.textContent = 'Listen carefully to customers to better understand their needs and wants'
//             workRealizationOneSecondDiv.append(spanWorkRealizationOneSecond, workRealizationOneSecondP)
    
//             let workRealizationTwoSecondDiv = document.createElement("div")
//             workRealizationTwoSecondDiv.classList.add("flex-container")
//             let spanWorkRealizationTwoSecond = document.createElement("span") 
//             spanWorkRealizationTwoSecond.classList.add("circle")
//             let workRealizationTwoSecondP = document.createElement("p")
//             workRealizationTwoSecondP.textContent = 'Work with finance team to get customers approved for car loan'
//             workRealizationTwoSecondDiv.append(spanWorkRealizationTwoSecond, workRealizationTwoSecondP)
    
//             let workRealizationThreeSecondDiv = document.createElement("div")
//             workRealizationThreeSecondDiv.classList.add("flex-container")
//             let spanWorkRealizationThreeSecond = document.createElement("span") 
//             spanWorkRealizationThreeSecond.classList.add("circle")
//             let workRealizationThreeSecondP = document.createElement("p")
//             workRealizationThreeSecondP.textContent = 'Contact customers by phone or email to achieve monthly sales goals'
//             workRealizationThreeSecondDiv.append(spanWorkRealizationThreeSecond, workRealizationThreeSecondP)
    
        
//             secondRowOneDiv.append(secondRowOneLeftDiv, secondRowOneRightDiv)
//             secondRowTwoDiv.append(secondRowTwoLeftDiv, secondRowTwoRightDiv)
            
//             workDiv.append(secondWorkNewLine, secondRowOneDiv, secondRowTwoDiv, workRealizationOneSecondDiv, workRealizationTwoSecondDiv, workRealizationThreeSecondDiv)
//  }

// //  ========================== THIRD OTHER WORK EXPERIENCE ==============================================
// if(el.workType_3 === "Other"){
//     let secondWorkNewLine1 = document.createElement("br")
//     let secondRowOneDiv1 = document.createElement("div")
//     secondRowOneDiv1.classList.add("flex-container")
//     let secondRowOneLeftDiv1 = document.createElement("div")
//     secondRowOneLeftDiv1.classList.add("left-row")
//     let secondRowOneLeftP1 =document.createElement("p")
//     secondRowOneLeftP1.classList.add("text-bold")
//     secondRowOneLeftP1.textContent = 'Hubler Ford Franklin'
//     secondRowOneLeftDiv1.append(secondRowOneLeftP1)

//     let secondRowOneRightDiv1 = document.createElement("div")
//     secondRowOneRightDiv1.classList.add("right-row")
//     let secondRowOneRightP1 =document.createElement("p")
//     secondRowOneRightP1.classList.add("text-bold")
//     secondRowOneRightP1.textContent = 'Franklin, IN'
//     secondRowOneRightDiv1.append(secondRowOneRightP1)



//     let secondRowTwoDiv1 = document.createElement("div")
//     secondRowTwoDiv1.classList.add("flex-container")
//     let secondRowTwoLeftDiv1 = document.createElement("div")
//     secondRowTwoLeftDiv1.classList.add("left-row")
//     let secondRowTwoLeftP1 =document.createElement("p")
//     secondRowTwoLeftP1.textContent = 'Salesman'
//     secondRowTwoLeftDiv1.append(secondRowTwoLeftP1)

//     let secondRowTwoRightDiv1 = document.createElement("div")
//     secondRowTwoRightDiv1.classList.add("right-row")
//     let secondRowTwoRightP1 =document.createElement("p")
//     // secondRowTwoRightP.classList.add("text-bold")
//     secondRowTwoRightP1.textContent = 'July 2021 - Dec 2021'
//     secondRowTwoRightDiv1.append(secondRowTwoRightP1)



//     let workRealizationOneSecondDiv1 = document.createElement("div")
//     workRealizationOneSecondDiv1.classList.add("flex-container")
//     let spanWorkRealizationOneSecond1 = document.createElement("span") 
//     spanWorkRealizationOneSecond1.classList.add("circle")
//     let workRealizationOneSecondP1 = document.createElement("p")
//     workRealizationOneSecondP1.textContent = 'Listen carefully to customers to better understand their needs and wants'
//     workRealizationOneSecondDiv1.append(spanWorkRealizationOneSecond1, workRealizationOneSecondP1)

//     let workRealizationTwoSecondDiv1 = document.createElement("div")
//     workRealizationTwoSecondDiv1.classList.add("flex-container")
//     let spanWorkRealizationTwoSecond1 = document.createElement("span") 
//     spanWorkRealizationTwoSecond1.classList.add("circle")
//     let workRealizationTwoSecondP1 = document.createElement("p")
//     workRealizationTwoSecondP1.textContent = 'Work with finance team to get customers approved for car loan'
//     workRealizationTwoSecondDiv1.append(spanWorkRealizationTwoSecond1, workRealizationTwoSecondP1)

//     let workRealizationThreeSecondDiv1 = document.createElement("div")
//     workRealizationThreeSecondDiv1.classList.add("flex-container")
//     let spanWorkRealizationThreeSecond1 = document.createElement("span") 
//     spanWorkRealizationThreeSecond1.classList.add("circle")
//     let workRealizationThreeSecondP1 = document.createElement("p")
//     workRealizationThreeSecondP1.textContent = 'Contact customers by phone or email to achieve monthly sales goals'
//     workRealizationThreeSecondDiv1.append(spanWorkRealizationThreeSecond1, workRealizationThreeSecondP1)


//     secondRowOneDiv1.append(secondRowOneLeftDiv1, secondRowOneRightDiv1)
//     secondRowTwoDiv1.append(secondRowTwoLeftDiv1, secondRowTwoRightDiv1)
    
//     workDiv.append(secondWorkNewLine1, secondRowOneDiv1, secondRowTwoDiv1, workRealizationOneSecondDiv1, workRealizationTwoSecondDiv1, workRealizationThreeSecondDiv1)
// }

            
            // resumeDiv.append(workDiv)
    
//================================ OTHER WORK EXPERIENCE : End ===============================
    
    
    
    
    
// Additional Work experience : Begin =====================
            // let workAdditionalDiv = document.createElement("div") // main container
            // let workHeaderAdditionalDiv = document.createElement("div")
            // let workHeaderAddP = document.createElement("p")
            // workHeaderAddP.classList.add("headerSection", "text-bold", 'top-margin')
            // workHeaderAddP.textContent = "ADDITIONAL EXPERIENCE"
            // workHeaderAdditionalDiv.append(workHeaderAddP)
    
            // // let workNewLine = document.createElement("br")
    
            // let additionalRowOneDiv = document.createElement("div")
            // additionalRowOneDiv.classList.add("flex-container")
            // let additionalRowLeftDiv = document.createElement("div")
            // additionalRowLeftDiv.classList.add("left-row")
            // let additionalRowLeftP =document.createElement("p")
            // additionalRowLeftP.classList.add("text-bold")
            // additionalRowLeftP.textContent = 'Les Centres Gheskio'
            // additionalRowLeftDiv.append(additionalRowLeftP)
    
            // let additionalRowRightDiv = document.createElement("div")
            // additionalRowRightDiv.classList.add("right-row")
            // let additionalRowRightP =document.createElement("p")
            // additionalRowRightP.classList.add("text-bold")
            // additionalRowRightP.textContent = 'Port-au-Prince, Haiti'
            // additionalRowRightDiv.append(additionalRowRightP)
    
            // let additionalRowTwoDiv = document.createElement("div")
            // additionalRowTwoDiv.classList.add("flex-container")
            // let additionalRowTwoLeftDiv = document.createElement("div")
            // additionalRowTwoLeftDiv.classList.add("left-row")
            // let additionalRowTwoLeftP =document.createElement("p")
            // additionalRowTwoLeftP.textContent = 'Database manager'
            // additionalRowTwoLeftDiv.append(additionalRowTwoLeftP)
    
            // let additionalRowTwoRightDiv = document.createElement("div")
            // additionalRowTwoRightDiv.classList.add("right-row")
            // let additionalRowTwoRightP =document.createElement("p")
            // // firstRowTwoRightP.classList.add("text-bold")
            // additionalRowTwoRightP.textContent = 'Mar 2008 - May 2018'
            // additionalRowTwoRightDiv.append(additionalRowTwoRightP)
    
            // let additionalWorkRealizationOneDiv = document.createElement("div")
            // additionalWorkRealizationOneDiv.classList.add("flex-container")
            // let spanAdditionalWorkRealizationOne = document.createElement("span") 
            // spanAdditionalWorkRealizationOne.classList.add("circle")
            // let additionalWorkRealizationOneP = document.createElement("p")
            // additionalWorkRealizationOneP.textContent = 'Create MS Access program to store patient\'s data to analyze monthly.'
            // additionalWorkRealizationOneDiv.append(spanAdditionalWorkRealizationOne, additionalWorkRealizationOneP)
    
            // let additionalWorkRealizationTwoDiv = document.createElement("div")
            // additionalWorkRealizationTwoDiv.classList.add("flex-container")
            // let spanAdditionalWorkRealizationTwo = document.createElement("span") 
            // spanAdditionalWorkRealizationTwo.classList.add("circle")
            // let additionalWorkRealizationTwoP = document.createElement("p")
            // additionalWorkRealizationTwoP.textContent = 'Use SSRS to make patient\'s data report dynamic and available in point in time.'
            // additionalWorkRealizationTwoDiv.append(spanAdditionalWorkRealizationTwo, additionalWorkRealizationTwoP)
            
                               
    })


  }

        
export{loadToHtml}