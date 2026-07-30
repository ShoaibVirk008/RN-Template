import { useEffect, useState } from 'react';
import { check, request, RESULTS } from '@react-native-permissions/permissions';

const CAMERA_PERMISSION = 'camera';

const useCameraPermissions = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    check(CAMERA_PERMISSION)
      .then((result) => {
        setStatus(result);
        if (result === RESULTS.DENIED) {
          request(CAMERA_PERMISSION).then((requestResult) => {
            setStatus(requestResult);
          });
        }
      })
      .catch((error) => {
        console.error('Error checking camera permission:', error);
      });
  }, []);

  return status;
};

export default useCameraPermissions;
