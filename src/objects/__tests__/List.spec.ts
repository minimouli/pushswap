/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import List from '../List'

describe('List', () => {

    describe('swap', () => {

        it('should swap the first two elements of a big list', () => {

            const values: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            const list = new List(values)

            list.swap()

            expect(list.values).toEqual([
                1, 0, 2, 3, 4, 5, 6, 7, 8, 9
            ])
        })

        it('should swap the elements of a list of two', () => {

            const values: number[] = [0, 1]
            const list = new List(values)

            list.swap()

            expect(list.values).toEqual([1, 0])
        })

        it('should not do anything on a list of 1 element', () => {

            const values: number[] = [0]
            const list = new List(values)

            list.swap()

            expect(list.values).toEqual([0])
        })

        it('should not do anything on a empty list', () => {

            const values: number[] = []
            const list = new List(values)

            list.swap()

            expect(list.values).toEqual([])
        })

    })

    describe('rotate', () => {

        it('should rotate the list toward the beginning', () => {

            const values: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            const list = new List(values)

            list.rotate()

            expect(list.values).toEqual([
                1, 2, 3, 4, 5, 6, 7, 8, 9, 0
            ])
        })

        it('should not do anything on a list of 1 element', () => {

            const values: number[] = [0]
            const list = new List(values)

            list.rotate()

            expect(list.values).toEqual([0])
        })

        it('should not do anything on a empty list', () => {

            const values: number[] = []
            const list = new List(values)

            list.rotate()

            expect(list.values).toEqual([])
        })

    })

    describe('reverseRotate', () => {

        it('should rotate the list toward the end', () => {

            const values: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            const list = new List(values)

            list.reverseRotate()

            expect(list.values).toEqual([
                9, 0, 1, 2, 3, 4, 5, 6, 7, 8
            ])
        })

        it('should not do anything on a list of 1 element', () => {

            const values: number[] = [0]
            const list = new List(values)

            list.reverseRotate()

            expect(list.values).toEqual([0])
        })

        it('should not do anything on a empty list', () => {

            const values: number[] = []
            const list = new List(values)

            list.reverseRotate()

            expect(list.values).toEqual([])
        })

    })

    describe('takeHead', () => {

        it('should take the first element and move it to the first position of a not empty list', () => {

            const list_a = new List([0, 1, 2, 3, 4])
            const list_b = new List([5, 6, 7, 8, 9])

            list_b.takeHead(list_a)

            expect(list_a.values).toEqual([
                1, 2, 3, 4
            ])
            expect(list_b.values).toEqual([
                0, 5, 6, 7, 8, 9
            ])
        })

        it('should take the first element and move it to the first position of a empty list', () => {

            const list_a = new List([0, 1, 2, 3, 4])
            const list_b = new List([])

            list_b.takeHead(list_a)

            expect(list_a.values).toEqual([
                1, 2, 3, 4
            ])
            expect(list_b.values).toEqual([0])
        })

        it('should take the first and single element and move it to the first position of a not empty list', () => {

            const list_a = new List([0])
            const list_b = new List([1, 2, 3, 4, 5])

            list_b.takeHead(list_a)

            expect(list_a.values).toEqual([])
            expect(list_b.values).toEqual([0, 1, 2, 3, 4, 5])
        })

        it('should not do anything on a empty list', () => {

            const list_a = new List([])
            const list_b = new List([0, 1, 2, 3, 4])

            list_b.takeHead(list_a)

            expect(list_a.values).toEqual([])
            expect(list_b.values).toEqual([0, 1, 2, 3, 4])
        })

    })

})
