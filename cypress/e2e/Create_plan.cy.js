describe('Create Build Wealth Plan on Risevest', () => {
  
  const validEmail = 'fasasoyewumi1999@gmail.com';
  const validPassword = 'Fasasrisevest1!';

  it('should login, visit the plans page, assert the details, and check the Build Wealth plan', () => {
    cy.visit('https://app.risevest.com/login');

    // Log in with valid credentials
    cy.get('#email').type(validEmail); 
    cy.wait(3000); 
    cy.get('#password').type(validPassword); 
    cy.wait(3000); 
    cy.get('button[type="submit"]').click();
    cy.wait(3000);

    // Visit the plans page
    cy.visit('https://app.risevest.com/plans');
    cy.wait(3000);  // wait for the page to load

    // Click the Build Wealth plan
    cy.get('a[href="/plans/new/build-wealth"]').click();  
    
    // Start investing
    cy.contains('button', 'Start Investing').should('be.visible').click();
    
    // Select Nigerian currency
    cy.get('li').contains('Nigerian Naira').click();

    // Enter plan name
    cy.get('input#name').type('School Project');
    cy.get('button').contains('Continue').click();

    // Enter monthly income
    cy.get('input#name').clear();
    cy.get('input#name').type('2000000');
    cy.get('button').contains('Continue').click();

    // Enter investment percentage
    cy.get('input[name="savings"]').clear();
    cy.get('input[name="savings"]').type('30');
    cy.get('button').contains('Continue').click();

    // Enter retirement age
    cy.get('input[name="savings"]').clear();
    cy.get('input[name="savings"]').type('50');
    cy.wait(4000);

    // Add a wait to ensure validation completes and the button is enabled
    cy.wait(1000); // adjust if needed

    // Ensure the button is enabled before clicking
    cy.get('button').contains('Continue').should('not.be.disabled').click();

    // Continue with the rest of the steps
    cy.get('input[name="preference"][value="0.1"]').click();
    cy.get('button').contains('Continue').click();
    cy.get('.flex > .MuiButton-containedPrimary').click();
    cy.get('.col-span-full > .MuiButton-root').click();
    cy.get('button').contains('Create Plan').click();

    cy.url().should('include', '/plans');
  });
});
