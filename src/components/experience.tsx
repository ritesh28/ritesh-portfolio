'use client';
import { MdWork } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export function ExperienceSection() {
  return (
    <section id='experience' className='bg-fuchsia-500  my-4 p-8'>
      <h3 className='text-6xl leading-24 font-semibold flex items-center after:border-b-2 after:grow after:ml-6'>Experience</h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date='2011 - present'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdWork />}
        >
          <h3 className='vertical-timeline-element-title'>Creative Director</h3>
          <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
