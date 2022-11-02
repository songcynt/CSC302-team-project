const app = require("../app.js")
const supertest = require("supertest")
const requestWithSupertest = supertest(app);

describe('Testing Routes', function () {

  it('responds to /', async function() {
    const res = await requestWithSupertest.get('/');
    expect(res.status).toEqual(200);
  });
});