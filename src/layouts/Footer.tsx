import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '20px', textAlign: 'center', borderTop: '1px solid #eee' }}>
      <p>&copy; {new Date().getFullYear()} Fincas G&L. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
