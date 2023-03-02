import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <div className={cx('search')}>
          <input placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
          <div className={cx('closes')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          <div className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
