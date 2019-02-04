import React from 'react';

const MovieReviews = ({ reviews }) => {
  return (
    <ul className="review-list">
      {reviews.map((review, idx) =>
        <li key={idx} className="review">
          <p>Title: {review.display_title}</p>
          <p>Review: <a href={review.link.url} >{review.link.suggested_link_text}</a></p>
        </li>
      )}
    </ul>
  );
};

export default MovieReviews;