import React, {useEffect, useState} from "react";
import './style.js';
import axios from "axios";
import { Bar, BarParent, BarPerc, BarTitle, ParentSpan, ProfileItem, ProfileItemSpan, ProfileList, ProfileSkillsSection, ProfileTitle, Skills, SkillsDesc, SkillsTitle, SkillsTitleSpan,ProfileSection } from "./style.js";
const Profile = () => {

    const [profileData, setProfileData] = useState([]);
    const [skills, setSkills] = useState([]);
    
    useEffect(() => {
        axios.get('js/data.json').then(res => { setProfileData( res.data.profile) });
        axios.get('js/data.json').then(res => { setSkills( res.data.skills) });
        
    }, []);
    
    const profileDataList = profileData.map((data) => {
        return (
            <ProfileItem dataName={data.dataName} key={data.id}>
                <ProfileItemSpan>{data.dataName}</ProfileItemSpan>
                {data.dataValue}    
            </ProfileItem>    
            )
    })

    const skillsList = skills.map(skillsItem => {
        return (
            <Bar key={skillsItem.id}>
                <BarTitle>{skillsItem.title}</BarTitle>
                <BarPerc>{skillsItem.percentage}</BarPerc>
                <BarParent>
                    <ParentSpan perc={skillsItem.percentage}></ParentSpan>
                </BarParent>
                </Bar>
                )
            })
        
    return (
        <ProfileSkillsSection>
            <div className="container">
                <ProfileSection>
                    <ProfileTitle><span>My </span>Profile</ProfileTitle>
                    <ProfileList>
                        {profileDataList}
                    </ProfileList>           
                </ProfileSection>

                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {skillsList}
                </Skills>
            </div>
        </ProfileSkillsSection>
    );
}

export default Profile;
    