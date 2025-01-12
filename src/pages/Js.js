import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Js() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="js" />
            <CourseComp name="abdelrahman gamal" url="https://www.youtube.com/watch?v=PWuTLTFMtYw&list=PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE"/>
            <CourseComp name="elzero 1" url="https://www.youtube.com/watch?v=GM6dQBmc-Xg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv"/>
            <CourseComp name="tarmeez academy" url="https://www.youtube.com/watch?v=TbHeHAyAV7Q&list=PLYyqC4bNbCIeLEjcSPO61bsGPKEvYceb0"/>
            <CourseComp name="UnKnown creater" url="https://www.youtube.com/watch?v=nS3a-4SEGss&pp=ygUgamF2YXNjcmlwdCBjb3Vyc2Ug2KjYp9mE2LnYsdio2Yo%3D"/>
            <CourseComp name="elzero 2" url="https://www.youtube.com/watch?v=gIGGhFlGgLI&pp=ygUhanNhdmFzY3JpcHQgY291cnNlINio2KfZhNi52LHYqNmK"/>
        </div>
    );
}