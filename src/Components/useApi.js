// Attempting to use the same reducer for multiple actions.
// export const useAPI = (url, action) => {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

  // const fetchApi = async () => {
  //   try {
  //     let res = await axios.get(url);
  //     setData(res.data.results);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  // if (loading) return <h1>Loading</h1>;
  // if (error) return <h1>Error</h1>;