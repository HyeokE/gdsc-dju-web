import React from 'react';
import { StyledLabel, StyledLi, StyledUl } from './styled';
import './AdminTopMenu.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

type Props = {
  tabs: { label: string; route: string }[];
  setSelectedCategory: (selectedCategory: string) => void;
  selectedCategory: string;
};
const AdminTopMenu = ({
  tabs,
  setSelectedCategory,
  selectedCategory,
}: Props) => {
  const navigate = useNavigate();

  return (
    <nav>
      <StyledUl>
        {tabs.map((item) => (
          <StyledLi
            key={item.label}
            onClick={() => {
              setSelectedCategory(item.route);
              navigate(item.route);
            }}
          >
            <StyledLabel
              className={item.route === selectedCategory ? 'selected' : ''}
            >
              {item.label}
            </StyledLabel>
            {item.route === selectedCategory && (
              <motion.div className="underline" layoutId="underline" />
            )}
          </StyledLi>
        ))}
      </StyledUl>
    </nav>
  );
};

export default AdminTopMenu;
