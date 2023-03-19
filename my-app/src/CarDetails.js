import React, { useEffect, useRef } from 'react'

// Create a CarDetails uncontrolled form that uses the HTML Form API to allow the user to insert details about a car, such as the model, the year and the color. Allow the form to receive a initialData prop that contains the default values of each input, and reset the form every time the initialData value changes.

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
