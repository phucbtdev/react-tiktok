import { HeaderOnly } from '~/components/Layout/';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Contact from '~/pages/Contact';
import Upload from '~/pages/Upload';

const publicRoutes = [
      { path: '/', component: Home },
      { path: '/following', component: Following },
      { path: '/contact', component: Contact, layout: null },
      { path: '/upload', component: Upload, layout: HeaderOnly },

]

const privateRoute = [];

export { publicRoutes, privateRoute }