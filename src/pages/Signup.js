import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonRow } from '@ionic/react';
import NavHeader from '../components/Header/NavHeader';
import useFormValidation from '../hooks/useFormValidation';
import validateSignup from '../components/Auth/validateSignup'
import { toast } from '../utils/toast';

const INITIAL_STATE = {
	name: "",
	email: "",
	password: ""
}

const Signup = (props) => {
	const {
		handleSubmit,
		handleChange,
		values,
		isSubmitting
	} = useFormValidation(INITIAL_STATE, validateSignup, authenticateUser)

	const [busy, setBusy] = useState(false)

	const authenticateUser = async () => {
		setBusy(true)
		const { name, email, password } = values
		try {
			await firebase.register(name, email, password)
			toast("You have signed up successfully!")
			props.history.push("/")
		} catch (err) {
			console.error("Authentication Error", err)
			toast(err.message)
		}
		setBusy(false)
	}

	return (
		<IonPage>
			<NavHeader title="Sign Up" />
			<IonLoading message={"Please Wait..."} isOpen={busy} />
			<IonContent>
				<IonItem lines="full">
					<IonLabel position="floating">Username</IonLabel>
					<IonInput 
						name="name" 
						type="text" 
						value={values.name} 
						onIonChange={handleChange} 
						required />
				</IonItem>

				<IonItem lines="full">
					<IonLabel position="floating">Email</IonLabel>
					<IonInput 
						name="email" 
						type="text" 
						value={values.email} 
						onIonChange={handleChange} 
						required />
				</IonItem>

				<IonItem lines="full">
					<IonLabel position="floating">Password</IonLabel>
					<IonInput 
						name="password" 
						type="password" 
						value={values.password} 
						onIonChange={handleChange} 
						required />
				</IonItem>

				<IonRow>
					<IonCol>
						<IonButton 
							type="submit" 
							color="primary" 
							expand="block" 
							onClick={handleSubmit} 
							disabled={isSubmitting}>
							Sign Up
						</IonButton>
					</IonCol>
				</IonRow>
			</IonContent>
		</IonPage>
	)
}

export default Signup