cy.get("th").eq(index).then(ans => {
  expect(ans.text().trim()).to.eq(value);
});

