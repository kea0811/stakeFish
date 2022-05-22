import React from 'react';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

const Container = ({ children }) => (
  <div className="flex flex-col h-[100vh] xl:px-28">
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </div>
);

export default Container;
