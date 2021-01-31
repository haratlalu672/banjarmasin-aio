import React from "react";
import { Link } from "react-router-dom";

function News(props: any) {
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/beritas/${props.berita.id}`}>
        <div
          style={{
            backgroundImage: `url(${props.berita.gambar})`,
          }}
          className="w-full h-64 bg-blue bg-cover"
        />
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/beritas/${props.berita.id}`}>{props.berita.name}</Link>
        </h3>
        {/* <div className="font-bold mb-3">$ {props.berita.price}</div> */}
        <div className="mb-3">{props.berita.artikel}</div>
        {/* <Link
          to={`/beritas/${props.berita.id}`}
          className="bg-blue-500 text-white p-2 flex justify-center w-full"
        >
          View
        </Link> */}
      </div>
    </div>
  );
}

export default News;
