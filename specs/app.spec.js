import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

/**
 * Для проверки, что jest настроен правильно. Можно удалить
 */
test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

test('valid name', () =>{
    expect(nameIsValid('Jon')).toBeTruthy();
})

test('not valid name', () =>{
    expect(nameIsValid(1233)).toBeFalsy();
})

test('not valid name', () =>{
    expect(nameIsValid('   ')).toBeFalsy();
})

test('not valid name', () =>{
    expect(nameIsValid('p')).toBeFalsy();
})

test('not valid name', () =>{
    expect(nameIsValid('#$***')).toBeFalsy();
})

test('trim text', () =>{
    expect(fullTrim('1233 000 text')).toBe('1233000text');
})

test('trim text', () =>{
    expect(fullTrim(' 900 , 000 , 000')).toBe('900,000,000');
})

test('trim text', () =>{
    expect(fullTrim('  text  !!!!  ')).toBe('text!!!!');
})

test('trim text', () =>{
    expect(fullTrim('   text    second    ')).toBe('textsecond');
})

test('trim text', () =>{
    expect(fullTrim("'1233' '000 text'")).toBe("'1233''000text'");
})