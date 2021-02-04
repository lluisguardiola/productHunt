import React, { useContext, useState } from 'react'
import {IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRow} from "@ionic/react" 
import useFormValidation from '../hooks/useFormValidation'
import validateCreateProduct from '../components/Product/validateCreateProduct'
import firebase from '../firebase'
import UserContext from '../contexts/UserContext'
import SmallHeader from "../components/Header/SmallHeader"
import LargeHeader from "../components/Header/LargerHeader"
import {toast} from '../utils/toast'

const INITIAL_STATE = {
	title: "",
	description: "",
	url: ""
}

const Submit = (props) => {
	const {user} = useContext(UserContext)
	const [submitting, setSubmitting] = useState(false)
	const {handleSubmit, handleChange, values} = useFormValidation(
		INITIAL_STATE,
		validateCreateProduct,
		handleCreate
	)

	async function handleCreate() {
		try {

			if (!user) {
				props.history.push('/login')
				return
			}

			setSubmitting(true)

			const {url, description, title} = values
			const id = firebase.db.collection("products").doc().id

			const newProduct = {
				title,
				url,
				description,
				postedBy: {
					id: user.uid,
					name: user.displayName
				},
				voteCount: 1,
				comments: [],
				votes: [{
					votedBy: {id: user.uid, name: user.displayName}
				}],
				created: Date.now()
			}

			await firebase.db.collection("products").doc(id).set(newProduct)
			props.history.push("/")
		} catch (err) {
			console.error(err)
			toast(err.message)
		}

		setSubmitting(false)
	}
	
	return (
		<IonPage>
			<SmallHeader title="Submit" />
			<IonContent fullscreen>
				<LargeHeader title="Submit" />
				<IonItem lines="full">
					<IonLabel position="floating">Title</IonLabel>
					<IonInput
						name="title"
						type="text"
						value={values.title}
						onIonChange={handleChange}
						required
					/>
				</IonItem>

				<IonItem lines="full">
					<IonLabel position="floating">Description</IonLabel>
					<IonInput
						name="description"
						type="text"
						value={values.description}
						onIonChange={handleChange}
						required
					/>
				</IonItem>

				<IonItem lines="full">
					<IonLabel position="floating">URL</IonLabel>
					<IonInput
						name="url"
						type="url"
						value={values.url}
						onIonChange={handleChange}
						required
					/>
				</IonItem>

				<IonRow>
					<IonCol>
						<IonButton
							type="submit"
							color="primary"
							expand="block"
							disabled={submitting}
							onClick={handleSubmit}
						>
							Submit
						</IonButton>
					</IonCol>
				</IonRow>
			</IonContent>
		</IonPage>
	)
}

export default Submit