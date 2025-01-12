import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Html() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="html" />
            <CourseComp name="abdelrahman gamal" url="https://www.youtube.com/watch?v=Dv39fDYei9A&list=PLknwEmKsW8OtLRQPTLms79499meY2D6ij"/>
            <CourseComp name="elzero" url="https://www.youtube.com/watch?v=6QAELgirvjs&list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji"/>
            <CourseComp name="yehia tech" url="https://www.youtube.com/watch?v=Pwatx1n1Ws0&pp=ygUaaHRtbCBjb3Vyc2Ug2KjYp9mE2LnYsdio2Yo%3D"/>
            <CourseComp name="OctuCode" url="https://www.youtube.com/watch?v=cSpndmwWmss&list=PLoP3S2S1qTfCVIETOGwaK3lyaL3UKu403"/>
            <CourseComp name="Tarmeez academy" url="https://www.youtube.com/watch?v=WSG6Cjc8b3M&list=PLYyqC4bNbCIfMY5CoGmiWaPi9l86qaz5B"/>
        </div>
    );
}