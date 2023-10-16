// scss
import '../scss/style.scss';
// bootstrap
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
// header 
import header from './modules/header';
header();
// navbar 
import navbar from './modules/navbar';
navbar();
// font size
import fontSize from './modules/fontSize';
fontSize();
// // print 
import print from './modules/print';
print();
// social share
import socialShare from './modules/socialShare';
socialShare();
// footer
import footerMenu from './modules/footerMenu';
footerMenu();
// go top
import goTop from '../js/modules/goTop';
goTop();