import Button from '~/component/Button';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button className={cx('menu-item')} lefticon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
