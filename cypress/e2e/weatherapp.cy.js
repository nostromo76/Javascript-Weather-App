
describe('Test weather app', () => {
  beforeEach('Open page', () => {
    cy.visit('../../index.html')
  })


  it('Test page ', function () {
    cy.visit('../../index.html')
    cy.get('#intro').should('be.visible').and('have.text', 'Welcome to my Weather App!')

  })
  it('Test search input', function () {

    cy.get('#searchInput').type('Belgrade');
    cy.get('#searchBtn').invoke('click');

    cy.get('#weatherContainer').should('be.visible');
    cy.get('#weatherContainer').contains('Belgrade');
    

  })
  it('Test search test output ', function () {

    cy.get('#searchInput').type('Novi Sad');
    cy.get('#searchBtn').invoke('click');

    cy.get('#weatherContainer').should('be.visible');
    cy.get('#weatherContainer').contains('Novi Sad');
    cy.get('#temperature').should('be.visible').invoke('text').should('match', /-?\d+/);
    cy.get('#weatherDescriptionHeader').should('be.visible')
    cy.get('#documentIconImg').should('be.visible')
    cy.get('#windSpeed').should('be.visible').and('contain','meter/s')
    cy.get('#humidity').should('be.visible').and('contain','Humidity levels:')

  })
  
  });

