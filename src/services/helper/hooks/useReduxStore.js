import {useDispatch, useSelector} from 'react-redux';
import {getUserRole} from '../methods';
import {rolesTypes} from '../data';

export default function () {
  //const { signedInUser } = useSelector(state => state?.auth)

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const app = useSelector(state => state.app);

  const {signedInUser} = auth;
  const {isBottomTabVisible} = auth;

  return {
    dispatch,
    auth,
    app,
    //auth
    signedInUser,
    //app
    isBottomTabVisible
  };
}
