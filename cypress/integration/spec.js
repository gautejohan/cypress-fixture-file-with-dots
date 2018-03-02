describe('Cypress fixture', () => {
  it('should handle fixture name without prefix', () => {
    cy.fixture('usertest1').then((json) => {
      console.log('Finds file without extension with one dot');
    })
  });
  it('should handle several dots in fixture name', () => {
    cy.fixture('user.test.1').then((json) => {
      console.log(json);
    });
  })
})
