export let clearPersonForm = () => {
    document.querySelector('#firstName').value = ''
    document.querySelector('#middleName').value = ''
    document.querySelector('#lastName').value = ''
};

export let clearTitleForm = () => {
    document.querySelector('#titleId').defaultValue = shortid.generate();
    document.querySelector('#title1').value = '';
    document.querySelector('#title2').value = '';
}

export let clearContactForm = () => {
    document.querySelector('#contactId').defaultValue = shortid.generate();
    document.querySelector("#city").value ='';
    document.querySelector("#state").value ='';
    document.querySelector("#zcode").value ='';
    document.querySelector("#remote").checked = false;
    document.querySelector("#relocation").checked = false;
    document.querySelector("#email").value ='';
    document.querySelector("#phoneNumber").value ='';
}

export let clearSocialForm = () => {
    document.querySelector('#mediaId').defaultValue = shortid.generate();
    document.querySelector("#linkedIn").value ='';
    document.querySelector("#gitHub").value ='';
    document.querySelector("#portfolio").value ='';
}

export let clearSummaryForm = () => {
    document.querySelector('#objectiveId').defaultValue = shortid.generate();
    document.querySelector("#objective").value ='';
}

export let clearEducationForm = () => {
    document.querySelector('#educationId').defaultValue = shortid.generate(); 
    const fieldStudy = document.getElementsByName("eduFieldStudy");
        for(let i = 0; i < fieldStudy.length; i +=1)
        fieldStudy[i].checked = false;
    const schoolAttendadance = document.getElementsByName("school_attendance_method");
        for(let i = 0; i < schoolAttendadance.length; i +=1)
        schoolAttendadance[i].checked = false;
    document.querySelector("#school_name").value ='';
    document.querySelector("#school_city").value ='';
    document.querySelector("#school_state").value ='';   
    document.querySelector("#certificate_title").value ='';
    document.querySelector("#completion_date_month").selectedIndex = 'Select month'; 
    document.querySelector("#completion_date_year").selectedIndex = 'Select year'; 
    document.querySelector("#eduAchievement1").value ='';
    document.querySelector("#eduAchievement2").value ='';
    document.querySelector("#eduAchievement3").value ='';    
}



export let clearTechForm = () => {
    document.querySelector('#techId').defaultValue = shortid.generate();
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
}

export let clearMarketForm = () => {    
    document.querySelector('#marketId').defaultValue = shortid.generate();
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
}

export let clearProjectForm = () => {
    document.querySelector('#projectId').defaultValue = shortid.generate();
    document.querySelector("#projectRole").value ='';
    document.querySelector("#projectName").value ='';
    document.querySelector("#projectLanguage").value ='';
    document.querySelector("#projectMonthStart").selectedIndex = 'Select month';
    document.querySelector("#projectYearStart").selectedIndex = 'Select year';
    document.querySelector("#projectCompleted").checked = false;
    document.querySelector("#projectMonthEnd").selectedIndex = 'Select month';
    document.querySelector("#projectYearEnd").selectedIndex = 'Select year';
    document.querySelector("#projectUrl").value ='';
    document.querySelector("#projectAchievementOne").value ='';
    document.querySelector("#projectAchievementTwo").value ='';
    document.querySelector("#projectAchievementThree").value ='';
}


export let clearWorkForm = () => {
    document.querySelector('#workId').defaultValue = shortid.generate();
    const workType = document.getElementsByName("workType");
    for(let i = 0; i < workType.length; i +=1){
        workType[i].checked = false;
    }
    document.querySelector("#companyName").value ='';
    document.querySelector("#companyCity").value ='';
    document.querySelector("#companyState").value ='';
    document.querySelector("#positionInCompany").value ='';
    document.querySelector("#companyStartMonth").selectedIndex = 'Select month';
    document.querySelector("#companyStartYear").selectedIndex = 'Select year';
    document.getElementsByName("stillWorkHere").checked = false;
    document.querySelector("#companyEndMonth").selectedIndex = 'Select month';
    document.querySelector("#companyEndYear").selectedIndex = 'Select year';
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

