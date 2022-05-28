import clsx from 'clsx';
import { useCallback, useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import TippyHeadLess from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './styles.module.scss';
import { Avatar } from '@/components/Image';
// eslint-disable-next-line no-unused-vars
import {
  LogoIcon,
  SearchIcon,
  UploadIcon,
  MessageIcon,
  NotifyIcon,
  RemoveIcon,
  TickBlue,
  LoadingIcon,
  UserIcon,
} from '@/components/Icons';
import { PrimaryPopper } from '@/components/WrapPopper';

const searchPlaceHolder = 'Tìm kiếm tài khoản và video';

const [first, ...next] = 'Tải lên';
const upperCharacter = first.toUpperCase() + next.join('');

// area fake data from API
const resultSearch = [
  'Đào Lê Phương Hoa',
  'đào lê phương hoa bị phốt',
  'đào lê phương hoa dán quốc kỳ vào rốn',
  'đào lê phương hoa edit',
  'đào lê phương hoa bị phốt dán lá cờ',
  'đào lê phương hoa lộ mặt thật',
  'đào lê phương hoa nhảy',
  'đào lê phương hoa phốt',
];
const listAccount = [
  {
    nickName: 'hoaa.hanassii',
    name: 'Đào Lê Phương Hoa',
    src: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_300x300.webp?x-expires=1653926400&x-signature=2rYtONjCKFdzQYrmMzpOzNHIurs%3D',
  },
  {
    nickName: 'vtvcab.tintuc',
    name: 'VTVcab Tin tức',
    src: 'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/aa1f830afcbe8f07db1653638f9b3dcd.jpeg?x-expires=1653926400&x-signature=zYg1Mrdvm%2FR3L2c0waeI5WWyFNs%3D',
  },
  {
    nickName: 'theanh28entertainment',
    name: 'Theanh28 Entertainment',
    src: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1653926400&x-signature=nGyIniV0q29HqcUSxVMmOwr1Mg0%3D',
  },
  {
    nickName: 'tiin.vn',
    name: 'Tiin.vn',
    src: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1653926400&x-signature=GBH0EPrgpjkj37lb5gIpPxQMHo0%3D',
  },
];

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
            <div className={clsx(styles.sugContainer)} tabIndex="-1" {...attrs}>
              <PrimaryPopper>
                {/* render list result content suggest */}
                {resultSearch.map((value, index) => {
                  return (
                    <div key={index} className={clsx(styles.contentSugItem)}>
                      <div className={clsx(styles.wrapIconSearch)}>
                        <SearchIcon width={15} height={15} />
                      </div>
                      <div className={clsx(styles.wrapContentSug)}>
                        <h4>{value}</h4>
                      </div>
                    </div>
                  );
                })}
                <div className={clsx(styles.accountSugTitle)}>Tài khoản</div>
                {/* render list result account suggest */}
                {listAccount.map((account, index) => {
                  return (
                    <div key={index} className={clsx(styles.userSugItem)}>
                      <div className={clsx(styles.userAvatar)}>
                        {account.src ? <img src={account.src} alt="user-avatar" /> : <UserIcon />}
                      </div>
                      <div className={clsx(styles.userInfo)}>
                        <h4 className={clsx(styles.nickName)}>
                          {account.nickName}
                          <TickBlue width={14} height={14} />
                        </h4>
                        <span className={clsx(styles.name)}>{account.name}</span>
                      </div>
                    </div>
                  );
                })}
                <div className={clsx(styles.selectOther)}>Xem tất cả kết quả dành cho '{stateValueSearch}'</div>
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
