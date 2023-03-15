import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './AccountsItem.module.scss';

const cx = classNames.bind(styles);

function AccountsItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src={images.avatar} alt="Van A" />
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
