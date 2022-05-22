import React from 'react';
import { Outlet } from 'react-router-dom';

import Container from '../../components/Container';

import './styles.css';

const Home = () => (
  <Container>
    <Outlet />
  </Container>
);

export default Home;
