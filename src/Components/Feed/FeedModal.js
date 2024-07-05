import React from "react";
import styles from "./FeedModal.module.css";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/ui";

const FeedModal = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { data, loading, error } = state.photo;
  const { modal } = state.ui;

  function handleOutsideClick({ target, currentTarget }) {
    if (target === currentTarget) dispatch(closeModal());
  }

  React.useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return;

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {loading && <Loading />}
      {!loading && error && <Error error={error} />}
      {!loading && data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
