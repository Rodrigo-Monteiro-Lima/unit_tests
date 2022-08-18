const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verificar se productDetails é função ', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Verificar se a função retorna um array', () => {
    expect(Array.isArray(productDetails('Álcool gel', 'Máscara'))).toBe(true);
  });
  it('Verificar se o array retorna dois itens', () => {
    expect(productDetails('Álcool gel', 'Máscara').length).toBe(2);
  });
  it('Verificar se os dois itens dentro do array são objetos', () => {
    expect(typeof productDetails('Álcool gel', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Álcool gel', 'Máscara')[1]).toBe('object');
  });
  it('Verificar se os objetos são diferentes entre si', () => {
    const product = productDetails('Álcool gel', 'Máscara');
    expect(product[0]).not.toMatchObject(product[1]);
    expect(product[1]).not.toMatchObject(product[0]);
  });
  it('Verificar se os dois productIds terminam com 123', () => {
    const product1 = productDetails('Alcool gel', 'Máscara')[0].details.productId.endsWith('123');
    const product2 = productDetails('Alcool gel', 'Máscara')[1].details.productId.endsWith('123');
    expect(product1).toBe(true);
    expect(product2).toBe(true);
  });
});
