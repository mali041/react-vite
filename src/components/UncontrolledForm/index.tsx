import "./UncontrolledForm.module.css";

const Uncontrolled: React.FC = () => (
  <form className="uncontrolled-form">
    <input type="text" placeholder="Type here..." className="input-field" />
    <button className="submit-button">Submit</button>
  </form>
);

export default Uncontrolled;
