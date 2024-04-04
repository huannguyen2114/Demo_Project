import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./state/AuthContext";
import { UserProvider } from "./state/UserContext";
import { CourseProvider } from "./state/CourseContext";
import { ModalProvider } from "./state/ModalContext";
import { StudentProvider } from "./state/StudentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <UserProvider>
        <CourseProvider>
          <StudentProvider>
            <ModalProvider>
              <Routes>
                <Route path="/*" element={<App />} />
              </Routes>
            </ModalProvider>
          </StudentProvider>
        </CourseProvider>
      </UserProvider>
    </AuthProvider>
  </BrowserRouter>,
);
