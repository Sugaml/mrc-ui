import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import MenuList from '@mui/material/MenuList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';

const semesters = [
    {
        title: 'First Semester',
        subjects: [
            {
                name: 'English Lanugage I',
                titleValue: '4 years',
                description:'It is a communication subject.',
            },
            {
                name: 'Nepali Language I',
                titleValue: '8',
                description:'',
            },
            {
                name: 'Fundamentals of Education',
                titleValue: '138',
                description:'',

            },
            {
                name: 'Introduction of Information Technology',
                titleValue: '45',
                description:'',
            },
            {
                name: 'Programming Concept with C',
                titleValue: '40',
                description:'',
            },
            {
                name: 'Specialization Minor: Math',
                titleValue: 'Education',
                description:'',
            },
        ],
    },
    {
        title: 'Second Semester',
        subjects: [
            {
                name: 'English Language II',
                titleValue: '4 years',
                description:'',
            },
            {
                name: 'Nepali Language II',
                titleValue: '8',
                description:'',
            },
            {
                name: 'Social Perspective in Education',
                titleValue: '138',
                description:'',
            },
            {
                name: 'Object Oriented programming with C++',
                titleValue: '45',
                description:'',
            },
            {
                name: 'Digital Logic',
                titleValue: '40',
                description:'',
            },
            {
                name: 'Specialization Minor Math',
                titleValue: 'Education',
                description:'',
            },
        ],
    },
    {
        title: 'Third Semester',
        subjects: [
            {
                name: 'Developmental Psychology',
                titleValue: '4 years',
                description:'',
            },
            {
                name: 'Data Structure and Algorithm',
                titleValue: '8',
                description:'',
            },
            {
                name: 'Microprocessor and Computer Organization',
                titleValue: '138',
                description:'',
            },
            {
                name: 'Web Technology',
                titleValue: '45',
                description:'',
            },
            {
                name: 'ICT in Education',
                titleValue: '40',
                description:'',
            },
            {
                name: 'Specialization Minor Math',
                titleValue: 'Education',
                description:'',
            },
        ],
    },
    {
        title: 'Four Semester',
        subjects: [
            {
                name: 'Psychology of Learning',
                titleValue: '4 years',
                description:'',
            },
            {
                name: 'Operating System',
                titleValue: '8',
                description:'',
            },
            {
                name: 'Database Management System',
                titleValue: '138',
                description:'',
            },
            {
                name: 'System Analysis and Design',
                titleValue: '45',
                description:'',
            },
            {
                name: 'Specialization Minor Math',
                titleValue: '40',
                description:'',
            },
            {
                name: 'Specialization Minor: Math',
                titleValue: 'Education',
                description:'',
            },
        ],
    },
    {
        title: 'Five Semester',
        subjects: [
            {
                name: 'Basic of Curriculum',
                titleValue: '4 years',
                description:'',
            },
            {
                name: 'Java programming language',
                titleValue: '8',
                description:'',
            },
            {
                name: 'Data communication and Networks',
                titleValue: '138',
                description:'',
            },
            {
                name: 'Software engineering and Project management',
                titleValue: '45',
                description:'',
            },
            {
                name: 'Specialization Minor Math',
                titleValue: 'Education',
                description:'',
            },
        ],
    },
    {
        title: 'Six Semester',
        subjects: [
            {
                name: 'Assessment and Evaluation of Learning',
                titleValue: '4 years',
                description:'',
            },
            {
                name: 'Visual Programming',
                titleValue: '8',
                description:'',
            },
            {
                name: 'Computer Graphics',
                titleValue: '138',
                description:'',
            },
            {
                name: ' E-learning & ICT',
                titleValue: '45',
                description:'',
            },
            {
                name: 'Specialization Minor Math',
                titleValue: 'Education',
                description:'',
            },
        ],
    },
    {
        title: 'Seven Semester',
        subjects: [
            {
                name: 'Pedagogy and inclusive Education',
                titleValue: '4 years',
                description:'',
            },
            {
                name: 'Network Security',
                titleValue: '8',
                description:'',
            },
            {
                name: 'Artificial Intelligence in Education',
                titleValue: '138',
                description:'',
            },
            {
                name: 'Specialization Minor: Math',
                titleValue: 'Education',
                description:'',
            },
        ],
    },
    {
        title: 'Eight Semester',
        subjects: [
            {
                name: 'Basic statics and Research in Education',
                titleValue: '4 years',
                description:'',
            },
            {
                name: 'Technology in Education',
                titleValue: '8',
                description:'',
            },
            {
                name: 'Educational project',
                titleValue: '138',
                description:'',
            },
            {
                name: 'Network Administration',
                titleValue: '45',
                description:'',
            },
            {
                name: 'Specialization Minor Math',
                titleValue: 'Education',
                description:'',
            },
        ],
    },
];

const objectives = [
    {
        point: 'To prepare students for higher studies like Masters level program in the area of Education, Information Communication Technology or other related field.',
    },
    {
        point: 'To provide students with a better and extensive learning about Computer Science and Information Communication Technology concepts like Programming, Algorithms, Database Management Systems, Management Information System, Data structures, Computer Graphics, Cyber law, Artificial intelligence and other BICT related subjects.'
    },
    {
        point: 'To provide theoretical knowledge to the students to build up a deeper understanding and familiarize them with the practical tools and techniques used in the development of computer systems software and technology.'
    },
    {
        point: 'To provide theoretical knowledge to the students to build up a deeper understanding and familiarize them with the practical tools and techniques used in the development of computer systems software and technology.'
    },
    {
        point: 'To prepare successful BICT graduates to build their career in their interested field or BICT related field such as a Computer Teacher in Higher Level, Software Application Developer, System Administrator, Web Programmer, Database Administrator, Web Developer, Network Administrator, etc.',
    },
]

export const BictCourse = () => {
    return (
        <div>
            <Container maxWidth="lg" component="main">
                <Typography
                    component="h1"
                    variant="h4"
                    align="left"
                    color="blue"
                    gutterBottom
                    sx={{ pt: 3 }}
                >
                    Bachelor of Information and Communication Technology Education
                </Typography>
                <Typography
                    paragraph
                    align="left"
                    color="text.primary"
                    gutterBottom
                >
                    Bachelor of Education in Information Communication Technology (BEd ICT) is an undergraduate program
                    offered by Tribhuvan University, under the Faculty of Education. It is a 4-year semester-based program
                    spreading over 8 semesters covering a total of 138 credit hours, that includes 12 credit hours for
                    communication skills courses, 24 credit hours for educational core courses, 60 credit hours for specialization
                    major subjects, 30 credit hours for minor subjects and 9 credit hours for teaching internship/practicum.
                </Typography>
                <Typography
                    component="h3"
                    variant="h4"
                    align="left"
                    color="blue"
                    gutterBottom
                    sx={{ pt: 3 }}
                >
                    Objectives
                </Typography>
                {/* <MenuList>
                    {objectives.map((objective) => (
                        <MenuItem>
                            <ListItemText>{objective.point}</ListItemText>
                        </MenuItem>
                    ))}
                </MenuList> */}
                {semesters.map((semester) => (
                    // Enterprise card is full width at sm breakpoint
                    <Card>
                        <CardHeader
                            title={semester.title}
                            sx={{
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? theme.palette.grey[200]
                                        : theme.palette.grey[700],
                            }}
                        />
                        <CardContent>
                            <MenuList>
                                {semester.subjects.map((subject) => (
                                    // <MenuItem>
                                    //     <ListItemText>{subject.name}</ListItemText>
                                    //     {/* <Typography variant="body2">
                                    //                 {line.titleValue}
                                    //             </Typography> */}
                                    // </MenuItem>
                                    <Accordion>
                                    <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                      aria-controls="panel1a-content"
                                      id="panel1a-header"
                                    >
                                      <Typography>{subject.name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      <Typography>
                                        {subject.description}
                                      </Typography>
                                    </AccordionDetails>
                                  </Accordion>
                                ))}
                            </MenuList>
                        </CardContent>
                    </Card>
                ))}
            </Container>
        </div>
    )
}