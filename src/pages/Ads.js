import Com from '../components/Com'
import react from 'react'
import CourseComp from '../components/CoursesComp.js';

export default function Ads() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="ads" />
            <CourseComp name="baseem magdy" url="https://www.youtube.com/watch?v=qnZKNcLOSAY&list=PLxe78bIBB8nXx2Cwo2vz1XEQpyFU7Ehgr"/>
            <CourseComp name="Google ads : contact is contact" url="https://www.youtube.com/watch?v=WMtRHZo907M&list=PLdUaS_5kt47ndMOBRp8c5fxkU94Q3s0wo"/>
            <CourseComp name="Google ads : baseem magdy" url="https://www.youtube.com/watch?v=aQZrnkA-3vY&list=PLxe78bIBB8nXzcwBqLn9ftjwv5IqO6-P6"/>
            <CourseComp name="Facebook ads : fawaz ahmed" url="https://www.youtube.com/watch?v=XCOGrN1UFCc&list=PLgnYyEm1IyhbLmqikGftrLBMwtvYh8dSh"/>
            <CourseComp name="faceboock ads : Mohamed kawefi" url="https://www.youtube.com/watch?v=t-3QZhSvDJA&pp=ygUjIEZhY2Vib29rIEFkcyBjb3Vyc2Ug2KjYp9mE2LnYsdio2Yo%3D"/>
        </div>
    );
}