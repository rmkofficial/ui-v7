import PropTypes from "prop-types";

export default function Scene({ onSave, selectedRow }) {
  return (
    <div>
      
      <p>Scene Component</p>
      <button onClick={() => onSave({ selectedRow, type: "Scene" })}>
        Save Scene
      </button>
    </div>
  );
}

Scene.propTypes = {
  onSave: PropTypes.func.isRequired,
  selectedRow: PropTypes.object,
};
