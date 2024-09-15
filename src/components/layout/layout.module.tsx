import React from 'react';
import Header from './header/header.module';
import Footer from './footer/footer.module';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;