import {useContext, useEffect, useMemo, useState} from 'react';
import {IEntry} from '../../components/Carousel/Model';
import {IResponse, StateApi} from '../../utils/Api';
import {ControllerContext} from '../../utils/Context';

export function useController() {
  const controller = useContext(ControllerContext);
  const [response, setResponse] = useState<IResponse<IEntry[]>>({
    state: StateApi.INITIALIZE,
  });
  const handleResponse = useMemo(
    () => async () => {
      try {
        setResponse({state: StateApi.LOADING});
        const marketing = await controller!.client.content.getMarketing();
        setResponse({state: StateApi.SUCCESS, data: marketing.data});
      } catch (e) {
        setResponse({state: StateApi.ERROR});
      }
    },
    [controller],
  );

  useEffect(() => {
    handleResponse();
  }, [handleResponse]);

  return {response, navigate: () => controller!.navigate('login')};
}
