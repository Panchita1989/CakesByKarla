import brownie from '../assets/images/brownie.jpg'

const formConfig = {
    contact: {
        title: 'Contact Me',
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
            
        
    }
}

export default formConfig