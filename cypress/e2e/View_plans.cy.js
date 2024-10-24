describe('Verify plans details on Risevest after login', () => {
    const validEmail = 'fasasoyewumi1999@gmail.com';
    const validPassword = 'Fasasrisevest1!';
  
    it('should login, visit the plans page, assert the details, and check the Build Wealth plan', () => {
      // Visit the login page
      cy.visit('https://app.risevest.com/login');
  
      // Log in with valid credentials
      cy.get('#email').type(validEmail);
      cy.wait(3000);
      cy.get('#password').type(validPassword);
      cy.wait(3000);
      cy.get('button[type="submit"]').click();
      cy.wait(3000);
  
      // Assert successful login by checking URL
      cy.url().should('include', 'https://app.risevest.com/');
  
      // Visit the plans page
      cy.visit('https://app.risevest.com/plans');
      cy.wait(3000);  // wait for the page to load
  
      // Assert the presence and visibility of the "Build Wealth" plan
      cy.get('a[href="/plans/new/build-wealth"]')
        .should('be.visible')
        .within(() => {
          cy.contains('Build Wealth').should('be.visible');
          cy.contains('Invest for long-term goals like retirement with this plan. It’s your financial freedom partner. Unsure of what to invest in? Start here.')
            .should('be.visible');
        });
  
      // Assert the presence and details of the "Stocks" plan
      cy.get('a[href="/plans/new/stocks"]')
        .scrollIntoView() // Scroll to the element
        .should('be.visible')
        .within(() => {
          cy.contains('Stocks').should('be.visible');
          cy.contains('high').should('be.visible'); // Description or risk level
        });
  
      // Assert the presence and details of the "Fixed Income" plan
      cy.get('a[href="/plans/new/fixed-income"]')
        .should('be.visible')
        .within(() => {
          cy.contains('Fixed Income').should('be.visible');
          cy.contains('low').should('be.visible'); // Description or risk level
        });
  
      // Assert the presence and details of the "Real Estate" plan
      cy.get('a[href="/plans/new/real-estate"]')
        .should('be.visible')
        .within(() => {
          cy.contains('Real Estate').should('be.visible');
          cy.contains('medium').should('be.visible'); // Description or risk level
        });
  
      // Verify the details for the goal-based plans
      cy.get('a[href="/plans/goal/business"]')
        .should('be.visible')
        .within(() => {
          cy.contains('Start a Business').should('be.visible');
        });
  
      cy.get('a[href="/plans/goal/wedding"]')
        .should('be.visible')
        .within(() => {
          cy.contains('Plan a Wedding').should('be.visible');
        });
  
      // Navigate to the "Build Wealth" page directly
      cy.visit('https://app.risevest.com/plans/new/build-wealth');
      cy.wait(3000);  // wait for the page to load
  
      // Assert and compare the details 
      cy.get('p[class="text-\\[14\\.5px\\]"]')
  .should('contain.text', 'To manage your investments, Risevest charges a fee of 0.5% per year on your funds.')

        .and('not.contain.text', 'To manage your investments, Risevest charges a fee of 12.5% per month on your funds.');
    });
  });
  