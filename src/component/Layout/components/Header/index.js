import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEarthAsia,
  faKeyboard,
  faCircleQuestion,
  faEllipsisVertical,
  faUpload,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import { AccountsItem } from '~/component/AccountsItem';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;
  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
        title: 'Language',
        data: [
          {
            type: 'language',
            code: 'en',
            title: 'English',
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Vietnamese',
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: '/feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
    },
  ];

  const currenMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/profile',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coin',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        break;
      default:
    }
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <HeadlessTippy
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
        </HeadlessTippy>
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faUpload} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Update</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu items={currentUser ? currenMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image className={cx('curren-avatar')} src={images.avatar} alt="Trung Hieu" />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon className={cx('icon-btn')} icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
