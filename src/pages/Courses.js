import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Courses() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            
            <CourseComp name="programing" url="/programing"/>
            <CourseComp name="google and facebook Ads" url="/ads"/>
            <CourseComp name="email markiting" url="/email"/>
            <CourseComp name="Mobile App Development" url="/mobile"/>
            <CourseComp name="Machine Learning" url="/machine"/>
            <CourseComp name="Cloud Dev" url="/cloud"/>
            <CourseComp name="Block chain" url="/block"/>
            <CourseComp name="Social Media Marketing" url="/social"/>
            <CourseComp name="SEO" url="/seo" />
            <CourseComp name="Contact markiting" url="/contact"/>
            <CourseComp name="Affiliate Marketing" url="/affiliate"/>
            <CourseComp name="Shopify" url="/shopify"/>
            <CourseComp name="German language" url="/german"/>
            <CourseComp name="graphic design" url="/graphic"/>
            <CourseComp name="UI/UX design" url="/ui"/>
        </div>
    );
}