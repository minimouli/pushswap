/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as stream from 'stream'
import Interpreter from './Interpreter'
import Token, { TokenType } from './Token'

class Scanner extends stream.Writable {

    private pos: number = 0
    private _interpreter: Interpreter | null = null

    private extra: string = ''

    // read from pushswap stdout
    _write(chunk: any, enc: string, next: () => void): void {

        let content: string = this.extra + chunk.toString()

        this.extra = ''

        if (!content.endsWith('\n') && !content.endsWith(' ')) {

            const lastIndexOf: number = content.lastIndexOf(' ')

            this.extra = content.substring(lastIndexOf + 1)
            content = content.substring(0, lastIndexOf)
        }

        this.pos = 0

        const tokens: Token[] = []
        let token: Token | null = null

        while ((token = this.getNextToken(content)) != null)
            tokens.push(token)

        this._interpreter?.interpret(tokens)

        next()
    }

    private getNextToken(chunk: string): Token | null {

        if (chunk.charAt(this.pos) === ' ') {
            this.pos++
            return new Token(' ', TokenType.SPACE)
        }

        if (chunk.charAt(this.pos) === '\n') {
            this.pos++
            return new Token('\n', TokenType.NEWLINE)
        }

        const start = this.pos

        if ('a' <= chunk.charAt(this.pos) && chunk.charAt(this.pos) <= 'z') {
            while ('a' <= chunk.charAt(this.pos) && chunk.charAt(this.pos) <= 'z')
                this.pos++
        }

        if (start === this.pos)
            return null

        const content: string = chunk.substring(start, this.pos)
        let type: TokenType = TokenType.NONE

        switch (content) {
            case 'sa':
                type = TokenType.SA
                break
            case 'sb':
                type = TokenType.SB
                break
            case 'sc':
                type = TokenType.SC
                break
            case 'pa':
                type = TokenType.PA
                break
            case 'pb':
                type = TokenType.PB
                break
            case 'ra':
                type = TokenType.RA
                break
            case 'rb':
                type = TokenType.RB
                break
            case 'rr':
                type = TokenType.RR
                break
            case 'rra':
                type = TokenType.RRA
                break
            case 'rrb':
                type = TokenType.RRB
                break
            case 'rrr':
                type = TokenType.RRR
                break
            default:
                type = TokenType.NONE
        }

        return new Token(content, type)
    }

    set interpreter(interpreter: Interpreter) {
        this._interpreter = interpreter
    }

}

export default Scanner
