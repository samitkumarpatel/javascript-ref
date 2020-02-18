const {Builder, By, logging, until} = require('selenium-webdriver');

logging.installConsoleHandler();
logging.getLogger('webdriver.http').setLevel(logging.Level.ALL);

var driver = new Builder().forBrowser('phantomjs').build();

driver.get('http://www.google.com/ncr')
    .then(_ => driver.findElement(By.name('q')).sendKeys('webdriver'))
    .then(_ => driver.findElement(By.name('btnG')).click())
    .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(_ => driver.quit());
