import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const Field = withStyles((theme) => ({
    root: {
        width: '100%',
    },
}))(TextField);

export default Field;
