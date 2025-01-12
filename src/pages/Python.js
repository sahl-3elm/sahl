import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Python() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="python" />
            <CourseComp name="Codezella" url="https://www.youtube.com/watch?v=h3VCQjyaLws&list=PLuXY3ddo_8nzrO74UeZQVZOb5-wIS6krJ"/>
            <CourseComp name="elzerro" url="https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs"/>
            <CourseComp name="OctuCode" url="https://www.youtube.com/watch?v=Do34NKMq80c&list=PLoP3S2S1qTfCUdNazAZY1LFALcUr0Vbs9"/>
            <CourseComp name="abdlrahman" url="https://www.youtube.com/watch?v=Lm6irXWjWIo&list=PLknwEmKsW8OsG8dnisr_-2WGyx7lpgGEE"/>
            <CourseComp name="CodeRK" url="https://www.youtube.com/watch?v=smKHKgedkP4&list=PLSiLeKadTQ7mT2nyzPbfzWP3IOniezNvP"/>
        </div>
    );
}