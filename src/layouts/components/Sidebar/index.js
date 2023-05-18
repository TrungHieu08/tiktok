import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItems } from './Menu';
import config from '~/config';
import {
  HomeIcon,
  HomeActiveIcon,
  UseGroupIcon,
  UseGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from '~/component/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItems title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItems
          title="Following"
          to={config.routes.following}
          icon={<UseGroupIcon />}
          activeIcon={<UseGroupActiveIcon />}
        />
        <MenuItems title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
    </aside>
  );
}

export default Sidebar;
