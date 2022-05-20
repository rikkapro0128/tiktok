import Styles from './styles.module.scss'
import clsx from 'clsx'

console.log(Styles);

function Demo() {
  return (
    <h2 className={clsx(Styles.miru)}>Learning IUH</h2>
  );
}

export default Demo;
