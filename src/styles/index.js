import { createGlobalStyle} from 'styled-components';

import Global from './Global';
import Reset from './Reset';

const GlobalStyles = createGlobalStyle`
  ${Global}
  ${Reset}
`
export default GlobalStyles;