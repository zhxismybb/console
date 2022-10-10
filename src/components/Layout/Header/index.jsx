/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu, Dropdown } from '@kube-design/components';
import { isAppsPage, getWebsiteUrl } from 'utils';

import LoginInfo from '../LoginInfo';

import styles from './index.scss';

class Header extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    innerRef: PropTypes.object,
    jumpTo: PropTypes.func,
  };

  get isLoggedIn() {
    return Boolean(globals.user);
  }

  renderDropDown() {
    const navList = globals.app.getGlobalNavs();
    // eslint-disable-next-line no-console
    // console.log('%c=====', 'font-size: 35px', navList);
    return (
      <Menu onClick={this.handleMoreClick}>
        {navList.map(nav => (
          <Menu.MenuItem key={nav.name}>
            <Link to={`/${nav.name}`} data-name={nav.name}>
              <div className={styles.title}>
                <Icon name={nav.icon} size={14} type="dark" />

                {t(nav.title)}
              </div>
              <div className={styles.desc}>
                {t(
                  nav.desc ||
                    `${nav.title.replace(/\s/g, '_').toUpperCase()}_DESC`
                )}
              </div>
            </Link>
          </Menu.MenuItem>
        ))}
      </Menu>
    );
  }

  handleDocumentLinkClick = (e, key) => {
    window.open(key);
  };

  renderDocumentList() {
    const { url, api } = getWebsiteUrl();
    return (
      <Menu onClick={this.handleDocumentLinkClick} data-test="header-docs">
        <Menu.MenuItem key={url}>
          <Icon name="hammer" /> {t('User Manual')}
        </Menu.MenuItem>
        <Menu.MenuItem key={api}>
          <Icon name="api" /> {t('API Documents')}
        </Menu.MenuItem>
      </Menu>
    );
  }

  handleLinkClick = link => () => {
    this.props.jumpTo(link);
  };

  render() {
    const { className, innerRef, location } = this.props;
    // const logo = globals.config.logo || '/assets/images/logo4.svg';

    return (
      <div
        ref={innerRef}
        className={classnames(
          styles.header,
          {
            [styles.inAppsPage]: isAppsPage(),
          },
          className
        )}
      >
        <Link to={isAppsPage() && !globals.user ? '/apps' : '/'}>
          {/* <img
            className={styles.logo}
            src={isAppsPage() ? `/assets/login-logo.png` : logo}
            alt=""
          /> */}
        </Link>
        <div className="header-bottom" />
        {this.isLoggedIn && (
          <div className={styles.navs}>
            <Button
              type="flat"
              className={
                (classnames({
                  [styles.active]: location.pathname === '/',
                }),
                styles.navBtn)
              }
              onClick={this.handleLinkClick('/')}
            >
              <div className={styles.navElem}>
                <Icon name="dashboard" type="light" />
                <span className={styles.navGap}>{t('Workbench')}</span>
              </div>
            </Button>
            {globals.app.enableGlobalNav && (
              <Dropdown content={this.renderDropDown()} placement="bottomLeft">
                <Button
                  type="flat"
                  onClick={this.props.onToggleNav}
                  className={styles.navBtn}
                >
                  <div className={styles.navElem}>
                    <Icon name="cogwheel" type="light" />
                    <span className={styles.navGap}>{t('Platform')}</span>
                  </div>
                </Button>
              </Dropdown>
            )}
          </div>
        )}
        <div className={styles.right}>
          <LoginInfo className={styles.loginInfo} isAppsPage={isAppsPage()} />
        </div>
      </div>
    );
  }
}

export default Header;
