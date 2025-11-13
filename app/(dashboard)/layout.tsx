const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <h1>Layout Dashboard</h1>
        {children}
      </body>
    </html>
  );
};

export default Layout;
