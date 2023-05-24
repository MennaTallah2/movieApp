import Results from "@/components/results";
import { config } from "../../config";

export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${config.apiKey}&language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );
  const results = await res.json();

  return <Results results={results.results} />;
}
