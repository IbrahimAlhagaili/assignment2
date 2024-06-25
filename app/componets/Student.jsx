
const Student = ({name, dob, grade}) => {
  return (
    <div className="border-2 border-blue-500 p-6 rounded-lg m-1">
        <h2 className="text-2xl mb-4"><span className="text-blue-500">Name:</span> {name}</h2>
        <h2 className="text-2xl mb-4"><span className="text-blue-500">DOB:</span> {dob}</h2>
        <h2 className="text-2xl mb-4"><span className="text-blue-500">Grade:</span> {grade}</h2>
    </div>
  );
};

export default Student;