import React from 'react';
import {NavLink} from 'react-router-dom';
import {ReactComponent as Logo} from '../../images/logoC.svg';

const Dashboard = () => {
  return (
    <div>
      <Logo />
      <NavLink to="/catalog">Каталог</NavLink>
      <NavLink to="/news">Новости</NavLink>
      <NavLink to="/delivery">Доставка</NavLink>
      <NavLink to="/aboutus">О нас</NavLink>
      <NavLink to="/contacts">Контакты</NavLink>
    </div>
  );
};

export default Dashboard;
