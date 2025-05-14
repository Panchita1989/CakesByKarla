import FormComponent from '../components/FormComponent'
import formConfig from '../data/formData.js'
import '../styles/contact.css'


export default function SigneUp (){
    return(
        <FormComponent formData={formConfig.signeup}
        />
    )
}