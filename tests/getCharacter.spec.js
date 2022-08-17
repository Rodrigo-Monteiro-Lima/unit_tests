/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
A função getCharacter recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna `undefined`.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

  {
    name: 'Nome do Personagem',
    class: 'Classe do Personagem' ,
    phrases: ['frase1', 'frase2']
  }

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Escreva pelo menos seis testes para essa função garantindo que a implementação de getCharacter está correta.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verificar se a função retorna undefined quando não recebe nenhum parâmetro', () => {
    expect(getCharacter()).toBeUndefined();
  });
  it('Verificar se a função retorna o objeto correto quando Arya é chamado', () => {
    const arya = {
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: [ 'Not today', 'A girl has no name.' ]
    }
    expect(getCharacter('Arya')).toMatchObject(arya);
  });
  it('Verificar se a função retorna o objeto correto quando Brienne é chamado', () => {
    const brienne = {
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'],
    }
    expect(getCharacter('Brienne')).toMatchObject(brienne);
  });
  it('Verificar se a função retorna o objeto correto quando Melissandre é chamado', () => {
    const melissandre = {
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: ['Death By Fire Is The Purest Death.'
      , 'For The Night Is Dark And Full Of Terrors.'],
    }
    expect(getCharacter('Melissandre')).toMatchObject(melissandre);
  });
  it('Verificar se a função é case sensitive', () => {
    const arya = {
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: [ 'Not today', 'A girl has no name.' ]
    }
    expect(getCharacter('arya')).toMatchObject(arya);
    expect(getCharacter('arya')).toMatchObject(arya);
    expect(getCharacter('ARYA')).toMatchObject(arya);
    expect(getCharacter('aRyA')).toMatchObject(arya);
    expect(getCharacter('ArYa')).toMatchObject(arya);
    expect(getCharacter('aRYa')).toMatchObject(arya);
    expect(getCharacter('AryA')).toMatchObject(arya);
  });
  it('Verificar se a função retorna undefined quando recebe um parâmetro que não está na tabela', () => {
    expect(getCharacter('Rodrigo')).toBeUndefined();
  });
});
