import axios from "axios";
import { useEffect, useReducer, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
const initstate = {
  Name: "",
  Age: "",
  Gender: "",
  Class: [],
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_NAME":
      return { ...state, Name: payload };

    case "UPDATE_AGE":
      return { ...state, Age: payload };

    case "UPDATE_GENDER":
      return { ...state, Gender: payload };

    case "ADD_CLASS":
      return { ...state, Class: [...state.Class, payload] };

    case "RESET_FORM":
      return { ...initstate };
    default:
      throw new Error("wrong in locar reducer");
  }
};

export const Add_teacher = () => {
  const [state, dispatch] = useReducer(reducer, initstate);
  //   const rduxdispatch = useDispatch();
  const [grade, setGrade] = useState("");
  const [section, setSection] = useState("");
  const [subject, setSubject] = useState("");
  const { Name, Class, Gender, Age } = state;

  //   const { token, username } = useSelector((state) => state.login);
  // console.log(token, username);
  const [userinfo, setUserinfo] = useState({});

  const createfomr = () => {
    const details = { ...state };
    axios
      .post(`https://frosted-auspicious-tire.glitch.me/Teachers`, details)
      .then((Res) => {
        console.log(Res.data);
      });
    // console.log("hii.");
  };

  //   useEffect(() => {
  //     fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token.token}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((res) => setUserinfo(res))
  //       .catch((err) => console.log(err));
  //   }, []);

  return (
    <div className="main_container">
      <div className="title">
        <div className="input_title">
          <input
            type="text"
            placeholder="Enter Name of teacher"
            name=""
            id=""
            value={Name}
            onChange={(e) =>
              dispatch({ type: "UPDATE_NAME", payload: e.target.value })
            }
          />
        </div>

        <div className="input_title">
          <input
            type="text"
            placeholder="Enter Age"
            value={Age}
            onChange={(e) =>
              dispatch({ type: "UPDATE_AGE", payload: e.target.value })
            }
          />
        </div>
        <div className="chechboxdiv">
          <input
            type="radio"
            checked={Gender === "Male"}
            onChange={(e) =>
              dispatch({ type: "UPDATE_GENDER", payload: "Male" })
            }
          />
          <label>Male</label>
          <br />
          <input
            type="radio"
            checked={Gender === "Female"}
            onChange={(e) =>
              dispatch({ type: "UPDATE_GENDER", payload: "Female" })
            }
          />
          <label>Female</label>
          <br />
          <input
            type="radio"
            checked={Gender === "Others"}
            onChange={(e) =>
              dispatch({ type: "UPDATE_GENDER", payload: "Others" })
            }
          />
          <label>Others</label>
        </div>
      </div>

      {/* subtask */}
      <div className="subtask">
        <h4>Add classk</h4>
        <div className="add_btn_div">
          <div>
            <input
              type="text"
              placeholder="add Grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
            <input
              type="text"
              placeholder="add section"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            />
            <input
              type="text"
              placeholder="add subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={() => {
                const payload = {
                  Grade: grade,
                  Subject: subject,
                  Section: section,
                };
                dispatch({ type: "ADD_CLASS", payload });
              }}
            >
              ADD
            </button>
            <div>
              {Class.map((el) => (
                <div key={el.id}>
                  <span>{el.Grade}</span>
                  <span>{el.Subject}</span>
                  <span>{el.Section}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* date  */}
      <div className="date">
        <div>
          <button onClick={createfomr}>Add Teacher</button>
        </div>
      </div>
    </div>
  );
};
