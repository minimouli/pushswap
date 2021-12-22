/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ExpectError } from '@minimouli/framework'
import { WritableStream } from '@minimouli/io'
import { Hints } from '@minimouli/types'
import List from './List'
import Scanner from './Scanner'
import Token, { TokenType } from './Token'

class Interpreter extends WritableStream {

    private list_a: List
    private list_b: List

    private tokens: Token[] = []

    private hasInvalidOperation: boolean = false
    private invalidOperation: string = ''

    constructor(input: string[]) {
        super(new Scanner());

        const scanner: Scanner  = this.stream as Scanner
        const inputValues: number[] = input.map((elem: string) => parseInt(elem, 10))

        scanner.interpreter = this

        this.list_a = new List(inputValues)
        this.list_b = new List()
    }

    interpret(tokens: Token[]): void {

        // stop the execution if an invalid operation was found
        if (this.hasInvalidOperation)
            return

        this.tokens = this.tokens.concat(tokens)

        let token: Token | undefined

        while (token = tokens.shift()) {

            // stop the execution if an invalid operation was found
            if (this.hasInvalidOperation)
                return

            this.execute(token)
        }
    }

    private execute(token: Token): void {

        const type: TokenType = token.type

        switch (type) {
            case TokenType.SA:
                this.list_a.swap()
                break

            case TokenType.SB:
                this.list_b.swap()
                break

            case TokenType.SC:
                this.list_a.swap()
                this.list_b.swap()
                break

            case TokenType.PA:
                this.list_a.takeHead(this.list_b)
                break

            case TokenType.PB:
                this.list_b.takeHead(this.list_a)
                break

            case TokenType.RA:
                this.list_a.rotate()
                break

            case TokenType.RB:
                this.list_b.rotate()
                break

            case TokenType.RR:
                this.list_a.rotate()
                this.list_b.rotate()
                break

            case TokenType.RRA:
                this.list_a.reverseRotate()
                break

            case TokenType.RRB:
                this.list_b.reverseRotate()
                break

            case TokenType.RRR:
                this.list_a.reverseRotate()
                this.list_b.reverseRotate()
                break

            case TokenType.SPACE:
            case TokenType.NEWLINE:
                break

            default:
                this.hasInvalidOperation = true
                this.invalidOperation = token.content
        }
    }

    checkHasNoInvalidOperation(): void {

        if (!this.hasInvalidOperation)
            return

        const hint: Hints.EqualHint = {
            type: Hints.HintType.EQUAL,
            status: Hints.HintStatus.FAILURE,
            message: 'The operation is invalid.',
            received: {
                value: this.invalidOperation,
                type: Hints.ObjectType.STRING
            },
            expected: {
                value: 'sa | sb | sc | pa | pb | ra | rb | rr | rra | rrb | rrr',
                type: Hints.ObjectType.STRING
            }
        }

        throw new ExpectError(hint)
    }

    checkHasOperations(): void {

        if (this.tokens.length !== 0)
            return

        const hint: Hints.EqualHint = {
            type: Hints.HintType.EQUAL,
            status: Hints.HintStatus.FAILURE,
            message: 'The output must contain at least one operation or a new line at the end.',
            received: {
                value: '',
                type: Hints.ObjectType.STRING
            },
            expected: {
                value: 'sa | sb | sc | pa | pb | ra | rb | rr | rra | rrb | rrr',
                type: Hints.ObjectType.STRING
            }
        }

        throw new ExpectError(hint)
    }

    checkHasNoExtraSpaces(): void {

        if (this.tokens.length === 0)
            return

        const hint: Hints.EqualHint = {
            type: Hints.HintType.EQUAL,
            status: Hints.HintStatus.FAILURE,
            message: 'The output must not contain extra spaces.',
            received: {
                value: ' ',
                type: Hints.ObjectType.STRING
            },
            expected: {
                value: 'sa | sb | sc | pa | pb | ra | rb | rr | rra | rrb | rrr',
                type: Hints.ObjectType.STRING
            }
        }

        if (this.tokens[0].type === TokenType.SPACE)
            throw new ExpectError(hint)

        this.tokens.reduce((previous: Token, current: Token) => {

            if (previous.type === TokenType.SPACE && current.type === TokenType.SPACE)
                throw new ExpectError(hint)

            return current
        })
    }

    checkHasANewLine(): void {

        if (this.tokens.length === 0)
            return

        const hint: Hints.EqualHint = {
            type: Hints.HintType.EQUAL,
            status: Hints.HintStatus.FAILURE,
            message: 'The output must have a new line at the end.',
            received: {
                value: '',
                type: Hints.ObjectType.STRING
            },
            expected: {
                value: '\\n',
                type: Hints.ObjectType.STRING
            }
        }

        if (this.tokens[this.tokens.length - 1].type !== TokenType.NEWLINE)
            throw new ExpectError(hint)
    }

    checkFirstToBeSorted(): void {

        if (this.list_a.length === 0)
            return

        this.list_a.values.reduce((accumulator: number, current: number) => {

            expect(accumulator).toBeLessThanOrEqual(current)

            return current
        })
    }

    checkSecondToBeEmpty(): void {

        if (this.list_b.length === 0)
            return

        const hint: Hints.EqualHint = {
            type: Hints.HintType.EQUAL,
            status: Hints.HintStatus.FAILURE,
            message: 'The second list must be empty.',
            received: {
                value: '[...]',
                type: Hints.ObjectType.OBJECT
            },
            expected: {
                value: '[]',
                type: Hints.ObjectType.OBJECT
            }
        }

        throw new ExpectError(hint)
    }

}

export default Interpreter
