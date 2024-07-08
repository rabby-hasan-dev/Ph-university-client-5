import { useGetAllAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {

    const { data } = useGetAllAcademicSemesterQuery()

    return (
        <div>
            <h1>This  is AcademicSemester Components</h1>
        </div>
    );
};

export default AcademicSemester;