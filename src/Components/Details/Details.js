import React from "react";
export default function Details({ movie }) {
    const movieDetails = [
      {
        label: "Name",
        value: movie.name ? movie.name : movie.show.name ? movie.show.name : "",
      },
      {
        label: "Type",
        value: movie.type ? movie.type : movie.show.type ? movie.show.type : "",
      },
  
      {
        label: "Genre",
        value: movie.genres
          ? movie.genres
          : movie.show.genres
          ? movie.show.genres
          : "",
      },
      {
        label: "Language",
        value: movie.language
          ? movie.language
          : movie.show.language
          ? movie.show.language
          : "",
      },
      {
        label: "Action",
        value: movie.status
          ? movie.status
          : movie.show.status
          ? movie.show.status
          : "",
      },
      {
        label: "Actres",
        value: movie.premiered
          ? movie.premiered
          : movie.show.premiered
          ? movie.show.premiered
          : "",
      },
      {
        label: "Summary",
        value: movie.summary
          ? movie.summary
          : movie.show.summary
          ? movie.show.summary
          : "",
      },
    ];
  
             
        );
  }