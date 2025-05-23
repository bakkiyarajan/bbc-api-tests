import { Given,When,Then } from '@cucumber/cucumber';
import request from 'supertest';
import { expect } from 'chai';


Given('the API url {string} is available', async function (baseUrl) {
  this.baseUrl = baseUrl; 
  });

When('I send a GET request to {string}', async function (endpoint) {
  const start = Date.now();
  const response = await request(this.baseUrl).get(endpoint);
  response.duration = Date.now() - start;
  this.response = response;
 });

Then('the response status should be {int}', function (statusCode) {
  expect(this.response.status).to.equal(statusCode);
});

Then('the response time should be below {int} milliseconds', function (ms) {
  expect(this.response.duration).to.be.below(ms);
});

Then('each item should have a non-empty {string} field', function (field) {
  const items = this.response.body.data;
  items.forEach(item => {
    expect(item[field]).to.exist;
    expect(item[field]).to.not.be.empty;
  });
});

Then("each item's {string} should be {string}", function (field, value) {
  const items = this.response.body.data;
  items.forEach(item => {
    expect(item[field]).to.equal(value);
   });
});

Then("each item's \"title_list.primary\" should not be null or empty", function () {
  const items = this.response.body.data;
  items.forEach(item => {
    expect(item.title_list).to.exist;
    expect(item.title_list.primary).to.exist;
    expect(item.title_list.primary).to.not.be.empty;
   });
 });

Then('exactly one item should have "offset.now_playing" set to true', function () {
  const count = this.response.body.data.filter(item => item.offset && item.offset.now_playing === true).length;
  expect(count).to.equal(1);
});

Then('the response should include a valid "Date" header', function () {
  expect(this.response.headers).to.have.property('date');
  const date = new Date(this.response.headers.date);
  expect(date.toString()).to.not.equal('Invalid Date');
});