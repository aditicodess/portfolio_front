import React from 'react'
import Skill from './Skill';
import {v4 as uuid} from 'uuid';
import { Consumer } from '../context';

function SkillStacks() {

    return (
        <Consumer>
          {(value) => {
            const { skills } = value;
            const finalSkillRow = [];
            for(let i=0; i<(skills.length / 4); i++){
                let skillRow = skills.slice(i * 4, (i + 1) * 4);
                // console.log(skillRow);
                finalSkillRow.push(
                <div key={uuid()} className="d-flex justify-content-around py-3">
                 {
                    skillRow.map((skill) => {
                        return (
                        <Skill key={uuid()} name={skill.name}  imageUrl={skill.imageUrl} starsTotal={skill.starsTotal} starsActive={skill.starsActive} />
                    )})
                 }
                </div>
                );
            }

            return (
                <div className="bg-light w-100">
                    <div className="container text-center py-5">
                        <h1 className="font-weight-light">
                        <span className="text-info">Technology</span> stack
                        </h1>
                        <div className="lead pb-5">
                        I design, develop and deliver with these weapons
                        </div>
                        {finalSkillRow}
                    </div>
                </div>
            );
            }}
        </Consumer>
    );
}

export default SkillStacks;