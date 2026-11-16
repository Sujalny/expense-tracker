import {test} from 'node:test';
import assert from 'node:assert/strict';
import {validateTransaction as validate} from './validation.js';
const valid={title:' Groceries ',amount:123.456,type:'expense',category:'Food & dining',date:'2026-11-17'};
test('normalizes description and currency precision',()=>assert.deepEqual(validate(valid),{...valid,title:'Groceries',amount:123.46}));
test('rejects invalid financial data',()=>{for(const amount of [-1,0,Infinity,NaN,'12',1e10])assert.throws(()=>validate({...valid,amount}));});
test('rejects impossible dates and unsupported values',()=>{for(const patch of [{date:'2026-02-30'},{type:'transfer'},{category:'unknown'},{title:' '}])assert.throws(()=>validate({...valid,...patch}));});
