import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Social() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="social" />
            <CourseComp name="UnKnown creater" url="https://www.youtube.com/watch?v=At0yPhjXCU4&list=PLjVJ8-uTaGNMw7nBZ12PcjBmZZ7UGXhqO"/>
            <CourseComp name="Markiting sah 1" url="https://www.youtube.com/watch?v=LRighM6rXwQ&list=PLyf3uHmOBoom2gpmABHPwxoNfjwyu-YYf"/>
            <CourseComp name="Basem magda" url="https://www.youtube.com/watch?v=qnZKNcLOSAY&list=PLxe78bIBB8nXx2Cwo2vz1XEQpyFU7Ehgr"/>
            <CourseComp name="Markiting sah 2" url="https://www.youtube.com/watch?v=1CIsRFK3yWw&list=PLyf3uHmOBoon2RsAYzMbnOjdadu9E9Vq9"/>
            <CourseComp name="Mohamed kwefi" url="https://www.youtube.com/watch?v=0fvYICr7m0M&pp=ygUsU29jaWFsIE1lZGlhIE1hcmtldGluZyBjb3Vyc2Ug2KjYp9mE2LnYsdio2Yo%3D"/>
        </div>
    );
}