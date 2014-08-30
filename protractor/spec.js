describe('Go to the contact homepage and click "Create" button', function() {
    it('Should click "Create" button', function() {
        // Load the AngularJS homepage.
        browser.get('http://localhost:8000/');

        // Click "Create" button
        element(by.id('create')).click();

        // Check if current URL contains "create"
        expect(browser.getCurrentUrl()).toContain('/create');
    });
});

describe('Set contact fiels and submit, than check if "Karen" is on the list', function() {
    it('Should set fields and check if has been saved', function() {

        // Set fields
        element(by.model('contact.name')).sendKeys('Karen');
        element(by.model('contact.address')).sendKeys('Address test, 123');
        element(by.model('contact.phone')).sendKeys('1.888.783.7000');

        // Click "Create" button
        element(by.id('create')).click();

        // Check if current URL contains "list"
        expect(browser.getCurrentUrl()).toContain('/list');

        // Check if second row is from Karen
        expect(element(by.repeater('a in contacts').row(1).column('name')).getText()).toBe('Karen');

    });
});

describe('Edit "Karen" contact and change her name to "Karen Marroum"', function() {
    it('Should update its name and check if has been updated', function() {

        // Click Karen's Edit button
        element(by.id('edit_2')).click();

        // Check if current url is /edit
        expect(browser.getCurrentUrl()).toContain('/edit');

        // Change name to "Karen Marroum"
        element(by.model('contact.name')).sendKeys(' Marroum');

        // Click "Save" button
        element(by.id('save')).click();

        // Check if current URL contains "list"
        expect(browser.getCurrentUrl()).toContain('/list');

        // Check if second row is from Karen Marroum
        expect(element(by.repeater('a in contacts').row(1).column('name')).getText()).toBe('Karen Marroum');

    });
});

describe('Delete "Karen Marroum" contact and check if dont exists anymore', function() {
    it('Should delete Karen contact', function() {

        var driver = browser.driver;

        // Click Karen's Delete button
        element(by.id('delete_2')).click();

        // Check if there's no delete_2 anymore
        driver.isElementPresent(by.id('delete_2')).then(function(present){
            expect(present).toBe(false);
        });

    });
});

