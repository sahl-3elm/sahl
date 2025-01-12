import Com from '../components/Com'
import React from "react";
import CourseComp from "../components/CoursesComp";

export default function Contact() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="contact" />
            <CourseComp name="Copywrite : yasmeen ashraf" url="https://www.youtube.com/watch?v=lJn_XGYJvN4&list=PLGUrQ_oWZ4jbE61qhFpTb4J6AoT3840Au"/>
            <CourseComp name="Contact markiting : Mostafa osman" url="https://www.youtube.com/watch?v=kgbNKtT5YdY&list=PLWd4nYaF_Vx7EEO9Yk5iHEG7FQhUkpx_k"/>
            <CourseComp name="Copywrite : hasan al maragy" url="https://www.youtube.com/watch?v=2TR-6V41M48&list=PL_sN087kVxDsfnoPjSVOevP2stUHSarxh"/>
            <CourseComp name="Contact markiting : simplilearn 1" url="https://www.youtube.com/watch?v=6Oj6GoYrF-s&list=PLEiEAq2VkUUKL2lhRWUHiLIlAGcNPiSqD"/>
            <CourseComp name="Contact markiting : simplilearn 2" url="https://www.youtube.com/watch?v=R_6AKZ1Joro&pp=ugMICgJhchABGAHKBSkgQ29udGVudCBNYXJrZXRpbmcgIGNvdXJzZSDYqNin2YTYudix2KjZig%3D%3D"/>
        </div>
    );
}