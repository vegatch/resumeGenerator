
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const env = require('dotenv');
const db = require('./config');
const { check, validationResult } = require('express-validator');
const nodemon = require('nodemon');
const { json } = require('body-parser');




const app = express();
const port = process.env.PORT || 49834

const renderMysql = function(sql, data){
 return db.query(sql, [data], function(err, result) {
  
  if (!err) {
    console.log(`Successfully added record of ID: ${personId}`)
} else {
    console.log(err)
}
    
  });

}

const response = function(res){
  const message = 'Record added successfully'
  res.status(200).send(JSON.stringify(message));
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

    .get('/api/allresume', async (req, res) => {     
      let sqlQuery = "SELECT * FROM resumedb.complete_resume LIMIT 1";
  
      db.query(sqlQuery, (err, results) => {
        if(err) throw err;

        res.send(results);
        // res.render('resume', results);rs
      });
    })

    .get('/api/search/:firstname/:lastname', async (req, res) => {     
      let sqlQuery = "SELECT * FROM resumedb.complete_resume WHERE first_name = ? AND  last_name = ?";
      const fname = req.params.firstname
      const lname = req.params.lastname
      db.query(sqlQuery, [fname, lname], (err, results) => {
        if(err) throw err;

        res.send(results);
        // res.render('resume', results);rs
      });
    })

   
    .get('/api/history/:resumeId', async (req, res) => {     
      let sqlQuery = "SELECT * FROM resumedb.view_data WHERE person_id = ? ";
      const ID = req.params.resumeId
      // const lname = req.params.lastname
      db.query(sqlQuery, [ID], (err, results) => {
        if(err) throw err;

        res.send(results);
        // res.render('resume', results);rs
      });
    })
   
    

    .get('/user/:id', function (req, res) {
      let user_id = req.params.id;
        if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
        }
        dbConn.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'users list.' });
        });
      })

    // .get('/api/resume', (req, res) =>{
    //   res.render('resume');
    // })
    
    .post('/api/resume',  [
      check('firstName')
              .matches(/^[A-Za-z - .,'!&]+$/).withMessage('numbers are not allowed')
              .isLength({max:22}).withMessage('Text too long').escape().not().isEmpty(),
      check('middleName')
              .matches(/^[A-Za-z - .,'!&]+$/).withMessage('numbers are not allowed')
              .isLength({max:22}).withMessage('Text too long').escape().not().isEmpty()
              .optional({ nullable: true, checkFalsy: true }),
      check('lastName')
              .matches(/^[A-Za-z - .,'!&]+$/).withMessage('numbers are not allowed')
              .isLength({max:22}).withMessage('Text too long').escape().not().isEmpty(),

    ], async (req, res) => {       

        console.log(req.body)

        personId = req.body.pId, 
        firstName = req.body.firstName, 
        middleName = req.body.middleName, 
        lastName = req.body.lastName,
        createUser = 'sba' 
        const data = [req.body, "SBA"]
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })          
        }

        // if(!(errorHandling(req, res)) ===''){errorHandling(req, res)};
        try{
                 
          const sql = "INSERT INTO resumedb.person( person_id, first_name, middle_name, last_name, create_user)  VALUES ( ? )"
          const mydata = [personId, firstName, middleName, lastName, createUser]
          

          await renderMysql(sql, mydata) ;
          
          response(res); 
        }catch (err){
          console.log(err);
       }
          

  })

  

      .post('/api/title',[
        check('title1')
                .matches(/^[A-Za-z - .,'!&]+$/).withMessage('numbers are not allowed').trim()
                .notEmpty().withMessage("required").escape(),
        check('title2')
                .matches(/^[A-Za-z - .,'!&]+$/).withMessage('numbers are not allowed').trim()
                .escape().optional({ nullable: true, checkFalsy: true })
                       
      ], async (req, res) => {       

        const body = req.body;        
        personId = body.pidTitle, 
        createUser = `sba`
        titleId = body.titleId        
        title1String = body.title1
        title2String = body.title2
        console.log(body)
      //  if(req.body.length === 0) throw err;

       
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
       return res.status(422).json({ errors: errors.array() })
       }

       try{        

        var sql = `INSERT INTO resumedb.person_title( title_id, person_id,  title1, title2, create_user) 
        VALUES (?)`;
        
        const mydata = [titleId, personId, title1String, title2String, createUser]
         await renderMysql(sql, mydata);      
         
        response(res);
       }
       catch (err){
          console.log(err);
       }
        
     })

     
    // =======================================================

     .post('/api/contact', [
      
        check('city')
                .matches(/^[A-Za-z - .,'!&]+$/).withMessage('numbers are not allowed')
                .isLength({max:30}).withMessage('text too long').notEmpty()
                .withMessage("required").escape().trim(),
        check('state')
                .isAlpha().withMessage('Only letters allowed')
                .notEmpty().withMessage("required").escape().trim()
                .isLength( {min: 2, max:2 } ).withMessage('Two letters nax for state'),
        check('zcode')
                .isInt().withMessage('Only numbers are allowed')
                .escape().trim().isLength({min:5, max:5}).withMessage('should be should 5 characters'),        
        check('remote').isAlpha().isLength({min:3, max:3}).escape().trim().optional(),
        check('relocation').isAlpha().isLength({min:3, max:3}).escape().trim().optional(),
        check('email')
                .isEmail().withMessage('incorrect value from email').notEmpty().withMessage('required')
                .escape().trim().normalizeEmail(),
        check('phoneNumber')
                .isMobilePhone().withMessage('incorrect phone number').notEmpty().withMessage('required')
                .escape().trim(),

     ], async (req, res)=> {     

      const body = req.body;
      console.log(req.body)
      contactId = body.contactId,
      personId = body.pidContact, 
      city_ = body.city,
      state_ = body.state,
      zcode_ = body.zcode,
      remote_ = body.remote,
      relocalization_ = body.relocation,
      email_ = body.email,
      phoneNumber_ = body.phoneNumber
      createUser = `sba`

      const errors = validationResult(req);
       if (!errors.isEmpty()) {
       return res.status(422).json({ errors: errors.array() })
       }

     if(req.body.length === 0) throw err;

      var sql = `INSERT INTO resumedb.person_contact( contact_id, person_id, address_city, address_state, address_zcode, remote, relocalisation, email, phone, create_user) 
      VALUES (?)`;
      
      const mydata = [contactId, personId, city_, state_, zcode_, remote_, relocalization_, email_, phoneNumber_, createUser]

      await renderMysql(sql, mydata);       
        response(res);

   })
  
    
   .post('/api/media', [
      check("linkedIn").isURL().withMessage('LinkedIn URL is invalid')
      .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check("gitHub").isURL().withMessage('GitHub URL is invalid')
      .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check("portfolio").isURL().withMessage('Portfolio URL is invalid')
      .escape().trim().optional({ nullable: true, checkFalsy: true }),
   ],async (req, res)=> {       

    const body = req.body;
    console.log(req.body)

    mediaId = body.mediaId,
    personId = body.pidSocial, 
    linkedIn = `LinkedIn`,
    linkedInUrl= body.linkedIn, 
    gitHub = `GitHub`,
    gitHubUrl= body.gitHub, 
    porfolio = `Portfolio`,
    portfolioUrl= body.portfolio,       
    createUser = `sba`

    const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })          
        }
    
   try{
    if(req.body.length === 0) throw err;

    var sql = `INSERT INTO  resumedb.person_media(media_id, person_id, linkedin, linkedin_url, github, github_url, portfolio, portfolio_url, create_user) 
    VALUES (?)`;
   
    const mydata = [mediaId, personId, linkedIn, linkedInUrl, gitHub, gitHubUrl, porfolio, portfolioUrl, createUser]

    await renderMysql(sql, mydata);       
        response(res);

   }    
   catch(error){
      res.send(error)
   }    

 })


    .post('/api/objective',[
      check('objective')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).withMessage('numbers are not allowed')
          .isLength({max:1000}).withMessage('Text too long')
          .trim().escape().not().isEmpty().withMessage("Summary is required")
    ], async (req, res) =>{       

      const body = req.body;
      console.log(req.body)

      objectiveId = body.objectiveId,
      personId = body.pidObjective, 
      objective_ = body.objective,     
      createUser = `sba`

      const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })          
        }

      try{

        if(req.body.length === 0) throw err;

        var sql = `INSERT INTO  resumedb.person_resume_objective(objective_id, person_id, objective_details,  create_user) 
        VALUES (?)`;
        const mydata = [objectiveId, personId, objective_, createUser]

        await renderMysql(sql, mydata);       
        response(res);

      }catch(error){
        console.error(error)
        res.send(error)
      }
     
    })


    .post('/api/education', [
        check('eduFieldStudy').isAlpha().isLength({min: 2, max: 5})
                              .not().isEmpty().withMessage("required")
                              .escape().trim(),
        check('school_name')
                .matches(/^[A-Za-z - ().,'!&]+$/).withMessage('Only text allowed')
                .isLength({max:60}).withMessage('60 characters max').notEmpty().withMessage('required').escape().trim(),
        check('school_city')
                .matches(/^[A-Za-z- ().,'!&]+$/).withMessage('Text only allowed').escape().trim()
                .isLength({max:30}).withMessage('30 characters max').optional({ nullable: true, checkFalsy: true }),
        check('school_state')
                .matches(/^[A-Za-z- ().,'!&]+$/).withMessage('Text only allowed').escape().trim()
                .isLength({max:30}) .optional({ nullable: true, checkFalsy: true }),
        check('school_attendance_method').isAlpha().isLength({min:6, max:10})
                            .not().isEmpty().withMessage("required"),
        check('certificate_title')
                .matches(/^[A-Za-z - ().,'!&]+$/).withMessage('Text only allowed').escape().trim()
                .isLength({max:30}).optional({ nullable: true, checkFalsy: true }),
        check('graduated')
                .isAlpha().isLength({min:3, max:3})
                .escape().trim().optional({ nullable: true, checkFalsy: true }),
        check('completion_date_month')
                .isAlpha().isLength({min:3, max:3}).notEmpty().withMessage('required').escape().trim(),
        check('completion_date_year')
                .isInt().isLength({min:4, max:4}).notEmpty().withMessage('required'),
        check('eduAchievement1')
                .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:300}).withMessage('300 characters max')
                .escape().trim().optional({ nullable: true, checkFalsy: true }),
        check('eduAchievement2')
                .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:300}).withMessage('300 characters max')
                .escape().trim().optional({ nullable: true, checkFalsy: true }),
        check('eduAchievement3')
                .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:300}).withMessage('300 characters max')
                .escape().trim().optional({ nullable: true, checkFalsy: true }),
    ], async(req, res) =>{   

      
      const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })          
        }

      try{

        const body = req.body;
        console.log(req.body)

        educationId = body.educationId,
        personId = body.pidEducation,          
        fieldStudy = body.eduFieldStudy,   
        school_name_ = body.school_name,         
        school_city_ = body.school_city, 
        school_state_ = body.school_state,   
        school_attendance_method_ = body.school_attendance_method,
        certificate_title_ = body.certificate_title,
        graduated_ = body.graduated,
        completion_date_month_ = body.completion_date_month,
        completion_date_year_ = body.completion_date_year, 
        achievement_one_ = body.eduAchievement1,   
        achievement_two_ = body.eduAchievement2,
        achievement_three_ = body.eduAchievement3,  
        // realizationInCompanyThree_ = body.realizationInCompanyThree,
        createUser = `sba`
  
      if(req.body.length === 0) throw err;

      var sql = `INSERT INTO resumedb.person_education(education_id, person_id, field_study, school_name, school_city, school_state, school_attendance_method,  certificate_title, graduated_in_course, completion_date_month, completion_date_year, achievement_one, achievement_two, achievement_three, create_user) 
      VALUES (?)`;
      
      const mydata = [educationId, personId, fieldStudy, school_name_, school_city_, school_state_, school_attendance_method_, certificate_title_, graduated_, completion_date_month_, completion_date_year_, achievement_one_, achievement_two_, achievement_three_, createUser]

      await renderMysql(sql, mydata);         
      response(res);
      
      // await renderMysql(sql);       
      }catch(err){
        console.error(err)       

      }
      
      
    })

    .post('/api/tech', [
      check('tech1')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:20}).withMessage('20 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('tech2')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:20}).withMessage('20 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('tech3')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:20}).withMessage('20 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('tech4')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:20}).withMessage('20 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('tech5')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:20}).withMessage('20 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('tech6')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:20}).withMessage('20 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('tech7')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:20}).withMessage('20 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('tech8')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:20}).withMessage('20 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('tech9')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:20}).withMessage('20 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('tech10')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:20}).withMessage('20 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

    ],async (req, res) =>{       

      const body = req.body;
      console.log(req.body)

      techId = body.techId,
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
      
      const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })          
        }

      try{

        if(req.body.length === 0) throw err;

        var sql = `INSERT INTO  resumedb.person_skills_tech(tech_skill_id, person_id, skill_tech1,  skill_tech2,  skill_tech3, skill_tech4, skill_tech5,  skill_tech6, skill_tech7, skill_tech8, skill_tech9, skill_tech10, create_user) 
        VALUES (?)`;        

        const mydata = [techId, personId, tech1_, tech2_, tech3_, tech4_, tech5_, tech6_, tech7_, tech8_, tech9_, tech10_, createUser]

      await renderMysql(sql, mydata);           
        response(res);
  
      }catch(error){
        console.error(error)
        res.send(error)
      }
      
    })


    .post('/api/market',[

      check('market1')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:30}).withMessage('30 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('market2')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:30}).withMessage('30 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('market3')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:30}).withMessage('30 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('market4')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:30}).withMessage('30 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('market5')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:30}).withMessage('30 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('market6')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:30}).withMessage('30 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('market7')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:30}).withMessage('30 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('market8')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:30}).withMessage('30 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('market9')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:30}).withMessage('30 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('market10')
          .matches(/^[A-Za-z0-9 - .,'!&]+$/).isLength({max:30}).withMessage('30 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

    ], async (req, res)=> {       

      const body = req.body;
      console.log(req.body)

      marketId = body.marketId,
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

      
      const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })          
        }

      try{

        if(req.body.length === 0) throw err;

        var sql = `INSERT INTO  resumedb.person_skills_market(market_skill_id, person_id, skill_market1, skill_market2, skill_market3, skill_market4, skill_market5, skill_market6, skill_market7, skill_market8, skill_market9, skill_market10,  create_user) 
        VALUES (?)`;
        

        const mydata = [marketId, personId, market1_, market2_, market3_, market4_, market5_, market6_, market7_, market8_, market9_, market10_, createUser]


        await renderMysql(sql, mydata);       
        response(res);
  
      }catch(error){
        console.error(error)
        
      }
      
    })


    .post('/api/project', [
      check('projectRole')
          .matches(/^[A-Za-z - .,'!&]+$/).isLength({max:20}).withMessage('20 characters max')
          .notEmpty().withMessage('required').escape().trim(),

      check('projectName')
          .matches(/^[A-Za-z - .,'!&]+$/).isLength({max:20}).withMessage('20 characters max')
          .notEmpty().withMessage('required').escape().trim(),

      check('projectLanguage')
          .matches(/^[A-Za-z - .,'!&]+$/).isLength({max:50}).withMessage('50 characters max')
          .notEmpty().withMessage('required').escape().trim(),

      check('projectMonthStart').isAlpha().isLength({min:3, max:3})
        .notEmpty().withMessage('required').escape().trim(),
      check('projectYearStart').isInt().isLength({min:4, max:4})
        .notEmpty().withMessage('required').escape().trim(),

      check('projectCompleted').isAlpha().isLength({min:3, max:3})
        .escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('projectMonthEnd').isAlpha().isLength({min:3, max:3})
        .escape().trim().optional({ nullable: true, checkFalsy: true }),
      check('projectYearEnd').isInt().isLength({min:4, max:4})
        .escape().trim().optional({ nullable: true, checkFalsy: true }),
      
      check('projectUrl').isURL().escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('projectAchievementOne')
          .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:500}).withMessage('500 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('projectAchievementTwo')
          .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:500}).withMessage('500 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('projectAchievementThree')
          .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:500}).withMessage('500 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

    ],async(req, res) =>{       

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })          
      }

      try{

      const body = req.body;
      console.log(req.body)

      projectId = body.projectId,
      personId = body.pidProject, 
      projectRole_ = body.projectRole,  
      projectName_ = body.projectName,
      projectLanguage_ = body.projectLanguage, 
      projectNonthStart_ = body.projectMonthStart,   
      projectYearStart_ = body.projectYearStart,
      projectCompleted = body.projectCompleted,
      projectNonthEnd_ = body.projectMonthEnd,
      projectYearEnd_ = body.projectYearEnd, 
      projectUrl_ = body.projectUrl,   
      project_achievementOne_ = body.projectAchievementOne,
      project_achievementTwo_ = body.projectAchievementTwo,   
      project_achievementThree_ = body.projectAchievementThree,

      createUser = `sba`

      
  
      if(req.body.length === 0) throw err;

      var sql = `INSERT INTO  resumedb.person_project(project_id, person_id, project_role, project_name, project_language_used, project_month_start, project_year_start, project_completed,
      project_month_end, project_year_end, project_url, project_achievement_one, project_achievement_two, project_achievement_three, create_user) 
      VALUES (?)`;
      

      const mydata = [projectId, personId, projectRole_, projectName_, projectLanguage_, projectNonthStart_, projectYearStart_, projectCompleted, projectNonthEnd_, projectYearEnd_, projectUrl_, project_achievementOne_, project_achievementTwo_, project_achievementThree_, createUser]

      await renderMysql(sql, mydata);          
        response(res);

      }catch(err){
        console.error(err)
        
      }
      
    })



    .post('/api/work', [

      check('workType').isAlpha().isLength({min:2, max:5}).notEmpty().withMessage('required').escape().trim(),

      check('companyName')
          .matches(/^[a-zA-Z-_ ()]+$/).withMessage('Only letters allowed').isLength({max:30})
          .withMessage('30 characters max').notEmpty().withMessage('required').escape().trim(),

      check('companyCity')
          .matches(/^[a-zA-Z-_ ()]+$/).withMessage('Only letters allowed').isLength({max:30})
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('companyState')
          .matches(/^[a-zA-Z-_ ()]+$/).withMessage('Only letters allowed').isLength({max:30})
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('positionInCompany')
          .matches(/^[a-zA-Z-_ ()]+$/).withMessage('Only letters allowed').isLength({max:30})
          .notEmpty().withMessage('required').escape().trim(),
      
      check('companyStartMonth')
          .isAlpha().isLength({min:3, max:3}).notEmpty().withMessage('required').escape().trim(),

      check('companyStartYear')
          .isInt().isLength({min:4, max:4}).notEmpty().withMessage('required').escape().trim(),

      check('stillWorkHere')
          .isAlpha().isLength({min:3, max:3}).escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('companyEndMonth')
          .isAlpha().isLength({min:3, max:3}).escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('companyEndYear')
          .isInt().isLength({min:4, max:4}).escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('workAchiev1')
          .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:500}).withMessage('500 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),
      
      check('workAchiev2')
          .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:500}).withMessage('500 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('workAchiev3')
          .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:500}).withMessage('500 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('workAchiev4')
          .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:500}).withMessage('500 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('workAchiev5')
          .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:500}).withMessage('500 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('workAchiev6')
          .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:500}).withMessage('500 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('workAchiev7')
          .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:500}).withMessage('500 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('workAchiev8')
          .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:500}).withMessage('500 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('workAchiev9')
          .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:500}).withMessage('500 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

      check('workAchiev10')
          .matches(/^[A-Za-z0-9 - ().,'!&]+$/).isLength({max:500}).withMessage('500 characters max')
          .escape().trim().optional({ nullable: true, checkFalsy: true }),

    ], async(req, res) =>{    
      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })          
      }

      try{

        const body = req.body;
        console.log(req.body)

        workId = body.workId,
        personId = body.pidWork, 
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

      var sql = `INSERT INTO resumedb.person_work(work_id, person_id, work_type, company_name, company_city, company_state, job_role, work_start_month,  work_start_year, still_work_there, work_end_month, work_end_year, work_achievement1, work_achievement2, work_achievement3, work_achievement4, work_achievement5, work_achievement6, work_achievement7, work_achievement8, work_achievement9, work_achievement10,        create_user) 
      VALUES (?)`;

      const mydata = [workId, personId, workType_, companyName_, companyCity_, companyState_, positionInCompany_, companyStartMonth_, companyStartYear_, stillWorkThere_, companyEndMonth_, companyEndYear_, workAchiev1_, workAchiev2_, workAchiev3_, workAchiev4_, workAchiev5_, workAchiev6_, workAchiev7_, workAchiev8_, workAchiev9_, workAchiev10_,  createUser]

      await renderMysql(sql, mydata);       
        response(res);
      

      }catch(err){
        console.error(err)
        // res.send(error)
      }
      
    })
    
  
    



    .listen(port, () => console.log(`Server listening on port ${port}`));
    // const server = app.listen(0, () => {
    //   console.log('Listening on port:', server.address().port);
    // });
