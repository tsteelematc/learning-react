import React from 'react';

const StudentList = ({students}) => {

    const buildStudentListItemsBadWay = () => {

        let studentListItems = [];

        for (let i = 0; i < students.length; i ++) {
            studentListItems.push(<li key={i}>{students[i]}</li>);
        }

        return studentListItems;
    };

    return (
        <ul>
            {students.map((x, idx) => <li key={idx}>{x}</li>) }
            { buildStudentListItemsBadWay() }
        </ul>
    );
}

export default StudentList;