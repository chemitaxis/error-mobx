import L from 'react-loadable';
import LoaderPage from '../Common/Loader';

const Loadable = opts =>
  L({
    loading: LoaderPage,
    delay: 300,
    ...opts
  });

export default Loadable;
