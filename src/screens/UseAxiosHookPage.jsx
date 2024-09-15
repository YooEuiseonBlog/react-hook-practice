import styles from "../css/App.module.css"; // CSS 모듈을 import하여 컴포넌트에 스타일 적용
import useAxios from "../hooks/useAxios";

const UseAxiosHookPage = () => {
  const {
    loading,
    data: movieData,
    error,
    refetch,
  } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(
    `Loading: ${loading}\nError:${error}\nData:${JSON.stringify(movieData)}`
  );
  console.log(movieData);
  return (
    <div className={`${styles.app}`}>
      <h1>{movieData && movieData.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
      <ul>
        {movieData &&
          movieData.data.data.movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default UseAxiosHookPage; // 컴포넌트 export
