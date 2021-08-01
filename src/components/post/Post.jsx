import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2021/07/13/20/00/lion-6464429_960_720.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour age</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, iste
        excepturi explicabo blanditiis expedita consequuntur perspiciatis, modi
        deleniti enim architecto perferendis quisquam quo! Molestias odit fugiat
        vitae cumque illo quis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptate, iste excepturi explicabo blanditiis
        expedita consequuntur perspiciatis, modi deleniti enim architecto
        perferendis quisquam quo! Molestias odit fugiat vitae cumque illo
        quisLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        iste excepturi explicabo blanditiis expedita consequuntur perspiciatis,
        modi deleniti enim architecto perferendis quisquam quo! Molestias odit
        fugiat vitae cumque illo quisLorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptate, iste excepturi explicabo blanditiis
        expedita consequuntur perspiciatis, modi deleniti enim architecto
        perferendis quisquam quo! Molestias odit fugiat vitae cumque illo quis
      </p>
    </div>
  );
}
