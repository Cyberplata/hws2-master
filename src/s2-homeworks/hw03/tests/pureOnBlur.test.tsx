import React from 'react'
import {pureOnBlur, SetErrorType} from '../GreetingContainer'

let name: string
let error: string | null
const setError = (a: string | null) => {
    error = a
}

beforeEach(() => {
    name = ''
    error = ''
})

test('name 1', () => {
    name = '1'
    pureOnBlur(name, setError)
    expect(error).toBe('')
})
test('name 2', () => {
    name = ''
    pureOnBlur(name, setError)
    expect(error).toBe('Ошибка! Введите имя!')
})
test('name 3', () => {
    name = '    '
    pureOnBlur(name, setError)
    expect(error).toBe('Ошибка! Введите имя!')
})
