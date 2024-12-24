import { Fragment } from 'react';

import { HeaderOnly, LayoutDefault } from '~/components/Layout/';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Contact from '~/pages/Contact';
import Upload from '~/pages/Upload';

const publicRoutes = [
      { path: '/', component: Home, layout: LayoutDefault },
      { path: '/following', component: Following, layout: LayoutDefault },
      { path: '/contact', component: Contact, layout: Fragment },
      { path: '/upload', component: Upload, layout: HeaderOnly },

]

const privateRoute = [];

export { publicRoutes, privateRoute }