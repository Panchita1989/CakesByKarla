import brownie from '../assets/images/brownie.jpg'

const formConfig = {
    contact: {
        title: 'Contact Me',
        linkTo: '/login',
        option: 'Login first',
        fields:[
            {id: '1', name: 'name', type: 'text', placeholder: 'Name', required: true},
            {id: '2',name: 'email', type: 'email', placeholder: 'E-Mail', required: true},
            {id: '3',name: 'message', type: 'textarea', rows: '10', required: true},
            {id: '4',name: 'submit', type: 'submit', method: 'POST', content: 'Send'}
        ],
        image: {
            src: brownie, 
            alt: 'brownie'
        }
            
        
    },
    login: {
        title: 'Login',
        linkTo: '/signeup',
        option: 'SignUp',
        fields:[
            {id: '1', name: 'email', type: 'email', placeholder: 'E-Mail', required: true},
            {id: '2', name: 'password', type: 'password', required: true},
            {id: '3', name: 'submit', type: 'submit', content: 'Login'}
        ],
        image: {
            src: brownie,
            alt: 'brownie'
        },
    },
    signeup:{
        title: 'Signe Up',
        linkTo: '/login',
        option: 'Login',
        fields:[
            {id: '1', label:'name', name: 'name', type: 'text', placeholder: 'Name', required: true},
            {id: '2', label:'Surename', name: 'name', type: 'text', placeholder: 'Surename', required: true},
            {id: '3', label:'birthday', name: 'birthday', type: 'text', placeholder: 'birthday (dd.mm.yyyy)', required: true},
            {id: '4', label: 'E-Mail', name: 'email', type: 'email', placeholder: 'E-Mail', required: true},
            {id: '5', label: 'confirm E-Mail', name: 'confirmEmail', type: 'email', placeholder: 'Confirm E-Mail', required: true},
            {id: '6', label: 'Password', name: 'password', type: 'password', placeholder: 'Password', required: true},
            {id: '7', label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: 'Confirm Password', required: true},
            {id: '8', label: 'Signe Up', name: 'submit', type: 'submit', content: 'Sign Up'}
        ],
        image:{
            src:brownie,
            alt:'brownie'
        }

    }
}

export default formConfig