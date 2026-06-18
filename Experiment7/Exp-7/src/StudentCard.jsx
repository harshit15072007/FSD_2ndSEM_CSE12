function StudentCard({name,marks,course}){
    return (
        <div>
            <h2>Name:{name}</h2>
            <p>Marks:{marks}</p>
            <p>Course:{course}</p>
        </div>
    );
}
export default StudentCard;