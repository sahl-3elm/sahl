import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function ReactPage() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="react" />
            <CourseComp name="yahiea tech" url="https://www.youtube.com/watch?v=2Oztcf6NJ3M&pp=ygUZY3NzIGNvdXJzZSDYqNin2YTYudix2KjZig%3D%3D"/>
            <CourseComp name="CodeZella" url="https://www.youtube.com/watch?v=3AJfX4Cd64c&pp=ygUYamF2YXNjcmlwdCBjb3Vyc2UgYXJhYmlj"/>
            <CourseComp name="tarmeez academy" url="https://www.youtube.com/watch?v=ihRRf3EjTV8&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS"/>
            <CourseComp name="mohamed hany" url="https://www.youtube.com/watch?v=cCie1Xb7oSk&list=PLZ45kwWUJ51bVyPFeU-oSOM4YRVCMUPYQ"/>
            <CourseComp name="Nageeb darwesh" url="https://www.youtube.com/watch?v=EtNyJQItRZk&list=PLpr1Lg_f0v3ojNKR4WzZ_SEXhiKBHDQmB"/>
            <CourseComp name="con mobarmeg" url="https://www.youtube.com/watch?v=_wJN15W-Yyk&list=PLv0gmVUrcnWy4CT0XPKL-wxZM8nI7jQLa" />
            <CourseComp name="tech Wolrd" url="https://www.youtube.com/watch?v=EtNyJQItRZk&list=PLpr1Lg_f0v3ojNKR4WzZ_SEXhiKBHDQmB"/>
        </div>
    );
}
