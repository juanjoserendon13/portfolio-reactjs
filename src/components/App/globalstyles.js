// FONTS LOAD
import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: 'Chamfort Family';
    src: url('../../fonts/ChamfortFamily-Bold.eot');
    src: url('../../fonts/ChamfortFamily-Bold.eot?#iefix') format('embedded-opentype'),
    url('../../fonts/ChamfortFamily-Bold.woff') format('woff'),
    url('../../fonts/ChamfortFamily-Bold.ttf') format('truetype');*/
    /*src: url('../../fonts/ChamfortFamily-Bold.ttf');*/
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
  	font-family: 'Akrobat';
  	src: url('../../fonts/Akrobat-Regular.eot');
  	src: url('../../fonts/Akrobat-Regular.eot?#iefix') format('embedded-opentype'),
  		url('../../fonts/Akrobat-Regular.woff') format('woff'),
  		url('../../fonts/Akrobat-Regular.ttf') format('truetype');
  	font-weight: 500;
  	font-style: normal;
}

@font-face {
  	font-family: 'Akrobat';
  	src: url('../../fonts/Akrobat-Light.eot');
  	src: url('../../fonts/Akrobat-Light.eot?#iefix') format('embedded-opentype'),
  		url('../../fonts/Akrobat-Light.woff') format('woff'),
  		url('../../fonts/Akrobat-Light.ttf') format('truetype');
  	font-weight: 300;
  	font-style: normal;
}

@font-face {
  	font-family: 'Akrobat';
  	src: url('../../fonts/Akrobat-Bold.eot');
  	src: url('../../fonts/Akrobat-Bold.eot?#iefix') format('embedded-opentype'),
  		url('../../fonts/Akrobat-Bold.woff') format('woff'),
  		url('../../fonts/Akrobat-Bold.ttf') format('truetype');
  	font-weight: bold;
  	font-style: normal;
}

`
