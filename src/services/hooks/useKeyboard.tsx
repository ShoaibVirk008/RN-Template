// useOrientation.tsx
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { Dimensions, Keyboard } from 'react-native';
import { HelpingMethods } from '..';

export default function useKeyboard(): false | true {
  // State to hold the connection status
  const [keyboardVisible, setKeyboardVisible] = useState<false | true>(
    false
  );
  // let keyboardDidShowListener
  // let keyboardDidHideListener
  // useEffect(() => {
  //   keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => { setKeyboardVisible(true) });
  //   keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => { setKeyboardVisible(false) });
  //   // let isMounted = true
  //   // const callback = () => {
  //   //   keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => { HelpingMethods.handleAnimation(); setKeyboardVisible(true) });
  //   //   keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => { HelpingMethods.handleAnimation(); setKeyboardVisible(false) });
  //   // }
  //   // isMounted ? callback : null
  //   // return () => { isMounted = false };
  // });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, []);

    return keyboardVisible;
  }

// export default useKeyboardVisible = () => {
//   const [isKeyboadVisible, setIsKeyboadVisible] = useState(false);

//   const _keyboardDidShow = useCallback(() => {
//       setIsKeyboadVisible(true);
//   }, []);

//   const _keyboardDidHide = useCallback(() => {
//       setIsKeyboadVisible(false);
//   }, []);

//   useEffect(() => {
//       Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
//       Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

//       return () => {
//         Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
//         Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
//       };
//   }, [_keyboardDidHide, _keyboardDidShow]);

//   return isKeyboadVisible;
// };