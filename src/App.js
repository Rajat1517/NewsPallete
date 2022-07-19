import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);

  //  setProgress=(progress)=>{
  //     progress= progress;
  // }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={2.5}
          color="#f11946"
          progress={progress}
          // onLoaderFinished={ ()=> setProgress(0)}
        />
        <Routes>
          <Route exact path="/" element={ <News setProgress={setProgress} key="general" pageSize={5} country="in" category="general" />} />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={5}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={5}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={5}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={5}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={5}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={5}
                country="in"
                category="science"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// 4a3c5ef5efde4a9b80c1343d940537ae

// 79eaae2b4e9b4a399750549d58cd3b83
