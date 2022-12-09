function Edit({tache, toggleEdit}) {
    return <button className="btn btn-success m-1" type="button" onClick={() => toggleEdit(tache.id)} >E</button>

}

export default Edit