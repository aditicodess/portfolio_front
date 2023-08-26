import React from 'react';
import Aboutme from './Aboutme';
import Blogs from './Blogs';
import Projects from './Projects';
import SkillStacks from './SkillStacks';
import Title from './Title';
import Recommendations from './Recommendations';

function HomePage() {
  return (
    <div>
        <Title name = "Aditi Singh" leadText = "I am a Web developer" />
        <Recommendations />
        <SkillStacks />
        <Projects />
        <Aboutme />
        <Blogs />
    </div>
  )
}

export default HomePage