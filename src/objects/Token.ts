/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

enum TokenType {
    NONE, // default
    SPACE, // empty space
    NEWLINE, // new line
    SA, // swap the first two elements of list_a
    SB, // swap the first two elements of list_b
    SC, // sa and sb at the same time
    PA, // take the first element from list_b and move it to the first position on the list_a
    PB, // take the first element from list_a and move it to the first position on the list_b
    RA, // rotate list_a toward the beginning, the first element will become the last
    RB, // rotate list_b toward the beginning, the first element will become the last
    RR, // rr and rb at the same time
    RRA, // rotate list_a toward the end, the last element will become the first
    RRB, // rotate list_b toward the end, the last element will become the first
    RRR // rra and rrb at the same time
}

class Token {

    readonly content: string
    readonly type: TokenType

    constructor(content: string, type: TokenType) {
        this.content = content
        this.type = type
    }

}

export default Token
export {
    TokenType
}
