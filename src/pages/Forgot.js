import React from 'react';
import {IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRow} from '@ionic/react';
import NavHeader from '../components/Header/NavHeader';


const Forgot = () => {
	return (
		<IonPage>
			<NavHeader title="Forgot" />
			<IonContent>
				<IonItem lines="full">
					<IonLabel position="floating">Email</IonLabel>
					<IonInput name="email" type="text" required />
				</IonItem>

				<IonRow>
					<IonCol>
						<IonButton type="submit" color="primary" expand="block">Send Reset Link</IonButton>
					</IonCol>
				</IonRow>
			</IonContent>
		</IonPage>
	)
}

export default Forgot