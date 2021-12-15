/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable } from '@minimouli/framework'
import Interpreter from './objects/Interpreter'
import Reader from './objects/Reader'

suite('Sorted', () => {

    test('Positive', async () => {

        const input: string[] = await Reader.from('/res/positive/50_sorted')

        const exec = new Executable('pushswap', input)
        const interpreter = new Interpreter(input)

        exec.pipeStdout(interpreter)
        exec.setTimeout(2000)

        await exec.execute()

        expect(exec).toExitWith(0)

        interpreter.checkHasNoInvalidOperation()
        interpreter.checkHasOperations()
        interpreter.checkHasNoExtraSpaces()
        interpreter.checkFirstToBeSorted()
        interpreter.checkSecondToBeEmpty()
    })

    test('Negative', async () => {

        const input: string[] = await Reader.from('/res/negative/50_sorted')

        const exec = new Executable('pushswap', input)
        const interpreter = new Interpreter(input)

        exec.pipeStdout(interpreter)
        exec.setTimeout(2000)

        await exec.execute()

        expect(exec).toExitWith(0)

        interpreter.checkHasNoInvalidOperation()
        interpreter.checkHasOperations()
        interpreter.checkHasNoExtraSpaces()
        interpreter.checkFirstToBeSorted()
        interpreter.checkSecondToBeEmpty()
    })

    test('Mixed', async () => {

        const input: string[] = await Reader.from('/res/mixed/50_sorted')

        const exec = new Executable('pushswap', input)
        const interpreter = new Interpreter(input)

        exec.pipeStdout(interpreter)
        exec.setTimeout(2000)

        await exec.execute()

        expect(exec).toExitWith(0)

        interpreter.checkHasNoInvalidOperation()
        interpreter.checkHasOperations()
        interpreter.checkHasNoExtraSpaces()
        interpreter.checkFirstToBeSorted()
        interpreter.checkSecondToBeEmpty()
    })

})
