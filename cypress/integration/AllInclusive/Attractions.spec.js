describe("AllInclusive test", () => {
    it("Attractions", () => {
        cy.visit('')
        cy.get("#block-secondarylinks > div > div > div > div > div > ul > li:nth-child(3) > a").click({force: true})
        cy.wait(3000)
    })
    it("item filter", () => {
        cy.get("body > div.dialog-off-canvas-main-canvas > div > main > div > div > div > div > div > section.block.block-go-attraction.block-react-attraction-list-filter.clearfix.block-wrapper > div > div > div > div > div > span > div > div:nth-child(1) > span").click({force: true})
        cy.wait(3000)
        cy.get("body > div.dialog-off-canvas-main-canvas > div > main > div > div > div > div > div > section.block.block-go-attraction.block-react-attraction-list-filter.clearfix.block-wrapper > div > div > div > div > div > span > div > div:nth-child(1) > div > div > div:nth-child(3) > label").click({force: true})
        cy.wait(3000)
        cy.get("body > div.dialog-off-canvas-main-canvas > div > main > div > div > div > div > div > section.block.block-go-attraction.block-react-attraction-list-filter.clearfix.block-wrapper > div > div > div > div > div > span > div > div:nth-child(2) > span").click({force: true})
        cy.wait(3000)
        cy.get("body > div.dialog-off-canvas-main-canvas > div > main > div > div > div > div > div > section.block.block-go-attraction.block-react-attraction-list-filter.clearfix.block-wrapper > div > div > div > div > div > span > div > div:nth-child(2) > div > div > div:nth-child(2) > label").click({force: true})
        cy.wait(3000)
        cy.get("#IconListView").click({force: true})
        cy.wait(3000)
        cy.get("#IconMapView").click({force: true})
        cy.wait(5000)
        cy.get("#IconImageView").click({force: true})
        cy.wait(3000)
    })
})