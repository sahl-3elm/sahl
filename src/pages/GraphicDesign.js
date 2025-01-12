import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Graphic() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="graphic" />
            <CourseComp name="MOTALIM" url="https://www.youtube.com/watch?v=H-x1cit4GJA&list=PLQA612FPiM4hz2YXR0IgZxBMBrEoo4TSe"/>
            <CourseComp name="MoArts" url="https://www.youtube.com/watch?v=va-MZOPrJ0s&pp=ygUg2YPZiNix2LMgZ3JhcGhpYyBkZXNpZ24g2YPYp9mF2YQ%3D"/>
            <CourseComp name="Orange square" url="https://www.youtube.com/watch?v=y4ZafMq1CnQ&list=PLs-hceiryD_gmW4q7l_veXRVwLJBonnk-"/>
            <CourseComp name="Ahmed Ghonim" url="https://www.youtube.com/watch?v=aZH-mHFM9YI&list=PLMcnzzmzFV97aNdh31QKaAukmGzZeubm4"/>
            <CourseComp name="Mostafa mokram" url="https://www.youtube.com/watch?v=0DEa_aIH6es&list=PLZ5zEGbaMXXWsB4rL674dSs3K4B_95pOk"/>
        </div>
    );
}