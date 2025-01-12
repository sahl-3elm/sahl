import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Css() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="css" />
            <CourseComp name="abdelrahman gamal" url="https://www.youtube.com/watch?v=_QO55W7KPmI&list=PLknwEmKsW8Os7rKViMCL8x6irVJT7McSS"/>
            <CourseComp name="tarmeez academy" url="https://www.youtube.com/watch?v=lMMfAO4wiE0&list=PLAhPJ5tzB6AJgrSixXTGfETLoAMXEOMu9"/>
            <CourseComp name="elzero" url="https://www.youtube.com/watch?v=X1ulCwyhCVM&list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe"/>
            <CourseComp name="courses 4 arab" url="https://www.youtube.com/watch?v=ZCUTjGIdWjw&list=PLeWmXrh0047_gJPbo3hqif4Q6oFdncMs5"/>
            <CourseComp name="CodeRk" url="https://www.youtube.com/watch?v=T_wK3riR-1Y&list=PLSiLeKadTQ7n-Ftg39kC2ss3Uogb_gu5R"/>
        </div>
    );
}