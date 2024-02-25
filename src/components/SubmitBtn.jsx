import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      className="btn btn-primary btn-block uppercase"
      disabled={isSubmitting}
      type="submit"
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner text-primary"></span>
          submitting...
        </>
      ) : (
        text || "Submit"
      )}
    </button>
  );
};
export default SubmitBtn;
