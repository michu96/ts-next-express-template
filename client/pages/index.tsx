import type { NextPage } from 'next'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Example, { IExample } from '../components/Example'

const Home: NextPage = () => {
    const [examples, setExamples] = useState<IExample[]>([])
    const [errorMsg, setErrorMsg] = useState('')
    const messageInput = useRef<HTMLInputElement>(null!)

    async function getExamples() {
        try {
            const result = await axios.get('http://localhost:5000/api/examples')
            setExamples(result.data)
        } catch (err: any) {
            if (err.response) {
                setErrorMsg(err.response.data.error)
            } else {
                setErrorMsg('Cannot connect with server')
            }
        }
    }

    async function addExample(e: React.FormEvent) {
        e.preventDefault()
        setErrorMsg('')
        try {
            await axios.post('http://localhost:5000/api/examples', {
                message: messageInput.current.value,
            })
            messageInput.current.value = ''
            getExamples()
        } catch (err: any) {
            console.log(err)
            if (err.response) {
                setErrorMsg(err.response.data.error)
            } else {
                setErrorMsg('Cannot connect with server')
            }
        }
    }

    useEffect(() => {
        getExamples()
    }, [])

    return (
        <div>
            <h1>Example App</h1>
            <form onSubmit={addExample}>
                <input ref={messageInput} type="text" placeholder="message" />
                <button type="submit">Add</button>
            </form>
            {errorMsg && <p className="error">{errorMsg}</p>}
            <ul>
                {examples.map((example) => (
                    <li key={example.id}>
                        <Example example={example} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
