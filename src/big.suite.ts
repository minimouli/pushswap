/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable } from '@minimouli/framework'
import Interpreter from './objects/Interpreter'
import Reader from './objects/Reader'

suite('Big', () => {

    suite('Positive', () => {

        test('10000', async () => {

            const input: string[] = await Reader.from('/res/positive/10000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(10000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

        test('50000', async () => {

            const input: string[] = await Reader.from('/res/positive/50000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(30000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

    })

    suite('Negative', () => {

        test('10000', async () => {

            const input: string[] = await Reader.from('/res/negative/10000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(10000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

        test('50000', async () => {

            const input: string[] = await Reader.from('/res/negative/50000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(30000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

    })

    suite('Mixed', () => {

        test('10000', async () => {

            const input: string[] = await Reader.from('/res/mixed/10000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(10000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

        test('50000', async () => {

            const input: string[] = await Reader.from('/res/mixed/50000')

            const exec = new Executable('pushswap', input)
            const interpreter = new Interpreter(input)

            exec.pipeStdout(interpreter)
            exec.setTimeout(30000)

            await exec.execute()

            expect(exec).toExitWith(0)

            interpreter.checkHasNoInvalidOperation()
            interpreter.checkFirstToBeSorted()
            interpreter.checkSecondToBeEmpty()
        })

    })

})
