import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Seo() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="seo" />
            <CourseComp name="Walid taha" url="https://www.youtube.com/watch?v=jLbyQo7i0-w&pp=ygUZU0VPIGNvdXJzZSDYqNin2YTYudix2KjZig%3D%3D"/>
            <CourseComp name="seo world" url="https://www.youtube.com/watch?v=KRAFa_J6c-8&list=PLAOJNfhkbzlW4SVFtg91kYzgTJ0KFI5uN"/>
            <CourseComp name="intelaq online" url="https://www.youtube.com/watch?v=9AcpLGRaya0&pp=ygUZU0VPIGNvdXJzZSDYqNin2YTYudix2KjZig%3D%3D"/>
            <CourseComp name="Eslam magdy" url="https://www.youtube.com/watch?v=jz0mDuGzjVc&list=PLDBZv8iuGMncW_lEf-yzgv67-5-djkijX"/>
            <CourseComp name="Mohamed samir" url="https://www.youtube.com/watch?v=gSaSabMTkUE&list=PLVi3njh3jPTupCs4YH_viaV3troE-7Ik2"/>
        </div>
    );
}