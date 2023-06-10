import React from "react";
import axiosInstance from "../request/config/axios";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import MoviesList from "@/components/MoviesList";

const getMovies = () => axiosInstance.get("/hello").then(({ data }) => data);
const moviesQueryKey = ["movies"];

export default function Home() {
  const { data: movies } = useQuery(moviesQueryKey, getMovies);

  return (
    <>
      <h1>Movies List</h1>
      <MoviesList movies={movies} />
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(moviesQueryKey, getMovies);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
