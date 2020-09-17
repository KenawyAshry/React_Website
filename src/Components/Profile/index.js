import React, {  useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import {ProfileSkills, ProfileDav, ProfileList, ProfileItem, Span, Skills, SkillsDesc, Bar, TitleSpan, PercSpan, Parent, ParentSpan, ProfileTitle, SkillsTitle, SkillsTitleSpan, ProfileTitleSpan} from  './style.js'




const Profile = () => {

    const [barContent , setBar ] = useState([])

    useEffect ( () => {
        axios.get('js/data.json').then( res => {setBar(res.data.skills) } )
    } , [] )

    const SkillsKenawy = barContent.map((barItem)=>{
        return (
            <Bar key={barItem.id}>
                    <TitleSpan>{barItem.title}</TitleSpan>
                    <PercSpan>{barItem.progress}</PercSpan>
                    <Parent>
                    <ParentSpan className={barItem.classn}></ParentSpan>
                    </Parent>
            </Bar>
        )
    })
    return (
        <ProfileSkills>
            <div className="container">
                <ProfileDav>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <Span className="web">www.google.com</Span>
                        </ProfileItem>
                    </ProfileList>
                </ProfileDav>
                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {SkillsKenawy}
                </Skills>
                
            </div>
        </ProfileSkills>
    )


}


export default Profile;
