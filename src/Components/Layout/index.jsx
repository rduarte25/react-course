import PropTypes from 'prop-types';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

function Layout({ children }) {
  return (
    <div className="flex flex-col items-center mt-20">
      {children}
    </div>
  )
}

export { Layout };
