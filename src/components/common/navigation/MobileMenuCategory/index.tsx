import React from 'react';
import { StyledLink } from '../DeskNavigation/styled';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';
import { CategoryLine, Menu, MenuInner, MenuWrapper } from './styled';
import './MobileMenu.css';
import { useNavigate } from 'react-router-dom';
import {
  navigationAnimate,
  navigationItemAnimate,
} from '../../Variants/NavigationAnimation';
import { navigationData } from '../DeskNavigation';

const MobileMenuCategory = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useRecoilState(menuState);

  return (
    <MenuInner
      variants={navigationAnimate}
      initial={false}
      animate={menu.appMenu ? 'open' : 'closed'}
    >
      {navigationData.map((data, id) => (
        <MenuWrapper
          variants={navigationItemAnimate}
          key={id}
          onClick={() => {
            navigate(data.route);
            setMenu({ ...menu, [MENU_KEY.APPMENU]: false });
          }}
        >
          <StyledLink>{data.title}</StyledLink>
          <CategoryLine />
        </MenuWrapper>
      ))}
    </MenuInner>
  );
};

export default MobileMenuCategory;
