import chocolate from './assets/images/chocolate.jpg'
import vanilla from './assets/images/vanillaCake.jpg'
import carrot from './assets/images/carrotCake.jpg'
import cheescake from'./assets/images/cheescake.jpeg'
import chocolateChip from './assets/images/chocolateChip.jpg'
import oat from './assets/images/oat.jpeg'

const cakes = [
    {
        id: '1',
        img:{
            src: chocolate,
            alt:'Chocolate Cake'
        },
        name: 'Chocolate Cake',
        description: 'A delicious chocolate cake with rich frosting.',
        price: '$650 MXN'

    },
    {
        id: '2',
        img:{
            src: vanilla,
            alt:'Vanilla Cake'
        },
        name: 'Vanilla Cake',
        description: 'A light and fluffy vanilla cake with creamy filling.',
        price: '$650 MXN'
    },
    {
         id: '3',
        img:{
            src: carrot,
            alt:'Carrot Cake'
        },
        name: 'Carrot Cake',
        description: 'A refreshing carrot cake with a hint of cream.',
        price: '$550 MXN'
    },
    {
         id: '4',
        img:{
            src: cheescake,
            alt:'CheesCake'
        },
        name: 'Cheescake',
        description: 'A rich and creamy cheesecake topped with fresh mixed berries.',
        price: '$780 MXN'
    },
    {
       id: '5',
        img:{
            src: chocolateChip,
            alt:'ChocolateCookie'
        },
        name: 'Chocolate Chips Cookies',
        description: 'A rich and creamy cheesecake topped with fresh mixed berries.',
        price: '$80 MXN' 
    },
    {
        id: '6',
        img:{
            src: oat,
            alt:'Oatcookies'
        },
        name: 'OatCookies',
        description: 'A rich and creamy cheesecake topped with fresh mixed berries.',
        price: '$65 MXN'
    }
    
]

export default cakes