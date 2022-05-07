import React from 'react';

import { useRecoilState } from 'recoil';
import { menuState } from '../../../../store/menu';

import { sidebar } from '../../Variants/NavigationAnimation';
import { ShortNavigation } from '../DeskNavigation/styled';
import MobileMenuCategory from '../MobileMenuCategory';
import { MobileMenuSolarSystemWrapper, MobileNavBackGround } from './styled';
import Line1 from '../../../../assets/HomeAssets/Line1';
import Line2 from '../../../../assets/HomeAssets/Line2';

const MobileMenu = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  return (
    <ShortNavigation initial={false} animate={menu.appMenu ? 'open' : 'closed'}>
      <MobileNavBackGround variants={sidebar}>
        <MobileMenuSolarSystemWrapper>
          <Line1 />
        </MobileMenuSolarSystemWrapper>
        <MobileMenuCategory />
      </MobileNavBackGround>
    </ShortNavigation>
  );
};

export default MobileMenu;
