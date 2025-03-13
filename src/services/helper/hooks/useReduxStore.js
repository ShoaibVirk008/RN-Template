import {useDispatch, useSelector} from 'react-redux';
import {setSignedInUser} from '../../../store/authSlice';
import {setIsBottomTabVisible} from '../../../store/appSlice';

export default function () {
  //const { signedInUser } = useSelector(state => state?.auth)

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const app = useSelector(state => state.app);
  console.log('useReduxStore auth: ',auth)
  console.log('useReduxStore app: ',app)

  const {signedInUser} = auth;
  const {isBottomTabVisible} = app;

  return {
    dispatch,
    auth,
    app,
    //auth states
    signedInUser,
    //app states
    isBottomTabVisible,
    //auth actions
    setSignedInUser: v => dispatch(setSignedInUser(v)),
    //app actions
    setIsBottomTabVisible: v => dispatch(setIsBottomTabVisible(v)),
  };
}
