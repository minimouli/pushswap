/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

class List {

    private _values: number[]

    constructor(values: number[] = []) {
        this._values = values
    }

    swap(): void {

        if (this.length < 2)
            return

        this._values = [this._values[1], this._values[0], ...this._values.slice(2)]
    }

    rotate(): void {

        const elem: number | undefined = this._values.shift()

        if (elem === undefined)
            return

        this._values.push(elem)
    }

    reverseRotate(): void {

        const elem: number | undefined = this._values.pop()

        if (elem === undefined)
            return

        this._values.unshift(elem)
    }

    takeHead(other: List): void {

        const elem: number | undefined = other.shift()

        if (elem === undefined)
            return

        this._values.unshift(elem)
    }

    shift(): number | undefined {
        return this._values.shift()
    }

    get values(): number[] {
        return this._values
    }

    get length(): number {
        return this._values.length
    }

}

export default List
