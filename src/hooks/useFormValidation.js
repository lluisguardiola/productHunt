import { useEffect, useState } from 'react';
import {toast} from '../utils/toast';

const useFormValidation = (initialState, validate, action) => {
	const [values, setValues] = useState(initialState)
	const [errors, setErrors] = useState({})
	const [isSubmitting, setSubmitting] = useState(false)

	useEffect(() => {
		if (isSubmitting) {
			const noErrrors = Object.keys(errors).length === 0
			if (noErrrors) {
				action()
				setValues(initialState)
				setSubmitting(false)
			} else {
				toast(Object.values(errors).join(" "))
				setSubmitting(false)
			}
		}
		// eslint-disable-next-line
	}, [errors])

	const handleChange = (event) => {
		setValues(previousValues => ({
			...previousValues,
			[event.target.name]: event.target.value
		}))
	}

	const handleSubmit = () => {
		const validationErrors = validate(values)
		setErrors(validationErrors)
		setSubmitting(true)
	}

	return {
		handleSubmit, handleChange, values, setValues, isSubmitting
	}
}

export default useFormValidation