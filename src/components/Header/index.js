import styles from './styles.module.scss';
import clsx from 'clsx';
import { LogoIcon, SearchIcon, UploadIcon, MessageIcon, NotifyIcon } from '@/components/Icons';
import { Avatar } from '@/components/Image';

const searchPlaceHolder = 'Tìm kiếm tài khoản và video';

const [first, ...next] = 'Tải lên';
const upperCharacter = first.toUpperCase() + next.join('');

function Header() {
  return (
    <div className={clsx(styles.header)}>
      <div className={clsx(styles.bridge)}>
        <div className={clsx(styles.logo)}>
          {/* logo tiktok */}
          <LogoIcon />
        </div>
        <div className={clsx(styles.search)}>
          <input type="text" placeholder={searchPlaceHolder} />
          <span></span>
          <div>
            <SearchIcon />
          </div>
        </div>
        <div className={clsx(styles.control)}>
          <div className={clsx(styles.btnUpload)}>
            {/* icon upload */}
            <UploadIcon />
            <span>{upperCharacter}</span>
          </div>
          <div className={clsx(styles.btnMessage)}>
            <MessageIcon />
          </div>
          <div className={clsx(styles.btnNotify)}>
            <NotifyIcon />
          </div>
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
