import { useState } from 'react';

function useAsync(asyncFunction) {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(null);

  const wrappedFunction = async (...arg) => {
    try {
      setIsloading(true);
      setIsError(null);

      const { data } = await asyncFunction(...arg);
      return data;
    } catch (error) {
      setIsError(error);
    } finally {
      setIsloading(false);
    }
  };

  return [isLoading, isError, wrappedFunction];
}

export default useAsync;
