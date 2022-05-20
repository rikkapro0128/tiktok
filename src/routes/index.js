import Home from '../pages/home';
import Sign from '../pages/sign';
import Upload from '../pages/upload';

const privateRoutes = [];

const publicRoutes = [
  { path: '/', element: Home, layout: 'default' },
  { path: '/sign', element: Sign, layout: 'default' },
  { path: '/upload', element: Upload, layout: 'onlyHeader' },
];

export { privateRoutes, publicRoutes };
