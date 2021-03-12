import { Selector } from 'testcafe'
import faker from 'faker'

const liveStorm = Selector('[class="ma1 ma2-ns f7  relative css-3w256j"]')
const inputStorm = Selector ('[class="input-reset w-100 h-100"]')
const submitStorm = Selector ('[class="submit has-activity-color"]')
const previewStorm = Selector ('[data-action="preview"]')

fixture("Getting started with testcafe for Klaxoon")
    //https://test.klaxoon.io/join/UMWCWZ
    .page(" https://test.klaxoon.io/")
   

    test('Klaxoon visit', async t => {
    var randomEmail = faker.internet.email();
    var randomFirstName = faker.name.firstName();
    var randomLastName = faker.name.lastName();
    var ideaStorm1 = ('Etoiles');
    var ideaStorm2 = ('Année');
    var ideaStorm2 = ('Surprise');

    // here goes to klaxoon and login to the plateform
    await t.maximizeWindow()
    await t.typeText('#accessCodeInput', 'UMWCWZ')
    await t.click('#accessCode_valid')
    await t.typeText('#loginEmail', randomEmail)
    //await t.expect(Selector('.f3.mb3.mb4-ns').innerText).contains('Complétez votre compte Klaxoon')
    await t.click('[type="submit"]')
    await t.typeText('#firstname', randomFirstName)
    await t.typeText('#lastname', randomLastName)
    await t.click('[type="submit"]')
    await t.click('#pmp-speakup-btn')
    await t.click(liveStorm)
    await t.typeText(inputStorm,ideaStorm1)
    await t.click(submitStorm)
    await t.typeText(inputStorm,ideaStorm2)
    await t.click(submitStorm)
    await t.typeText(inputStorm,ideaStorm3)
    await t.click(submitStorm)
    await t.click(previewStorm)

    console.log('Klaxoon Meeting');
});

