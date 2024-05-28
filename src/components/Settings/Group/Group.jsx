import PropTypes from "prop-types";

export default function Group({ onSave, selectedRow }) {
  return (
    <div>
      <p>Group Component</p>
      <button onClick={() => onSave({ selectedRow, type: "Group" })}>
        Save Group
      </button>
    </div>
  );
}

Group.propTypes = {
  onSave: PropTypes.func.isRequired,
  selectedRow: PropTypes.object,
};
