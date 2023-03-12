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
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d22c1dc40a5752574d1e433f26a4c4d8~c5_100x100.jpeg?x-expires=1678777200&x-signature=rnAOnVzap565Nytqbq61AlwNzSo%3D"
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
