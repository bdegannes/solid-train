import { Style } from 'radium';
import Normalize from './Normalize';

class Reset extends Style {}

Reset.defaultProps = {
  rules: Object.assign({}, Normalize),
};

export default Reset;
