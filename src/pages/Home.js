import React from 'react'
import {IonContent, IonPage} from "@ionic/react" 
import SmallHeader from "../components/Header/SmallHeader"
import LargeHeader from "../components/Header/LargerHeader"

const Home = () => {
	return (
		<IonPage>
			<SmallHeader title="Hunt" />
			<IonContent fullscreen>
				<LargeHeader title="Hunt" />
			</IonContent>
		</IonPage>
	)
}

export default Home