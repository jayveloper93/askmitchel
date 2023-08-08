'use client'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { BsSend } from 'react-icons/bs'
import { useRouter } from "next/navigation" 
import { getOpenAi } from '../app/api/openai/route'

const QuestionBox = () => {
    const [question, setQuestion] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState("")
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()

        // console.log(question)
        // return

        if (!question) {
            alert('Entry is empty!')
            return
        }

        setQuestion('')
        setResponse('')

        console.log('Getting response from Mitchel...')

        try {
          setIsLoading(true);

        const res = await fetch('/api/openai', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({prompt: question}),
        },
        {cache: 'no-store'})

        if (!res.ok) {
          throw new Error('Failed to fetch response'), {
            cause: {
              res,
            }
          }
      }

        const data = await res.json()

        setIsLoading(false)
        setResponse(data.text)

       // router.push(`/${question}`)
        } catch (error) {
          console.log('Error loading response: ', error)
          switch (error.cause.res?.status) {
            case 400: break;
            case 401: break;
            case 404: break;
            case 500: break;
          }
          handle(error)
          throw error
        }
        
    }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        {isLoading ? (<small>Waiting for response from Mitchel...</small>) : (<small>{response}</small>)}
        <form  onSubmit={handleSubmit} className='w-full md:w-[50%] h-fit mx-6 p-6 shadow-2xl flex items-center gap-1 rounded-2xl'>
                <input type="text" value={question} placeholder='How Can I help you today?' onChange={(event) => setQuestion(event.target.value)} className='w-full border border-gray-200 p-3 rounded-2xl' />

                <button type='submit' className='w-fit flex items-center gap-2 bg-secondary text-primary p-3 rounded-2xl hover:bg-tertiary hover:text-black'><BsSend className='text-[24px] text-tertiary'/></button>
        </form>

    </div>
  )
}

export default QuestionBox