// Create a CarDetails uncontrolled form that uses the HTML Form API to allow the user to insert details about a car, such as the model, the year and the color. Allow the form to receive a initialData prop that contains the default values of each input, and reset the form every time the initialData value changes.

import React, { useEffect, useRef } from 'react'

export default function CarDetails({ initialData }) {
    const formRef = useRef()

    useEffect(() => {
        formRef.current.elements.model.value = initialData.model
        formRef.current.elements.year.value = initialData.year
        formRef.current.elements.color.value = initialData.color
    }, [initialData])

    return (
        <div>
            <h1>Car:</h1>
            <form ref={formRef} >
                <input name='model' />
                <input name='year' />
                <input name='color' />
            </form>
        </div>
    )
}
