import config from '~/config';
//layout
import { HeaderOnly } from '~/layouts';
//page
import { Home, Following, Upload, Profile } from '~/pages';

//Public
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
