describe('page should have input box', function() {
    var inputboxes = document.getElementsByClassName('inputBox');
    var submitbutton = document.getElementsByClassName('submitbutton');

    it('Should exist', function() {
        expect(inputboxes.length).toBe(1);
        expect(submitbutton.length).toBe(1);
    });
});
