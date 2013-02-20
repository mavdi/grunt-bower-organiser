var assert = require("assert");
var bower = require("bower");
var grunt = require("grunt");
describe("bower-organiser", function(){
    beforeEach(function(done) {
        
        grunt.config.init({
            bowerOrganiser : {
                options : {
                includeName : true
                },
                mapping : {
                    js : "lib"
                }
            }});
        bower.commands.install(["jquery"]).on("end", function(data) {
            grunt.loadTasks("../tasks").task;
            grunt.task.run(["bowerOrganiser"]);
            setTimeout(done, 2000);
        });

    })

    describe("#parse", function(){
        it("should return -1 when the value is not present", function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
})