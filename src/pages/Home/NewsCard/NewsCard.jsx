import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewsCard = ({ news }) => {
  // eslint-disable-next-line react/prop-types
  const {_id, title ,image_url,details} = news;
  return (
    <div className="card mb-16  bg-base-100 shadow-xl">
      <figure>
        <img
          src={image_url}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {
            // eslint-disable-next-line react/prop-types
            details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-600 font-bold">Read More</Link></p> : <p>{details}</p>
            }
        
      </div>
    </div>
  );
};

export default NewsCard;
