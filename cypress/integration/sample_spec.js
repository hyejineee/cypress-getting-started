describe('first test', ()=>{
    it('success', ()=>{
        expect(true).to.equal(true);
    })

    it('fail', ()=>{
        expect(true).to.equal(false);
    })
});


describe('visit a page', ()=>{
    it('visit', ()=>{
       cy.visit('https://example.cypress.io');
       cy.contains('type');
    })
});