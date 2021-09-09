import React from 'react'
import styles from './Example.module.scss'

export interface IExample {
    id: number
    message: string
}

interface PropsExample {
    example: IExample
}

function Example({ example }: PropsExample) {
    return (
        <div className={styles.container}>
            <h2 className={styles.message}>{example.message}</h2>
        </div>
    )
}

export default Example
