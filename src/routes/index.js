import { Fragment } from 'react';

import { HeaderOnly, LayoutDefault } from '~/components/Layout/';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Contact from '~/pages/Contact';
import Upload from '~/pages/Upload';
import Page404 from '~/pages/Page404';

const publicRoutes = [
      { path: '/', component: Home, layout: LayoutDefault },
      { path: '/following', component: Following, layout: LayoutDefault },
      { path: '/upload', component: Upload, layout: HeaderOnly },
      { path: '/contact', component: Contact, layout: Fragment },
      { path: '*', component: Page404, layout: Fragment },

]

const privateRoute = [];

export { publicRoutes, privateRoute }