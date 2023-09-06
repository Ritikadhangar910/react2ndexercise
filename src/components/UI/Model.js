import ReactDOM from "react-dom";
import classes from "./Model.module.css";
const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const portalElement = document.getElementById("overlays");

const Model = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <div className={classes.modal}>
          <div className={classes.content}>{props.children}</div>
        </div>,
        portalElement
      )}
    </>
  );
};
export default Model;
