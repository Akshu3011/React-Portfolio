    import React from 'react'
    import "./Experience.css"
    import PropTypes from 'prop-types';
    import Tabs from '@mui/material/Tabs';
    import Tab from '@mui/material/Tab';
    import Typography from '@mui/material/Typography';
    import Box from '@mui/material/Box';

    function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
    }

    TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
    }


    const Experience = () => {
        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
        setValue(newValue);
        };
    
    
        return (
            <div className='demo' id='demo'>
                <div className='container'>
                <div className='col-2'>
                    <h2>Education & <br/> </h2>
                    <h2>Experience</h2>
                        <span className='line'></span>
        </div>
        <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
        >
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
        >
            <Tab label="Certification" {...a11yProps(0)} />
            <Tab label="Module Lead" {...a11yProps(1)} />
            <Tab label="Senior Software Engineer" {...a11yProps(2)} />
            <Tab label="Software Engineer" {...a11yProps(3)} />
            <Tab label="2012-2016" {...a11yProps(4)} />
                </Tabs>
        <TabPanel value={value} index={0}>
        <h4>University of Washington, USA | Jun 2022-Sept 2022</h4>
        <h4>Full Stack Developement Bootcamp</h4>
        <p>Curriculum included HTML5, CSS3, JavaScript, Bootstap, Express.js, react.js, JQuery, MongoDB,Node.js,MySQL, Command Line, Git and more.</p>
        <p>Built complex projects and learned to collaborate with project team</p>

        </TabPanel>
        <TabPanel value={value} index={1}>
        <h4>Persistent Systems, India | Jan 2019-Jun 2020</h4>
        <ul>
            <li>Analyzed business requirements, conducted gap analysis, and estimated project
            scope
            </li>
            <li>Developed and executed the Automation test scripts through Selenium WebDriver
            </li>
            <li>Configured Testing Framework using TestNG to execute Selenium scripts.
            </li>
            <li>Used Postman & SOAPUI for rest service testing
            </li>
            <li>Ensured traceability of the requirements through all levels of development.
            </li>
        </ul>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <h4>Persistent Systems, India | Jul 2020-Dec 2021</h4>
        <ul>
            <li>Performed Functionality, Integration, validation, and UI Testing</li>
            <li>Prepared defect reports and defect tracking</li>
            <li>Worked with the automation team to determine the feasibility of manual test cases
that can be automated</li>
            <li>Provided automation support in fixing issues with the scripts that were failing due to
frequent application changes</li>
        </ul>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <h4>Persistent Systems, India | Nov 2016-Dec 2018</h4>
            <ul>
                <li>Execution of the test cases and logging of the defects and communicating the same
to On-site leads, development team, and client</li>
                <li>Identifying and designing test scenarios and test cases</li>
                <li>Performed Smoke testing, Sanity Testing.</li>
                <li>Executed automation regression batches in every release</li>
            </ul>
        </TabPanel>
        <TabPanel value={value} index={4}>
         <h4>Rajarambapu Institute of Technology | 2012 - 2016</h4>
            <p>Bachelor of technology- Rajarambpu Institute of Technology,India - 7.28GPA</p>
        </TabPanel>
        </Box>

                </div>
            </div>
        )
    }

    export default Experience

