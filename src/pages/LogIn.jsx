import {Link} from 'react-router-dom'
import FormComponent from '../components/FormComponent'
import formConfig from '../data/formData.js'
import '../styles/contact.css'

export default function Login() {
    return(
        <FormComponent formData={formConfig.login}
        />
    )
}