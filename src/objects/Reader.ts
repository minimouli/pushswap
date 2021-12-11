/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { File } from '@minimouli/framework'
import { Stream } from '@minimouli/types'

class Reader {

    static async from(path: string): Promise<string[]> {

        const file = File.fromMouli(path)

        return file.openReadable().then((stream: Stream.NativeReadableInterface) => {

            let content: string = ''

            return new Promise<string>((resolve) => {

                stream.on('data', (chunk: any) => {
                    content += chunk.toString()
                })

                stream.on('end', () => resolve(content))

            })
        })
        .then((content: string) => {
            return content.trim().split(' ')
        })
    }

}

export default Reader
