import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faMagnifyingGlass, faSpinner, faEarthAsia, faCloudUpload, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
      {
            icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
            title: 'English',
            children: {
                  childrenTitle: 'Language',
                  data: [
                        {
                              code: 'en',
                              title: 'English',
                        },
                        {
                              code: 'vi',
                              title: 'Vietnamese'
                        }
                  ]
            }
      },
      {
            icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
            title: 'Feedback and help',
            to: '/feedback'
      },
      {
            icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
            title: 'Keyboard shortcuts'
      }
]

function Header() {
      const [searchResult, setSearchResult] = useState([]);

      useEffect(() => {
            setTimeout(() => {
                  setSearchResult([]);
            }, 0);
      }, []);

      // Handle logic
      const handleMenuChange = (menuItem) => {
            switch (menuItem.type) {
                  case 'language':
                        // Handle change language
                        break;
                  default:
            }
      };

      let isLogin = true;

      const userMenu = [
            {
                  icon: <FontAwesomeIcon icon={faUser} />,
                  title: 'View profile',
                  to: '/@hoaa',
            },
            {
                  icon: <FontAwesomeIcon icon={faCoins} />,
                  title: 'Get coins',
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


      return (
            <header className={cx('wrapper')}>
                  <div className={cx('inner')}>
                        <img src={images.logo} alt="Tiktok" />

                        <HeadlessTippy
                              interactive
                              visible={searchResult.length > 0}
                              render={(attrs) => (
                                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                          <PopperWrapper>
                                                <h4 className={cx('search-title')}>Accounts</h4>
                                                <AccountItem />
                                                <AccountItem />
                                                <AccountItem />
                                                <AccountItem />
                                          </PopperWrapper>
                                    </div>
                              )}
                        >
                              <div className={cx('search')}>
                                    <input placeholder="Search accounts and videos" spellCheck={false} />
                                    <button className={cx('clear')}>
                                          <FontAwesomeIcon icon={faCircleXmark} />
                                    </button>
                                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                                    <button className={cx('search-btn')}>
                                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </button>
                              </div>
                        </HeadlessTippy>

                        <div className={cx('actions')}>
                              {isLogin ? (
                                    <>
                                          <Tippy content="Upload video">
                                                <button className={cx('action-btn')}>
                                                      <UploadIcon></UploadIcon>
                                                </button>
                                          </Tippy>
                                    </>
                              ) : (
                                    <>
                                          <Button outline>Upload</Button>
                                          <Button primary>Log in</Button>

                                    </>
                              )}

                              <Menu items={isLogin ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                                    {isLogin ? (
                                          <Image
                                                className={cx('user-avatar')}
                                                src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                                                alt="Nguyen Van A"
                                                fallBack="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                                          />
                                    ) : (
                                          <button className={cx('more-btn')}>
                                                <FontAwesomeIcon icon={faEllipsisVertical} />
                                          </button>
                                    )
                                    }
                              </Menu>

                        </div>
                  </div>
            </header>
      );
}

export default Header;
