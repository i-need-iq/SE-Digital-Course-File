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



    it('Admin Course', (done) => {
        let  { courseCode,courseName } = test_config;
        let options = {
            url: `${test_config.baseURL}/admin/course`,
            form:  { courseCode,courseName }
        };
        console.log(options)
        Request.post(options, (err, res) => {
            expect(res.statusCode).toBe(302)
            done();
        })
    });


    // it('Should Delete the Added Course', (done) => {
    //     let options = {
    //         url: `${test_config.baseURL}/admin/course/delete/60c192027fa3834ffc030d63`   
    //     };
    //     Request.get(options,(err,res)=>{
    //         expect(res.statusCode).toBe(200)
    //         expect(res.headers).toBeDefined()
    //         expect(res.body).toContain('html')
    //         done();
    //     })
    // });



});