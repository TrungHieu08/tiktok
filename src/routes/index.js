import routesConfig from '~/config/routes';
//layout
import { HeaderOnly } from '~/component/Layout';
//page
import { Home, Following, Upload, Profile } from '~/pages';

//Public
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
