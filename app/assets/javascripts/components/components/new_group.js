const NewGroup = ({ onCreateGroup }) => {
  let missionNameInput

  return (
    <div className="newGroup row">
      <div className="col-md-6 col-md-offset-3">
        <input
          type="text"
          placeholder="What mission are you playing?..."
          className="form-control"
          ref={(node) => missionNameInput = node}
        />
        <button
          className="btn btn-success"
          onClick={() => onCreateGroup({ mission_name: missionNameInput.value })}
          >
          <i className="fa fa-plus-square"></i>
          {' '}
          Create Group
        </button>
      </div>
    </div>
  )
}

export default NewGroup
