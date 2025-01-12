import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function German() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="german" />
            <CourseComp name="Deutch mit mira 1" url="https://www.youtube.com/watch?v=ksDYRyXG0A8&list=PLawKOZJF6P4aFnQ0IZ8DruunUg5PZEflI"/>
            <CourseComp name="Khaled bozan" url="https://www.youtube.com/watch?v=HwXeCtFdeAI&list=PLbycoaVylV34lby00GTT5lMzoS-grhcBJ"/>
            <CourseComp name="Shehata deutch" url="https://www.youtube.com/watch?v=KXpMQG8rDLc&list=PLOLEcgfCxrf-_aFPd2gnBsHfA066_Ka0M"/>
            <CourseComp name="German toon" url="https://www.youtube.com/watch?v=ZOieRYdx0Cg&list=PL_Lje8xtkLIqD4sim14yLfHEHPe6y3Nfu"/>
            <CourseComp name="Deutch mit mira 2" url="https://www.youtube.com/watch?v=-fCakbSV3vU&list=PLawKOZJF6P4YWuRXIuWmRIH3Fwuf0o2hv"/>
        </div>
    );
}