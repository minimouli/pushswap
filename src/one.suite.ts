/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable } from '@minimouli/framework'
import Interpreter from './objects/Interpreter'
import Reader from './objects/Reader'

suite('One', () => {

    test('Positive', async () => {

        const input: string[] = await Reader.from('/res/positive/1')

        const exec = new Executable('push_swap', input)
        const interpreter = new Interpreter(input)

        exec.pipeStdout(interpreter)
        exec.setTimeout(5000)

        await exec.execute()

        expect(exec).toExitWith(0)

        interpreter.checkHasANewLine()
        interpreter.checkHasNoOperation()
    })

    test('Negative', async () => {

        const input: string[] = await Reader.from('/res/negative/1')

        const exec = new Executable('push_swap', input)
        const interpreter = new Interpreter(input)

        exec.pipeStdout(interpreter)
        exec.setTimeout(5000)

        await exec.execute()

        expect(exec).toExitWith(0)

        interpreter.checkHasANewLine()
        interpreter.checkHasNoOperation()
    })

    test('Zero', async () => {

        const input: string[] = await Reader.from('/res/mixed/1')

        const exec = new Executable('push_swap', input)
        const interpreter = new Interpreter(input)

        exec.pipeStdout(interpreter)
        exec.setTimeout(5000)

        await exec.execute()

        expect(exec).toExitWith(0)

        interpreter.checkHasANewLine()
        interpreter.checkHasNoOperation()
    })

})
