import defaultAxios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const refetch = () => {
    setState({
      ...state,
      loading: true,
      error: null,
      data: null,
    });
    setTrigger(Date.now());
  };

  const [trigger, setTrigger] = useState(0);
  useEffect(() => {
    if (!opts.url) {
      return;
    }
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          error: null,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error, data: null });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;
