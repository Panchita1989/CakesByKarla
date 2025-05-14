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
        linkTo: '/singUp',
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
}

export default formConfig