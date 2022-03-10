/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Locator", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("locating elements with the get command", () => {
    cy.get("button");

    //get elements with specific class
    cy.get('[class="Elements-btn btn-with-class"]');
    cy.get('[class="Elements-btn btn-with-class more-btn-classes"]');
    //get all element by tagname and class
    cy.get("button.Elements-btn");
    //get all elements with specific test id
    cy.get("[data-cy=btn-id-1]");
  });

  it("locating elements by text", () => {
    cy.contains(/unique text/i);
    //get elements with selector
    cy.contains('[type="submit"]', /Not unique text/i);
  });

  it("locating elements using find", () => {
    cy.get("#form-1").find(".btn-1");
  });
});
