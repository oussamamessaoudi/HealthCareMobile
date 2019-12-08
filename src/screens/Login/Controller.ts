import {useContext, useMemo, useState} from 'react';
import {IResponse, StateApi} from '../../utils/Api';
import {ControllerContext} from '../../utils/Context';

interface IUser {
  username: string;
  role: string;
}

export function useController() {
  const controller = useContext(ControllerContext);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [response, setResponse] = useState<IResponse<IUser>>({
    state: StateApi.INITIALIZE,
  });
  const submit = useMemo(
    () => async () => {
      try {
        setResponse({state: StateApi.LOADING});
        const user = await controller!.client.passport.authenticate(
          username,
          password,
        );
        setResponse({state: StateApi.SUCCESS, data: user.data});
        controller!.reset('dashboard');
      } catch (e) {
        setResponse({state: StateApi.ERROR});
      }
    },
    [controller, password, username],
  );

  return {
    response,
    submit,
    username,
    setUsername,
    password,
    setPassword,
  };
}
