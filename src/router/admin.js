// Router Admin
import Index from '@/views/admin/Index'
import Edit from '@/views/admin/Edit'
import New from '@/views/admin/Add'
import Products from '@/views/admin/ProductAdmin'

export default {
  path: '/admin',
  component: Index,
  children: [
    {
      path: 'new',
      name: 'New',
      component: New
    },
    {
      path: '',
      name: 'Products',
      component: Products
    },
    {
      path: 'edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
}
