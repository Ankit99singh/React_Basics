import { useEffect, useState } from "react";

function GitHub() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-600 ytext-white p-4 text-3xl">
      GitHub Followers:{data.followers}
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  );
}

export default GitHub;

export const githubInforLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json;
};
