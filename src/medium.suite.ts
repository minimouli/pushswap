/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable } from '@minimouli/framework'
import Interpreter from './objects/Interpreter'
import Reader from './objects/Reader'

suite('Medium', () => {

    suite('Positive', () => {

        test('1000', async () => {

            const input: string[] = await Reader.from('/res/positive/1000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(5000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkHasNoExtraSpaces()
            interpreter.checkHasANewLine()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

        test('2000', async () => {

            const input: string[] = await Reader.from('/res/positive/2000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(5000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkHasNoExtraSpaces()
            interpreter.checkHasANewLine()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

        test('5000', async () => {

            const input: string[] = await Reader.from('/res/positive/5000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(5000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkHasNoExtraSpaces()
            interpreter.checkHasANewLine()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

    })

    suite('Negative', () => {

        test('1000', async () => {

            const input: string[] = await Reader.from('/res/negative/1000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(5000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkHasNoExtraSpaces()
            interpreter.checkHasANewLine()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

        test('2000', async () => {

            const input: string[] = await Reader.from('/res/negative/2000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(5000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkHasNoExtraSpaces()
            interpreter.checkHasANewLine()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

        test('5000', async () => {

            const input: string[] = await Reader.from('/res/negative/5000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(5000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkHasNoExtraSpaces()
            interpreter.checkHasANewLine()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

    })

    suite('Mixed', () => {

        test('1000', async () => {

            const input: string[] = await Reader.from('/res/mixed/1000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(5000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkHasNoExtraSpaces()
            interpreter.checkHasANewLine()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

        test('2000', async () => {

            const input: string[] = await Reader.from('/res/mixed/2000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(5000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkHasNoExtraSpaces()
            interpreter.checkHasANewLine()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

        test('5000', async () => {

            const input: string[] = await Reader.from('/res/mixed/5000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(5000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkHasNoExtraSpaces()
            interpreter.checkHasANewLine()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

    })

})
