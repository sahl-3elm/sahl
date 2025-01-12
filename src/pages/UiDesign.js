import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Ui() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="ui" />
            <CourseComp name="Mina Boules" url="https://www.youtube.com/watch?v=ZQObK6XkGHE&list=PLmQ0KfqeaHAuud_Aav-94nfToArf6Uh4K"/>
            <CourseComp name="The lunch break " url="https://www.youtube.com/watch?v=n5KhfwI1wL8&pp=ygUe2YPZiNix2LMgVUkvVVggRGVzaWduINmD2KfZhdmE"/>
            <CourseComp name="Usef Elshazly" url="https://www.youtube.com/watch?v=EHI78SvEob8&pp=ygUe2YPZiNix2LMgVUkvVVggRGVzaWduINmD2KfZhdmE"/>
            <CourseComp name="KajoCode" url="https://www.youtube.com/watch?v=DQZ3LWlZ8_w&list=PLiwfne4PXRuFoKOlhGoZccpq79vN1UH0e"/>
        </div>
    );
}