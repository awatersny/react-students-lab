import Score from "./Score";

const Students = (props) => {
  return (
    <div>
      <h1>{props.student.name}</h1>
      <p>{props.student.bio}</p>
      <Score />
    </div>
  );
}

export default Students;