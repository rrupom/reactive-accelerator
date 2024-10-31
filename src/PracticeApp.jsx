import PracticeForm from "./components/PracticeForm";
import "./styles.css";

const statuses = ["empty", "typing", "submitting", "success", "error"];

const PracticeApp = () => {
  return (
    <div>
      {statuses.map((status) => (
        <PracticeForm key={status} status={status} />
      ))}
    </div>
  );
};

export default PracticeApp;
