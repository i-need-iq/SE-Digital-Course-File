var Request = require('request')
var test_config = require('./test_config.json')

describe('Digital_Course_File', () => {
   
    it('Should Render Login Page', (done) => {
        let options = {
            url: `${test_config.baseURL}`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(200)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });

    

    it('Should let admin find the courses', (done) => {
        let options = {
            url: `${test_config.baseURL}/admin/course`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(200)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });


    it('Renders admin users', (done) => {
        let options = {
            url: `${test_config.baseURL}/admin/user`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(200)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });


    it('User update', (done) => {
        let options = {
            url: `${test_config.baseURL}/admin/user/update/${test_config.user_id}`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(200)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });


    it('Renders admin login page', (done) => {
        let options = {
            url: `${test_config.baseURL}/login`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(200)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });


    it('Logout of account', (done) => {
        let options = {
            url: `${test_config.baseURL}/logout`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(200)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });


    it('Changes password', (done) => {
        let options = {
            url: `${test_config.baseURL}/changePassword`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(200)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });


    it('renders admin page', (done) => {
        let options = {
            url: `${test_config.baseURL}/admin`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(200)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });


    it('Renders home page', (done) => {
        let options = {
            url: `${test_config.baseURL}/home`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(200)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });


    it('Renders dashboard page', (done) => {
        let options = {
            url: `${test_config.baseURL}/courses/dashboard/`+test_config.course_id    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(200)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });



    it('Renders Update faculty form', (done) => {
        let options = {
            url: `${test_config.baseURL}/update/faculty/`+test_config.fac_id    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(200)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });


    it('Updates faculty profile', (done) => {
        let options = {
            url: `${test_config.baseURL}/update/profile/`+test_config.fac_id   
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(200)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });


    it('Renders upload page', (done) => {
        let options = {
            url: `${test_config.baseURL}/${test_config.course_id}/file/upload`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(500)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });


    it('Renders download file page', (done) => {
        let options = {
            url: `${test_config.baseURL}/${test_config.course_id}/file/upload`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(500)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });


    it('Renders deleted file page', (done) => {
        let options = {
            url: `${test_config.baseURL}/`+test_config.course_id+`/file/delete`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(404)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });


    it('Renders mark page if else condition teacher or student ', (done) => {
        let options = {
            url: `${test_config.baseURL}/${test_config.course_id}/markfile/upload`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(500)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
            console.log(options)
        })
    });

 
    it('Delete marklist ', (done) => {
        let options = {
            url: `${test_config.baseURL}/${test_config.d_mfile_id}/${test_config.course_id}/markfile/delete`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(500)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });

    it('Uploads a assignment by finding it by id ', (done) => {
        let options = {
            url: `${test_config.baseURL}/${test_config.course_id}/assignment/upload`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(500)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });
    

    it('Find assignment submissions', (done) => {
        let options = {
            url: `${test_config.baseURL}/${test_config.assign_id}/${test_config.course_id}/assignment/submissions`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(200)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });


    it('Download assignment submission by teacher ', (done) => {
        let options = {
            url: `${test_config.baseURL}/${test_config.assign_id}/assignment/download`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(404)
            expect(res.headers).toBeDefined()
            done();
        })
    });

    it('Delete assignment ', (done) => {
        let options = {
            url: `${test_config.baseURL}'/${test_config.d_assign_id}/${test_config.d_d_course_id}/assignment/delete`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(400)
            expect(res.headers).toBeDefined()
            done();
        })
    });


    it('Find by id and delete course', (done) => {
        let options = {
            url: `${test_config.baseURL}/admin/course/delete/${test_config.d_course_id}`    
        };
        Request.get(options,(err,res)=>{
            expect(res.statusCode).toBe(200)
            expect(res.headers).toBeDefined()
            expect(res.body).toContain('html')
            done();
        })
    });



    //post 

    it('Should let admin register', (done) => {
        let {username,password,name,phoneNumber,userType} = test_config
        let options = {
            url: `${test_config.baseURL}/admin/register`  ,
            form: {username,password,name,phoneNumber,userType}
        };
        console.log(options)
        Request.post(options, (err, res) => {
            expect(res.statusCode).toBe(302)
            done();
        })
    });
    

    it('Course exists', (done) => {
        let  { courseName,courseCode} = test_config;
        let options = {
            url: `${test_config.baseURL}/admin/course`,
            form:  { courseName,courseCode}
        };
        console.log(options)
        Request.post(options, (err, res) => {
            expect(res.statusCode).toBe(302)
            done();
        })
    });


    it('Courselist checking', (done) => {
        let  { courselist} = test_config;
        let options = {
            url: `${test_config.baseURL}/admin/user/edit/${test_config.user_id}`,
            form:{courselist}
        };
        console.log(options)
        Request.post(options, (err, res) => {
            expect(res.statusCode).toBe(302)
            done();
        })
    });


    it('Updating faculty course id', (done) => {
        let  { course_id } = test_config;
        let options = {
            url: `${test_config.baseURL}/update/faculty/${test_config.fac_id}`,
            form:  { course_id }
        };
        console.log(options)
        Request.post(options, (err, res) => {
            expect(res.statusCode).toBe(302)
            done();
        })
    });

});