import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';

import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import { AccountsItem } from '~/component/AccountsItem';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountsItem />
                <AccountsItem />
                <AccountsItem />
                <AccountsItem />
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>
        <div className={cx('actions')}>
          <Button text>Update</Button>
          <Button primary>Login</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
