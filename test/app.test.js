const supertest = require('supertest')
const chai = require('chai')
const app = require(__dirname + '/../index' )

const expect = chai.expect
const request = supertest( app.listen())

describe('begin app test', function () {
    it('should equal hello world', function (done) {
        request.get('/').expect(200).end((err, res) => {
            expect(res.text).to.equal("Hello World");
            done();
        })
    });
});

