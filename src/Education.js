import React from 'react';
import './style.css';

const educationPage = () => {
const education = [
{ name: 'B.E(ECE)', inst: 'NPR College of Engineering and Technology', year: '2019-Present',cgpa:'9.3' },
{ name: 'HSC', inst: 'Vidhya Parthi Higher Secondary School', year: '2019',cgpa:'84%' },
{ name: 'SSLC', inst: 'Vidhya Parthi Higher Secondary School', year: '2017',cgpa:'96%' },
];

return (
<div className="containers">
<h2 className="education-header">Education</h2>
<table className="education-table">
<thead>
<tr>
<th>Course</th>
<th>Institution</th>
<th>Year</th>
<th>Percentage/ Cgpa</th>
</tr>
</thead>
<tbody>
{education.map(cert => (
<tr key={cert.name}>
<td>{cert.name}</td>
<td>{cert.inst}</td>
<td>{cert.year}</td>
<td>{cert.cgpa}</td>
</tr>
))}
</tbody>
</table>
</div>
);
};
export default educationPage;