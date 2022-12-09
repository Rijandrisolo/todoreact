function Remove({id, remove}) {
    return <button className="btn btn-danger " type="button" onClick={() => remove(id)}>X</button>
}

export default Remove