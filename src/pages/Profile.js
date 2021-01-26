import React from 'react'
import {IonContent, IonPage} from "@ionic/react" 
import SmallHeader from "../components/Header/SmallHeader"
import LargeHeader from "../components/Header/LargerHeader"

const Profile = () => {
	return (
		<IonPage>
			<SmallHeader title="Profile" />
			<IonContent fullscreen>
				<LargeHeader title="Profile" />
			</IonContent>
		</IonPage>
	)
}

export default Profile