import Loadable from '../Loadable';

const AsyncPage1 = Loadable({
  loader: () => import(/* webpackChunkName: "page1" */ './Page1')
});

export default AsyncPage1;
