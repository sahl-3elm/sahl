import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Pmp() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="pmp" />
            <CourseComp name="Dr. Ahmed hasan" url="https://www.youtube.com/watch?v=LN7q8SqyedM&list=PLsVjgU4UTUtH6MYm9faxNUdlOZtXtWffk"/>
            <CourseComp name="Shehab abdo" url="https://www.youtube.com/watch?v=MXUocLlQ-YM&list=PLh2CtFJf35nWueQ3Ig3Las847gdtqkv75"/>
            <CourseComp name="sayed mohsen" url="https://www.youtube.com/watch?v=r5hUhwTEsLI&list=PL_vSSyN7sdTHnsrdjU7viuPEe5icmZUCV"/>
            <CourseComp name="NextStep" url="https://www.youtube.com/watch?v=5hD0hHYZNVc&list=PLlkIqY2NCXik8Ih23LugZ2T1rOubIpSr6"/>
            <CourseComp name="Eng. Hasan" url="https://www.youtube.com/watch?v=gqvjucupc0c&list=PLCbX25E4Ueyo3wjGA71jAEe_PlUrneEM8"/>
        </div>
    );
}