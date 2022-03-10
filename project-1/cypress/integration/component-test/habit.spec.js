/* eslint-disable no-undef */
/// <reference types = 'cypress' />

describe("habit component", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });

  it("onclick of the add button displays the modal component", () => {
    cy.contains("button", "Add").click();
    cy.contains("Add a new habit").should("be.visible");
  });

  it("should display habit when added", () => {
    cy.get("#habit-add-btn").click();
    cy.get('input[placeholder="Habit"]').type("Hello World");
    cy.contains("Save Changes").click();
    cy.contains("Hello World")
      .should("be.visible")
      .and("have.class", "HabitCard__habit-container");
  });

  it("should toggle icon when a habit list is clicked", () => {
    cy.get("#habit-add-btn").click();
    cy.get('input[placeholder="Habit"]').type("Hello World");
    cy.contains("Save Changes").click();
    cy.get('[src="/static/media/close.fa7e5ead.svg"]').should("be.visible");
    cy.contains("Hello World").click();
    cy.get('[src="/static/media/check.9e8832df.svg"]').should("be.visible");
  });
});
