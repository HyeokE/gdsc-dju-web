import React from 'react';
import {
  NavTask,
  NavTaskWrapper,
  StyledLink,
  WideNavigation,
} from '../DeskNavigation/styled';
import { useNavigate } from 'react-router-dom';
import { navigationData } from '../DeskNavigation';

const DeskNavCategory = ({ routeStyle }: any) => {
  const navigate = useNavigate();
  return (
    <>
      <WideNavigation>
        <NavTaskWrapper>
          {navigationData.map((data, id) => (
            <NavTask key={id}>
              <StyledLink
                onClick={() => {
                  navigate(data.route);
                }}
                className={
                  routeStyle.includes(data.route) ? 'active' : 'noneActive'
                }
              >
                {data.title}
              </StyledLink>
            </NavTask>
          ))}
        </NavTaskWrapper>
      </WideNavigation>
    </>
  );
};

export default DeskNavCategory;
