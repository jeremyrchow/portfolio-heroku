import React from 'react'

function SkillsGridList() {
	return(
		<div className = "gridWrapper">

                <ul className="listColumn"> 
                <h4> <strong>Languages</strong> </h4>
                    <li> Python </li>
                    <li> SQL </li>
                    <li> JavaScript, HTML </li>
                    <li> C++, C </li>
                    <li> Java </li>
                </ul>
                <ul className="listColumn"> 
                <h4> <strong>Frameworks </strong></h4>
                    <li> Pandas </li>
                    <li> TensorFlow </li>
                    <li> Keras </li>
                    <li> Flask </li>
                </ul>
                <ul className="listColumn"> 
                <h4> <strong> Other </strong></h4>
                    <li> Tableau</li>
                    <li> AWS EC2, RDS </li>
                    <li> REST APIs </li>
                    <li> Jupyter Notebooks </li>
                </ul>
            </div>
		)
}

export default SkillsGridList