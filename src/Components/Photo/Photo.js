import React from "react";
import { useParams } from "react-router-dom";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../store/photo";

const Photo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.photo);

  React.useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [id, dispatch]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head
          title={data.photo.title}
          description="Foto individual do cachorro"
        />
        <PhotoContent single={true} />
      </section>
    );
  else return null;
};

export default Photo;
