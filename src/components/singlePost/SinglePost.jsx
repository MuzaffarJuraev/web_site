import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://cdn.pixabay.com/photo/2021/05/10/10/46/yellow-wall-6243164_960_720.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Muzaffarjon</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae
          possimus totam mollitia assumenda pariatur recusandae quia, dolorem,
          laborum a commodi officia optio doloremque id. Dignissimos ab qui nisi
          molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt quae possimus totam mollitia assumenda pariatur recusandae
          quia, dolorem, laborum a commodi officia optio doloremque id.
          Dignissimos ab qui nisi molestias! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Incidunt quae possimus totam mollitia
          assumenda pariatur recusandae quia, dolorem, laborum a commodi officia
          optio doloremque id. Dignissimos ab qui nisi molestias! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Incidunt quae possimus
          totam mollitia assumenda pariatur recusandae quia, dolorem, laborum a
          commodi officia optio doloremque id. Dignissimos ab qui nisi
          molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt quae possimus totam mollitia assumenda pariatur recusandae
          quia, dolorem, laborum a commodi officia optio doloremque id.
          Dignissimos ab qui nisi molestias!
        </p>
      </div>
    </div>
  );
}
