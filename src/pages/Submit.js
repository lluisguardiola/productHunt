import React from 'react'
import {IonContent, IonPage} from "@ionic/react" 
import SmallHeader from "../components/Header/SmallHeader"
import LargeHeader from "../components/Header/LargerHeader"

const Submit = () => {
	return (
		<IonPage>
			<SmallHeader title="Submit" />
			<IonContent fullscreen>
				<LargeHeader title="Submit" />
			</IonContent>
		</IonPage>
	)
}

export default Submit