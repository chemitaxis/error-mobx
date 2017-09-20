import Loadable from '../Loadable';

const AsyncPage2 = Loadable({
  loader: () => import(/* webpackChunkName: "page2" */ './Page2')
});

export default AsyncPage2;
