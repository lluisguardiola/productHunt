import React from 'react';
import {IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRow} from '@ionic/react';
import NavHeader from '../components/Header/NavHeader';


const EditProfile = () => {
	return (
		<IonPage>
			<NavHeader title="Edit Profile" />
			<IonContent>
				<IonItem lines="full">
					<IonLabel position="floating">Username</IonLabel>
					<IonInput name="name" type="text" required />
				</IonItem>

				<IonItem lines="full">
					<IonLabel position="floating">Email</IonLabel>
					<IonInput name="email" type="text" required />
				</IonItem>

				<IonItem lines="full">
					<IonLabel position="floating">Current Password</IonLabel>
					<IonInput name="password" type="password" required />
				</IonItem>

				<IonItem lines="full">
					<IonLabel position="floating">New Password</IonLabel>
					<IonInput name="password" type="password" required />
				</IonItem>

				<IonRow>
					<IonCol>
						<IonButton type="submit" color="primary" expand="block">Save</IonButton>
					</IonCol>
				</IonRow>
			</IonContent>
		</IonPage>
	)
}

export default EditProfile