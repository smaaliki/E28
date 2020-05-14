// https://docs.cypress.io/api/introduction/api.html

describe('Add SPR test', () => {
    // Define an SPR we can use throughout our tests
    let spr = {
        index: 1,
        slug :'test-spr',
        title: 'Test SPR',
        description:
            'This is teh description for the test SPR.',
        reportedBy: 'Samer',
        priority: 'Low',
        status: 'Resolved',
        type: 'Enhancement',
        resolution: ''
      };
      
    it('Adds an SPR', () => {
      cy.visit('/sprs/create');
  
      cy.contains('h1','Add an SPR');
      
      cy.get('[data-test="spr-title-input"]').type(spr.title);
      cy.get('[data-test="spr-slug-input"]').type(spr.slug);
      cy.get('[data-test="spr-reportedBy-input"]').type(spr.reportedBy);
//      cy.get('[data-test=spr-perishable-checkbox]').check();
      cy.get('[data-test="spr-description-textarea"]').type(spr.description);
      cy.get('[data-test="add-spr-button"]').click();
      cy.get('[data-test="spr-added-confirmation"]').should('exist');
      cy.get('[data-test="return-to-sprs"]').click();
      cy.contains('[data-test="spr-title"]', spr.title);
    })
    
   /* it('Deletes an SPR', () => {
        cy.visit('/sprs');
        cy.get('[data-test="delete-spr"]').should('have.attr','onclick','deleteSPR(' + spr.index + ')').click();
    })*/  
  })
  