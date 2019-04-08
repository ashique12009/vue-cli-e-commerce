import About from '../components/views/About';
import Contact from '../components/views/Contact';
import Inventory from '../components/views/Inventory';
import ItemDetail from '../components/views/ItemDetail';

export const routes = [
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/',
        component: Inventory
    },
    {
        path: '/item/:id',
        component: ItemDetail
    }
]