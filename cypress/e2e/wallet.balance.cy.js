describe('Risevest Wallet Balance Test', () => {
  const validEmail = 'fasasoyewumi1999@gmail.com';
  const validPassword = 'Fasasrisevest1!';

  beforeEach(() => {
    cy.visit('https://app.risevest.com/login');
    cy.wait(2000); 
  });

  it('should log in, click the popup, and verify wallet balance', () => {
    // Log in with valid credentials
    cy.get('#email').type(validEmail);
    cy.wait(3000); 
    cy.get('#password').type(validPassword);
    cy.wait(3000); 
    cy.get('button[type="submit"]').click();
    cy.wait(3000); 

    // Assert successful login by checking URL 
    cy.url().should('include', 'https://app.risevest.com/');
 

    // Verify wallet balance
    cy.get('[data-test-id="balance"]').should('contain', '$0.00');

    // Assert that the balance is not $10,000 and not -$12,064
    cy.get('[data-test-id="balance"]').invoke('text').then((balance) => {
      expect(balance).to.not.equal('$10,000');
      expect(balance).to.not.equal('-$12,064');
    });
  });
});
