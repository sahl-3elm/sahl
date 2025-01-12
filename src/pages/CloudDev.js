import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Cloud() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="cloud" />
            <CourseComp name="AWS : Cloud simplifid" url="https://www.youtube.com/watch?v=GwrnImInXnc&list=PLJZLxa-J0VZSEVmKS8HQQoi09yB6IHigK"/>
            <CourseComp name="Google Cloud : DevMena" url="https://www.youtube.com/watch?v=MmqC0ofOa3g&pp=ygUiIEdvb2dsZSBDbG91ZGNvdXJzZSDYqNin2YTYudix2KjZig%3D%3D"/>
            <CourseComp name="Azure : Mohamed Zohry" url="https://www.youtube.com/watch?v=TOGe50KKpUw&list=PLDxVq3TlR9y3D61tEq4BbRZ8f5bv2_PFt"/>
            <CourseComp name="saif basher" url="https://www.youtube.com/watch?v=wbUOlKThGf0&list=PL7VL3VEjE3Bgo_ADduXvkxP1t-CGiAMz2"/>
            <CourseComp name="AWS Cloud : FREE 4 ARAB" url="https://www.youtube.com/watch?v=slmv-FRM7js&pp=ygUlY2xvdWQgY29tcHV0aW5nIGNvdXJzZSDYqNin2YTYudix2KjZig%3D%3D"/>
        </div>
    );
}