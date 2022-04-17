import axios from "axios";
import "../App.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  const [teacher, setTeacher] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getdata();
  }, [page]);
  console.log(teacher);

  const getdata = () => {
    axios
      .get(
        `https://frosted-auspicious-tire.glitch.me/Teachers?_limit=3&_page=${page}`
      )
      .then((res) => {
        setTeacher(res.data);
      });
  };
  const Ascending = () => {
    axios
      .get(
        `https://frosted-auspicious-tire.glitch.me/Teachers?_sort=Age&_order=asc&_limit=3&_page=${page}`
      )
      .then((res) => {
        setTeacher(res.data);
      });
  };
  const Descending = () => {
    axios
      .get(
        `https://frosted-auspicious-tire.glitch.me/Teachers?_sort=Age&_order=desc&_limit=3&_page=${page}`
      )
      .then((res) => {
        setTeacher(res.data);
      });
  };
  const male = () => {
    axios
      .get(
        `https://frosted-auspicious-tire.glitch.me/Teachers?Gender=Male&_limit=3&_page=${page}`
      )
      .then((res) => {
        setTeacher(res.data);
      });
  };
  const female = () => {
    axios
      .get(
        `https://frosted-auspicious-tire.glitch.me/Teachers?Gender=Female&_limit=3&_page=${page}`
      )
      .then((res) => {
        setTeacher(res.data);
      });
  };
  return (
    <div>
      <div className="button_divs">
        <button
          onClick={() => {
            Ascending();
          }}
        >
          SortByAgeAsc
        </button>
        <button
          onClick={() => {
            Descending();
          }}
        >
          SortByAgeDesc
        </button>

        <button
          onClick={() => {
            male();
          }}
        >
          onlymale
        </button>

        <button
          onClick={() => {
            female();
          }}
        >
          onlyfemale
        </button>
      </div>
      <div className="table_div">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Gender</td>
              <td>View</td>
              <td>Class</td>
            </tr>
          </thead>
          <tbody>
            {teacher.map((el) => (
              <tr key={el.id}>
                <td>{el.Name}</td>
                <td>{el.Age}</td>
                <td>{el.Gender}</td>
                <td>
                  <button>
                    <Link to={`/viewpage/${el.id}`}>View</Link>
                  </button>
                </td>
                <td>
                  {el.Class.map((cla) => (
                    <div>
                      <span>Grade:{cla.Grade}</span>
                      <span>Section:{cla.Section}</span>
                      <span>Subject:{cla.Subject}</span>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button
          className="but"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          pre
        </button>
        <button
          className="but"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};
