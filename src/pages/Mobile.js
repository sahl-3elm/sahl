import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Mobile() {
    return (
        <div> style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}
            <Com path="mobile" />
            <CourseComp name="Amar al khatib 1" url="https://www.youtube.com/watch?v=lRercKJaAes&list=PLw6Y5u47CYq47oDw63bMqkq06fjuoK_GJ"/>
            <CourseComp name="Ahmed rezk" url="https://www.youtube.com/watch?v=OB1-3nh16R8&list=PLfM2wZNebA2yoHQtWBUIEeSVUZWkYJwMY"/>
            <CourseComp name="Techno U" url="https://www.youtube.com/watch?v=j1-HJhZRzYo&pp=ygUgbW9iaWxlIGRldmVsb3BtZW50IGNvdXJzZSBhcmFiaWM%3D"/>
            <CourseComp name="Corses 4 arab" url="https://www.youtube.com/watch?v=5H-y4JjDOxk&pp=ygUgbW9iaWxlIGRldmVsb3BtZW50IGNvdXJzZSBhcmFiaWM%3D"/>
            <CourseComp name="Amar al khatib 2" url="https://www.youtube.com/watch?v=V9vL9whDEQc&pp=ygUgbW9iaWxlIGRldmVsb3BtZW50IGNvdXJzZSBhcmFiaWM%3D"/>
        </div>
    );
}