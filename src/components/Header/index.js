import clsx from 'clsx';
import { useCallback, useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import TippyHeadLess from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './styles.module.scss';
import { Avatar } from '@/components/Image';
// eslint-disable-next-line no-unused-vars
import { LogoIcon, SearchIcon, UploadIcon, MessageIcon, NotifyIcon, RemoveIcon, LoadingIcon } from '@/components/Icons';
import { PrimaryPopper } from '@/components/WrapPopper';

const searchPlaceHolder = 'Tìm kiếm tài khoản và video';

const [first, ...next] = 'Tải lên';
const upperCharacter = first.toUpperCase() + next.join('');

function Header() {
  const [stateValueSearch, setStateValueSearch] = useState('');
  const [visible, setVisible] = useState(false);

  const hide = () => setVisible(false);
  const show = () => setVisible(true);
  const handleRemoveSearch = useCallback(() => {
    setStateValueSearch(() => '');
    hide();
  }, []);
  useEffect(() => {
    console.log(stateValueSearch);
    if (stateValueSearch) {
      // fake fetch API data
      setTimeout(() => {
        show();
      }, 1000);
    }
  }, [stateValueSearch]);
  function handleValueSearch(value) {
    setStateValueSearch(value);
  }

  return (
    <div className={clsx(styles.header)}>
      <div className={clsx(styles.bridge)}>
        <div className={clsx(styles.logo)}>
          {/* logo tiktok */}
          <LogoIcon />
        </div>
        <TippyHeadLess
          visible={visible}
          interactive
          onClickOutside={hide}
          render={(attrs) => (
            <div className={clsx(styles.popper)} tabIndex="-1" {...attrs}>
              <PrimaryPopper>
                <h1>Kết quả tìm kiếm</h1>
              </PrimaryPopper>
            </div>
          )}
        >
          <div className={clsx(styles.search)}>
            <div className={clsx(styles.wrapInput)}>
              <input
                type="text"
                placeholder={searchPlaceHolder}
                onClick={stateValueSearch ? show : hide}
                value={stateValueSearch}
                onChange={(e) => {
                  handleValueSearch(e.target.value);
                }}
              />
              {!stateValueSearch || <RemoveIcon onRemoveSearchValue={handleRemoveSearch} height={16} width={16} />}
              {/* <div>
                {!stateClose || <LoadingIcon height={16} width={16} />}
              </div> */}
            </div>
            <span className={clsx(styles.verticalSplit)}></span>
            <div className={clsx(styles.searchIcon, { [styles.bold]: !!stateValueSearch })}>
              <SearchIcon />
            </div>
          </div>
        </TippyHeadLess>
        <div className={clsx(styles.control)}>
          <div className={clsx(styles.btnUpload)}>
            {/* icon upload */}
            <UploadIcon />
            <span>{upperCharacter}</span>
          </div>
          <Tippy content="Tin nhắn">
            <div className={clsx(styles.btnMessage)}>
              <MessageIcon />
            </div>
          </Tippy>
          <Tippy content="Hộp thư">
            <div className={clsx(styles.btnNotify)}>
              <NotifyIcon />
            </div>
          </Tippy>
          <div className={clsx(styles.btnProfile)}>
            <div
              style={{
                backgroundImage: `url(${Avatar})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
