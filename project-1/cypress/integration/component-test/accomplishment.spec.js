/* eslint-disable no-undef */
/// <reference types='cypress' />

describe("accomplishment component", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("should show error when info is missing", () => {
    cy.get('[data-cy="accomplishment-title-input"]').type(
      "My Basketball Accomplishment"
    );
    cy.get('[data-cy="accomplishment-input"]').type(
      "I made 10 threes in a row"
    );
    cy.contains("Submit Accomplishment").click();
    cy.contains("Complete the items above to continue").should("be.visible");
  });

  it("should display validation message when all input is given", () => {
    cy.get('[data-cy="accomplishment-title-input"]').type(
      "My Basketball Accomplishment"
    );
    cy.get('[data-cy="accomplishment-input"]').type(
      "I made 10 threes in a row"
    );
    cy.get('[data-cy="accomplishment-checkbox"]').click();
    cy.contains("Submit Accomplishment").click();
    cy.contains("This Accomplisment was Successfully Submitted").should(
      "be.visible"
    );
  });

  it("should return to initial page when 'Go back' btn is clicked", () => {
    cy.get('[data-cy="accomplishment-title-input"]').type(
      "My Basketball Accomplishment"
    );
    cy.get('[data-cy="accomplishment-input"]').type(
      "I made 10 threes in a row"
    );
    cy.get('[data-cy="accomplishment-checkbox"]').click();
    cy.contains("Submit Accomplishment").click();
    cy.contains("Go Back").click();
    cy.contains("h2", "Accomplishment");
    cy.get('[data-cy="accomplishment-title-input"]').should("have.value", "");
    cy.get('[data-cy="accomplishment-input"]').should("have.value", "");
    cy.get('[data-cy="accomplishment-checkbox"]').should("not.be.checked");
  });
});
