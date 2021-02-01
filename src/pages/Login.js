import React, {useState} from 'react';
import {IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow} from '@ionic/react';
import NavHeader from '../components/Header/NavHeader';
import { toast } from '../utils/toast';
import useFormValidation from '../hooks/useFormValidation';
import validateLogin from '../components/Auth/validateLogin'
import firebase from '../firebase'

const INITIAL_STATE = {
	email: "",
	password: ""
}

const Login = (props) => {
	const {
		handleSubmit,
		handleChange,
		values,
		isSubmitting
	} = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser)

	const [busy, setBusy] = useState(false)

	async function authenticateUser() {
		setBusy(true)
		const { email, password } = values
		try {
		  await firebase.login(email, password)
		  toast("You have logged in successfully!")
		  props.history.push("/")
		} catch (err) {
		  console.error("Authentication Error", err)
		  toast(err.message)
		}
		setBusy(false)
	}

	return (
		<IonPage>
			<NavHeader title="Login" />
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

				<IonItem lines="full">
					<IonLabel position="floating">Password</IonLabel>
					<IonInput 
						name="password" 
						values={values.password} 
						onIonChange={handleChange} 
						type="password" 
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
							Log In
						</IonButton>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol class="ion-text-center ion-padding vertical">
						<IonRouterLink routerLink={`/forgot`}>Forgot Password?</IonRouterLink>
					</IonCol>
				</IonRow>
			</IonContent>
		</IonPage>
	)
}

export default Login