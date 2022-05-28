import clsx from 'clsx';
import { memo } from 'react';

import styles from './styles.module.scss';

function PopperPrimary({ children }) {
  return <div className={clsx(styles.wrapPopper)}>{children}</div>;
}

export default memo(PopperPrimary);
