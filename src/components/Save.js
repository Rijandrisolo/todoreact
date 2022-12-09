function Save({tache, toggleEdit, edit}) {
    function onclick(tache) {
        edit(tache)
        toggleEdit(tache.id)
    }
    return <button className="btn btn-success m-1" type="button" onClick={() => onclick(tache)} >S</button>
}

export default Save