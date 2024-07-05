import React from "react";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotosComments.module.css";
import { useSelector } from "react-redux";

const PhotoComments = ({ single, ...props }) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { data } = useSelector((state) => state.user);
  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ""}`}
      >
        {comments.map((comment) => {
          return (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          );
        })}
      </ul>
      {data && (
        <PhotoCommentsForm
          single={single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
