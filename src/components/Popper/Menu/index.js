import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem
    from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);



function Menu({ children, items }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1] //{ data: items }

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) { setHistory((pre) => [...pre, item.children]) }
                    }}
                />
            )
        })
    }
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')} >
                        {
                            history.length > 1 && <Header
                                title="Language"
                                onBack={() => {
                                    setHistory(pre => pre.slice(0, pre.length - 1))
                                }} />
                        }

                        {renderItem()}
                    </PopperWrapper>
                </div>

            )}

            onHide={() => setHistory(pre => pre.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;