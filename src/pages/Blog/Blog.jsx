import axios from 'axios';

const Blog = async () => {
  const feeds = axios.get('https://medium.com/feed/@lucignation');
  const res = await feeds;
  console.log(feeds);
  console.log(res);
  return (
    <>
      <h2>Blog Page</h2>
      <div></div>
    </>
  );
};

export default Blog;
