
const API_KEY=process.env.API_KEY;

export default async function Home({searchParams}:any) {

  const genre=searchParams.genre || "fetchTrending";
  console.log(genre);
  
  const res = await fetch(`https://api.themoviedb.org/3/${genre==='fetchTopRated'?"movie/top_rated":"trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,{next:{revalidate:10000}})

  const data=await res.json();

  console.log("======>",data)
  return (
    <>
    <h1 className='text-red-400'>hey there</h1>
    </>


  )
}
