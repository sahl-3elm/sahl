import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Email() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="email" />
            <CourseComp name="ibrahim hiwishi" url="https://www.youtube.com/watch?v=cox94VHjnY8&list=PLY3pok-_SyUZ7YLjYpwCD0lbgh1IzRFCW"/>
            <CourseComp name="ask markiting" url="https://www.youtube.com/watch?v=rR9BOyKapwo&list=PLdbQSPhDIYLrrQBuz1iDrIVPJQ389PEnu"/>
            <CourseComp name="mustafa osman" url="https://www.youtube.com/watch?v=9mZpqQ0gLQ4&pp=ygUoICBFbWFpbCBNYXJrZXRpbmcgIGNvdXJzZSDYqNin2YTYudix2KjZig%3D%3D"/>
            <CourseComp name="super markiting academy" url="https://www.youtube.com/watch?v=51N7WBcjTSs&list=PLwrQ6_ffD69cLmzbHAJJVvCBE3ieuP_uS"/>
            <CourseComp name="Omar jahama" url="https://www.youtube.com/watch?v=4SVvJ4el3UE&pp=ygUoICBFbWFpbCBNYXJrZXRpbmcgIGNvdXJzZSDYqNin2YTYudix2KjZig%3D%3D"/>
        </div>
    );
}