import React, {useState} from 'react';
import {IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonRow} from '@ionic/react';
import NavHeader from '../components/Header/NavHeader';
import { toast } from '../utils/toast';
import useFormValidation from '../hooks/useFormValidation';
import validatePasswordReset from '../components/Auth/validatePasswordReset'
import firebase from '../firebase'

const INITIAL_STATE = {
	email: "",
	password: ""
}

const Forgot = (props) => {
	const {
		handleSubmit,
		handleChange,
		values,
		isSubmitting
	} = useFormValidation(INITIAL_STATE, validatePasswordReset, handleResetPassword)

	const [busy, setBusy] = useState(false)

	async function handleResetPassword() {
		setBusy(true)
		const { email } = values
		try {
		  await firebase.resetPassword(email)
		  toast("Check your email to reset your password.")
		  props.history.push("/login")
		} catch (err) {
		  console.error("Password Reset Error", err)
		  toast(err.message)
		}
		setBusy(false)
	}

	return (
		<IonPage>
			<NavHeader title="Forgot" />
			<IonLoading message={"Please Wait..."} isOpen={busy} />
			<IonContent>
				<IonItem lines="full">
					<IonLabel position="floating">Email</IonLabel>
					<IonInput 
						name="email" 
						values={values.email} 
						onIonChange={handleChange} 
						type="text" 
						required 
					/>
				</IonItem>

				<IonRow>
					<IonCol>
						<IonButton 
							type="submit" 
							color="primary" 
							expand="block"
							onClick={handleSubmit}
							disabled={isSubmitting}
						>
							Send Reset Link
						</IonButton>
					</IonCol>
				</IonRow>
			</IonContent>
		</IonPage>
	)
}

export default Forgot