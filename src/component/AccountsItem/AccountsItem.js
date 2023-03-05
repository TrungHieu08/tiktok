import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountsItem.module.scss';

const cx = classNames.bind(styles);

function AccountsItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/8db974dac78c1b96afc495a21c1772a5~c5_300x300.webp?x-expires=1678204800&x-signature=ZZeVsSMZjCYPMP%2FPwffR%2BsK8MlI%3D"
        alt="Van A"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Trung Hieu</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>trunghieu99</span>
      </div>
    </div>
  );
}

export default AccountsItem;
