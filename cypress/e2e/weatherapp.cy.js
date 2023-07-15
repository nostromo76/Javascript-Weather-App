

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

    cy.get('#searchInput').type('Chicago');
    cy.get('#searchBtn').invoke('click');

    cy.get('#weatherContainer').should('be.visible');
    cy.get('#weatherContainer').contains('Chicago');
    cy.get('#temperature').should('be.visible').invoke('text').should('match', /-?\d+/);
    cy.get('#weatherDescriptionHeader').should('be.visible')
    cy.get('#documentIconImg').should('be.visible')
    cy.get('#windSpeed').should('be.visible').and('contain','meter/s')
    cy.get('#humidity').should('be.visible').and('contain','Humidity levels:')


    //------------------------------
    
    it.only('Test search test output ', function () {
      cy.get('#searchInput').type('Novi Sad');
      cy.get('#searchBtn').invoke('click');
      cy.get('#weatherContainer').should('be.visible');
      cy.get('#weatherContainer').contains('Novi Sad');
      cy.get('#temperature').should('be.visible').invoke('text').should('match', /-?\d+/);
      cy.get('#weatherDescriptionHeader').should('be.visible')
      cy.get('#documentIconImg').should('be.visible')
      cy.get('#windSpeed').should('be.visible').and('contain','meter/s')
      cy.get('#humidity').should('be.visible').and('contain','Humidity levels:')
      cy.get('#weatherDescriptionHeader')
      .invoke('text')
      .then((element) => {
        const text = element.trim().toLowerCase();
        cy.log('text', text);
        let expectedImage;
        if (text.includes('clear')) {
          expectedImage = 'clearPicture';
        } else if (text.includes('clouds')) {
          expectedImage = 'cloudyPicture';
        } else if (text.includes('rain') || text.includes('drizzle')) {
          expectedImage = 'rainPicture';
        } else if (text.includes('mist')) {
          expectedImage = 'mistPicture';
        } else if (text.includes('thunderstorm')) {
          expectedImage = 'stormPicture';
        } else if (text.includes('snow')) {
          expectedImage = 'snowPicture';
        } else {
          expectedImage = null;
        }
        cy.log('imageeeeee', expectedImage);
        if (expectedImage) {
          cy.get('body')
            .should('have.css', 'background-image')
            .and('match', new RegExp(`url\\(".*\\/(${expectedImage})\\.jpg"\\)`));
        } else {
          cy.log('greska', expectedImage);
        }
      });
      cy.get('#searchInput').clear().type('Chicago');
      cy.get('#searchBtn').invoke('click');
      cy.get('#weatherContainer').should('be.visible');
      cy.get('#weatherContainer').contains('Chicago');
      cy.get('#temperature').should('be.visible').invoke('text').should('match', /-?\d+/);
      cy.get('#weatherDescriptionHeader').should('be.visible')
      cy.get('#documentIconImg').should('be.visible')
      cy.get('#windSpeed').should('be.visible').and('contain','meter/s')
      cy.get('#humidity').should('be.visible').and('contain','Humidity levels:')
      cy.get('#weatherDescriptionHeader')
      .invoke('text')
      .then((element) => {
        const text = element.trim().toLowerCase();
        cy.log('text', text);
        let expectedImage;
        if (text.includes('clear')) {
          expectedImage = 'clearPicture';
        } else if (text.includes('clouds')) {
          expectedImage = 'cloudyPicture';
        } else if (text.includes('rain') || text.includes('drizzle')) {
          expectedImage = 'rainPicture';
        } else if (text.includes('mist')) {
          expectedImage = 'mistPicture';
        } else if (text.includes('thunderstorm')) {
          expectedImage = 'stormPicture';
        } else if (text.includes('snow')) {
          expectedImage = 'snowPicture';
        } else {
          expectedImage = null;
        }
        cy.log('imageeeeee', expectedImage);
        if (expectedImage) {
          cy.get('body')
            .should('have.css', 'background-image')
            .and('match', new RegExp(`url\\(".*\\/(${expectedImage})\\.jpg"\\)`));
        } else {
          cy.log('greska', expectedImage);
        }
      });
    });
})
})
 
