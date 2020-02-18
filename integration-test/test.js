require('chai').should();

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('phantomjs')
    .build();
/*
driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Searchhaskfh'), 1000);
driver.quit();
*/

describe('# first integration test', ()=>{
    it('should navigate to post', done => {
            driver.get('http://google.com/')
                .then(() => driver.getTitle())
                .then((title) => title.should.equal('Google'))
                //.then(() => driver.quit())
                .then(() => done())
                .catch(error => done(error));
    });
    
    it('should get the button text', done => {
            driver.get('http://google.com/')
                .then(() => driver.findElement(webdriver.By.name("q")))
                .then((btnText) => btnText.should.equal('Google'))
                .then(() => driver.quit())
                .then(() => done())
                .catch(error => done(error));
    });
});