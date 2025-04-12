describe('Validación de contenido en la interfaz', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html'); // o la URL de tu app
  });

  it('Debe mostrar el título principal', () => {
    cy.contains('Bienvenido a la Aplicación de Tareas');
  });

  it('Debe mostrar el logo con el alt correcto', () => {
    cy.get('img#logo')
      .should('be.visible')
      .and('have.attr', 'alt', 'Logo de la Aplicación');
  });

  it('Debe tener un botón para agregar tareas', () => {
    cy.get('button[type="submit"]').should('contain.text', 'Agregar');
  });
});