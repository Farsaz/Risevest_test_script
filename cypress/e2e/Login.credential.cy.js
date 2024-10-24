describe('Login Tests for Risevest Web App', () => {
  // Valid credentials
  const validEmail = 'fasasoyewumi1999@gmail.com';
  const validPassword = 'Fasasrisevest1!';

  // Fasas's Invalid credentials for testing
  const invalidCredentials = [
    { email: 'invalidemail1@gmail.com', password: 'InvalidPass123!' },
    { email: 'invalidemail2@gmail.com', password: 'WrongPassword!' },
    { email: 'invalidemail3@gmail.com', password: 'AnotherInvalid123!' },
  ];

  beforeEach(() => {
    cy.visit('/');
    cy.wait(2000); 
  });

  it('should sequentially test invalid credentials and then valid credentials', () => {
    // Test for invalid credentials
    invalidCredentials.forEach(({ email, password }) => {
      // Enter invalid email and password
      cy.get('#email').clear().type(email);
      cy.wait(3000); 
      cy.get('#password').clear().type(password);
      cy.wait(3000); 

      // Click Sign In button
      cy.get('button[type="submit"]').click();
      cy.wait(3000); 

      
      cy.get('.MuiPaper-root') 
        .should('not.be.false')
        .and('contain', 'Invalid email or password'); // Assert the error message
    });

    // Test for valid credentials
    cy.get('#email').clear().type(validEmail);
    cy.wait(3000); 
    cy.get('#password').clear().type(validPassword);
    cy.wait(3000); 

    // Click Sign In button
    cy.get('button[type="submit"]').click();
    cy.wait(3000); 

    // Assert successful login by checking URL 
    cy.url().should('include', 'https://app.risevest.com/'); 
  });
});
