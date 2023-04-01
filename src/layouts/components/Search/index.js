import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import styles from './Search.module.scss';

import * as searchServices from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import { AccountsItem } from '~/component/AccountsItem';
import { useDebounce } from '~/hooks';
import { SearchIcon } from '~/component/Icons';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const debounce = useDebounce(searchValue, 700);

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchAip = async () => {
      setLoading(true);

      const result = await searchServices.search(debounce);

      setSearchResult(result);
      setLoading(false);
    };

    fetchAip();
  }, [debounce]);

  const handleClear = () => {
    setSearchResult([]);
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleHideResult = () => setShowResult(false);

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };
  return (
    //Using a wrapper <div> tag around the reference element solves
    //this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive={true}
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountsItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Tìm kiếm tài khoản và video"
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => {
              setShowResult(true);
            }}
          />
          {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
