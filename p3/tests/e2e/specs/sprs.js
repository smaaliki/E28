// https://docs.cypress.io/api/introduction/api.html

describe('SPRs test', () => {
  // Define an SPR we can use throughout our tests
 
  let spr = {
    slug :'unauthorized-admin-page-login',
      title: 'Unauthorized Admin Page Login',
  }
  it('Visits the homepage', () => {
    cy.visit('/')
    cy.contains('h1', 'E28: Project 3')
  })

  it('Shows all SPRs', () => {
    cy.visit('/sprs')
    cy.contains('h2', 'SPRs')
    cy.contains('[data-test="spr-title"]', spr.title);

    cy.get('[data-test="spr-title"]').should('have.length', 11);

   /* cy.get('[data-test="edit-spr"]').should('have.attr','href').and('include', spr.slug );
    cy.click();
    cy.url().should('include', '/spr/' + spr.slug);*/
  })

  it('Visits the Dashboard', () => {
    cy.visit('/dashboard')
    cy.contains('h2', 'Type')
    cy.contains('h2', 'Priority')
    cy.contains('h2', 'Status')
  })

})
