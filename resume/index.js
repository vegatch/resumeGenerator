
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const env = require('dotenv');
const db = require('./config');
const { check, validationResult } = require('express-validator');
const nodemon = require('nodemon');




const app = express();
const port = process.env.PORT || 49834

const renderMysql = function(sql){
 return db.query(sql, function(err, result) {
  
  if (!err) {
    console.log(`Successfully added record of ID: ${personId}`)
} else {
    console.log(err)
}
    
  });

}

const response = function(res){
  res.status(200).send('Record added successfully');
}

const errorHandling = function(myreq, myres){
     const errors = validationResult(myreq);
        if (!validationResult(myreq).isEmpty()) {
        return myres.status(422).json({ errors: errors.array() })
        }
     
}

app
    .use(morgan('dev'))
    .use(express.static(__dirname + '/public'))
    .use(express.json())
    .use(express.urlencoded({ extended: true}))

    // .get('/api/allresume', async (req, res) => {     
    //   let sqlQuery = "SELECT * FROM resumedb.complete_resume LIMIT 1";
  
    //   db.query(sqlQuery, (err, results) => {
    //     if(err) throw err;
    //   // await renderMysql(sql);
    //     res.send(results);
    //   });
    // })


    .get('/api/allresume/:id',[
      check('personId').escape()
                       .trim()
                       .blacklist()
                      //  .notEmpty().withMessage("Please provide an ID"),
    ], async (req, res) => {     
      const {id} = req.params.id;

      const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
        }

      let sqlQuery = "SELECT * FROM resumedb.complete_resume WHERE person_id = ?";
      const [rows] = await db.query(sqlQuery, [id]);
      if(!rows[0]){
        return res.json({msg: "Resume not found!"});
    }
        res.json(rows[0]);    
      
    })

    // .get('/api/resume', (req, res) =>{
    //   res.render('resume');
    // })
    
    .post('/api/resume',  [
      check('fName').isAlpha().withMessage('Only letters are allowed ')
                    .escape().not().isEmpty(),
      check('mName').isAlpha().withMessage('Only letters are allowed for Middle Name')
                    .escape(),
      check('lName').isAlpha().withMessage('Only letters are allowed for Last Name')
                    .escape().not().isEmpty(),

    ], async (req, res) => {       

        console.log(req.body)

        personId = req.body.pId, 
        firstName = req.body.fName, 
        middleName = req.body.mName, 
        lastName = req.body.lName,
        createUser = 'sba' 
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
          
        }
        // if(!(errorHandling(req, res)) ===''){errorHandling(req, res)};
        try{
            const sql = `INSERT INTO resumedb.person( person_id, first_name, middle_name, last_name, create_user) 
          VALUES ( "${personId}", "${firstName}", "${middleName}", "${lastName}", "${createUser}" ) `;
        
          await renderMysql(sql);
          
          response(res); 
        }catch (err){
          console.log(err);
       }
        
        

  })


    // .post('/api/resume',  async (req, res) => {       

    //     console.log(req.body)

    //     personId = req.body.pId, 
    //     firstName = req.body.fName, 
    //     middleName = req.body.mName, 
    //     lastName = req.body.lName,
    //     createUser = req.body.cUser    
        
    //     var sql = `INSERT INTO resumedb.person( person_id, first_name, middle_name, last_name, create_user) 
    //     VALUES ("${personId}", "${firstName}", "${middleName}", "${lastName}", "${createUser}")`;
       
    //     await renderMysql(sql);
        
    //     response(res);

    // })

      .post('/api/title',[
        check('title1').custom((value) => {return value.match(/^[A-Za-z ]+$/);}).withMessage('Only letters are allowed').trim()
                       .not().isEmpty().withMessage("Title can't be null")
                       .escape(),
        check('title2').custom((value) => {return value.match(/^[A-Za-z ]+$/);}).withMessage('Only letters are allowed').trim().escape()
                       .optional({ nullable: true, checkFalsy: true })
                       
      ], async (req, res) => {       

        const body = req.body;
        console.log(req.body)
        personId = body.pIdTitle, 
        createUser = `sba`
        titleId = body.title_id        
        title1String = body.title1
        title2String = body.title2
      //  if(req.body.length === 0) throw err;

       
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
       return res.status(422).json({ errors: errors.array() })
       }

       try{        

        var sql = `INSERT INTO resumedb.person_title( person_id, title_id ,  title1, title2, create_user) 
        VALUES ("${personId}", "${titleId}",  "${title1String}", "${title2String}","${createUser}")`;
        
         await renderMysql(sql);      
         
        response(res);
       }
       catch (err){
          console.log(err);
       }
        
     })

    // ====================================================

  //   .post('/api/title', async (req, res) => {       

  //     const body = req.body;
  //     console.log(req.body)
  //     personId = body.pIdTitle, 
  //     createUser = `sba`
  //     titleId = body.title_id        
  //     title1String = body.title1
  //     title2String = body.title2
  //    if(req.body.length === 0) throw err;

  //    try{
      
      

  //     var sql = `INSERT INTO resumedb.person_title( person_id, title_id ,  title1, title2, create_user) 
  //     VALUES (?, ?, ?, ?, ?)`;
  //     const params = [`${personId}, ${titleId},  ${title1String}, ${title2String}, ${createUser}`];
  //      await renderMysql(sql, params);      
       
  //     response(res);
  //    }
  //    catch (err){
  //       console.log(err);
  //    }
      
  //  })

    // =======================================================

     .post('/api/contact', [
      
        check('city').isAlpha().withMessage('Only letters are allowed')
                       .not().isEmpty().withMessage("Title can't be null")
                       .escape().trim(),
        check('state').isAlpha().withMessage('Only letters are allowed')
                       .not().isEmpty().withMessage("State can't be null")
                       .escape().trim(),
        check('zcode').isInt().withMessage('Only numbers are allowed').escape().trim(),        
        check('remote').isAlpha().withMessage('Only letters are allowed').escape().trim(),
        check('relocalization').isAlpha().withMessage('Only letters are allowed').escape().trim(),
        check('email').isEmail().withMessage('incorrect value from email').escape().trim(),
        check('phoneNumber').isMobilePhone().withMessage('incorrect phone number').escape().trim(),

     ], async (req, res)=> {     

      const body = req.body;
      console.log(req.body)

      contactId = body.contactId,
      personId = body.pIdContact, 
      city_ = body.city,
      state_ = body.state,
      zcode_ = body.zcode,
      remote_ = body.remote,
      relocalization_ = body.relocalization,
      email_ = body.email,
      phoneNumber_ = body.phoneNumber
      createUser = `sba`

      const errors = validationResult(req);
       if (!errors.isEmpty()) {
       return res.status(422).json({ errors: errors.array() })
       }

     if(req.body.length === 0) throw err;

      var sql = `INSERT INTO resumedb.person_contact( contact_id, person_id, address_city, address_state, address_zcode, remote, relocalisation, email, phone, create_user) 
      VALUES ("${contactId}", "${personId}", "${city_}", "${state_}", "${zcode_}", "${remote_}", "${relocalization_}", "${email_}", "${phoneNumber_}",  "${createUser}")`;
      
      await renderMysql(sql);       
        response(res);

   })
  
    
   .post('/api/media', async (req, res)=> {       

    const body = req.body;
    console.log(req.body)

    mediaId = body.media_id,
    personId = body.pidSocio, 
    linkedIn = 'LinkedIN'
    linkedInUrl= body.linkedIn, 
    gitHub = 'GitHub'
    gitHubUrl= body.gitHub, 
    porfolio = 'Portfolio'
    portfolioUrl= body.portfolio,       
    createUser = `sba`
   try{
    if(req.body.length === 0) throw err;

    var sql = `INSERT INTO  resumedb.person_media(media_id, person_id, linkedin, linkedin_url, github, github_url, portfolio, portfolio_url, create_user) 
    VALUES ("${mediaId}", "${personId}", "${linkedIn}", "${linkedInUrl}", "${gitHub}", "${gitHubUrl}",  "${porfolio}", "${portfolioUrl}", "${createUser}")`;
   
    await renderMysql(sql);       
        response(res);

   }    
   catch(error){
      res.send(error)
   }    

 })


    .post('/api/objective', async (req, res) =>{       

      const body = req.body;
      console.log(req.body)

      objectiveId = body.objective_id,
      personId = body.pidObjective, 
      objective_ = body.objective,     
      createUser = `sba`
  
      try{

        if(req.body.length === 0) throw err;

        var sql = `INSERT INTO  resumedb.person_resume_objective(objective_id, person_id, objective_details,  create_user) 
        VALUES ("${objectiveId}", "${personId}", "${objective_}",  "${createUser}")`;

        await renderMysql(sql);       
        response(res);

      }catch(error){
        console.error(error)
        res.send(error)
      }
     
    })


    .post('/api/education', async(req, res) =>{       
      try{

        const body = req.body;
        console.log(req.body)

        educationId = body.education_id,
        personId = body.pIdEducation, 
        educationNum = body.education_number,   
        fieldStudy = body.eduFieldStudy,   
        school_name_ = body.school_name,         
        school_city_ = body.school_city, 
        school_state_ = body.school_state,   
        school_attendance_method_ = body.school_attendance_method,
        certificate_title_ = body.certificate_title,
        completion_date_month_ = body.completion_date_month,
        completion_date_year_ = body.completion_date_year, 
        achievement_one_ = body.eduAchievement1,   
        achievement_two_ = body.eduAchievement2,
        achievement_three_ = body.eduAchievement3,  
        // realizationInCompanyThree_ = body.realizationInCompanyThree,
        createUser = `sba`
  
      if(req.body.length === 0) throw err;

      var sql = `INSERT INTO resumedb.person_education(education_id, person_id, education_number, field_study, school_name, school_city, school_state, school_attendance_method,  certificate_title, completion_date_month, completion_date_year, achievement_one, achievement_two, achievement_three, create_user) 
      VALUES ("${educationId}", "${personId}", "${educationNum}", "${fieldStudy}", "${school_name_}", "${school_city_}", "${school_state_}", "${school_attendance_method_}", "${certificate_title_}", "${completion_date_month_}","${completion_date_year_}", "${achievement_one_}",  "${achievement_two_}", "${achievement_three_}", "${createUser}")`;
      
      await renderMysql(sql);       
      response(res);
      
      // await renderMysql(sql);       
      }catch(err){

        console.error(error)
        res.send(error)

      }
      
      
    })

    .post('/api/tech', async (req, res) =>{       

      const body = req.body;
      console.log(req.body)

      techId = body.tech_id,
      personId = body.pidTech,          
      tech1_ = body.tech1,  
      tech2_ = body.tech2,
      tech3_ = body.tech3,
      tech4_ = body.tech4,
      tech5_ = body.tech5,
      tech6_ = body.tech6,
      tech7_ = body.tech7,
      tech8_ = body.tech8,
      tech9_ = body.tech9,
      tech10_ = body.tech10,
      createUser = `sba`      

      try{

        if(req.body.length === 0) throw err;

        var sql = `INSERT INTO  resumedb.person_skills_tech(tech_skill_id, person_id, skill_tech1,  skill_tech2,  skill_tech3, skill_tech4, skill_tech5,  skill_tech6, skill_tech7, skill_tech8, skill_tech9, skill_tech10, create_user) 
        VALUES ("${techId}", "${personId}",  "${tech1_}",  "${tech2_}",  "${tech3_}",  "${tech4_}",  "${tech5_}",  "${tech6_}",  "${tech7_}",  "${tech8_}",  "${tech9_}",  "${tech10_}", "${createUser}")`;        

        await renderMysql(sql);       
        response(res);
  
      }catch(error){
        console.error(error)
        res.send(error)
      }
      
    })


    .post('/api/market', async (req, res)=> {       

      const body = req.body;
      console.log(req.body)

      marketId = body.market_id,
      personId = body.pidMarket,        
      market1_ = body.market1,  
      market2_ = body.market2,  
      market3_ = body.market3,  
      market4_ = body.market4,  
      market5_ = body.market5,  
      market6_ = body.market6,  
      market7_ = body.market7,  
      market8_ = body.market8,  
      market9_ = body.market9, 
      market10_ = body.market10,   
      createUser = `sba`      

      try{

        if(req.body.length === 0) throw err;

        var sql = `INSERT INTO  resumedb.person_skills_market(market_skill_id, person_id, skill_market1, skill_market2, skill_market3, skill_market4, skill_market5, skill_market6, skill_market7, skill_market8, skill_market9, skill_market10,  create_user) 
        VALUES ("${marketId}", "${personId}",  "${market1_}", "${market2_}", "${market3_}", "${market4_}", "${market5_}", "${market6_}", "${market7_}", "${market8_}", "${market9_}", "${market10_}",  "${createUser}")`;
        
        await renderMysql(sql);       
        response(res);
  
      }catch(error){
        console.error(error)
        res.send(error)
      }
      
    })


    .post('/api/project', async(req, res) =>{       

      try{

      const body = req.body;
      console.log(req.body)

      projectId = body.project_id,
      personId = body.pidProject, 
      projectNum = body.project_num,   
      projectRole_ = body.projectRole,  
      projectName_ = body.projectName,
      projectLanguage_ = body.projectLanguage, 
      projectNonthStart_ = body.projectNonthStart,   
      projectYearStart_ = body.projectYearStart,
      projectNonthEnd_ = body.projectNonthEnd,
      projectYearEnd_ = body.projectYearEnd, 
      projectUrl_ = body.projectUrl,   
      project_achievementOne_ = body.project_achievementOne,
      project_achievementTwo_ = body.project_achievementTwo,   
      project_achievementThree_ = body.project_achievementThree,

      createUser = `sba`
  
      if(req.body.length === 0) throw err;

      var sql = `INSERT INTO  resumedb.person_project(project_id, person_id, project_number, project_role, project_name, project_language_used, project_month_start, project_year_start, 
      project_month_end, project_year_end, project_url, project_achievement_one, project_achievement_two, project_achievement_three, create_user) 
      VALUES ("${projectId}", "${personId}", "${projectNum}", "${projectRole_}", "${projectName_}", "${projectLanguage_}", "${projectNonthStart_}", "${projectYearStart_}", "${projectNonthEnd_}", "${projectYearEnd_}", "${projectUrl_}",  "${project_achievementOne_}", "${project_achievementTwo_}",
      "${project_achievementThree_}", "${createUser}")`;
      
      await renderMysql(sql);       
        response(res);

      }catch(err){

        console.error(error)
        res.send(error)
      }
      
    })



    .post('/api/work', async(req, res) =>{       

      try{

        const body = req.body;
        console.log(req.body)

        workId = body.work_id,
        personId = body.pIdWork, 
        workNum = body.work_num,   
        workType_ = body.workType, 
        companyName_ = body.companyName,  
        companyCity_ = body.companyCity,
        companyState_ = body.companyState, 
        positionInCompany_ = body.positionInCompany,   
        companyStartMonth_ = body.companyStartMonth,
        companyStartYear_ = body.companyStartYear,
        stillWorkThere_ = body.stillWorkHere,
        companyEndMonth_ = body.companyEndMonth, 
        companyEndYear_ = body.companyEndYear,   
        workAchiev1_ = body.workAchiev1,
        workAchiev2_ = body.workAchiev2,   
        workAchiev3_ = body.workAchiev3,
        workAchiev4_ = body.workAchiev4,
        workAchiev5_ = body.workAchiev5,
        workAchiev6_ = body.workAchiev6,
        workAchiev7_ = body.workAchiev7,
        workAchiev8_ = body.workAchiev8,
        workAchiev9_ = body.workAchiev9,
        workAchiev10_ = body.workAchiev10,
        createUser = `sba`
  
      if(req.body.length === 0) throw err;

      var sql = `INSERT INTO resumedb.person_work(work_id, person_id, work_number, tech_work, company_name, company_city, company_state, job_role, work_start_month,  work_start_year, still_work_there, work_end_month, work_end_year, work_achievement1, work_achievement2, work_achievement3, work_achievement4, work_achievement5, work_achievement6, work_achievement7, work_achievement8, work_achievement9, work_achievement10,        create_user) 
      VALUES ("${workId}", "${personId}", "${workNum}", "${workType_}",  "${companyName_}", "${companyCity_}", "${companyState_}", "${positionInCompany_}", "${companyStartMonth_}", "${companyStartYear_}", "${stillWorkThere_}","${companyEndMonth_}", "${companyEndYear_}",  "${workAchiev1_}", "${workAchiev2_}",
      "${workAchiev3_}", "${workAchiev4_}", "${workAchiev5_}", "${workAchiev6_}", "${workAchiev7_}", "${workAchiev8_}", "${workAchiev9_}", "${workAchiev10_}", "${createUser}")`;

      await renderMysql(sql);       
        response(res);
      

      }catch(err){
        console.error(error)
        res.send(error)
      }
      
    })
    
    
    
    


    .listen(port, () => console.log(`Server listening on port ${port}`));
    // const server = app.listen(0, () => {
    //   console.log('Listening on port:', server.address().port);
    // });
