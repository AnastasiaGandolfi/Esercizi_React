import React, { useEffect, useRef } from 'react'

export default function CarDetails({ initialData }) {
    const formRef = useRef(null)

    useEffect(() => {
        formRef.current.reset()
    }, [initialData])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        const model = formData.get('model')
        const year = formData.get('year')
        const color = formData.get('color')
        console.log(`Model: ${model}, Year: ${year} Color: ${color}`);
    }


    return (
        <div>
            <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col w-2/4'>
                <label htmlFor="model">Model:</label>
                <input type='text' name='model' defaultValue={initialData.model}className='border-4 border-red-500' />
                <label htmlFor="year">Year:</label>
                <input type='text' name='year' defaultValue={initialData.year}className='border-4 border-red-500' />
                <label htmlFor="color">Color:</label>
                <input type='text' name='color' defaultValue={initialData.color}className='border-4 border-red-500' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
