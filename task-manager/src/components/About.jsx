import React from 'react'
import { Typography, Row, Col, Card, Tag, Divider } from 'antd'
import {
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GlobalOutlined,
} from '@ant-design/icons'

const { Title, Paragraph } = Typography

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title>Mithilesh Pandit</Title>
      <Paragraph>
        <span>India | </span>
        <PhoneOutlined /> +91 7350977851 | <MailOutlined />{' '}
        mithilesh.work08@gmail.com | <LinkedinOutlined />{' '}
        <a
          href='https://www.linkedin.com/in/mithilesh-pandit08/'
          target='_blank'
          rel='noopener noreferrer'
        >
          linkedin.com/in/mithilesh-pandit08
        </a>
      </Paragraph>

      <Title level={3}>Professional Summary</Title>
      <Paragraph>
        Results-driven and technically proficient Cyber Security Master’s
        graduate eager to contribute to the cyber security domain. Skilled in
        programming, application security, and cyber threat mitigation, with a
        strong foundation in penetration testing, cloud security, and security
        software development. Aiming to bring my technical expertise and passion
        for cyber security to a challenging new role.
      </Paragraph>

      <Title level={3}>Technical Skills</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card title='Security Tools'>
            <Tag>Nmap</Tag>
            <Tag>Metasploit</Tag>
            <Tag>Burp Suite</Tag>
            <Tag>Autopsy</Tag>
            <Tag>FTK Imager</Tag>
            <Tag>ELK Stack</Tag>
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Programming Languages'>
            <Tag>JavaScript</Tag>
            <Tag>Python</Tag>
            <Tag>Typescript</Tag>
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Technologies & Frameworks'>
            <Tag>Next</Tag>
            <Tag>Redux</Tag>
            <Tag>React</Tag>
            <Tag>Node</Tag>
            <Tag>Spring Boot</Tag>
            <Tag>Express</Tag>
            <Tag>Flask</Tag>
            <Tag>Ant Design</Tag>
            <Tag>MUI</Tag>
          </Card>
        </Col>
      </Row>
      <Paragraph>
        <b>Development Utilities:</b> Yarn, PIP, NPM
        <br />
        <b>Databases:</b> PostgreSQL, MySQL, MongoDB
        <br />
        <b>Version Control:</b> Git, Tortoise SVN
      </Paragraph>

      <Title level={3}>Experience</Title>
      <Card
        title='Full-Stack Developer | Sept. 2021 – Sept. 2022'
        extra='Probity Software, Pune, IND'
      >
        <Paragraph>
          - Revamped the user interface of a governmental portal, employing
          HTML, CSS, and ES6 JavaScript.
          <br />
          - Conducted API penetration testing to pinpoint vulnerabilities,
          ensuring adherence to OWASP Top 10 standards.
          <br />
          - Pioneered the development of the Maharashtra State Government’s Land
          Revenue Collection Portal utilizing React, Redux JS, and Java Spring
          Boot, adhering to SDLC principles.
          <br />
          - Undertook the role of Frontend Project Lead, steering the creation
          and launch of the Municipal Corporation’s public and employee portals
          using Next JS. This led to a 10% enhancement in build times due to the
          implementation of modular and reusable code.
          <br />- Facilitated scrum and agile meetings, ensuring alignment with
          project objectives, and fostered strong client relationships through
          close collaboration with stakeholders across various government
          departments.
        </Paragraph>
      </Card>
      <Card
        title='Technical Consultant / Web Developer | Jan. 2015 – Jun. 2019'
        extra='N. Electronics Corporation, Pune, IND'
      >
        <Paragraph>
          - Developed a comprehensive full-stack web application for Holiday
          Potter Travel & Tourism using React JS and PostgreSQL, integrating
          partner REST APIs with Node JS. This initiative resulted in a 25%
          surge in online visibility and sales.
          <br />
          - Provided networking and regional language typing software expertise
          to the District Commissioner’s Office in Pune.
          <br />
          - Engaged in client negotiations, successfully securing contracts for
          computer distribution and governmental tenders.
          <br />- Designed and implemented a secure network architecture for The
          Royal Lake Banquets and Resorts, with a focus on cybersecurity.
        </Paragraph>
      </Card>

      <Title level={3}>Education</Title>
      <Card
        title='MSc. Cybersecurity Management | Oct. 2022 – Sept. 2023'
        extra='University of Warwick, Coventry, UK'
      >
        <Paragraph>
          Focused coursework in proactive cyber defense, management of
          cryptosystems, penetration testing, cybersecurity consultancy,
          programming fundamentals, risk, audit, and compliance, and digital
          forensic investigation. Dissertation centered on drone forensic
          investigation and tool development.
        </Paragraph>
      </Card>
      <Card
        title='Bachelor of Business Administration - Computer Applications | Apr. 2019 – May 2022'
        extra='MIT World Peace University, Pune, IND'
      >
        <Paragraph>
          Graduated with a GPA of 9.36. Actively participated as the University
          Table Tennis Team Captain for 3 years.
        </Paragraph>
      </Card>

      <Title level={3}>Soft Skills</Title>
      <Paragraph>
        Adept at problem-solving, analytical thinking, and effective
        communication. Highly adaptable to evolving frameworks, cyber security
        threats, technologies, and best practices. Resilient and composed under
        pressure.
      </Paragraph>

      <Title level={3}>Extra Curriculars</Title>
      <Paragraph>
        Represented the University of Warwick at NCSC’s Innovators Challenge
        2022, showcasing innovative cybersecurity solutions for space
        technology. Participated in ”TeamWork 2023,” a prestigious international
        program, collaborating on real-world challenges. Founded and led a
        traditional Indian musical ensemble, and served as a professional table
        tennis player and coach.
      </Paragraph>
    </div>
  )
}

export default About
