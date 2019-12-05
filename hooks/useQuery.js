import { useEffect, useReducer } from 'react';

const initialQueryState = {
  loading: false,
  data: null,
  error: null
};

function queryReducer(state, action) {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        error: null,
        loading: true
      };
    case 'SUCCESS':
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null
      };
    case 'ERROR':
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
}

const initialOptions = {};
const initialDeserialze = (res) => res.json();

export default function useQuery({
  url,
  options = initialOptions,
  deserialize = initialDeserialze
}) {
  const [queryState, dispatch] = useReducer(
    queryReducer,
    initialQueryState
  );

  useEffect(() => {
    if (!url) {
      return;
    }

    dispatch({ type: 'START' });
    (async () => {
      try {
        const res = await fetch(url, {
          ...options,
        });

        const data = await deserialize(res);

        if (!res.ok) {
          dispatch({ type: 'ERROR', error: data });
        } else {
          dispatch({ type: 'SUCCESS', data });
        }
      } catch (error) {
        dispatch({ type: 'ERROR', error });
      }
    })();
  }, [url, options ? JSON.stringify(options) : 0]);

  return [
    queryState.data,
    queryState.loading,
    queryState.error
  ];
}
