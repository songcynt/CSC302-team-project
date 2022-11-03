const app = require("../app.js")
const supertest = require("supertest")
const requestWithSupertest = supertest(app);

describe('Testing Routes', function () {

  it('responds to /', async function() {
    const res = await requestWithSupertest.get('/');
    expect(res.status).toEqual(200);
    expect(res.text).toEqual("I am running! I'm gonna talk to a database!");
  });

  it('responds to /api/question1', async function() {
    const res = await requestWithSupertest.get('/api/question1');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('salaries');
    expect(res.body['salaries'].length > 0);
    expect(res.body).toHaveProperty('departments');
    expect(res.body['departments'].length > 0);
  });
});