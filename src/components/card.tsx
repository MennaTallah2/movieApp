import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
export default function Card({ result }: any) {
  return (
    <div className="group cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "auto" }}
          alt="image is not available"
          placeholder="blur"
          blurDataURL={"/spinner.svg"}
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
        ></Image>
        <div className="p-2 ">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="line-clamp-1 text-xl font-bold">
            {result.title || result.name}
          </h2>
          <p className=" flex items-center ">
            {result.release_date || result.first_air_date}

            <FiThumbsUp className="h-5 mx-2" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
