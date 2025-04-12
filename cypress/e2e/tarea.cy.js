describe('Validación de contenido en la interfaz', () => {
    beforeEach(() => {
      cy.visit('https://openai.com/'); 
    });

    it('Debe mostrar el título principal', () => {
        cy.contains('What can I help with?');
      });

      it('Debe mostrar una imagen', () => {
        cy.get('img[alt="Audio Models Art card 16.9"]')
          .should('be.visible')
          .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
          });
      });

      it('Debe tener un botón para ver más opciones', () => {
        cy.get('button').should('contain.text', 'More');
      }); 
      
      it('Debe mostrar la barra lateral de navegación', () => {
        cy.get('#navigation-sidebar-desktop')
          .should('exist')           
          .and('be.visible');        
      });
      
      it('Parrafo informativo', () => {
        cy.get('div[class*="mb-2xs"]')  
          .should('exist')
          .and('be.visible');
      });
      
});
