//layout
import { HeaderOnly } from '~/component/Layout';
//page
import { Home, Following, Upload } from '~/pages';

//Public
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
