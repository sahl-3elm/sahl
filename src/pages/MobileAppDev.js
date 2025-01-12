import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Mobile() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="mobile" />
            <CourseComp name="amar alkhatib" url="https://www.youtube.com/watch?v=lRercKJaAes&list=PLw6Y5u47CYq47oDw63bMqkq06fjuoK_GJ"/>
            <CourseComp name="CodeRk" url="https://www.youtube.com/watch?v=gwwYN3gHVSw&list=PLSiLeKadTQ7l7DJIUbCj749eAiwIHE4hH"/>
            <CourseComp name="adham saber" url="https://www.youtube.com/watch?v=D1Go5WAw6Z0&pp=ygU6TW9iaWxlIEFwcCBEZXZlbG9wbWVudCAoaU9TLCBBbmRyb2lkKWNvdXJzZSDYqNin2YTYudix2KjZig%3D%3D"/>
            <CourseComp name="Maad Coding" url="https://www.youtube.com/watch?v=3hZzq1NK9do&list=PLF7pjAYSxOFu78LrDkXoN8XczDLeci-Fx"/>
            <CourseComp name="Ahmad Rezk" url="https://www.youtube.com/watch?v=OB1-3nh16R8&list=PLfM2wZNebA2yoHQtWBUIEeSVUZWkYJwMY"/>
        </div>
    );
}