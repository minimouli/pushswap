/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable } from '@minimouli/framework'
import Interpreter from './objects/Interpreter'
import Reader from './objects/Reader'

suite('Small', () => {

    suite('Positive', () => {

        test('10', async () => {

            const input: string[] = await Reader.from('/res/positive/10')

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

        test('50', async () => {

            const input: string[] = await Reader.from('/res/positive/50')

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

        test('100', async () => {

            const input: string[] = await Reader.from('/res/positive/100')

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

        test('500', async () => {

            const input: string[] = await Reader.from('/res/positive/500')

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

        test('10', async () => {

            const input: string[] = await Reader.from('/res/negative/10')

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

        test('50', async () => {

            const input: string[] = await Reader.from('/res/negative/50')

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

        test('100', async () => {

            const input: string[] = await Reader.from('/res/negative/100')

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

        test('500', async () => {

            const input: string[] = await Reader.from('/res/negative/500')

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

        test('10', async () => {

            const input: string[] = await Reader.from('/res/mixed/10')

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

        test('50', async () => {

            const input: string[] = await Reader.from('/res/mixed/50')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(3000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkHasNoExtraSpaces()
            interpreter.checkHasANewLine()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

        test('100', async () => {

            const input: string[] = await Reader.from('/res/mixed/100')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(3000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkHasNoExtraSpaces()
            interpreter.checkHasANewLine()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

        test('500', async () => {

            const input: string[] = await Reader.from('/res/mixed/500')

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
