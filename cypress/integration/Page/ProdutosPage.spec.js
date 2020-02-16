class ProdutosPage {

    digitarProduto(strProd){
        cy.get('#search-product-input').type(strProd)
    }

    prodCervejaOriginal(){
        cy.get('#search-product-list-item-product-8771 > .css-kzmtws-productCard').click()
    }

    checkGarrafaRetornavel(){
        cy.get('.css-qm8s00-rgbCheckbox-Checkbox > .css-4g6ai3').click();
    }

    btnAdicionar(){
        cy.get('#add-product').click();
    }

    btnEntrarContinuar(){
        cy.get('#finish-order').click();
    }
}

export default ProdutosPage;