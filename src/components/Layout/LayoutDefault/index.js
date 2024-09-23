import Header from "~/components/Layout/components/Header";
import Sidebar from "~/components/Layout/components/Sidebar";

import styles from './Layout.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function LayoutDefault({ children }) {
      return (
            <div className={cx('wrapper')}>
                  <Header></Header>
                  <div className={cx('container')}>
                        <Sidebar></Sidebar>
                        <div className={cx('content')} >{children}</div>
                  </div>
            </div>
      );
}

export default LayoutDefault;