import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Viewpagesingle = () => {
  const { id } = useParams();

  const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://frosted-auspicious-tire.glitch.me/Teachers/${id}`)
      .then((res) => {
        setuser(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      {/* <img src={"https://i.pravatar.cc/300"} alt="img" /> */}
      <div className="teacher-Details">
        <div>Name: {user.Name}</div>
        <div>Age: {user.Age}</div>
        <div>Gender: {user.Gender}</div>
      </div>
    </div>
  );
};
