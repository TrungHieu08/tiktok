//layout
import { HeaderOnly } from '~/component/Layout';
//page
import { Home, Following, Upload, Profile } from '~/pages';

//Public
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/@:nickname', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
