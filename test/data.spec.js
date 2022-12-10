
import {filterData } from '../src/data.js';

const arrExpected = [{'director': 'fer' }, {'director': 'fer'}, {'director': 'fer'}];

    const arrToTest = [{'director': 'fer' }, {'director': 'fer'}, {'director': 'fer'}, {'director': 'nico'}, {'director': 'rox'}];

describe('filterData', ()=> {

  it('Deberia retornar 2 si sus argumentos son 1 y 1', ()=> {

    const resultado = filterData(arrToTest, 'fer', 'director');
    expect(resultado).toEqual(arrExpected);
  })

})



