import { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);