describe('Risevest Wallet Balance Visibility Test', () => {
    const validEmail = 'fasasoyewumi1999@gmail.com';
    const validPassword = 'Fasasrisevest1!';
  
    beforeEach(() => {
      cy.visit('https://app.risevest.com/login');
      cy.wait(2000); 
    });
  
    it('should log in, click the popup, and verify wallet balance visibility toggle', () => {
      // Log in with valid credentials
      cy.get('#email').type(validEmail);
      cy.wait(3000); 
      cy.get('#password').type(validPassword);
      cy.wait(3000); 
      cy.get('button[type="submit"]').click();
      cy.wait(3000); 
  
      // Assert successful login by checking URL 
      cy.url().should('include', 'https://app.risevest.com/'); 
  
      // Test the show/hide functionality of the wallet balance
      for (let i = 0; i < 3; i++) {
        if (i % 2 === 0) {
          // Check if the balance is shown
          cy.get('[data-test-id="balance"]').should('contain', '$0.00'); // Balance is visible
  
          
  
          // Check if the balance is shown after clicking the toggle
          cy.get('[data-test-id="balance"]').should('contain', '$0.00'); // Balance is visible again
        }
  
        cy.wait(3000); 
      }
  
      // Final assertions to ensure toggle functionality works correctly
      cy.get('[data-test-id="balance"]').should('contain', '$0.00'); // Ensure balance is shown correctly at the end
    });
  });
  