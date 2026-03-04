import React, { useEffect } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import routes from "./routes";
import "./app.css";

function App() {
  const location = useLocation();

  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  return (
    <Container>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          {() => (
            <div ref={nodeRef} className="page">
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </Container>
  );
}

export default App;
