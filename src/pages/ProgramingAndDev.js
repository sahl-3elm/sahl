import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Programing() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <CourseComp name="Python" url="/python"/>
            <CourseComp name="html" url="/html"/>
            <CourseComp name="css" url="/css"/>
            <CourseComp name="js" url="/js"/>
            <CourseComp name="api" url="/api"/>
            <CourseComp name="react" url="/react"/>
            <CourseComp name="Mobile App Development" url="/mobile"/>
        </div>
    );
}